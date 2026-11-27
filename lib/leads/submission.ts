/**
 * Client-side submission helpers shared by the website lead forms.
 *
 * Dependency-free on purpose (no server imports, no secrets, no DOM
 * assumptions) so the retry/timeout/dedupe behaviour is unit-testable with
 * an injected fetch implementation.
 *
 * Truthfulness contract:
 * - 2xx alone is NOT success: the response must carry the verified success
 *   envelope (`{ success: true, submission_id }`), an exact JSON media type,
 *   and the same submission_id the client sent. Only then → "accepted"
 *   (the server returns 200 only after its durable write);
 * - 2xx with an HTML/untyped body, malformed JSON, a missing/mismatched
 *   submission_id, or a body that cannot be read within the deadline →
 *   "unconfirmed" (never claim storage we did not verify);
 * - 4xx → "rejected" (nothing stored; visitor must fix the input);
 * - 5xx / network failure / timeout → "unconfirmed" (do not claim success;
 *   a retry with the SAME submission ID is safe because the dashboard is
 *   idempotent on it);
 * - never throws.
 *
 * Honeypot note: the server deliberately answers a filled honeypot with a
 * fake `{ success: true, submission_id: <fresh id> }`. That fresh id cannot
 * match the client's attempt id, so this helper classifies it as
 * "unconfirmed" — the bot-fooling wire response is preserved, but a browser
 * that hit the trap never shows a completion screen for an unstored lead.
 */

// Next's trailingSlash configuration otherwise redirects the POST (308).
export const LEAD_SUBMIT_ENDPOINT = "/api/leads/";
export const DEFAULT_SUBMIT_TIMEOUT_MS = 15_000;

const JSON_MEDIA_TYPE = "application/json";
/** Same opaque shape the server accepts: 8–64 chars of [A-Za-z0-9_-]. */
const SUBMISSION_ID_PATTERN = /^[A-Za-z0-9_-]{8,64}$/;

/**
 * Opaque idempotency key, generated once per form attempt in the browser and
 * reused on every retry of that attempt. Shape matches the server-side
 * validation: 8–64 chars of [A-Za-z0-9_-] with the vareya_ prefix.
 */
export function createSubmissionId(): string {
  const cryptoObj = typeof globalThis !== "undefined" ? globalThis.crypto : undefined;
  if (cryptoObj && typeof cryptoObj.randomUUID === "function") {
    return `vareya_${cryptoObj.randomUUID()}`;
  }
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 12);
  return `vareya_${ts}_${rand}`;
}

/**
 * Re-entrancy guard: blocks a second submit while one is in flight
 * (double-click / double-submit protection), independent of React state
 * batching. Reusable after release().
 */
export class SubmissionLock {
  private locked = false;

  tryAcquire(): boolean {
    if (this.locked) return false;
    this.locked = true;
    return true;
  }

  release(): void {
    this.locked = false;
  }

  get isLocked(): boolean {
    return this.locked;
  }
}

export type LeadSubmitStatus = "accepted" | "rejected" | "unconfirmed";

export interface LeadSubmitResult {
  status: LeadSubmitStatus;
  /** Machine-readable reason (e.g. "http_503", "timeout"). */
  reason?: string;
  /** Visitor-facing message — never claims success for an unknown outcome. */
  message?: string;
  /** Server-confirmed (or client-supplied) submission reference. */
  submissionId?: string;
}

export interface LeadSubmitOptions {
  fetchImpl?: typeof fetch;
  timeoutMs?: number;
  endpoint?: string;
}

const REJECTED_FALLBACK_MESSAGE =
  "We couldn't accept your submission. Please check your details and try again.";
const RETRY_SAFE_MESSAGE =
  "We couldn't confirm your submission was received. Your answers are still on this page — please try again; a retry will not create a duplicate.";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isJsonResponse(res: Response): boolean {
  const contentType = res.headers.get("content-type") ?? "";
  return contentType.split(";", 1)[0].trim().toLowerCase() === JSON_MEDIA_TYPE;
}

type BoundedBody =
  | { ok: true; body: unknown }
  | { ok: false; reason: "body_timeout" | "invalid_json" };

/**
 * Reads a JSON response body under the remaining request deadline. A body
 * that never finishes (slow trickle, stalled proxy) is a non-confirmation,
 * not a success: the caller must never treat an unread body as stored.
 */
async function readJsonWithin(res: Response, ms: number): Promise<BoundedBody> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    const body = await Promise.race([
      res.json(),
      new Promise<never>((_resolve, reject) => {
        timer = setTimeout(() => {
          const err = new Error("response body read timed out");
          err.name = "BodyTimeoutError";
          reject(err);
        }, ms);
      }),
    ]);
    return { ok: true, body };
  } catch (err) {
    const timedOut =
      err instanceof Error &&
      (err.name === "BodyTimeoutError" || err.name === "AbortError");
    return { ok: false, reason: timedOut ? "body_timeout" : "invalid_json" };
  } finally {
    if (timer !== undefined) clearTimeout(timer);
  }
}

export async function submitLead(
  payload: Record<string, unknown>,
  options: LeadSubmitOptions = {},
): Promise<LeadSubmitResult> {
  const fetchImpl = options.fetchImpl ?? globalThis.fetch.bind(globalThis);
  const timeoutMs = options.timeoutMs ?? DEFAULT_SUBMIT_TIMEOUT_MS;
  const endpoint = options.endpoint ?? LEAD_SUBMIT_ENDPOINT;
  const deadline = Date.now() + timeoutMs;
  const remainingMs = () => Math.max(1, deadline - Date.now());

  const controller =
    typeof AbortController !== "undefined" ? new AbortController() : undefined;
  const timer = controller ? setTimeout(() => controller.abort(), timeoutMs) : undefined;

  const unconfirmed = (reason: string): LeadSubmitResult => ({
    status: "unconfirmed",
    reason,
    message: RETRY_SAFE_MESSAGE,
  });

  try {
    const res = await fetchImpl(endpoint, {
      method: "POST",
      redirect: "error",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller?.signal,
    });

    if (res.ok) {
      // A 2xx is only an acceptance after the verified success envelope.
      if (res.status !== 200 || res.redirected) return unconfirmed("unverified_success_status");
      if (!isJsonResponse(res)) return unconfirmed("unverified_content_type");

      const parsed = await readJsonWithin(res, remainingMs());
      if (!parsed.ok) return unconfirmed(parsed.reason);

      const body = parsed.body;
      if (!isRecord(body) || body.success !== true) {
        return unconfirmed("unverified_success_envelope");
      }

      const returnedId =
        typeof body.submission_id === "string" ? body.submission_id.trim() : "";
      if (!SUBMISSION_ID_PATTERN.test(returnedId)) {
        return unconfirmed("unverified_success_envelope");
      }

      const expectedId =
        typeof payload.submission_id === "string" ? payload.submission_id.trim() : "";
      if (expectedId !== "" && returnedId !== expectedId) {
        // Includes the server's honeypot fake-success, which mints a fresh
        // id: the wire response stays bot-friendly, the browser never claims
        // a stored lead.
        return unconfirmed("submission_id_mismatch");
      }

      return { status: "accepted", submissionId: returnedId };
    }

    let serverMessage: string | undefined;
    const parsedError = await readJsonWithin(res, remainingMs());
    if (parsedError.ok && isRecord(parsedError.body)) {
      const error = parsedError.body.error;
      if (typeof error === "string" && error.trim() !== "") {
        serverMessage = error.trim();
      }
    }

    if (res.status >= 500) {
      return {
        status: "unconfirmed",
        reason: `http_${res.status}`,
        message: serverMessage ?? RETRY_SAFE_MESSAGE,
      };
    }
    return {
      status: "rejected",
      reason: `http_${res.status}`,
      message: serverMessage ?? REJECTED_FALLBACK_MESSAGE,
    };
  } catch (err) {
    const aborted = err instanceof Error && err.name === "AbortError";
    return {
      status: "unconfirmed",
      reason: aborted ? "timeout" : "network_error",
      message: RETRY_SAFE_MESSAGE,
    };
  } finally {
    if (timer !== undefined) clearTimeout(timer);
  }
}

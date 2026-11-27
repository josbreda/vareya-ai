import { FORM_PATHS, resolveFormType, type ResolvedFormType } from "./leads/form-type.js";
import {
  normaliseCtaId,
  normaliseFormLocale,
  normaliseTopicId,
} from "./topic-cta-register.ts";

/**
 * Lead Dashboard webhook client (vareya.ai → leads.jmconcepts.cloud).
 *
 * REQUIRED DURABLE GATE, SERVER-ONLY:
 * - awaited by /api/leads before it returns HTTP 200;
 * - a dashboard outage must refuse success rather than silently drop a lead;
 * - a response only counts as delivered when it matches the verified wire
 *   contract (HTTP 201, application/json, canonical UUID lead_id); anything
 *   else — including an HTML 200 from a proxy fallback — stays fail-closed;
 * - no automatic retries (the endpoint is idempotent via submission_id,
 *   so reconciliation/retry is always safe later; the browser retries with
 *   the same submission_id);
 * - never logs secrets or PII beyond the submission ID and the dashboard's
 *   non-PII lead_id (the durable relation).
 *
 * Credential: process.env.LEAD_DASHBOARD_FREE_RATE_SCAN_API_KEY (server-side
 * Vercel env only — never NEXT_PUBLIC_*, never imported by client code).
 */

export const LEAD_DASHBOARD_ENDPOINT =
  "https://leads.jmconcepts.cloud/api/leads/webhooks/free-rate-scan";

const DEFAULT_TIMEOUT_MS = 4000;

/** Canonical RFC 4122 UUID (8-4-4-4-12 hex, version 1–8, variant 8/9/a/b):
 * the only lead_id shape the durable-confirmation contract accepts. The
 * dashboard's lead_id is a Postgres uuid (gen_random_uuid → v4, variant 8). */
const CANONICAL_LEAD_ID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export type DashboardDeliveryStatus =
  | "sent"
  | "not_configured"
  | "failed"
  | "timeout";

export interface LeadDashboardPayload {
  company: string;
  email: string;
  name?: string;
  phone?: string;
  website?: string;
  country?: string;
  product_category?: string;
  platform?: string;
  order_volume?: string;
  sku_count?: number;
  message?: string;
  form_type?: string;
  /** Existing source-topic identifier (register allowlist only). */
  topic_id?: string;
  /** Existing clicked-CTA identifier (register allowlist only). */
  cta_id?: string;
  /** Language the visitor actually used on the form. */
  form_locale?: string;
  source_page?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  campaign?: string;
  referrer?: string;
  original_landing_page?: string;
  original_referrer?: string;
  first_utm_source?: string;
  first_utm_medium?: string;
  first_utm_campaign?: string;
  first_utm_content?: string;
  first_utm_term?: string;
  first_landing_page?: string;
  first_referrer?: string;
  desired_start_date?: string;
  timestamp?: string;
  submission_id: string;
  [key: string]: unknown;
}

const COUNTRY_NAME_TO_ISO2: Record<string, string> = {
  netherlands: "NL", "the netherlands": "NL", nederland: "NL", holland: "NL",
  belgium: "BE", belgie: "BE", belgië: "BE",
  germany: "DE", deutschland: "DE",
  france: "FR", frankrijk: "FR",
  "united kingdom": "GB", uk: "GB", "great britain": "GB", england: "GB",
  "united states": "US", usa: "US", "united states of america": "US",
  spain: "ES", spanje: "ES",
  italy: "IT", italie: "IT", italië: "IT",
  portugal: "PT", poland: "PL", polen: "PL",
  austria: "AT", oostenrijk: "AT",
  switzerland: "CH", zwitserland: "CH",
  denmark: "DK", denemarken: "DK",
  sweden: "SE", zweden: "SE",
  norway: "NO", noorwegen: "NO",
  finland: "FI",
  ireland: "IE", ierland: "IE",
  luxembourg: "LU", luxemburg: "LU",
  "czech republic": "CZ", czechia: "CZ", tsjechie: "CZ", tsjechië: "CZ",
  greece: "GR", griekenland: "GR",
  hungary: "HU", hongarije: "HU",
  romania: "RO", roemenie: "RO", roemenië: "RO",
  bulgaria: "BG", croatia: "HR", kroatie: "HR", kroatië: "HR",
  slovenia: "SI", slovenie: "SI", slovenië: "SI",
  slovakia: "SK", slowakije: "SK",
  estonia: "EE", estland: "EE",
  latvia: "LV", letland: "LV",
  lithuania: "LT", litouwen: "LT",
  cyprus: "CY", malta: "MT",
  canada: "CA", australia: "AU", australie: "AU", australië: "AU",
  "new zealand": "NZ", "nieuw zeeland": "NZ",
  japan: "JP", "south korea": "KR", "zuid korea": "KR", korea: "KR",
  china: "CN", "hong kong": "HK", singapore: "SG",
  "united arab emirates": "AE", uae: "AE",
  "south africa": "ZA", "zuid afrika": "ZA",
  brazil: "BR", brazilie: "BR", brazilië: "BR",
  mexico: "MX", india: "IN", indonesia: "ID",
  israel: "IL", israël: "IL",
  turkey: "TR", turkije: "TR",
};

/** Maps a free-text form country value to an ISO2 code (the dashboard's
 * `lead_organizations.country` column is varchar(2)). Unknown or empty
 * values are dropped — the raw value travels separately as `country_name`
 * so nothing the visitor typed is ever lost. */
export function normaliseCountry(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  const value = raw.trim();
  if (value.length === 2) return value.toUpperCase();
  return COUNTRY_NAME_TO_ISO2[value.toLowerCase()];
}

/** Optional numeric scan field: only a value that parses to a finite number
 * may travel as `sku_count` (number). Anything else — including free text the
 * quote form's SKU input can actually produce — is omitted rather than sent
 * as NaN, which would silently serialise to JSON null and claim a figure the
 * visitor never gave. */
function parseOptionalSkuCount(value: unknown): number | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (trimmed === "") return undefined;
  const parsed = Number(trimmed);
  return Number.isFinite(parsed) ? parsed : undefined;
}

/** Quote-only questions "I need Amazon FBM fulfilment" and "I need returns
 * handling". The actual quote controls are boolean checkboxes, so their
 * true/false values are forwarded verbatim. The spec describes the same
 * questions as y/n, and a client may legitimately express them in the closed
 * yes/no/unsure vocabulary — those strings are forwarded as-is (trimmed,
 * lowercased). Anything else is not a legitimate answer and is dropped. The
 * dashboard keeps unmodelled fields verbatim (extra="allow"), so the retired
 * Supabase BOOLEAN columns survive unchanged. */
function normaliseQuoteAnswer(value: unknown): boolean | "yes" | "no" | "unsure" | undefined {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    const answer = value.trim().toLowerCase();
    if (answer === "yes" || answer === "no" || answer === "unsure") return answer;
  }
  return undefined;
}

/** source_page fallback for payloads that omit landing_page. */
function sourcePageFor(formType: ResolvedFormType): string {
  return formType === "quote" ? `${FORM_PATHS.quote}/` : `${FORM_PATHS.scan}/`;
}

/** Untrusted context: retain only a bounded own-site path or HTTP(S) origin. */
function contextUrl(value: unknown, kind: "path" | "origin"): string | undefined {
  if (typeof value !== "string" || !value.trim() || value.length > 1000) return undefined;
  try {
    const url = new URL(value, "https://vareya.ai");
    if (url.protocol !== "https:" && url.protocol !== "http:") return undefined;
    if (kind === "path") return url.hostname === "vareya.ai" ? url.pathname.slice(0, 500) : undefined;
    return url.hostname === "vareya.ai" || url.hostname === "www.vareya.ai" ? undefined : url.origin.slice(0, 300);
  } catch { return undefined; }
}

/**
 * Maps the actual current Free Rate Scan payload to the dashboard contract.
 * Pure function — unit-tested; optional fields are omitted, extra scan fields
 * are preserved (the dashboard keeps unmodelled fields).
 */
export function buildLeadDashboardPayload(
  clean: Record<string, unknown>,
  submissionId: string,
): LeadDashboardPayload {
  const str = (v: unknown): string | undefined =>
    typeof v === "string" && v.trim() !== "" ? v.trim() : undefined;

  const rawCountry = str(clean.company_country);
  const landingPage = str(clean.landing_page);
  const formType = resolveFormType(str(clean.form_type), landingPage);

  return {
    company: str(clean.company) ?? "",
    email: str(clean.work_email) ?? "",
    name: str(clean.name),
    phone: str(clean.phone),
    website: str(clean.website),
    country: normaliseCountry(rawCountry),
    country_name: rawCountry,
    product_category: str(clean.product_category),
    product_fit: clean.product_fit,
    platform: str(clean.ecommerce_platform),
    order_volume: str(clean.monthly_order_volume),
    sku_count: parseOptionalSkuCount(clean.sku_count),
    message: str(clean.comments),
    // Carry the form that was actually submitted; infer it from the landing
    // page only for legacy clients that omit form_type. Never stamp every
    // lead as a scan: quote leads are the higher-intent ones and downstream
    // segmentation relies on this.
    form_type: formType,
    form_id: formType === "scan" ? "free-rate-scan" : formType === "quote" ? "request-fulfilment-quote" : undefined,
    submit_page: contextUrl(landingPage, "path"),
    // Server environment marker, not proof that all other traffic is commercial.
    test_flag: process.env.VAREYA_REVIEW_ONLY === "1",
    // Attribution: preserve what the browser actually knew (existing IDs and
    // the submitted form language). Invalid/unknown values are omitted, never
    // guessed; topic is not inferred from a CTA.
    topic_id: normaliseTopicId(clean.topic_id),
    cta_id: normaliseCtaId(clean.cta_id),
    form_locale: normaliseFormLocale(clean.form_locale),
    source_page: landingPage ?? sourcePageFor(formType),
    utm_source: str(clean.utm_source),
    utm_medium: str(clean.utm_medium),
    utm_campaign: str(clean.utm_campaign),
    utm_content: str(clean.utm_content),
    utm_term: str(clean.utm_term),
    referrer: contextUrl(clean.referrer, "origin"),
    original_landing_page: contextUrl(clean.original_landing_page, "path"),
    original_referrer: contextUrl(clean.original_referrer, "origin"),
    first_utm_source: str(clean.first_utm_source)?.slice(0, 200),
    first_utm_medium: str(clean.first_utm_medium)?.slice(0, 200),
    first_utm_campaign: str(clean.first_utm_campaign)?.slice(0, 200),
    first_utm_content: str(clean.first_utm_content)?.slice(0, 200),
    first_utm_term: str(clean.first_utm_term)?.slice(0, 200),
    first_landing_page: contextUrl(clean.first_landing_page, "path"),
    first_referrer: contextUrl(clean.first_referrer, "origin"),
    desired_start_date: str(clean.desired_start_date),
    timestamp: new Date().toISOString(),
    submission_id: submissionId,
    // Extra current scan fields — preserved by the dashboard contract.
    target_markets: Array.isArray(clean.target_markets) ? clean.target_markets : undefined,
    services_needed: Array.isArray(clean.services_needed) ? clean.services_needed : undefined,
    device: str(clean.device),
    // Quote-only fields ("I need Amazon FBM fulfilment" / "I need returns
    // handling"): forwarded in the visitor's actual answer form so they
    // survive Supabase retirement; the dashboard's extra="allow" raw store
    // needs no change.
    amazon_fbm: normaliseQuoteAnswer(clean.amazon_fbm),
    returns_required: normaliseQuoteAnswer(clean.returns_required),
    // Privacy acknowledgement record: only present when the visitor actually
    // confirmed; the dashboard preserves unmodelled fields verbatim in its
    // raw-submission store (extra="allow"), so no dashboard change is needed.
    privacy_acknowledged: clean.privacy_acknowledged === true ? true : undefined,
    privacy_acknowledged_at: str(clean.privacy_acknowledged_at),
  };
}

/**
 * POSTs a lead payload to the lead dashboard. Never throws; the route decides
 * whether each returned status is safe to accept.
 */
export async function notifyLeadDashboard(
  payload: LeadDashboardPayload,
  timeoutMs: number = DEFAULT_TIMEOUT_MS,
): Promise<DashboardDeliveryStatus> {
  const apiKey = process.env.LEAD_DASHBOARD_FREE_RATE_SCAN_API_KEY;
  if (!apiKey) {
    console.error(
      "[lead_dashboard] LEAD_DASHBOARD_FREE_RATE_SCAN_API_KEY not set — webhook skipped",
    );
    return "not_configured";
  }

  const endpoint =
    process.env.LEAD_DASHBOARD_FREE_RATE_SCAN_URL || LEAD_DASHBOARD_ENDPOINT;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    // Durable confirmation requires the verified wire contract (lead-engine
    // BACKEND-CONTRACT.md, read-only verified 2026-10-12): HTTP 201 +
    // application/json + a canonical UUID lead_id. Anything else — a proxy's
    // HTML 200 fallback, a malformed body, a missing/malformed lead_id, a
    // wrong content type — is no proof that the lead was stored and must
    // stay fail-closed (the visitor's retry reuses submission_id safely).
    if (res.status !== 201) {
      console.error("[lead_dashboard] unverified response (unexpected status)", {
        status: res.status,
        submission_id: payload.submission_id,
      });
      return "failed";
    }

    const contentType = res.headers.get("content-type") ?? "";
    const mediaType = contentType.split(";", 1)[0].trim().toLowerCase();
    if (mediaType !== "application/json") {
      console.error("[lead_dashboard] unverified response (content-type)", {
        status: res.status,
        submission_id: payload.submission_id,
      });
      return "failed";
    }

    let body: { lead_id?: unknown } = {};
    try {
      body = (await res.json()) as { lead_id?: unknown };
    } catch (err) {
      // Preserve the existing timeout result when the body read is aborted.
      if (err instanceof Error && err.name === "AbortError") throw err;
      console.error("[lead_dashboard] unverified response (unparseable body)", {
        status: res.status,
        submission_id: payload.submission_id,
      });
      return "failed";
    }

    const leadId = typeof body?.lead_id === "string" ? body.lead_id : "";
    if (!CANONICAL_LEAD_ID_RE.test(leadId)) {
      console.error("[lead_dashboard] unverified response (invalid lead_id)", {
        status: res.status,
        submission_id: payload.submission_id,
      });
      return "failed";
    }

    // Durable relation captured: log the dashboard's non-PII lead_id (never
    // the response body) so submission_id → lead_id reconciliation is
    // possible. Never exposed to the visitor.
    console.log("[lead_dashboard] delivered", {
      status: res.status,
      submission_id: payload.submission_id,
      lead_id: leadId,
    });
    return "sent";
  } catch (err) {
    const reason =
      err instanceof Error && err.name === "AbortError" ? "timeout" : "network_error";
    console.error("[lead_dashboard] delivery failed", {
      reason,
      submission_id: payload.submission_id,
    });
    return reason === "timeout" ? "timeout" : "failed";
  } finally {
    clearTimeout(timer);
  }
}


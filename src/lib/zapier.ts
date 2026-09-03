/**
 * Zapier webhook client (vareya.ai → Zapier, bijv. → Offorte Proposals).
 *
 * ADDITIVE, BEST-EFFORT, SERVER-ONLY:
 * - called only after the existing minimum-delivery gate has passed;
 * - a Zapier outage must never fail, roll back, or duplicate a lead;
 * - no automatic retries (Zapier Catch Hooks are not idempotent, and the
 *   submission_id in the payload lets Jos deduplicate manually);
 * - never logs secrets or PII beyond the submission ID.
 *
 * Credential: process.env.ZAPIER_WEBHOOK_URL (server-side Vercel env only —
 * never NEXT_PUBLIC_*, never imported by client code). The URL is the
 * "Webhooks by Zapier → Catch Hook" trigger URL Jos creates in Zapier.
 */

const DEFAULT_TIMEOUT_MS = 4000;

export type ZapierDeliveryStatus =
  | "sent"
  | "not_configured"
  | "failed"
  | "timeout";

export interface ZapierPayload {
  /** "quote" (request-fulfilment-quote) of "scan" (free-rate-scan) */
  form_type: string;
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
  target_markets?: string[];
  source_page?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  desired_start_date?: string;
  timestamp: string;
  submission_id: string;
}

/**
 * Maps the sanitised lead record to a flat, Zapier-friendly payload.
 * Flat on purpose: Jos maps these fields to Offorte's "Create Proposal"
 * action fields in the Zapier UI without nested JSON.
 * Pure function — optional fields are omitted when empty.
 */
export function buildZapierPayload(
  clean: Record<string, unknown>,
  submissionId: string,
): ZapierPayload {
  const str = (v: unknown): string | undefined =>
    typeof v === "string" && v.trim() !== "" ? v.trim() : undefined;

  const payload: ZapierPayload = {
    form_type: str(clean.form_type) ?? "unknown",
    company: str(clean.company) ?? "",
    email: str(clean.work_email) ?? "",
    timestamp: new Date().toISOString(),
    submission_id: submissionId,
  };

  const optional: Array<
    [
      "name" | "phone" | "website" | "country" | "product_category" | "platform" |
        "order_volume" | "message" | "source_page" | "referrer" | "utm_source" |
        "utm_medium" | "utm_campaign" | "utm_content" | "desired_start_date",
      string | undefined,
    ]
  > = [
    ["name", str(clean.name)],
    ["phone", str(clean.phone)],
    ["website", str(clean.website)],
    ["country", str(clean.company_country)],
    ["product_category", str(clean.product_category)],
    ["platform", str(clean.ecommerce_platform)],
    ["order_volume", str(clean.monthly_order_volume)],
    ["message", str(clean.comments)],
    ["source_page", str(clean.landing_page)],
    ["referrer", str(clean.referrer)],
    ["utm_source", str(clean.utm_source)],
    ["utm_medium", str(clean.utm_medium)],
    ["utm_campaign", str(clean.utm_campaign)],
    ["utm_content", str(clean.utm_content)],
    ["desired_start_date", str(clean.desired_start_date)],
  ];
  for (const [key, value] of optional) {
    if (value !== undefined) payload[key] = value;
  }

  if (typeof clean.sku_count === "string" && clean.sku_count.trim() !== "") {
    const n = Number(clean.sku_count);
    if (Number.isFinite(n)) payload.sku_count = n;
  }
  if (Array.isArray(clean.target_markets) && clean.target_markets.length > 0) {
    payload.target_markets = clean.target_markets
      .filter((m): m is string => typeof m === "string")
      .map((m) => m.trim())
      .filter((m) => m !== "");
  }

  return payload;
}

/**
 * POSTs the lead payload to the Zapier Catch Hook. Never throws.
 */
export async function notifyZapier(
  payload: ZapierPayload,
  timeoutMs: number = DEFAULT_TIMEOUT_MS,
): Promise<ZapierDeliveryStatus> {
  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;
  if (!webhookUrl) {
    console.log(
      "[zapier] ZAPIER_WEBHOOK_URL not set — webhook skipped",
    );
    return "not_configured";
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (res.ok) {
      console.log("[zapier] delivered", {
        status: res.status,
        submission_id: payload.submission_id,
      });
      return "sent";
    }
    console.error("[zapier] non-2xx response", {
      status: res.status,
      submission_id: payload.submission_id,
    });
    return "failed";
  } catch (err) {
    const reason =
      err instanceof Error && err.name === "AbortError" ? "timeout" : "network_error";
    console.error("[zapier] delivery failed", {
      reason,
      submission_id: payload.submission_id,
    });
    return reason === "timeout" ? "timeout" : "failed";
  } finally {
    clearTimeout(timer);
  }
}

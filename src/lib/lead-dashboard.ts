/**
 * Lead Dashboard webhook client (vareya.ai → leads.jmconcepts.cloud).
 *
 * ADDITIVE, BEST-EFFORT, SERVER-ONLY:
 * - called only after the existing minimum-delivery gate has passed;
 * - a dashboard outage must never fail, roll back, or duplicate a lead;
 * - no automatic retries (the endpoint is idempotent via submission_id,
 *   so reconciliation/retry is always safe later);
 * - never logs secrets or PII beyond the submission ID.
 *
 * Credential: process.env.LEAD_DASHBOARD_FREE_RATE_SCAN_API_KEY (server-side
 * Vercel env only — never NEXT_PUBLIC_*, never imported by client code).
 */

export const LEAD_DASHBOARD_ENDPOINT =
  "https://leads.jmconcepts.cloud/api/leads/webhooks/free-rate-scan";

const DEFAULT_TIMEOUT_MS = 4000;

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
  source_page?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  campaign?: string;
  referrer?: string;
  desired_start_date?: string;
  timestamp?: string;
  submission_id: string;
  [key: string]: unknown;
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

  return {
    company: str(clean.company) ?? "",
    email: str(clean.work_email) ?? "",
    name: str(clean.name),
    phone: str(clean.phone),
    website: str(clean.website),
    country: str(clean.company_country),
    product_category: str(clean.product_category),
    platform: str(clean.ecommerce_platform),
    order_volume: str(clean.monthly_order_volume),
    sku_count:
      typeof clean.sku_count === "string" && clean.sku_count.trim() !== ""
        ? Number(clean.sku_count)
        : undefined,
    message: str(clean.comments),
    form_type: "scan",
    source_page: str(clean.landing_page) ?? "/free-rate-scan/",
    utm_source: str(clean.utm_source),
    utm_medium: str(clean.utm_medium),
    utm_campaign: str(clean.utm_campaign),
    utm_content: str(clean.utm_content),
    referrer: str(clean.referrer),
    desired_start_date: str(clean.desired_start_date),
    timestamp: new Date().toISOString(),
    submission_id: submissionId,
    // Extra current scan fields — preserved by the dashboard contract.
    target_markets: Array.isArray(clean.target_markets) ? clean.target_markets : undefined,
    services_needed: Array.isArray(clean.services_needed) ? clean.services_needed : undefined,
    device: str(clean.device),
  };
}

/**
 * POSTs the scan payload to the lead dashboard. Never throws.
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

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(LEAD_DASHBOARD_ENDPOINT, {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (res.ok) {
      console.log("[lead_dashboard] delivered", {
        status: res.status,
        submission_id: payload.submission_id,
      });
      return "sent";
    }
    console.error("[lead_dashboard] non-2xx response", {
      status: res.status,
      submission_id: payload.submission_id,
    });
    return "failed";
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

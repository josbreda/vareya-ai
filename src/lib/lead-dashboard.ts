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

  return {
    company: str(clean.company) ?? "",
    email: str(clean.work_email) ?? "",
    name: str(clean.name),
    phone: str(clean.phone),
    website: str(clean.website),
    country: normaliseCountry(rawCountry),
    country_name: rawCountry,
    product_category: str(clean.product_category),
    platform: str(clean.ecommerce_platform),
    order_volume: str(clean.monthly_order_volume),
    sku_count:
      typeof clean.sku_count === "string" && clean.sku_count.trim() !== ""
        ? Number(clean.sku_count)
        : undefined,
    message: str(clean.comments),
    form_type: str(clean.form_type) ?? "scan",
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

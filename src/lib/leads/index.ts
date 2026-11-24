import { FIT_FIELDS, normaliseFit, classifyFit, fitSummary } from "../product-fit.ts";
import { normaliseCtaId, normaliseFormLocale, normaliseTopicId } from "../topic-cta-register.ts";
import { resolveFormType } from "./form-type.js";

/**
 * Generates a unique, idempotent submission ID.
 * Format: vareya_<timestamp>_<random>
 */
export function generateSubmissionId(): string {
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 10);
  return `vareya_${ts}_${rand}`;
}

/**
 * Submission IDs are opaque idempotency keys for the lead dashboard: a
 * retried delivery with the exact same string is deduplicated dashboard-side.
 * The browser generates one ID per form attempt and reuses it on every retry
 * of that attempt, so the server must forward a valid client-supplied value
 * verbatim instead of minting a fresh random ID on each server attempt
 * (which would defeat the dedupe and create duplicate activity rows).
 *
 * Accepted shape: 8–64 chars of [A-Za-z0-9_-] — covers both the historical
 * `vareya_<ts36>_<rand36>` format and `vareya_<uuid>`. Anything else
 * (missing, malformed, oversized) falls back to a generated ID.
 */
const SUBMISSION_ID_PATTERN = /^[A-Za-z0-9_-]{8,64}$/;

export function normaliseSubmissionId(raw: unknown): string {
  if (typeof raw === "string") {
    const value = raw.trim();
    if (SUBMISSION_ID_PATTERN.test(value)) return value;
  }
  return generateSubmissionId();
}

const MAX_ARRAY_ITEMS = 50;
const MAX_ARRAY_ITEM_LENGTH = 200;

/**
 * Normalises and sanitises lead data before storage.
 */
export function sanitiseLeadData(raw: Record<string, unknown>): Record<string, unknown> {
  const clean: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(raw)) {
    if (value === undefined || value === null) continue;

    if (typeof value === "string") {
      clean[key] = value.trim().slice(0, 1000); // prevent massive strings
    } else if (Array.isArray(value)) {
      // Scan answers such as target_markets/services_needed: strings only,
      // trimmed, de-duplicated and bounded. The dashboard preserves whatever
      // we forward in its raw-submission record, so nothing user-typed that
      // is a plain string is dropped.
      const items = value
        .filter((item): item is string => typeof item === "string")
        .map((item) => item.trim().slice(0, MAX_ARRAY_ITEM_LENGTH))
        .filter((item) => item !== "")
        .slice(0, MAX_ARRAY_ITEMS);
      clean[key] = [...new Set(items)];
    } else {
      clean[key] = value;
    }
  }

  // Ensure required fields
  if (!clean.submission_id) {
    clean.submission_id = generateSubmissionId();
  }

  // Attribution identifiers: only the existing register may survive. Unknown
  // values are removed — never guessed, derived from each other, or invented.
  const topicId = normaliseTopicId(clean.topic_id);
  if (topicId) clean.topic_id = topicId;
  else delete clean.topic_id;

  const ctaId = normaliseCtaId(clean.cta_id);
  if (ctaId) clean.cta_id = ctaId;
  else delete clean.cta_id;

  const formLocale = normaliseFormLocale(clean.form_locale);
  if (formLocale) clean.form_locale = formLocale;
  else delete clean.form_locale;

  // Never trust a client-supplied receipt timestamp: discard it
  // unconditionally, whatever it claims. When — and only when — the visitor
  // explicitly confirmed, re-stamp with fresh server time. An absent or
  // false acknowledgement (e.g. a submission without form_type) can
  // therefore never carry a forged privacy_acknowledged_at. Scan/quote
  // submissions without a confirmation are rejected by validateLeadInput
  // before this point.
  delete clean.privacy_acknowledged_at;
  if (clean.privacy_acknowledged === true) {
    clean.privacy_acknowledged_at = new Date().toISOString();
  }

  // Results are always recomputed on the server; never accept a client approval.
  delete clean.product_fit;
  if (FIT_FIELDS.some(key => Object.prototype.hasOwnProperty.call(raw, key))) {
    const answers = normaliseFit(clean);
    for (const key of FIT_FIELDS) clean[key] = answers[key];
    clean.product_fit = { answers, ...classifyFit(answers), topic_id: "F05", preliminary: true };
    clean.comments = [typeof clean.comments === "string" ? clean.comments : "", fitSummary(answers)].filter(Boolean).join("\n\n");
  }
  return clean;
}

/**
 * Validates lead input server-side.
 * Returns { valid: false, errors: [...] } or { valid: true }
 */
export function validateLeadInput(
  data: Record<string, unknown>
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Required fields
  if (!data.name || typeof data.name !== "string" || !data.name.trim()) {
    errors.push("Name is required");
  }
  if (!data.work_email || typeof data.work_email !== "string") {
    errors.push("Work email is required");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.work_email as string)) {
    errors.push("Invalid email format");
  }
  if (!data.company || typeof data.company !== "string" || !data.company.trim()) {
    errors.push("Company name is required");
  }
  if (data.form_type && !["scan", "quote"].includes(data.form_type as string)) {
    errors.push("Invalid form type");
  }

  // Privacy acknowledgement (approved scan/quote form invariant): accepted
  // only with the visitor's explicit confirmation. Gate on the SAME resolved
  // form type used for durable storage/notifications: a legacy submission
  // without a declared form_type is classified from its landing page, so it
  // must not bypass this invariant by merely omitting the field.
  const resolvedFormType = resolveFormType(
    typeof data.form_type === "string" ? data.form_type : undefined,
    typeof data.landing_page === "string" ? data.landing_page : undefined,
  );
  if (resolvedFormType === "scan" || resolvedFormType === "quote") {
    if (data.privacy_acknowledged !== true) {
      errors.push("Please confirm the privacy acknowledgement");
    }
  }

  // Scan/quote answers: shape checks only. Values stay free text — the
  // dashboard stores them verbatim and the website must not invent enum
  // restrictions beyond what the forms actually collect.
  for (const field of ["target_markets", "services_needed"] as const) {
    const value = data[field];
    if (value !== undefined) {
      if (!Array.isArray(value) || value.some((item) => typeof item !== "string")) {
        errors.push(`${field} must be an array of strings`);
      }
    }
  }
  for (const field of [
    "monthly_order_volume",
    "product_category",
    "ecommerce_platform",
    "sku_count",
  ] as const) {
    const value = data[field];
    if (value !== undefined && typeof value !== "string") {
      errors.push(`${field} must be a string`);
    }
  }

  return { valid: errors.length === 0, errors };
}

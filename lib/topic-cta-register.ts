/**
 * Existing Topic/CTA register — the only identifiers the website may forward.
 *
 * Source of truth (read-only inventory, 2026-11-16/18):
 * - P1 topic dossiers F01/F03/F05/F09
 *   (vareya-p1-closeout-20261112/opleverpakket/topics/*.json)
 * - live page inventory: 6 of 119 pages carry data-topic-id/data-cta-id
 *   (parent-topic-cta-inventory.json + W05/live-source-readback-20261116.json)
 *
 * NEVER add an ID here without an existing page attribute or owner-approved
 * dossier: an unknown value must stay unknown, not be guessed or derived.
 * Both the browser handoff and the server sanitizer share these allowlists.
 */
export const TOPIC_IDS = ["F01", "F03", "F05", "F09", "S01"] as const;
export type TopicId = (typeof TOPIC_IDS)[number];

export const CTA_IDS = [
  "digistore24-fit",
  "digistore24-fit-footer",
  "digistore24-quote",
  "p1-f01-primary",
  "p1-f03-fit",
  "p1-f03-fit-footer",
  "p1-f05-primary",
  "p1-f09-primary",
  "p1-fit-result",
  "p1-fit-to-scan",
  "s01--quote--supplements--hero--en",
  "s01--quote--supplements--hero--nl",
  "s01--quote--cosmetics-skincare--body--en",
  "s01--quote--cosmetics-skincare--body--nl",
] as const;
export type CtaId = (typeof CTA_IDS)[number];

/** Existing site locales only (src/i18n/core.ts LOCALES). */
export const FORM_LOCALES = ["nl", "en", "de", "fr", "es"] as const;
export type FormLocale = (typeof FORM_LOCALES)[number];

function exactMember<T extends readonly string[]>(value: unknown, allowed: T): T[number] | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return (allowed as readonly string[]).includes(trimmed) ? (trimmed as T[number]) : undefined;
}

/** Exact allowlist match only; never pattern-match, derive or invent. */
export function normaliseTopicId(value: unknown): TopicId | undefined {
  return exactMember(value, TOPIC_IDS);
}

export function normaliseCtaId(value: unknown): CtaId | undefined {
  return exactMember(value, CTA_IDS);
}

export function normaliseFormLocale(value: unknown): FormLocale | undefined {
  if (typeof value !== "string") return undefined;
  const lowered = value.trim().toLowerCase();
  return (FORM_LOCALES as readonly string[]).includes(lowered)
    ? (lowered as FormLocale)
    : undefined;
}

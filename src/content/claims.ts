/**
 * Vareya — approved public claims.
 * This module follows content/claims-register.md v1.1.
 */

import { CAPABILITIES, COMPANY } from "./facts";

export const REQUIRED_CLAIMS = {
  cutOff:
    "Cut-off times of up to 23:00 may be available by agreement.",
  volume:
    "Vareya is generally best suited to brands shipping 500 or more orders per month.",
  returns:
    "Returns handling is available. Contact Vareya to discuss the required returns process.",
  specialistFallback:
    "Have customs, tax or specialist handling requirements? Include them in the fulfilment scan so Vareya can confirm which parts of the proposed setup can be supported.",
  postSubmission:
    "Vareya will review your answers and send an initial fit response by email within one working day.",
} as const;

export const APPROVED_HEADLINES = {
  primary: "Ecommerce fulfilment in Europe, run from the Netherlands",
  secondary:
    `Vareya fulfils ecommerce orders from a warehouse in ${COMPANY.city}, ${COMPANY.country}, shipping across Europe, the United Kingdom and further afield.`,
  scan: "Check your EU fulfilment fit",
  quote: "Request a fulfilment quote",
} as const;

export const APPROVED_VALUE_PROPS = [
  {
    title: "Shopify integration",
    body: CAPABILITIES.shopify,
  },
  {
    title: "Amazon FBM fulfilment",
    body: CAPABILITIES.amazonFbm,
  },
  {
    title: "Carrier network",
    body: `Carriers include ${CAPABILITIES.carriers.slice(0, -1).join(", ")} and ${CAPABILITIES.carriers.at(-1)}.`,
  },
  {
    title: "Returns handling",
    body: REQUIRED_CLAIMS.returns,
  },
  {
    title: "Cut-off times",
    body: REQUIRED_CLAIMS.cutOff,
  },
] as const;

export const APPROVED_PROCESS_STEPS = [
  {
    step: 1,
    title: "Qualification",
    body: "Share your volume, product category, sales channels and target markets. Product fit is confirmed during qualification.",
  },
  {
    step: 2,
    title: "Onboarding",
    body: "Connect your sales channel and agree stock intake with Vareya.",
  },
  {
    step: 3,
    title: "Inbound stock",
    body: "Send stock to the Breda warehouse.",
  },
  {
    step: 4,
    title: "Pick, pack and ship",
    body: "Orders are picked, packed and handed to the relevant carrier.",
  },
  {
    step: 5,
    title: "Returns",
    body: REQUIRED_CLAIMS.returns,
  },
] as const;

/**
 * Prohibited marketing language and unapproved positive capability claims.
 * The word "best" is permitted only inside REQUIRED_CLAIMS.volume.
 */
export const FORBIDDEN_CLAIMS = [
  "fastest",
  "cheapest",
  "leading",
  "number one",
  "customs support",
  "import support",
  "VAT-related support",
  "IOSS",
  "DDP",
  "temperature-controlled storage",
  "certifications",
  "batch management",
  "expiry-date management",
  "FEFO",
  "FIFO",
  "regulated-product handling",
  "AutoStore",
  "robots",
  "automation claims",
  "multi-warehousing",
  "guaranteed same-day dispatch",
  "guaranteed delivery times",
  "instant quotation",
  "instant savings",
  "No specific capability is claimed on this page.",
  "Rest of the World",
] as const;

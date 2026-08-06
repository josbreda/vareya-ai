// ============================================================================
// Vareya.ai — Canonical Claims Constants
// Source: content/claims-register.md v1.1 (2026-08-06, Raymond-approved)
// ============================================================================
// These three sentences MUST be reproduced VERBATIM wherever cut-off,
// volume or returns are mentioned on any page. No rewording permitted.
// ============================================================================

export const CLAIM_CUTOFF =
  "Cut-off times of up to 23:00 may be available by agreement.";

export const CLAIM_VOLUME =
  "Vareya is generally best suited to brands shipping 500 or more orders per month.";

export const CLAIM_RETURNS =
  "Returns handling is available. Contact Vareya to discuss the required returns process.";

// ============================================================================
// Approved public-facing fallback for specialist capabilities
// ============================================================================

export const CLAIM_SPECIALIST_FALLBACK =
  "Have customs, tax or specialist handling requirements? Include them in the fulfilment scan so Vareya can confirm which parts of the proposed setup can be supported.";

// ============================================================================
// Post-submission commitment (scan + quote thank-you pages)
// ============================================================================

export const CLAIM_POST_SUBMISSION =
  "Vareya will review your answers and send an initial fit response by email within one working day.";

// ============================================================================
// Primary CTA (mandatory on all commercial pages)
// ============================================================================

export const CLAIM_PRIMARY_CTA = "Check your EU fulfilment fit";

// ============================================================================
// Prohibited terms — must never appear on any page
// ============================================================================

export const PROHIBITED_TERMS = [
  "fastest",
  "cheapest",
  "leading",
  "number one",
  "Rest of the World",
  "No specific capability is claimed on this page.",
  "guaranteed same-day dispatch",
  "guaranteed delivery",
  "instant quote",
  "instant quotation",
  "AutoStore",
  "robots",
  "automation",
  "multi-warehousing",
  "inventory accuracy",
  "error rate",
] as const;

// "best" is ONLY permitted inside CLAIM_VOLUME verbatim — audit separately

// ============================================================================
// Approved shipping destinations (do not add/remove)
// ============================================================================

export const APPROVED_DESTINATIONS = [
  "Australia", "Austria", "Belgium", "Brazil", "Bulgaria", "Canada",
  "China", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia",
  "Finland", "France", "Germany", "Greece", "Hong Kong", "Hungary",
  "Ireland", "Italy", "Japan", "Latvia", "Lithuania", "Luxembourg",
  "Malta", "New Zealand", "Norway", "Poland", "Portugal", "Romania",
  "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland",
  "United Kingdom", "United States",
] as const;

// ============================================================================
// Approved facts (may appear on any page)
// ============================================================================

export const APPROVED_FACTS = {
  company: "Vareya BV",
  address: "Bagven Park 6, 4838 EH Breda, The Netherlands",
  phone: "+31 6 19 12 34 72",
  email: "info@vareya.nl",
  shopify: "Shopify integration is available.",
  amazonFbm: "Amazon FBM fulfilment is available.",
  carriers: "Carriers include DHL, PostNL, Asendia, FedEx and Royal Mail.",
  specialises:
    "Vareya specialises in cosmetics, supplements, phone cases, accessories and other smaller parcel products.",
  parcelSize:
    "Suitable smaller parcels have combined dimensions below 900 mm and a maximum length of 600 mm.",
  productFit: "Product fit is confirmed during qualification.",
} as const;

// ============================================================================
// Process steps (for ProcessSection component)
// ============================================================================

export const APPROVED_PROCESS_STEPS = [
  {
    step: 1,
    title: "Qualification",
    body: "Share your volume, product category, sales channels and target markets via the fulfilment scan. Product fit is confirmed during qualification.",
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
] as const;

/**
 * Vareya — approved company and operational facts.
 * Keep public-facing factual copy aligned with content/claims-register.md.
 */

export const COMPANY = {
  legalName: "Vareya BV",
  street: "Bagven Park 6",
  postcode: "4838 EH",
  city: "Breda",
  country: "The Netherlands",
  countryCode: "NL",
  phone: "+31 6 19 12 34 72",
  email: "info@vareya.nl",
  domain: "vareya.ai",
} as const;

export const WAREHOUSE = {
  ...COMPANY,
  label: "Vareya warehouse",
} as const;

export const APPROVED_DESTINATIONS = [
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Bulgaria",
  "Canada",
  "China",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hong Kong",
  "Hungary",
  "Ireland",
  "Italy",
  "Japan",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "New Zealand",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "United Kingdom",
  "United States",
] as const;

export const DESTINATION_OPTIONS = [
  ...APPROVED_DESTINATIONS,
  "Other destination",
] as const;

export const CAPABILITIES = {
  shopify: "Shopify integration is available.",
  amazonFbm: "Amazon FBM fulfilment is available.",
  returns:
    "Returns handling is available. Contact Vareya to discuss the required returns process.",
  carriers: ["DHL", "PostNL", "Asendia", "FedEx", "Royal Mail"] as const,
  cutOff:
    "Cut-off times of up to 23:00 may be available by agreement.",
  cutOffTime:
    "Cut-off times of up to 23:00 may be available by agreement.",
  volume:
    "Vareya is generally best suited to brands shipping 500 or more orders per month.",
  minMonthlyOrders: 500,
  specialisations: [
    "cosmetics",
    "supplements",
    "phone cases",
    "accessories",
    "other smaller parcel products",
  ] as const,
  parcelLimits: {
    combinedDimensionsMm: 900,
    maxLengthMm: 600,
  },
  productFit: "Product fit is confirmed during qualification.",
} as const;

export const SPECIALIST_REQUIREMENTS_FALLBACK =
  "Have customs, tax or specialist handling requirements? Include them in the fulfilment scan so Vareya can confirm which parts of the proposed setup can be supported.";

export const INTEGRATIONS = [
  {
    name: "Shopify",
    available: true,
    description: "Shopify integration is available.",
  },
  {
    name: "Amazon FBM",
    available: true,
    description: "Amazon FBM fulfilment is available.",
  },
] as const;

export const CARRIER_LOGOS = CAPABILITIES.carriers.map((name) => ({
  name,
  available: true,
}));

/**
 * Vareya — Single source of truth for company facts.
 * Every fact used in marketing copy MUST be sourced from here.
 * Do NOT inline facts in components.
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
  label: "Vareya Fulfilment Centre",
} as const;

export const CAPABILITIES = {
  shopify: "Shopify integration available",
  amazonFbm: "Amazon FBM fulfilment available",
  returns: "Returns handling available",
  carriers: ["DHL", "PostNL", "Asendia", "FedEx", "Royal Mail"] as const,
  cutOffTime: "up to 23:00 (by agreement)",
  minMonthlyOrders: 500,
  specialisations: [
    "cosmetics",
    "supplements",
    "phone cases",
    "accessories",
    "small parcel products",
  ] as const,
  parcelLimits: {
    combinedDimensionsMm: 900,
    maxLengthMm: 600,
  },
} as const;

export const INTEGRATIONS = [
  { name: "Shopify", available: true, description: "Direct Shopify integration for automated order sync." },
  { name: "Amazon FBM", available: true, description: "Fulfilment by Merchant support for Amazon sellers." },
] as const;

export const CARRIER_LOGOS = [
  { name: "DHL", available: true },
  { name: "PostNL", available: true },
  { name: "Asendia", available: true },
  { name: "FedEx", available: true },
  { name: "Royal Mail", available: true },
] as const;

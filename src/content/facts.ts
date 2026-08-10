/**
 * Vareya — approved company and operational facts v1.2.
 * Keep public-facing factual copy aligned with content/claims-register.md v1.2.
 * Last updated: 10 August 2026
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
  "Australia","Austria","Belgium","Brazil","Bulgaria","Canada","China",
  "Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland",
  "France","Germany","Greece","Hong Kong","Hungary","Ireland","Italy",
  "Japan","Latvia","Lithuania","Luxembourg","Malta","New Zealand",
  "Norway","Poland","Portugal","Romania","Saudi Arabia","Slovakia",
  "Slovenia","South Korea","Spain","Sweden","Switzerland","Turkey",
  "United Arab Emirates","United Kingdom","United States",
] as const;

export const DESTINATION_OPTIONS = [
  ...APPROVED_DESTINATIONS,
  "Other destination",
] as const;

export const CAPABILITIES = {
  shopify: "Shopify integration is available.",
  amazonFbm: "Amazon FBM fulfilment is available.",
  returns: "Returns handling is available. Contact Vareya to discuss the required returns process.",
  carriers: ["DHL", "PostNL", "Asendia", "FedEx", "Royal Mail"] as const,
  cutOff: "Cut-off times of up to 23:00 may be available by agreement.",
  cutOffTime: "Cut-off times of up to 23:00 may be available by agreement.",
  volume: "Vareya is generally best suited to brands shipping 500 or more orders per month.",
  minMonthlyOrders: 500,
  specialisations: ["cosmetics","supplements","phone cases","accessories","other smaller parcel products"] as const,
  parcelLimits: { combinedDimensionsMm: 900, maxLengthMm: 600 },
  productFit: "Product fit is confirmed during qualification.",
  // v1.2 additions
  postNL: "PostNL is Vareya's strategic partner and main carrier for shipments within the Netherlands. DHL, Asendia, FedEx and Royal Mail remain part of the carrier network for other routes.",
  support: "Customer support is included at no additional charge.",
  slas: "Clients can agree customised SLAs with Vareya, within boundaries confirmed during qualification.",
  shipHero: "Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify.",
  allInRates: "Vareya's fulfilment rates are fixed and all-in per agreement — no hidden costs beyond what the agreement sets out.",
  internationalExperience: "Vareya has multiple years of experience fulfilling for large international brands.",
  customs: "Customs clearance support is available for shipments into and out of Europe. Contact Vareya to discuss specific requirements.",
  royalMailDirect: "Shipments to the United Kingdom may be entered directly into the Royal Mail domestic network. Exact delivery timing depends on the agreed shipping method and is confirmed during qualification.",
  carrierSelection: "Vareya's shipping system can automatically select an appropriate carrier for each shipment, based on destination and parcel characteristics.",
  weekendFulfilment: "Weekend fulfilment (Saturday and Sunday order processing) is available on a structural basis.",
  ambition: "Vareya's ambition is to become the most consumer-focused fulfilment organisation in Europe.",
} as const;

export const SPECIALIST_REQUIREMENTS_FALLBACK =
  "Have customs, tax or specialist handling requirements? Include them in the fulfilment scan so Vareya can confirm which parts of the proposed setup can be supported.";

export const INTEGRATIONS = [
  { name: "Shopify", available: true, description: "Shopify integration is available. Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify." },
  { name: "Amazon FBM", available: true, description: "Amazon FBM fulfilment is available." },
] as const;

export const CARRIER_LOGOS = CAPABILITIES.carriers.map((name) => ({ name, available: true }));

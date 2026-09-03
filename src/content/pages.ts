/**
 * Page metadata for SEO — title, description, canonical.
 * Every indexable route must have an entry here.
 */

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  noIndex?: boolean;
  /** ISO date of last meaningful content change; sitemap lastmod source. Omit when unknown (never fabricate). */
  updatedAt?: string | null;
}

const BASE = "https://vareya.ai";

export const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "Vareya | European Fulfilment for E-Commerce Brands",
    description:
      "Fast, reliable order fulfilment from Breda, the Netherlands. Shopify and Amazon FBM integration, multi-carrier delivery, and returns handling available.",
    canonical: `${BASE}/`,
  },
  "/eu-fulfilment/": {
    title: "EU Fulfilment Services | Vareya",
    description:
      "European fulfilment for growing e-commerce brands. Warehouse in Breda, Netherlands with DHL, PostNL, Asendia, FedEx, and Royal Mail delivery.",
    canonical: `${BASE}/eu-fulfilment/`,
    updatedAt: "2026-08-21",
  },
  "/shopify-fulfilment-europe/": {
    title: "Shopify Fulfilment Europe | Vareya",
    description:
      "Direct Shopify integration for European order fulfilment. Orders sync automatically from your store to our Breda warehouse.",
    canonical: `${BASE}/shopify-fulfilment-europe/`,
  },
  "/eu-fulfilment-us-brands/": {
    title: "EU Fulfilment for US Brands | Vareya",
    description:
      "Expand your US brand into Europe with fulfilment from the Netherlands. Multi-carrier delivery, returns handling, and Shopify integration.",
    canonical: `${BASE}/eu-fulfilment-us-brands/`,
  },
  "/eu-fulfilment-uk-brands/": {
    title: "EU Fulfilment for UK Brands | Vareya",
    description:
      "Post-Brexit EU fulfilment for UK brands. Warehouse in Breda, Netherlands with multi-carrier European delivery.",
    canonical: `${BASE}/eu-fulfilment-uk-brands/`,
  },
  "/eu-fulfilment-south-korean-brands/": {
    title: "EU Fulfilment for South Korean Brands | Vareya",
    description:
      "A practical guide for South Korean ecommerce brands assessing fulfilment from a Netherlands warehouse for European orders. Covers preparation, customs and VAT roles, product compliance and the Free Rate Scan.",
    canonical: `${BASE}/eu-fulfilment-south-korean-brands/`,
    updatedAt: "2026-08-30",
  },
  "/european-fulfilment-for-australian-brands/": {
    title: "European Fulfilment for Australian Ecommerce Brands | Vareya",
    description:
      "A practical guide for Australian ecommerce brands assessing fulfilment from a warehouse in the Netherlands for European orders. Covers holding stock in the EU, the AU-EU corridor, customs and GST roles, product fit and the Free Rate Scan.",
    canonical: `${BASE}/european-fulfilment-for-australian-brands/`,
    updatedAt: "2026-09-03",
  },
  "/european-fulfilment-for-new-zealand-brands/": {
    title: "European Fulfilment for New Zealand Ecommerce Brands | Vareya",
    description:
      "A practical guide for New Zealand ecommerce brands assessing fulfilment from a warehouse in the Netherlands for European orders. Covers holding stock in the EU, the NZ-EU corridor, customs and GST roles, product fit and the Free Rate Scan.",
    canonical: `${BASE}/european-fulfilment-for-new-zealand-brands/`,
    updatedAt: "2026-09-03",
  },
  "/shipping-from-europe-to-australia-new-zealand/": {
    title: "Shipping Ecommerce Orders from Europe to Australia & New Zealand | Vareya",
    description:
      "How ecommerce orders are shipped from a warehouse in the Netherlands to customers in Australia and New Zealand: order flow, carriers, customs, GST and biosecurity per destination, returns, and the Free Rate Scan.",
    canonical: `${BASE}/shipping-from-europe-to-australia-new-zealand/`,
    updatedAt: "2026-09-03",
  },
  "/cosmetics-supplements-fulfilment-europe/": {
    title: "Cosmetics & Supplements Fulfilment Europe | Vareya",
    description:
      "Specialist fulfilment for cosmetics and supplement brands. Product-fit review, careful handling, and multi-carrier European delivery.",
    canonical: `${BASE}/cosmetics-supplements-fulfilment-europe/`,
    updatedAt: "2026-08-21",
  },
  "/amazon-fbm-fulfilment/": {
    title: "Amazon FBM Fulfilment from the Netherlands | Vareya",
    description:
      "What Amazon FBM means for European sellers, when a 3PL adds value, FBM vs FBA trade-offs, and how Vareya supports Amazon FBM alongside Shopify from a warehouse in Breda, the Netherlands.",
    canonical: `${BASE}/amazon-fbm-fulfilment/`,
    updatedAt: "2026-08-21",
  },
  "/shipbob-alternative-europe/": {
    title: "ShipBob Alternatives for European Fulfilment | Vareya",
    description:
      "What DTC brands should compare when evaluating European alternatives to ShipBob: EU warehouse footprint, support structure, carrier setup and volume fit. Includes Vareya's fit for 500+ orders per month.",
    canonical: `${BASE}/shipbob-alternative-europe/`,
    updatedAt: "2026-08-21",
  },
  "/returns-fulfilment-europe/": {
    title: "Ecommerce Returns Handling for European Fulfilment | Vareya",
    description:
      "A decision framework for European ecommerce returns: where returns should land, what a 3PL needs from you, and what Vareya does and does not claim for returns handling from Breda, the Netherlands.",
    canonical: `${BASE}/returns-fulfilment-europe/`,
    updatedAt: "2026-08-21",
  },
  "/free-rate-scan/": {
    title: "Check Your EU Fulfilment Fit | Vareya",
    description:
      "Quick self-assessment to see if Vareya fulfilment is right for your e-commerce brand. Takes a few minutes.",
    canonical: `${BASE}/free-rate-scan/`,
  },
  "/request-fulfilment-quote/": {
    title: "Request a Fulfilment Quote | Vareya",
    description:
      "Request a tailored fulfilment quote from Vareya. Tell us about your brand, volumes, and needs.",
    canonical: `${BASE}/request-fulfilment-quote/`,
  },
  "/contact/": {
    title: "Contact Vareya | European Fulfilment",
    description:
      "Get in touch with Vareya. Bagven Park 6, 4838 EH Breda, the Netherlands. Call +31 6 19 12 34 72 or email info@vareya.ai.",
    canonical: `${BASE}/contact/`,
  },
  "/privacy/": {
    title: "Privacy Policy | Vareya",
    description: "How Vareya collects, uses, and protects your personal data.",
    canonical: `${BASE}/privacy/`,
  },
  "/cookies/": {
    title: "Cookie Policy | Vareya",
    description: "How Vareya uses cookies and similar technologies on our website.",
    canonical: `${BASE}/cookies/`,
  },
  "/about/": {
    title: "About Vareya | European Fulfilment from the Netherlands",
    description:
      "Vareya fulfils ecommerce orders from Breda, the Netherlands. Company details, capabilities and contact information.",
    canonical: `${BASE}/about/`,
  },
  "/why-vareya-ai/": {
    title: "Why Vareya.ai: A Cooperative Fulfilment Vision | Vareya",
    description:
      "The vision behind Vareya: operational fulfilment from Breda and a possible future cooperative model for member ownership.",
    canonical: `${BASE}/why-vareya-ai/`,
  },
  "/knowledge/": {
    title: "European Fulfilment Knowledge | Vareya",
    description:
      "Practical guides for evaluating European e-commerce fulfilment, quotations, costs and platform integration.",
    canonical: `${BASE}/knowledge/`,
  },
  "/nl/fulfilment-noord-brabant/": {
    title: "Fulfilmentcentrum Brabant | Vareya in Breda",
    description:
      "Vareya is een fulfilmentcentrum in Breda, Noord-Brabant. Ecommerce fulfilment voor webshops vanaf 500 orders per maand, met PostNL als hoofdvervoerder binnen Nederland.",
    canonical: `${BASE}/nl/fulfilment-noord-brabant/`,
    updatedAt: "2026-08-21",
  },
  "/nl/fulfilmentcentrum-kiezen/": {
    title: "Hoe kies je een fulfilmentcentrum in Noord-Brabant? | Vareya",
    description:
      "Een praktisch stappenplan voor webshops die een fulfilmentcentrum in Noord-Brabant willen kiezen: locatie, integraties, vervoerders, tarieven en retouren.",
    canonical: `${BASE}/nl/fulfilmentcentrum-kiezen/`,
    updatedAt: "2026-08-21",
  },
  "/nl/wat-kost-fulfilment-brabant/": {
    title: "Wat kost fulfilment in Brabant? | Vareya",
    description:
      "De kostenfactoren van fulfilment in Brabant: orderaantal, pakketprofiel, bestemmingen, opslag, integraties en serviceniveaus.",
    canonical: `${BASE}/nl/wat-kost-fulfilment-brabant/`,
    updatedAt: "2026-08-21",
  },
  "/nl/fulfilment-uitbesteden-breda/": {
    title: "Fulfilment uitbesteden in Breda: stappenplan voor webshops | Vareya",
    description:
      "Stappenplan voor webshops die fulfilment willen uitbesteden in Breda: voorraad, software, pakketprofiel, onboarding en retouren.",
    canonical: `${BASE}/nl/fulfilment-uitbesteden-breda/`,
    updatedAt: "2026-08-21",
  },
  "/thank-you/scan/": {
    title: "Thank You | Vareya",
    description: "Thank you for completing the fulfilment scan.",
    canonical: `${BASE}/thank-you/scan/`,
    noIndex: true,
  },
  "/thank-you/quote/": {
    title: "Thank You | Vareya",
    description: "Thank you for requesting a fulfilment quote.",
    canonical: `${BASE}/thank-you/quote/`,
    noIndex: true,
  },
} as const;

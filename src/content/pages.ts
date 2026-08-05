/**
 * Page metadata for SEO — title, description, canonical.
 * Every indexable route must have an entry here.
 */

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  noIndex?: boolean;
}

const BASE = "https://vareya.ai";

export const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "Vareya | European Fulfilment for E-Commerce Brands",
    description:
      "Fast, reliable order fulfilment from Breda, the Netherlands. Shopify and Amazon FBM integration, multi-carrier delivery, and returns handling included.",
    canonical: `${BASE}/`,
  },
  "/eu-fulfilment/": {
    title: "EU Fulfilment Services | Vareya",
    description:
      "European fulfilment for growing e-commerce brands. Warehouse in Breda, Netherlands with DHL, PostNL, Asendia, FedEx, and Royal Mail delivery.",
    canonical: `${BASE}/eu-fulfilment/`,
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
  "/cosmetics-supplements-fulfilment-europe/": {
    title: "Cosmetics & Supplements Fulfilment Europe | Vareya",
    description:
      "Specialist fulfilment for cosmetics and supplement brands. Product-fit review, careful handling, and multi-carrier European delivery.",
    canonical: `${BASE}/cosmetics-supplements-fulfilment-europe/`,
  },
  "/fulfilment-scan/": {
    title: "Check Your EU Fulfilment Fit | Vareya",
    description:
      "Quick self-assessment to see if Vareya fulfilment is right for your e-commerce brand. Takes under 3 minutes.",
    canonical: `${BASE}/fulfilment-scan/`,
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
      "Get in touch with Vareya. Bagven Park 6, 4838 EH Breda, the Netherlands. Call +31 6 19 12 34 72 or email info@vareya.nl.",
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

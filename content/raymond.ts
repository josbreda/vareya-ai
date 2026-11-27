/**
 * Raymond source package — public-facing content blocks (12 October 2026).
 *
 * Source: INVULBLAD-RAYMOND-COMPLETED.docx, SOP-Returns-2026.pdf and
 * Onboarding-Process-Vareya.pdf in
 * reports/raymond-website-input-2026-10-12/ (lead-engine repo).
 *
 * Rules applied:
 * - Source-faithful simple English for the existing pages; no new rates,
 *   guarantees, certifications, turnaround promises or client names.
 * - Royal Mail timing is bounded to the network handover, never an
 *   order-to-door guarantee. 24/7 is availability, not a response promise.
 * - Internal SOP and editorial notes are not published.
 *
 * Photo map mirrors content/assets/raymond-20261012.manifest.json (source,
 * crop, privacy edits and placements stay outside the public web root).
 */

export interface RaymondPhotoData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// ---------------------------------------------------------------- onboarding

export const ONBOARDING_STEPS = [
  {
    title: "Agree the service and pricing",
    body: "We discuss the services you need and prepare an online quote. We review your feedback, refine the proposal and work through the fulfilment agreement together. Once the final agreement is accepted and signed, we move to the operational setup.",
  },
  {
    title: "Set up and test your operation",
    body: "You meet your operational contact or account manager. We connect your webshop to the WMS, receive your stock and update inventory levels. For Shopify, you receive an invitation to connect your store to our ShipHero account setup. We configure the WMS rules, agree packing instructions and materials, and set up your returns process. We then work through test orders, adjustments and final checks before going live.",
  },
  {
    title: "Go live and stay in touch",
    body: "Once the setup is ready, we start fulfilling your orders. We provide daily customer support, monitor the operation and arrange a monthly catch-up call with your account manager. You receive invoices for the services provided.",
  },
] as const;

export const ONBOARDING_SUMMARY =
  "At a glance: quote and signed agreement → account manager and webshop/WMS connection → stock receipt and stock update → WMS rules, packing and returns setup → test orders and final checks → go-live → daily support and monthly catch-up.";

// -------------------------------------------------------------- inbound stock

export const INBOUND_STOCK = {
  title: "Send your stock with a clear receiving plan",
  plan: "Create a purchase order in the WMS and list the products you are sending. Inbound transport is usually arranged by you, and we can also arrange it if you prefer.",
  receive:
    "When the goods reach our warehouse, we check and count the delivery. Once the purchase order is accepted, stock levels are updated in the WMS.",
} as const;

// ------------------------------------------------------------------ services

export const SERVICES_INTRO =
  "We support multiple webshops, product bundles, subscriptions and stock with batch numbers or expiry dates. We also handle B2B orders, stock transfers and replenishment to Amazon FBA fulfilment centres. Tell us how your products are sold and packed, and we can discuss the setup that fits your operation.";

// ------------------------------------------------------------------- returns

export const RETURNS_INTRO =
  "Returned products need a clear next step. Our returns team unpacks, checks, sorts and records returned goods in our warehouse, and return status is visible in the WMS. We agree the details of your returns process with you, including what can go back into saleable stock and how damaged items are handled.";

export const RETURNS_STEPS = [
  {
    title: "Receive the return",
    body: "We unpack the returned delivery and record its receipt.",
  },
  {
    title: "Check the condition",
    body: "We inspect the returned products to see whether they are suitable for resale.",
  },
  {
    title: "Update the stock",
    body: "Suitable items can go back into stock. Items that cannot be resold are recorded as damaged when accepted.",
  },
  {
    title: "Keep you informed",
    body: "Return status is recorded in the WMS. Photographs of damaged products can be provided on request.",
  },
] as const;

export const RETURNS_CONDITIONS = [
  "Damaged goods may need a carrier damage report before they can be accepted. Acceptance without that report can be arranged at your request.",
  "Returns that need extra safety measures, cleaning or other additional work may be priced separately.",
  "The exact returns process — including inspection and restocking rules — is agreed per operation during qualification.",
] as const;

// ------------------------------------------------------------ UK Direct Entry

export const UK_DIRECT_ENTRY = {
  title: "UK Direct Entry: serve UK customers from stock held in the Netherlands",
  intro:
    "Keep your stock in the Netherlands and serve UK customers through our Direct Entry route. UK parcels are grouped for daily transport, customs are handled collectively using your VAT number, and parcels are entered directly into the Royal Mail network for final delivery.",
  delivery:
    "Parcels enter the Royal Mail network daily and are then handled as domestic shipments, with delivery to UK addresses within 24 hours after that handover. This timing applies after entry into the Royal Mail network — it is not an order-to-door guarantee from the moment an order is placed.",
  returns:
    "A UK returns address is available as part of the returns setup, so your customers can send returns to a local address in the UK.",
} as const;

// ------------------------------------------------------------------- pricing

export const PRICING = {
  title: "How your quote is built",
  split:
    "Your quote separates fulfilment costs from shipping costs, so you can see what you are paying for.",
  inputs:
    "Share your order volume, products, packing requirements and delivery destinations. We use that information to prepare a quote for your operation.",
  model:
    "Vareya is generally best suited to brands shipping 500 or more orders per month.",
} as const;

// ----------------------------------------------------------- about / support

export const SUPPORT = {
  intro:
    "Vareya BV has provided fulfilment services since 2016. Our warehouse is at Bagven Park 6, 4838 EH Breda, the Netherlands.",
  availability:
    "Our team is available 24/7. Contact us to discuss your orders, stock or fulfilment setup.",
  bound:
    "24/7 describes availability; specific service levels and response arrangements are confirmed during qualification.",
} as const;

// ---------------------------------------------------------------- photo map

export const RAYMOND_PHOTOS = {
  "photo-03": {
    src: "/images/raymond-20261012/photo-03.webp",
    alt: "Aerial view of a warehouse building with its yard and loading area.",
    width: 1280,
    height: 660,
  },
  "photo-11": {
    src: "/images/raymond-20261012/photo-11.webp",
    alt: "A long aisle of tall pallet racking with wrapped pallets.",
    width: 853,
    height: 1280,
  },
  "photo-19": {
    src: "/images/raymond-20261012/photo-19.webp",
    alt: "Overhead view of warehouse loading docks with trucks and trailers.",
    width: 1280,
    height: 660,
  },
  "photo-24": {
    src: "/images/raymond-20261012/photo-24.webp",
    alt: "A team meeting around a table, with an overview displayed on a wall screen.",
    width: 1280,
    height: 853,
  },
  "photo-25": {
    src: "/images/raymond-20261012/photo-25.webp",
    alt: "Close-up of a small product held by hand during handling.",
    width: 1280,
    height: 853,
  },
  "photo-26": {
    src: "/images/raymond-20261012/photo-26.webp",
    alt: "A forklift moving stacked pallets inside the warehouse.",
    width: 1280,
    height: 853,
  },
  "photo-27": {
    src: "/images/raymond-20261012/photo-27.webp",
    alt: "A team standing in a circle around a Vareya sign, seen from above.",
    width: 1280,
    height: 655,
  },
  "photo-29": {
    src: "/images/raymond-20261012/photo-29.webp",
    alt: "A hand scanner being used on a product pack during handling.",
    width: 1280,
    height: 853,
  },
  "photo-32": {
    src: "/images/raymond-20261012/photo-32.webp",
    alt: "Two team members picking orders at numbered pick locations.",
    width: 1280,
    height: 853,
  },
  "photo-33": {
    src: "/images/raymond-20261012/photo-33.webp",
    alt: "A team member working at a desk in the office.",
    width: 1280,
    height: 853,
  },
  "photo-35": {
    src: "/images/raymond-20261012/photo-35.webp",
    alt: "A hand scanner checking carton labels during goods intake.",
    width: 1000,
    height: 667,
  },
  "photo-40": {
    src: "/images/raymond-20261012/photo-40.webp",
    alt: "A parcel being handed over at a doorstep.",
    width: 1000,
    height: 668,
  },
  "brand-lockup": {
    src: "/images/brand/vareya-hero-lockup.webp",
    alt: "VareYa brand graphic: a white cube inside a glowing green hexagon above the VareYa wordmark and the words eCommerce Fulfilment.",
    width: 1254,
    height: 1254,
  },
  "raymond-portrait": {
    src: "/images/people/raymond-20261015.webp",
    alt: "Raymond of Vareya, smiling in front of the VareYa brand backdrop.",
    width: 800,
    height: 800,
  },
} as const;

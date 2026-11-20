import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/marketing/FAQ";
import {
  APPROVED_DESTINATIONS,
  CAPABILITIES,
  SPECIALIST_REQUIREMENTS_FALLBACK,
} from "@/content/facts";

export const metadata: Metadata = {
  title: "European Fulfilment for UK Ecommerce Brands | Vareya",
  description:
    "A practical guide for UK ecommerce brands assessing fulfilment from a Netherlands warehouse for EU orders after Brexit. Covers the GB-EU customs border, VAT, product fit and the Free Rate Scan.",
  alternates: {
    canonical: "https://vareya.ai/eu-fulfilment-uk-brands/",
  },
  openGraph: {
    title: "European Fulfilment for UK Ecommerce Brands | Vareya",
    description:
      "A practical guide for UK ecommerce brands assessing fulfilment from a Netherlands warehouse for EU orders after Brexit. Covers the GB-EU customs border, VAT, product fit and the Free Rate Scan.",
    url: "https://vareya.ai/eu-fulfilment-uk-brands/",
    type: "website",
    locale: "en_GB",
  },
};

const destinationList = APPROVED_DESTINATIONS.join(", ");

// Route map: who owns each stage. Only Vareya's verified role is claimed.
const CORRIDOR = [
  {
    stage: "UK-side readiness",
    owner: "Brand + its export partner",
    body: "SKU data, product classification, commercial invoices and a GB EORI number are prepared before goods leave Great Britain.",
  },
  {
    stage: "Export from Great Britain",
    owner: "Brand's freight forwarder or transport partner",
    body: "An export customs declaration clears goods through UK customs. Transport and insurance to the EU are arranged and paid for by the brand or its partners.",
  },
  {
    stage: "EU import and customs",
    owner: "Importer of record + customs representative",
    body: "The responsible party submits the EU import declaration. Duties and VAT follow the product, its classification, and whether UK-EU Trade and Cooperation Agreement origin rules are met.",
  },
  {
    stage: "Receiving and storage",
    owner: "Vareya",
    body: "Stock is received at the warehouse in Breda and stored until orders are processed.",
  },
  {
    stage: "Fulfilment",
    owner: "Vareya",
    body: "EU orders are picked, packed and shipped through the carrier network from the Netherlands. Vareya's shipping system can automatically select an appropriate carrier for each shipment, based on destination and parcel characteristics.",
  },
  {
    stage: "Returns",
    owner: "Vareya, per the agreed process",
    body: "Returns handling is available. Contact Vareya to discuss the required returns process.",
  },
];

const DECISION_TABLE = [
  {
    aspect: "Where stock is held",
    holdingInEU: "In one warehouse in Breda, the Netherlands, close to European order volume.",
    shippingFromUK: "In Great Britain, in the brand's own facility or with a UK 3PL.",
  },
  {
    aspect: "How EU orders reach customers",
    holdingInEU: "Orders are picked, packed and handed to the carrier network from the warehouse in Breda and travel within the EU.",
    shippingFromUK: "Each order is packed in Great Britain and sent to the EU customer as an individual cross-border parcel, crossing the GB-EU border since the end of the transition period.",
  },
  {
    aspect: "Customs per order",
    holdingInEU: "Stock crosses the EU border once, as a consolidated inbound shipment. The import declaration is handled by the brand or its customs representative.",
    shippingFromUK: "Every parcel crosses the GB-EU border individually; customs formalities, duties and VAT may apply per parcel depending on value, classification and origin.",
  },
  {
    aspect: "Returns",
    holdingInEU: "Returns can land at the Breda warehouse. Returns handling is available. Contact Vareya to discuss the required returns process.",
    shippingFromUK: "Returns travel back across the GB-EU border unless the brand arranges an alternative EU return route.",
  },
  {
    aspect: "UK domestic orders",
    holdingInEU: "Shipments to the United Kingdom may be entered directly into the Royal Mail domestic network. Exact delivery timing depends on the agreed shipping method and is confirmed during qualification.",
    shippingFromUK: "Fulfilled directly from the brand's existing UK stock, as today.",
  },
  {
    aspect: "When it is worth comparing",
    holdingInEU: "When EU order volume becomes large enough that the consolidated import and EU-side operation is worth assessing against per-parcel GB-EU customs handling.",
    shippingFromUK: "While EU volume is low and orders are occasional.",
  },
];

const READINESS_CHECKLIST = [
  "Complete SKU master data: identifiers, barcodes, dimensions and weight",
  "Correct product classification (commodity code) for every SKU",
  "A GB EORI number for exporting from Great Britain, and an EU EORI number for the party handling EU import",
  "Proof of origin documentation if a UK-EU Trade and Cooperation Agreement preferential tariff is relevant",
  "An importer of record and a defined VAT route for EU sales",
  "Product compliance status, including any EU responsible-person or notification requirements",
  "UK export documentation, prepared before goods leave Great Britain",
  "Final label and packaging information",
  "Storage and handling instructions per product",
  "Sales-channel connection details (for example Shopify)",
  "Planned inbound shipment contents and arrival window",
];

const FAQ_ITEMS = [
  {
    question: "Does EU-based fulfilment solve all Brexit-related issues for UK brands?",
    answer:
      "EU-based fulfilment addresses where stock is held and how EU orders are shipped, which changes how often the GB-EU customs border is crossed. It does not remove every trade, tax or customs consideration — those should be discussed during qualification.",
  },
  {
    question: "What changed for UK brands shipping to the EU after Brexit?",
    answer:
      "Since the end of the transition period, goods moving from Great Britain to the EU are treated as exports from the UK and imports into the EU, each requiring their own customs declaration. Under the UK-EU Trade and Cooperation Agreement, qualifying goods can move at zero tariffs if origin rules are met and proof of origin is provided; goods that do not meet the origin rules may face standard duty rates.",
  },
  {
    question: "Does Vareya provide customs or tax services for UK brands?",
    answer: SPECIALIST_REQUIREMENTS_FALLBACK,
  },
  {
    question: "Do EU customers pay VAT on orders shipped from a UK brand's own stock?",
    answer:
      "Since 1 July 2021, the EU's €22 low-value VAT exemption no longer applies. For consignments with an intrinsic value up to €150 sent from outside the EU, the IOSS scheme can simplify VAT collection at checkout. Since 1 July 2026, a temporary flat fee of €3 per tariff item applies to relevant low-value imports from outside the EU and is planned to apply until 1 July 2028. Whether this applies depends on the setup and should be confirmed with a customs or tax adviser.",
  },
  {
    question: "Can shipments to UK customers still go through Vareya?",
    answer:
      "Shipments to the United Kingdom may be entered directly into the Royal Mail domestic network. Exact delivery timing depends on the agreed shipping method and is confirmed during qualification.",
  },
  {
    question: "Which markets can Vareya ship to from the Netherlands?",
    answer: `From Breda, Vareya ships to ${destinationList}.`,
  },
  {
    question: "What order volume is needed?",
    answer: CAPABILITIES.volume,
  },
  {
    question: "Can Vareya handle EU returns for a UK brand?",
    answer: CAPABILITIES.returns,
  },
];

const INTERNAL_LINKS = [
  { href: "/", label: "Ecommerce fulfilment in Europe" },
  { href: "/eu-fulfilment/", label: "EU fulfilment from the Netherlands" },
  { href: "/shopify-fulfilment-europe-for-united-kingdom-stores/", label: "Shopify fulfilment in Europe for UK stores" },
  { href: "/european-returns-handling-for-united-kingdom-brands/", label: "European returns handling for UK brands" },
  { href: "/eu-fulfilment-us-brands/", label: "EU fulfilment for US brands" },
  {
    href: "/cosmetics-supplements-fulfilment-europe/",
    label: "Cosmetics and supplements fulfilment",
  },
  { href: "/shopify-fulfilment-europe-for-united-kingdom-stores/", label: "Shopify fulfilment in Europe for UK stores" },
  { href: "/european-returns-handling-for-united-kingdom-brands/", label: "European returns handling for UK brands" },
];

const OFFICIAL_SOURCES = [
  {
    label: "Export goods from Great Britain — GOV.UK",
    href: "https://www.gov.uk/export-goods",
  },
  {
    label: "Customs formalities for low value consignments — European Commission",
    href: "https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-operations/customs-formalities-low-value-consignments_en",
  },
  {
    label: "Temporary flat fee on low-value imports (until 1 July 2028) — European Commission",
    href: "https://taxation-customs.ec.europa.eu/news/guidance-and-legal-text-temporary-flat-fee-low-value-imports-which-will-apply-until-1-july-2028-2026-06-08_en",
  },
  {
    label: "Importing non-EU products: a checklist (Business.gov.nl)",
    href: "https://business.gov.nl/international/import/importing-products-from-a-non-eu-country/",
  },
];

export default function UkBrandsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-site py-20 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/75">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <span aria-current="page">European fulfilment for UK brands</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              European fulfilment for UK ecommerce brands
            </h1>
            <div className="mb-8 max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 sm:text-xl">
              <p>
                For UK brands shipping to EU customers, holding inventory within the EU
                is one operational option worth assessing since goods moving from Great
                Britain now cross a customs border into the EU. Vareya fulfils orders
                from a warehouse in Breda, the Netherlands, shipping across Europe and
                to other international markets.
              </p>
              <p>{CAPABILITIES.volume}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/free-rate-scan/" className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-primary hover:bg-slate-100">
                Check your EU fulfilment fit
              </Link>
              <Link href="/request-fulfilment-quote/" className="rounded-lg border border-white/30 px-6 py-3 text-center font-medium hover:bg-white/10">
                Request a fulfilment quote
              </Link>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/70">
              Share your current order profile and destination mix for an initial
              fulfilment fit assessment. No sales call required.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-12" aria-labelledby="quick-answer">
        <div className="container-site max-w-4xl">
          <h2 id="quick-answer" className="mb-4 text-2xl font-bold">Quick answer</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>
              UK brands sometimes ship every EU order individually from Great Britain,
              crossing the GB-EU customs border per parcel. When EU order volume grows,
              comparing that setup with fulfilment from a warehouse inside the EU can be
              worthwhile. Vareya operates a warehouse in Breda, the Netherlands, and
              fulfils orders from there across Europe and to other international
              markets.
            </p>
            <p>{CAPABILITIES.volume}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="decision">
        <div className="container-site max-w-4xl">
          <h2 id="decision" className="mb-5 text-2xl font-bold sm:text-3xl">
            Holding stock in the EU or shipping every order from Great Britain
          </h2>
          <div className="space-y-4 leading-8 text-muted sm:text-lg">
            <p>
              Since the end of the Brexit transition period, goods moving from Great
              Britain to the EU are exports from the UK and imports into the EU, each
              with their own customs declaration. If most of your orders go to European
              customers, holding stock inside the EU changes the operational picture:
              goods cross the GB-EU border once as a consolidated inbound shipment, and
              customer orders are fulfilled from Breda. If EU orders are occasional,
              shipping individually from Great Britain may be the simpler setup.
            </p>
            <p>
              The table below compares the two setups, including what happens to any
              remaining UK domestic orders. Whether a move to EU fulfilment fits your
              brand depends on your volumes, products and order profile. Product fit is
              confirmed during qualification.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">What to compare</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Holding stock in the EU</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Shipping every order from Great Britain</th>
                </tr>
              </thead>
              <tbody>
                {DECISION_TABLE.map((row) => (
                  <tr key={row.aspect} className="border-t border-slate-100 align-top">
                    <td className="px-4 py-3 font-medium text-slate-900">{row.aspect}</td>
                    <td className="px-4 py-3 text-muted">{row.holdingInEU}</td>
                    <td className="px-4 py-3 text-muted">{row.shippingFromUK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="corridor">
        <div className="container-site">
          <h2 id="corridor" className="mb-3 text-2xl font-bold sm:text-3xl">The GB-EU corridor in one view</h2>
          <p className="mb-8 max-w-3xl leading-7 text-muted">
            From Great Britain to the EU customer, the work is shared. This table shows
            which part each party typically owns. Vareya&apos;s role covers receiving,
            storage, fulfilment and the agreed returns process.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Stage</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Typical owner</th>
                  <th scope="col" className="px-4 py-3 font-semibold">What happens</th>
                </tr>
              </thead>
              <tbody>
                {CORRIDOR.map((step) => (
                  <tr key={step.stage} className="border-t border-slate-100 align-top">
                    <td className="px-4 py-3 font-medium text-slate-900">{step.stage}</td>
                    <td className="px-4 py-3 text-muted">{step.owner}</td>
                    <td className="px-4 py-3 text-muted">{step.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="readiness">
        <div className="container-site max-w-4xl">
          <h2 id="readiness" className="mb-4 text-2xl font-bold sm:text-3xl">
            What to prepare before stock leaves Great Britain
          </h2>
          <p className="mb-6 leading-7 text-muted">
            Most onboarding delays come from missing data and documents, not from the
            warehouse work itself. This checklist shows the information that is usually
            needed before the first inbound shipment:
          </p>
          <ul className="mb-6 space-y-2">
            {READINESS_CHECKLIST.map((item) => (
              <li key={item} className="flex gap-3 leading-7 text-muted">
                <span aria-hidden="true" className="mt-1 text-primary">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-muted">
            This is general operational information, not legal, tax or customs advice.
            Customs, VAT and product-compliance details should be confirmed with
            qualified advisers before the first shipment.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="customs-vat">
        <div className="container-site max-w-4xl">
          <h2 id="customs-vat" className="mb-4 text-2xl font-bold">
            Customs, VAT and product compliance
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p>
              Exporting from Great Britain requires a GB EORI number, the correct
              commodity code for each product, an export customs declaration, and
              commercial invoices. On the EU side, an import declaration is required and
              an EORI number is needed for the party that deals with customs. Under the
              UK-EU Trade and Cooperation Agreement, goods that meet the agreed origin
              rules and have valid proof of origin can move at zero tariffs; goods that
              do not meet the origin rules may be charged the EU&apos;s standard duty
              rate. Whether your products qualify depends on where they and their
              components were made.
            </p>
            <p>
              The EU&apos;s €22 VAT exemption for low-value imports ended on 1 July 2021.
              For goods with an intrinsic value up to €150 sent from outside the EU, the
              IOSS scheme can simplify VAT collection at checkout. Since 1 July 2026, a
              temporary flat fee of €3 per tariff item applies to relevant low-value
              imports from outside the EU and is planned to apply until 1 July 2028.
              Whether any of this applies to your setup depends on your products and
              where your customers are.
            </p>
            <p className="font-medium text-slate-800">{SPECIALIST_REQUIREMENTS_FALLBACK}</p>
          </div>
          <div className="mt-8">
            <h3 className="mb-3 font-semibold text-slate-900">Official planning resources</h3>
            <ul className="space-y-2">
              {OFFICIAL_SOURCES.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline-offset-2 hover:underline"
                  >
                    {source.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="capabilities">
        <div className="container-site">
          <h2 id="capabilities" className="mb-8 text-2xl font-bold">Capabilities</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              CAPABILITIES.shopify,
              CAPABILITIES.amazonFbm,
              CAPABILITIES.returns,
              CAPABILITIES.royalMailDirect,
              CAPABILITIES.cutOff,
              CAPABILITIES.volume,
            ].map((item) => (
              <p key={item} className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6 text-muted">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="fit">
        <div className="container-site max-w-4xl">
          <h2 id="fit" className="mb-5 text-2xl font-bold">Good fit / may not be a fit</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="mb-3 font-semibold text-slate-900">Typically a good fit</h3>
              <ul className="space-y-2 text-sm leading-6 text-muted">
                <li>✓ {CAPABILITIES.volume}</li>
                <li>✓ Vareya specialises in cosmetics, supplements, phone cases, accessories and other smaller parcel products.</li>
                <li>✓ Suitable smaller parcels have combined dimensions below 900 mm and a maximum length of 600 mm.</li>
                <li>✓ Brands selling through Shopify or Amazon FBM. Shopify integration is available. Amazon FBM fulfilment is available.</li>
                <li>✓ Brands that want EU orders fulfilled from the Netherlands instead of shipped per parcel from Great Britain.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="mb-3 font-semibold text-slate-900">May not be a fit</h3>
              <ul className="space-y-2 text-sm leading-6 text-muted">
                <li>✗ Order volumes well below the 500-orders-per-month level.</li>
                <li>✗ Parcels that exceed the combined 900 mm / length 600 mm guideline.</li>
                <li>✗ Products with specialist customs, tax or handling requirements — include them in the fulfilment scan so Vareya can confirm which parts of the proposed setup can be supported.</li>
              </ul>
              <p className="mt-4 text-sm leading-6 text-muted">
                Product fit is confirmed during qualification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      <section className="py-14" aria-labelledby="related-pages">
        <div className="container-site">
          <h2 id="related-pages" className="mb-6 text-2xl font-bold">Related fulfilment pages</h2>
          <div className="flex flex-wrap gap-3">
            {INTERNAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-primary hover:border-primary/40">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white">
        <div className="container-site text-center">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Assess EU fulfilment for your UK brand</h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/free-rate-scan/" className="rounded-lg bg-white px-6 py-3 font-semibold text-primary hover:bg-slate-100">
              Check your EU fulfilment fit
            </Link>
            <Link href="/request-fulfilment-quote/" className="rounded-lg border border-white/30 px-6 py-3 font-medium hover:bg-white/10">
              Request a fulfilment quote
            </Link>
          </div>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/70">
            Share your current order profile and destination mix for an initial
            fulfilment fit assessment.
          </p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/marketing/FAQ";
import {
  APPROVED_DESTINATIONS,
  CAPABILITIES,
  SPECIALIST_REQUIREMENTS_FALLBACK,
} from "@/content/facts";

export const metadata: Metadata = {
  title: "European Fulfilment for US Ecommerce Brands | Vareya",
  description:
    "A practical guide for US ecommerce brands assessing fulfilment from a Netherlands warehouse for European orders. Covers the US-EU corridor, export documentation, customs and VAT roles, and the Free Rate Scan.",
  alternates: {
    canonical: "https://vareya.ai/eu-fulfilment-us-brands/",
  },
  openGraph: {
    title: "European Fulfilment for US Ecommerce Brands | Vareya",
    description:
      "A practical guide for US ecommerce brands assessing fulfilment from a Netherlands warehouse for European orders. Covers the US-EU corridor, export documentation, customs and VAT roles, and the Free Rate Scan.",
    url: "https://vareya.ai/eu-fulfilment-us-brands/",
    type: "website",
    locale: "en_US",
  },
};

const destinationList = APPROVED_DESTINATIONS.join(", ");

const CORRIDOR = [
  {
    stage: "US-side readiness",
    owner: "Brand + its export partner",
    body: "SKU data, Schedule B/HS classification and export documentation are prepared before goods leave the United States.",
  },
  {
    stage: "Freight to the EU",
    owner: "Brand's freight forwarder or transport partner",
    body: "Transport, insurance and any required export filing (such as Electronic Export Information through the Automated Export System) are arranged and paid for by the brand or its partners.",
  },
  {
    stage: "EU import and customs",
    owner: "Importer of record + customs representative",
    body: "The responsible party submits the import declaration. Duties and VAT follow the product, its classification and proof of origin.",
  },
  {
    stage: "Receiving and storage",
    owner: "Vareya",
    body: "Stock is received at the warehouse in Breda and stored until orders are processed.",
  },
  {
    stage: "Fulfilment",
    owner: "Vareya",
    body: "Orders are picked, packed and shipped through the carrier network from the Netherlands.",
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
    shippingFromUS: "In the United States, in the brand's own facility or with a US 3PL.",
  },
  {
    aspect: "How orders reach EU customers",
    holdingInEU: "Orders are picked, packed and handed to the carrier network from the warehouse in Breda and travel within the EU.",
    shippingFromUS: "Each order is packed in the US and sent to the EU customer as an individual cross-border parcel.",
  },
  {
    aspect: "Customs per order",
    holdingInEU: "Stock crosses the EU border once, as a consolidated inbound shipment. The import declaration is handled by the brand or its customs representative.",
    shippingFromUS: "Every parcel crosses the EU border individually; customs formalities, duties and VAT may apply per parcel depending on value and classification.",
  },
  {
    aspect: "Returns",
    holdingInEU: "Returns can land at the Breda warehouse. Returns handling is available. Contact Vareya to discuss the required returns process.",
    shippingFromUS: "Returns travel back to the US unless the brand arranges an alternative return route.",
  },
  {
    aspect: "When it is worth comparing",
    holdingInEU: "When European order volume becomes large enough that the consolidated import and EU-side operation is worth assessing.",
    shippingFromUS: "While European volume is low and orders are occasional.",
  },
];

const READINESS_CHECKLIST = [
  "Complete SKU master data: identifiers, barcodes, dimensions and weight",
  "Correct product classification (Schedule B / HS code) for every SKU",
  "Proof of origin documentation where a reduced duty rate is relevant",
  "An importer of record and, where needed, an EORI number for the EU side",
  "A defined VAT route for EU sales",
  "Product compliance status, including any EU responsible-person or notification requirements",
  "US export documentation, including any required Electronic Export Information filing, prepared before goods leave the US",
  "Final label and packaging information",
  "Storage and handling instructions per product",
  "Sales-channel connection details (for example Shopify)",
  "Planned inbound shipment contents and arrival window",
];

const FAQ_ITEMS = [
  {
    question: "Does holding stock in Europe make sense for every US brand?",
    answer:
      "This depends on your order volume and markets. When European order volume grows and shipping every order individually from the US becomes operationally relevant to compare, holding stock in the EU is worth assessing. Product fit is confirmed during qualification.",
  },
  {
    question: "What is the difference between holding stock in Europe and shipping every order from the US?",
    answer:
      "With stock in Europe, goods cross the EU border once as a consolidated inbound shipment and customer orders travel within the EU. Shipping every order from the US means each parcel crosses the EU border individually, so customs formalities, duties and VAT may apply per parcel depending on value and classification. The table above compares both setups.",
  },
  {
    question: "Does Vareya handle customs or import for US brands?",
    answer: SPECIALIST_REQUIREMENTS_FALLBACK,
  },
  {
    question: "Do US exports need special documentation?",
    answer:
      "US exports are classified using Schedule B codes (based on the international Harmonized System), and larger or regulated shipments may require an Electronic Export Information filing through the Census Bureau's Automated Export System. Requirements depend on the product and shipment value — confirm with a customs broker or freight forwarder before the first shipment.",
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
    question: "Can Vareya handle EU returns for a US brand?",
    answer: CAPABILITIES.returns,
  },
];

const INTERNAL_LINKS = [
  { href: "/", label: "Ecommerce fulfilment in Europe" },
  { href: "/eu-fulfilment/", label: "EU fulfilment from the Netherlands" },
  { href: "/shopify-fulfilment-europe-for-united-states-stores/", label: "Shopify fulfilment in Europe for US stores" },
  { href: "/european-returns-handling-for-united-states-brands/", label: "European returns handling for US brands" },
  { href: "/eu-fulfilment-uk-brands/", label: "EU fulfilment for UK brands" },
  {
    href: "/cosmetics-supplements-fulfilment-europe/",
    label: "Cosmetics and supplements fulfilment",
  },
];

const OFFICIAL_SOURCES = [
  {
    label: "Automated Export System (AES) — US Census Bureau",
    href: "https://www.census.gov/foreign-trade/aes/",
  },
  {
    label: "Schedule B / HS export classification — International Trade Administration",
    href: "https://www.trade.gov/harmonized-system-hs-codes",
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

export default function UsBrandsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-site py-20 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/75">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <span aria-current="page">European fulfilment for US brands</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              European fulfilment for US ecommerce brands
            </h1>
            <div className="mb-8 max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 sm:text-xl">
              <p>
                For US brands selling into Europe, holding inventory closer to EU
                customers may be worth assessing. Vareya fulfils orders from a warehouse
                in Breda, the Netherlands, shipping across Europe and to other
                international markets.
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
              US brands sometimes ship every European order individually from the
              United States. When European order volume grows, comparing that setup
              with fulfilment from a warehouse inside the EU can be worthwhile. Vareya
              operates a warehouse in Breda, the Netherlands, and fulfils orders from
              there across Europe and to other international markets.
            </p>
            <p>{CAPABILITIES.volume}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="decision">
        <div className="container-site max-w-4xl">
          <h2 id="decision" className="mb-5 text-2xl font-bold sm:text-3xl">
            Holding stock in the EU or shipping every order from the US
          </h2>
          <div className="space-y-4 leading-8 text-muted sm:text-lg">
            <p>
              The first question is which market you are really serving. If most of
              your orders go to European customers, holding stock inside the EU
              changes the operational picture: goods cross the EU border once as a
              consolidated inbound shipment, and customer orders are fulfilled from
              Breda. If European orders are occasional, shipping individually from
              the US may be the simpler setup.
            </p>
            <p>
              The table below compares the two setups. Whether a move to EU fulfilment
              fits your brand depends on your volumes, products and order profile.
              Product fit is confirmed during qualification.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">What to compare</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Holding stock in the EU</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Shipping every order from the US</th>
                </tr>
              </thead>
              <tbody>
                {DECISION_TABLE.map((row) => (
                  <tr key={row.aspect} className="border-t border-slate-100 align-top">
                    <td className="px-4 py-3 font-medium text-slate-900">{row.aspect}</td>
                    <td className="px-4 py-3 text-muted">{row.holdingInEU}</td>
                    <td className="px-4 py-3 text-muted">{row.shippingFromUS}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="corridor">
        <div className="container-site">
          <h2 id="corridor" className="mb-3 text-2xl font-bold sm:text-3xl">The US-EU corridor in one view</h2>
          <p className="mb-8 max-w-3xl leading-7 text-muted">
            From warehouse to customer, the work is shared. This table shows which part
            each party typically owns. Vareya&apos;s role covers receiving, storage,
            fulfilment and the agreed returns process.
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
            What to prepare before stock leaves the US
          </h2>
          <p className="mb-6 leading-7 text-muted">
            Most onboarding delays come from missing data and documents, not from the
            warehouse work itself. This checklist shows the information that is
            usually needed before the first inbound shipment:
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
              US exports are classified using Schedule B codes, based on the
              international Harmonized System. Depending on the product and shipment
              value, an Electronic Export Information filing through the Census
              Bureau&apos;s Automated Export System may be required before goods leave
              the US. Importing goods into the EU normally requires an import
              declaration, and duties and VAT may apply. An EORI number is needed for
              the party that deals with customs.
            </p>
            <p>
              The EU&apos;s €22 VAT exemption for low-value imports ended on 1 July
              2021. For goods with an intrinsic value up to €150 sent from outside the
              EU, the IOSS scheme can simplify VAT collection at checkout. Since 1 July
              2026, a temporary flat fee of €3 per tariff item applies to relevant
              low-value imports from outside the EU and is planned to apply until 1
              July 2028. Whether any of this applies to your setup depends on your
              products and where your customers are.
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
              "Carriers include DHL, PostNL, Asendia, FedEx and Royal Mail.",
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
                <li>✓ Brands that want orders fulfilled from the Netherlands for European customers.</li>
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
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Assess EU fulfilment for your US brand</h2>
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

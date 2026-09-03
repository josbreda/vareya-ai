import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/marketing/FAQ";
import {
  APPROVED_DESTINATIONS,
  CAPABILITIES,
  SPECIALIST_REQUIREMENTS_FALLBACK,
} from "@/content/facts";

export const metadata: Metadata = {
  title: "Shipping Ecommerce Orders from Europe to Australia & New Zealand | Vareya",
  description:
    "How ecommerce orders are shipped from a warehouse in the Netherlands to customers in Australia and New Zealand: order flow, carriers, customs, GST and biosecurity per destination, returns, and the Free Rate Scan.",
  alternates: {
    canonical: "https://vareya.ai/shipping-from-europe-to-australia-new-zealand/",
  },
  openGraph: {
    title: "Shipping Ecommerce Orders from Europe to Australia & New Zealand | Vareya",
    description:
      "How ecommerce orders are shipped from a warehouse in the Netherlands to customers in Australia and New Zealand: order flow, carriers, customs, GST and biosecurity per destination, returns, and the Free Rate Scan.",
    url: "https://vareya.ai/shipping-from-europe-to-australia-new-zealand/",
    type: "website",
    locale: "en_GB",
  },
};

const destinationList = APPROVED_DESTINATIONS.join(", ");

// The two directions of the corridor — different questions, different setups.
const DIRECTION_TABLE = [
  {
    aspect: "What the brand sells",
    toEUCustomers: "European customers, from a warehouse inside the EU.",
    toAUNZCustomers: "Customers in Australia and New Zealand, from a warehouse inside the EU.",
  },
  {
    aspect: "Where orders are fulfilled",
    toEUCustomers: "Orders are picked, packed and shipped from Breda, the Netherlands, and travel within the EU.",
    toAUNZCustomers: "Orders are picked, packed and shipped from Breda, the Netherlands, and cross the border into Australia or New Zealand.",
  },
  {
    aspect: "What happens at the border",
    toEUCustomers: "No border crossing for individual EU orders when stock is already in the EU.",
    toAUNZCustomers: "Each parcel is imported into Australia or New Zealand; GST, duty and biosecurity rules of the destination country may apply depending on value and classification.",
  },
  {
    aspect: "Where to start",
    toEUCustomers: "Compare holding stock in the EU with shipping every order from Australia or New Zealand — see the Australian and New Zealand brand pages.",
    toAUNZCustomers: "Confirm the destination rules for your products, then share your order profile and destination mix for an initial fit assessment.",
  },
];

const ORDER_FLOW = [
  {
    stage: "Receiving",
    body: "Stock arrives at the warehouse in Breda and is checked in against the agreed intake process.",
  },
  {
    stage: "Storage",
    body: "Stock is stored in the Breda warehouse until orders are placed.",
  },
  {
    stage: "Picking and packing",
    body: "Each order is picked and packed for the agreed shipping method.",
  },
  {
    stage: "Carrier hand-off",
    body: "The shipment is handed to the carrier network. Vareya's shipping system can automatically select an appropriate carrier for each shipment, based on destination and parcel characteristics.",
  },
  {
    stage: "Tracking",
    body: "Tracking information follows the carrier's service for the destination country.",
  },
  {
    stage: "Returns",
    body: "Returns handling is available. Contact Vareya to discuss the required returns process.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What does shipping ecommerce orders from Europe to Australia and New Zealand involve?",
    answer:
      "Orders are picked and packed at the warehouse in Breda, the Netherlands, handed to the carrier network and shipped to the destination country. Each parcel is imported into Australia or New Zealand, where the destination country's GST, duty and biosecurity rules may apply depending on value and classification.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Exact delivery timing depends on the agreed shipping method and is confirmed during qualification. It varies by destination, product and carrier.",
  },
  {
    question: "Which carriers ship to Australia and New Zealand?",
    answer: `Carriers include DHL, PostNL, Asendia, FedEx and Royal Mail. From Breda, Vareya ships to ${destinationList}.`,
  },
  {
    question: "Who handles customs clearance for orders going to Australia or New Zealand?",
    answer:
      "Customs processing is handled through the selected carrier. Customs clearance support is available for shipments into and out of Europe. Contact Vareya to discuss specific requirements.",
  },
  {
    question: "Do Australian or New Zealand shoppers pay import taxes?",
    answer:
      "Australia generally does not charge duty, GST or import charges at the border on most goods with a customs value up to AUD 1,000 (alcohol and tobacco excepted), but GST on the sale can apply at checkout under the ATO's low-value imported goods rules for non-resident sellers; above AUD 1,000 an import declaration is required. New Zealand generally does not charge duty or GST at the border on goods up to NZ$1,000, while 15% GST applies at checkout once an overseas seller's New Zealand turnover reaches NZ$60,000 in 12 months; above NZ$1,000 goods are charged at the border and a Customs Number is required. Confirm the current thresholds for your products with the official sources before shipping.",
  },
  {
    question: "Are cosmetics and supplements allowed into Australia and New Zealand?",
    answer:
      "Both countries apply biosecurity and product rules to imported goods, and the conditions depend on the product's ingredients and classification. New Zealand's Ministry for Primary Industries requires imported supplemented foods to be correctly labelled, safe and free of pests, with the importer responsible for compliance; products classed as biosecurity risk goods must meet the applicable import health standard. Australia's Department of Agriculture, Fisheries and Forestry applies its own conditions, checked per product through its BICON system. Confirm the requirements for your specific products before shipping.",
  },
  {
    question: "Is this the same as holding stock in Europe for European customers?",
    answer:
      "No. Selling to European customers is about holding stock in the EU instead of shipping every order from Australia or New Zealand. Shipping from Europe to Australia and New Zealand is the opposite stream: orders are fulfilled in Breda and sent to customers down under. Both setups can run side by side from the same warehouse.",
  },
  {
    question: "What order volume is needed?",
    answer: CAPABILITIES.volume,
  },
];

const INTERNAL_LINKS = [
  { href: "/", label: "Ecommerce fulfilment in Europe" },
  { href: "/eu-fulfilment/", label: "EU fulfilment from the Netherlands" },
  { href: "/european-fulfilment-for-australian-brands/", label: "EU fulfilment for Australian brands" },
  { href: "/european-fulfilment-for-new-zealand-brands/", label: "EU fulfilment for New Zealand brands" },
  { href: "/shopify-fulfilment-europe/", label: "Shopify fulfilment in Europe" },
  {
    href: "/cosmetics-supplements-fulfilment-europe/",
    label: "Cosmetics and supplements fulfilment",
  },
  { href: "/returns-fulfilment-europe/", label: "Returns handling in Europe" },
];

const OFFICIAL_SOURCES = [
  {
    label: "Import declarations — Australian Border Force",
    href: "https://www.abf.gov.au/importing-exporting-and-manufacturing/importing/how-to-import/import-declaration",
  },
  {
    label: "GST on low value imported goods — Australian Taxation Office",
    href: "https://www.ato.gov.au/businesses-and-organisations/international-tax-for-business/gst-for-non-resident-businesses/gst-on-low-value-imported-goods",
  },
  {
    label: "Bringing or mailing goods to Australia — Department of Agriculture, Fisheries and Forestry",
    href: "https://www.agriculture.gov.au/biosecurity-trade/travelling/bringing-mailing-goods",
  },
  {
    label: "Supplying low value imported goods — Inland Revenue New Zealand",
    href: "https://www.ird.govt.nz/gst/gst-for-overseas-businesses/gst-on-low-value-imported-goods",
  },
  {
    label: "Duty and GST — New Zealand Customs Service",
    href: "https://www.customs.govt.nz/sending-and-receiving/duty-and-gst",
  },
  {
    label: "Importing supplemented foods — Ministry for Primary Industries",
    href: "https://www.mpi.govt.nz/import/importing-food-and-beverages/supplemented-foods",
  },
  {
    label: "Import health standards — Ministry for Primary Industries",
    href: "https://www.mpi.govt.nz/import/importing-into-nz-how-it-works/import-health-standards",
  },
];

export default function ShippingToAuNzPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-site py-20 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/75">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <span aria-current="page">Shipping from Europe to Australia and New Zealand</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Shipping ecommerce orders from Europe to Australia and New Zealand
            </h1>
            <div className="mb-8 max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 sm:text-xl">
              <p>
                Vareya fulfils ecommerce orders from a warehouse in Breda, the Netherlands,
                and ships to international destinations including Australia and New
                Zealand. This page explains the order flow, what happens at the border and
                what to confirm before you ship down under.
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
              Orders for Australian and New Zealand customers are picked and packed in
              Breda, the Netherlands, handed to the carrier network and shipped to the
              destination country. Each parcel is imported into Australia or New Zealand,
              so the destination country&apos;s GST, duty and biosecurity rules may apply
              depending on value and classification. Customs processing is handled through
              the selected carrier.
            </p>
            <p>{CAPABILITIES.volume}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="directions">
        <div className="container-site max-w-4xl">
          <h2 id="directions" className="mb-5 text-2xl font-bold sm:text-3xl">
            Two directions, two different questions
          </h2>
          <div className="space-y-4 leading-8 text-muted sm:text-lg">
            <p>
              Brands often mix up two very different setups. One is selling to European
              customers while stock sits in Europe. The other is shipping orders from a
              European warehouse to customers in Australia and New Zealand. The table below
              shows what changes between the two.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">What to compare</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Selling to EU customers</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Shipping to AU/NZ customers</th>
                </tr>
              </thead>
              <tbody>
                {DIRECTION_TABLE.map((row) => (
                  <tr key={row.aspect} className="border-t border-slate-100 align-top">
                    <td className="px-4 py-3 font-medium text-slate-900">{row.aspect}</td>
                    <td className="px-4 py-3 text-muted">{row.toEUCustomers}</td>
                    <td className="px-4 py-3 text-muted">{row.toAUNZCustomers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="order-flow">
        <div className="container-site">
          <h2 id="order-flow" className="mb-3 text-2xl font-bold sm:text-3xl">The order flow in one view</h2>
          <p className="mb-8 max-w-3xl leading-7 text-muted">
            From stock arriving in Breda to the order reaching a customer in Australia or
            New Zealand, this is how the stages connect:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Stage</th>
                  <th scope="col" className="px-4 py-3 font-semibold">What happens</th>
                </tr>
              </thead>
              <tbody>
                {ORDER_FLOW.map((step) => (
                  <tr key={step.stage} className="border-t border-slate-100 align-top">
                    <td className="px-4 py-3 font-medium text-slate-900">{step.stage}</td>
                    <td className="px-4 py-3 text-muted">{step.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="destination-rules">
        <div className="container-site max-w-4xl">
          <h2 id="destination-rules" className="mb-4 text-2xl font-bold sm:text-3xl">
            Destination rules: Australia vs New Zealand
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p>
              Both countries apply GST, customs duty and biosecurity rules to imported
              parcels, but the details differ. Australia administers import rules through
              the Australian Border Force and the Australian Taxation Office, with
              biosecurity conditions from the Department of Agriculture, Fisheries and
              Forestry. New Zealand administers its rules through New Zealand Customs and
              Inland Revenue, with biosecurity conditions from the Ministry for Primary
              Industries.
            </p>
            <p>
              On the Australian side, goods with a customs value up to AUD 1,000 are
              generally not charged duty, GST or import charges at the border (alcohol and
              tobacco excepted), but GST on the sale can still apply at checkout under the
              ATO&apos;s low-value imported goods rules for non-resident sellers. Above
              AUD 1,000, an import declaration is required. On the New Zealand side, goods
              with a value up to NZ$1,000 are generally not charged duty or GST at the
              border, while under Inland Revenue rules GST of 15% applies at checkout when
              an overseas seller&apos;s taxable turnover from New Zealand sales reaches
              NZ$60,000 in a 12-month period. Above NZ$1,000, goods are charged at the
              border and a Customs Number is required.
            </p>
            <p>
              What a shopper ultimately pays, and whether a product is permitted, depends
              on the parcel&apos;s value, the product classification and the ingredients or
              materials involved. Vareya does not give tax or customs advice. Confirm the
              current thresholds and conditions for your products with the official
              sources linked below before shipping.
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

      <section className="bg-slate-50 py-16" aria-labelledby="capabilities">
        <div className="container-site">
          <h2 id="capabilities" className="mb-8 text-2xl font-bold">Capabilities</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              CAPABILITIES.shopify,
              CAPABILITIES.amazonFbm,
              CAPABILITIES.returns,
              "Carriers include DHL, PostNL, Asendia, FedEx and Royal Mail.",
              CAPABILITIES.carrierSelection,
              CAPABILITIES.cutOff,
              CAPABILITIES.customs,
            ].map((item) => (
              <p key={item} className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6 text-muted">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="fit">
        <div className="container-site max-w-4xl">
          <h2 id="fit" className="mb-5 text-2xl font-bold">Good fit / may not be a fit</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="mb-3 font-semibold text-slate-900">Typically a good fit</h3>
              <ul className="space-y-2 text-sm leading-6 text-muted">
                <li>✓ {CAPABILITIES.volume}</li>
                <li>✓ Vareya specialises in cosmetics, supplements, phone cases, accessories and other smaller parcel products.</li>
                <li>✓ Suitable smaller parcels have combined dimensions below 900 mm and a maximum length of 600 mm.</li>
                <li>✓ Brands whose products meet the destination country&apos;s import and biosecurity conditions.</li>
                <li>✓ Brands that combine EU sales with occasional AU/NZ orders from the same stock.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="mb-3 font-semibold text-slate-900">May not be a fit</h3>
              <ul className="space-y-2 text-sm leading-6 text-muted">
                <li>✗ Order volumes well below the 500-orders-per-month level.</li>
                <li>✗ Parcels that exceed the combined 900 mm / length 600 mm guideline.</li>
                <li>✗ Products that the destination country restricts — confirm your product&apos;s import conditions with the official sources before shipping.</li>
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
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Assess shipping to Australia and New Zealand</h2>
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

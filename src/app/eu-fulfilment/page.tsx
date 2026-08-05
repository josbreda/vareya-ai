import type { Metadata } from "next";
import Link from "next/link";
import { CapabilityStrip } from "@/components/marketing/CapabilityStrip";
import { CTABanner } from "@/components/marketing/CTABanner";
import { FAQ } from "@/components/marketing/FAQ";
import { ProcessSection } from "@/components/marketing/ProcessSection";
import { APPROVED_HEADLINES, APPROVED_VALUE_PROPS } from "@/content/claims";
import { CAPABILITIES, COMPANY, WAREHOUSE } from "@/content/facts";
import { PAGE_META } from "@/content/pages";

const pageMeta = PAGE_META["/eu-fulfilment/"];

export const metadata: Metadata = {
  title: { absolute: pageMeta.title },
  description: pageMeta.description,
  alternates: { canonical: pageMeta.canonical },
};

const VALUE_CARDS = [
  {
    title: "A Netherlands fulfilment base",
    body: `Position inventory at ${WAREHOUSE.label} in ${COMPANY.city}, ${COMPANY.country}, and run European order fulfilment from one operating location.`,
  },
  APPROVED_VALUE_PROPS[1],
  APPROVED_VALUE_PROPS[0],
  APPROVED_VALUE_PROPS[2],
];

const EU_FAQ = [
  {
    question: "Where is Vareya based?",
    answer: `${COMPANY.legalName} operates from ${WAREHOUSE.street}, ${WAREHOUSE.postcode} ${WAREHOUSE.city}, ${WAREHOUSE.country}. Inventory is received, stored, picked and packed at our Breda fulfilment centre.`,
  },
  {
    question: "Which carriers can deliver European orders?",
    answer: `Vareya works with ${CAPABILITIES.carriers.slice(0, -1).join(", ")} and ${CAPABILITIES.carriers[CAPABILITIES.carriers.length - 1]}. The appropriate carrier mix is reviewed against your destinations, parcel profile and service requirements.`,
  },
  {
    question: "What transit times can customers expect?",
    answer:
      "Transit expectations vary by destination, carrier and selected service. During qualification, we review your main European markets and the available carrier options rather than presenting one delivery time for every country.",
  },
  {
    question: "Why use a fulfilment location in the Netherlands?",
    answer:
      "A Breda stock position gives a European e-commerce brand one place for inventory, connected order fulfilment and returns. Vareya then uses its available carrier network to serve customers across Europe.",
  },
  {
    question: "Can Vareya connect to Shopify and handle returns?",
    answer: `${CAPABILITIES.shopify}. Orders flow directly from the store to the warehouse. ${CAPABILITIES.returns}, with returned products inspected, restocked where appropriate and reflected in inventory.`,
  },
  {
    question: "Is there a minimum monthly order volume?",
    answer: `Vareya is generally best suited to brands shipping ${CAPABILITIES.minMonthlyOrders} or more orders per month. Product and operational fit are confirmed during qualification.`,
  },
];

export default function EUFulfilmentPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-site py-16 sm:py-24 lg:py-28">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/75">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">EU fulfilment</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/75">
              Fulfilment from Breda, the Netherlands
            </p>
            <h1 className="mb-6 text-[clamp(2.25rem,6vw,4rem)] font-bold tracking-tight">
              EU-wide fulfilment from the Netherlands
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              A practical European fulfilment operation for growing e-commerce brands, with connected orders,
              multi-carrier delivery and returns handled from Breda.
            </p>
            <Link
              href="/fulfilment-scan/"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accent-light"
            >
              {APPROVED_HEADLINES.scan}
            </Link>
          </div>
        </div>
      </section>

      <CapabilityStrip />

      <section className="py-16 sm:py-20" aria-labelledby="eu-introduction">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.7fr)] lg:items-start">
          <div className="max-w-3xl">
            <h2 id="eu-introduction" className="mb-6 text-slate-900">
              One fulfilment operation for European orders
            </h2>
            <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
              <p>
                European growth creates an operational question: where should inventory sit, how should online
                orders reach the warehouse, and where should customer returns go? Vareya brings those activities
                together at its fulfilment centre in {COMPANY.city}.
              </p>
              <p>
                Shopify orders can flow directly to the fulfilment operation, removing the need to build a manual
                order hand-off. For delivery, Vareya works with {CAPABILITIES.carriers.join(", ")}. The service mix
                can be matched to the destinations and parcel profile discussed during qualification.
              </p>
              <p>
                Returns handling is available as part of the fulfilment service. Returned products come back to
                Breda for inspection, restocking where appropriate and an inventory update, keeping the forward
                and reverse flow in the same operation.
              </p>
            </div>
          </div>
          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6" aria-label="Vareya location summary">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Fulfilment centre</p>
            <p className="text-xl font-bold text-slate-900">{WAREHOUSE.label}</p>
            <address className="mt-4 not-italic leading-7 text-muted">
              {WAREHOUSE.street}
              <br />
              {WAREHOUSE.postcode} {WAREHOUSE.city}
              <br />
              {WAREHOUSE.country}
            </address>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="eu-benefits">
        <div className="container-site">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Core capabilities</p>
            <h2 id="eu-benefits" className="mb-4 text-slate-900">
              Build a clearer European fulfilment workflow
            </h2>
            <p className="leading-7 text-muted">
              Start with the stock position, store connection, delivery requirements and returns process your brand
              actually needs. Qualification confirms whether the full operating profile fits Vareya.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_CARDS.map((card) => (
              <article key={card.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="text-sm leading-7 text-muted">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="eu-planning">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Plan around your order profile</p>
            <h2 id="eu-planning" className="mb-5 text-slate-900">
              The right carrier and process depend on the detail
            </h2>
            <p className="leading-8 text-muted sm:text-lg">
              A useful fulfilment review looks beyond a country list. Vareya considers your monthly orders,
              platform, destinations, returns requirements and product dimensions before confirming fit.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-xl border border-slate-200 p-6">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">Destination mix</h3>
              <p className="text-sm leading-7 text-muted">
                Share the European markets your customers order from so carrier options can be reviewed against
                the actual delivery profile.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 p-6">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">Product and parcel fit</h3>
              <p className="text-sm leading-7 text-muted">
                Vareya specialises in smaller parcel products. Suitable parcels have combined dimensions below{" "}
                {CAPABILITIES.parcelLimits.combinedDimensionsMm} mm and a maximum length of{" "}
                {CAPABILITIES.parcelLimits.maxLengthMm} mm.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 p-6">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">Returns decisions</h3>
              <p className="text-sm leading-7 text-muted">
                Define what should happen when a product comes back. Vareya can receive, inspect and restock returns
                as part of the standard fulfilment flow.
              </p>
            </article>
          </div>
        </div>
      </section>

      <ProcessSection />

      <FAQ
        items={EU_FAQ}
        heading="EU fulfilment questions"
        subheading="Practical answers about running European order fulfilment from Breda."
      />

      <CTABanner
        title="Is Vareya a fit for your European order profile?"
        subtitle="Use the fulfilment scan to share your platform, monthly orders, markets and current set-up."
        primaryLabel="Check your EU fulfilment fit"
      />
    </>
  );
}

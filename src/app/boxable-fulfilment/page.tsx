import { P1Foundation } from "@/components/boxable/P1Foundation";
import { localizePageMetadata } from "@/i18n/localize-metadata";
import { localizeNode } from "@/i18n/localize-node";
import { getT as getTForContent } from "@/i18n/server";
import type { Metadata } from "next";



import Link from "@/i18n/Link";

import { BoxableRelatedLinks } from "@/components/boxable/BoxableRelatedLinks";
import { CTABanner } from "@/components/marketing/CTABanner";
import { FAQ } from "@/components/marketing/FAQ";
import {
  APPROVED_FACTS,
  CLAIM_BOXABLE_PROFILE_A,
  CLAIM_BOXABLE_PROFILE_B,
  CLAIM_BOXABLE_ACCEPTANCE,
  CLAIM_ALL_IN,
  CLAIM_CUSTOMS,
  CLAIM_CUTOFF,
  CLAIM_PRIMARY_CTA,
  CLAIM_POST_SUBMISSION,
  CLAIM_RETURNS,
  CLAIM_SLAS,
  CLAIM_SUPPORT,
  CLAIM_VOLUME,
  CLAIM_WEEKEND,
} from "@/content/claims";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

const sourceMetadata: Metadata = buildMetadata("/boxable-fulfilment/");
export async function generateMetadata(): Promise<Metadata> { return localizePageMetadata(sourceMetadata, "/boxable-fulfilment/"); }

/**
 * Boxable Fulfilment — working definition, October 2026.
 *
 * The page describes the existing Breda operation through Vareya's Boxable
 * lens. It does not create a separate brand, warehouse or certified category.
 * The compact category profile stays under review and is never presented as a
 * published service limit.
 */
const FULFILMENT_DEFINITION =
  "Boxable Fulfilment is Vareya's approach to managing stock, packing and shipping for small, lightweight ecommerce products. It assesses the complete packed order and the routes it needs, rather than product size alone.";

const COVERAGE = [
  {
    title: "Stock intake and storage",
    body: "Stock arrives in Breda and is stored for the agreed product range. Storage requirements and any special handling are confirmed before stock moves.",
  },
  {
    title: "Pick and pack",
    body: "Orders are picked and packed using the agreed packaging and protection. Bundles, inserts and presentation requirements are part of the packing brief.",
  },
  {
    title: "Shipping through the carrier network",
    body: APPROVED_FACTS.carriers + " The service for each order is selected within the agreed setup.",
  },
  {
    title: "Returns, by agreement",
    body: CLAIM_RETURNS,
  },
  {
    title: "Shopify and warehouse systems",
    body: "Shopify integration is available. Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify.",
  },
  {
    title: "Support and service scope",
    body: CLAIM_SUPPORT + " " + CLAIM_SLAS,
  },
];

const FIT_POINTS = [
  "Your products are small, light and suitable for compact packaging.",
  "Your European order mix is the main reason for holding stock in the EU.",
  "You sell through Shopify, Amazon FBM or another agreed sales channel.",
  "You want one operation for storage, pick and pack, shipping and an agreed return flow.",
  "You can share packed dimensions and weights rather than product-page estimates.",
];

const PRODUCT_REVIEWS = [
  "Liquids, creams, aerosols and other cosmetic formats.",
  "Supplements, food-adjacent products and items with shelf-life requirements.",
  "Products containing batteries, including built-in batteries.",
  "Fragile, sharp, hygiene-sensitive or high-value goods.",
  "Products with regulatory, labelling or customs documentation requirements.",
];

const SCOPE_ROWS = [
  {
    question: "Which products are the focus?",
    boxable:
      "Compact, small and lightweight products, assessed as a complete packed order rather than by category name.",
    same: "The same warehouse in Breda and the same carrier network.",
  },
  {
    question: "How is fit decided?",
    boxable:
      "Packed dimensions, packed weight, protection, handling requirements, order mix and destination are reviewed together.",
    same: "Product fit is confirmed during qualification, as with any Vareya setup.",
  },
  {
    question: "What is promised?",
    boxable:
      "A reviewed setup within an agreed scope, with limits stated plainly. No universal size or weight promise.",
    same: "Services and rates are agreed in a quotation for the operation.",
  },
  {
    question: "What about larger products?",
    boxable:
      "A product outside the compact working profile can still fit a wider Vareya setup. That is assessed separately.",
    same: "No automatic refusal follows from a category label or a size check alone.",
  },
];

const START_STEPS = [
  {
    title: "Share your order profile",
    body: "Use the free scan to share your product category, order volume, markets, platform and service needs. Packed dimensions and weights are requested during follow-up, before product fit or a quote is confirmed.",
  },
  {
    title: "Receive an initial fit response",
    body: CLAIM_POST_SUBMISSION,
  },
  {
    title: "Agree the scope",
    body: "Services, rates and any special handling are set out in a quotation. Product fit is confirmed during qualification.",
  },
  {
    title: "Onboard and go live",
    body: "Connect your sales channel, agree stock intake, run test orders and start shipping from Breda.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is Boxable Fulfilment?",
    answer:
      FULFILMENT_DEFINITION +
      " It is a way of describing and assessing the operation, not a separate company or a certified category.",
  },
  {
    question: "Is Boxable Fulfilment a separate service or warehouse?",
    answer:
      "It is the name for Vareya's approach within its existing fulfilment operation in Breda, the Netherlands. It is not a separate warehouse, a second brand or a distinct legal entity.",
  },
  {
    question: "What products qualify for Boxable Fulfilment?",
    answer:
      "Small and lightweight products may be candidates, but the category alone does not confirm acceptance. The complete packed order — items, protection, packed dimensions, packed weight, handling requirements and destination — is assessed. Product fit is confirmed during qualification, and letterbox eligibility is a separate check.",
  },
  {
    question: "What order volume fits Vareya?",
    answer:
      CLAIM_VOLUME +
      " This is a suitability indication, not a hard minimum order requirement. Fit is assessed against your actual European order mix during qualification.",
  },
  {
    question: "Is Boxable Fulfilment the same as small parcel fulfilment?",
    answer:
      "They overlap, but they are not interchangeable. Small parcel fulfilment describes a service profile. Boxable Fulfilment is Vareya's working approach to assessing and running that profile, including the packed-order checks and the agreed scope around it.",
  },
  {
    question: "Does Boxable Fulfilment include shipping and returns?",
    answer:
      "Shipping through the carrier network is part of the agreed operation. " +
      CLAIM_RETURNS +
      " The shipping assessment itself is explained on the Boxable Shipping page.",
  },
  {
    question: "Can we keep selling on Shopify?",
    answer:
      "Yes, Shopify integration is available. Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify. The exact connection and order flow are agreed during onboarding.",
  },
];

export default async function BoxableFulfilmentPage() {
  const __pageT = await getTForContent();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://vareya.ai/" },
    { name: "Boxable Fulfilment", url: "https://vareya.ai/boxable-fulfilment/" },
  ]);

  return localizeNode((
    <>
      <script
        type="application/ld+json"
        data-schema="breadcrumb"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <section className="photo-green bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-site py-20 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/75">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span aria-hidden="true" className="px-2">
              /
            </span>
            <span aria-current="page">Boxable Fulfilment</span>
          </nav>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
              Vareya&rsquo;s working definition &middot; October 2026
            </p>
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Boxable Fulfilment for small and lightweight ecommerce products
            </h1>
            <p className="mb-4 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Vareya stores, picks, packs and ships orders from Breda, the Netherlands. Boxable
              Fulfilment is how we describe that operation when the product range is compact: the
              packed product, the order mix and the shipping route are reviewed together.
            </p>
            <p className="mb-8 max-w-3xl leading-relaxed text-white/75">
              It is a narrower, clearer promise than &ldquo;we fulfil everything&rdquo;. It is not
              a separate warehouse, a new company or a certified industry category.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/free-rate-scan/?lang=en"
                className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-primary hover:bg-slate-100"
              >
                {CLAIM_PRIMARY_CTA}
              </Link>
              <Link
                href="/request-fulfilment-quote/?lang=en"
                className="rounded-lg border border-white/30 px-6 py-3 text-center font-medium hover:bg-white/10"
              >
                Request a fulfilment quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      <figure className="container-site py-8">
        {/* eslint-disable-next-line @next/next/no-img-element -- original supplied warehouse photograph */}
        <img src="/images/p1/goods-receiving.jpg" alt="Goods receiving at VareYa" width={1280} height={719} loading="lazy" decoding="async" className="h-auto max-h-96 w-full rounded-2xl object-contain" />
      </figure>

      <section className="border-b border-slate-200 bg-slate-50 py-12" aria-labelledby="definition">
        <div className="container-site max-w-4xl">
          <h2 id="definition" className="mb-4 text-2xl font-bold text-ink">
            What is Boxable Fulfilment?
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p className="rounded-xl border border-slate-200 bg-white p-5 font-medium text-ink">
              {FULFILMENT_DEFINITION}
            </p>
            <p>
              The approach brings three questions together: does the complete packed order fit the
              operation, can it be stored and handled under the agreed conditions, and can it travel
              on the routes the brand needs? Answering only the first question is not enough. A
              compact parcel can still raise a product, documentation or destination issue.
            </p>
            <p>{CLAIM_VOLUME}</p>
            <p>
              This is Vareya&rsquo;s working definition, dated October 2026. It is not a carrier
              rule, an industry standard or a registered category, and it does not create a
              universal size or weight limit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="coverage">
        <div className="container-site max-w-4xl">
          <h2 id="coverage" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            What the operation covers
          </h2>
          <p className="mb-8 max-w-3xl leading-7 text-muted">
            Boxable Fulfilment describes the existing Vareya operation. The services below are
            agreed per customer; the page does not promise a service that has not been scoped.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {COVERAGE.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="mb-2 font-semibold text-ink">{item.title}</h3>
                <p className="text-sm leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-muted">{CLAIM_CUSTOMS}</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            {CLAIM_CUTOFF} {CLAIM_WEEKEND}
          </p>
          <p className="mt-2 text-sm leading-6 text-muted">{CLAIM_ALL_IN}</p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="fit">
        <div className="container-site max-w-4xl">
          <h2 id="fit" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            Who Boxable Fulfilment suits
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p>
              {CLAIM_VOLUME} Fit is about the order profile, not only the product category. Brands
              with a compact range, a clear European order mix and a sales channel that can connect
              to the warehouse are the starting point.
            </p>
            <p>
              Vareya works with brands selling via Shopify or Amazon FBM, in cosmetics, supplements,
              phone cases, accessories and other smaller parcel products. Suitable smaller parcels
              have combined dimensions ≤900 mm and a longest side ≤600 mm. Product fit is
              confirmed during qualification.
            </p>
            <p>
              Boxable is a focus, not an exclusive filter. A product outside the compact working
              profile may still fit a wider Vareya setup; that is assessed separately rather than
              refused by a category rule.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {FIT_POINTS.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="products">
        <div className="container-site max-w-4xl">
          <h2 id="products" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            What products qualify?
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p>
              Small and lightweight products may be candidates, but a category name does not confirm
              acceptance. We look at the complete packed order: every item, its protection, inserts,
              packed dimensions, packed weight, handling requirements and destination. Product fit is
              confirmed during qualification.
            </p>
            <p>
              Some product groups need a closer review before a setup can be described. That is not a
              refusal; it is a recognition that &ldquo;small&rdquo; does not mean
              &ldquo;simple&rdquo;.
            </p>
          </div>
          <ul className="mt-6 space-y-2 text-sm leading-6 text-muted">
            {PRODUCT_REVIEWS.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-7 text-muted">
            Boxable does not automatically mean letterbox-ready. A letterbox service has its own
            conditions for the complete packed order and the destination; that is a separate check.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="method">
        <div className="container-site max-w-4xl">
          <h2 id="method" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            How the Boxable approach is structured
          </h2>
          <p className="mb-6 leading-7 text-muted">
            The operation and the assessment are connected, but they are not the same thing. The
            assessment has three layers:
          </p>
          <ol className="space-y-4">
            <li className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="mb-1 font-semibold text-ink">1. Packed-product check</h3>
              <p className="text-sm leading-6 text-muted">
                {CLAIM_BOXABLE_PROFILE_A} {CLAIM_BOXABLE_PROFILE_B} {CLAIM_BOXABLE_ACCEPTANCE}
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="mb-1 font-semibold text-ink">2. Acceptance gates</h3>
              <p className="text-sm leading-6 text-muted">
                Product and storage requirements, packaging, carrier and destination acceptance,
                and commercial capacity are checked in order. A failed gate is not offset by a
                favourable size or weight.
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="mb-1 font-semibold text-ink">3. Efficiency factors and evidence</h3>
              <p className="text-sm leading-6 text-muted">
                Ten factors describe how straightforward the accepted setup is, and each factor
                carries an evidence status. The method is explained on the{" "}
                <Link
                  href="/boxable-product-framework/"
                  className="font-semibold text-primary hover:underline"
                >
                  Boxable Product Framework
                </Link>{" "}
                page.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="shipping">
        <div className="container-site max-w-4xl">
          <h2 id="shipping" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            Boxable Fulfilment and Boxable Shipping
          </h2>
          <p className="mb-4 leading-7 text-muted">
            Fulfilment covers the operation: stock intake, storage, picking, packing and the agreed
            return flow. Shipping covers the carrier decision for a packed order. Boxable Shipping
            is part of Boxable Fulfilment, not a second service sold alongside it.
          </p>
          <p className="leading-7 text-muted">
            Read{" "}
            <Link
              href="/boxable-shipping/"
              className="font-semibold text-primary hover:underline"
            >
              Boxable Shipping
            </Link>{" "}
            for the packed-order and service-fit questions, and{" "}
            <Link
              href="/cherry-picking-shipping/"
              className="font-semibold text-primary hover:underline"
            >
              Cherry Picking Shipping
            </Link>{" "}
            for how the carrier is selected order by order.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="differences">
        <div className="container-site max-w-5xl">
          <h2 id="differences" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            How it differs from general parcel fulfilment
          </h2>
          <p className="mb-6 max-w-3xl leading-7 text-muted">
            Boxable is a narrower promise, not a claim that other fulfilment providers cannot handle
            small products. The difference is in where the assessment starts and what is stated
            plainly.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Boxable Fulfilment compared with a general parcel fulfilment scope
              </caption>
              <thead>
                <tr className="border-b border-slate-300">
                  <th scope="col" className="py-3 pr-4 font-semibold text-ink">
                    Question
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold text-ink">
                    Boxable Fulfilment focus
                  </th>
                  <th scope="col" className="py-3 font-semibold text-ink">
                    What stays the same
                  </th>
                </tr>
              </thead>
              <tbody>
                {SCOPE_ROWS.map((row) => (
                  <tr key={row.question} className="border-b border-slate-200 align-top">
                    <th scope="row" className="py-4 pr-4 font-semibold text-ink">
                      {row.question}
                    </th>
                    <td className="py-4 pr-4 leading-6 text-muted">{row.boxable}</td>
                    <td className="py-4 leading-6 text-muted">{row.same}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="start">
        <div className="container-site">
          <h2 id="start" className="mb-10 text-2xl font-bold text-ink sm:text-3xl">
            How to start
          </h2>
          <div className="grid gap-5 md:grid-cols-4">
            {START_STEPS.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="mb-3 text-sm font-semibold text-primary">Step {index + 1}</p>
                <h3 className="mb-2 font-semibold text-ink">{step.title}</h3>
                <p className="text-sm leading-6 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="limits">
        <div className="container-site max-w-4xl">
          <h2 id="limits" className="mb-5 text-2xl font-bold text-ink">
            What we will not promise
          </h2>
          <ul className="space-y-3 leading-7 text-muted">
            <li>We will not present Boxable as a separate brand, warehouse or certified category.</li>
            <li>
              We will not publish a universal size or weight limit as a service promise or carrier
              rule.
            </li>
            <li>
              We will not promise savings, delivery times or a specific outcome for every order.
            </li>
            <li>
              We will not confirm product fit before the complete packed order and its handling
              requirements have been reviewed.
            </li>
            <li>
              We will not claim that other fulfilment providers are unable to handle small
              products.
            </li>
            <li>
              We will not use customer names, logos or results to support this page.
            </li>
          </ul>
        </div>
      </section>

      <FAQ
        items={FAQ_ITEMS}
        subheading="What brands ask about Vareya's Boxable Fulfilment approach."
      />

      <P1Foundation topic="F01" />

      <BoxableRelatedLinks current="fulfilment" />

      <CTABanner
        title="Check whether your operation fits Boxable Fulfilment"
        subtitle={CLAIM_POST_SUBMISSION}
        primaryHref="/product-fit-check/"
        primaryLabel="Check Your Product Fit"
        secondaryHref="/request-fulfilment-quote/?lang=en"
        secondaryLabel="Request a fulfilment quote"
      />
    </>
  ), __pageT);
}

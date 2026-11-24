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
  CLAIM_CARRIER_SELECTION,
  CLAIM_CUSTOMS,
  CLAIM_POST_SUBMISSION,
  CLAIM_PRIMARY_CTA,
} from "@/content/claims";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

const sourceMetadata: Metadata = buildMetadata("/boxable-shipping/");
export async function generateMetadata(): Promise<Metadata> { return localizePageMetadata(sourceMetadata, "/boxable-shipping/"); }

/**
 * Boxable Shipping — working definition, October 2026.
 *
 * Claim boundaries (claims-register addendum 27 October 2026; taxonomy 4 November 2026):
 * - Boxable is Vareya's own working term, not a carrier rule, industry
 *   category or registered standard;
 * - approved packed-order Profiles A/B are classification boundaries,
 *   not universal carrier or service guarantees;
 * - shipping is described as part of an agreed fulfilment operation, never
 *   as a standalone shipping-only product;
 * - carrier wording comes from the approved constants.
 */
const SHIPPING_DEFINITION =
  "Boxable Shipping is the shipping part of Vareya's Boxable approach: matching a complete packed order to an accepted carrier service for its destination, weight, dimensions and handling needs.";

const PACKED_ORDER_CHECKS = [
  "Every product and quantity in the basket, including inserts and samples.",
  "The closed, ready-to-ship dimensions, including protection and any bulge.",
  "The packed weight, including packaging, filler and the shipping label.",
  "Any handling requirement: fragile, liquid, battery, hygiene, temperature or high value.",
  "The destination countries that make up most of your European orders.",
  "The delivery requirements your customers expect, such as tracking or a signature.",
];

const QUALIFICATION_FACTORS = [
  "The complete packed order, not an unpacked product.",
  "The protection and presentation the product needs.",
  "Product restrictions or documentation the route requires.",
  "The destination and the service conditions for that lane.",
  "The order mix, including bundles and multi-item baskets.",
  "The volume and commercial scope agreed with Vareya.",
];

const SCOPE_ROWS = [
  {
    term: "Boxable Fulfilment",
    answers:
      "The wider operation: stock intake, storage, pick and pack, shipping and the agreed return flow.",
    doesNot:
      "Does not by itself confirm a carrier service, a delivery promise or a price.",
  },
  {
    term: "Boxable Shipping",
    answers:
      "Which accepted carrier service fits this complete packed order, on this route, under the agreed conditions.",
    doesNot:
      "Does not replace product, packaging or carrier acceptance checks, and is not a carrier tier.",
  },
  {
    term: "Letterbox delivery",
    answers:
      "Whether the complete parcel can use a letterbox service on a named lane, under that service's current rules.",
    doesNot:
      "Is not implied by a mailer, a small product or Boxable fit. Letterbox eligibility is a separate check.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is Boxable Shipping?",
    answer:
      SHIPPING_DEFINITION +
      " It is not the same as complete fulfilment: fulfilment also covers receiving stock, storage, picking and packing.",
  },
  {
    question: "What products qualify for Boxable Shipping?",
    answer:
      "Small and lightweight products may be candidates, but the product category alone does not establish eligibility. We assess the complete packed order — every item, protection, inserts, packed dimensions, packed weight, handling requirements and destination — against the intended service. Product fit is confirmed during qualification. Boxable does not automatically mean letterbox-ready.",
  },
  {
    question: "Is Boxable Shipping the same as letterbox shipping?",
    answer:
      "No. Letterbox eligibility depends on the complete packed order and the rules of the chosen service in that destination. A mailer is packaging; it does not make a parcel letterbox-eligible. Do not assume that one set of letterbox limits applies across Europe.",
  },
  {
    question: "Does smaller packaging always cost less?",
    answer:
      "No. Compare the full shipment and the agreed service on the same basis: packaging, handling, shipping charges and relevant extras. Check that the smaller pack still protects the product and meets the service requirements. A smaller parcel is not proof of a lower total cost.",
  },
  {
    question: "Can I use Boxable Shipping without Vareya fulfilment?",
    answer:
      "Boxable Shipping describes the shipping part of an agreed Vareya fulfilment operation. It is not a standalone shipping-only service, and it is not a label shop or a consumer postage service.",
  },
  {
    question: "Does Boxable Shipping guarantee carrier acceptance?",
    answer:
      "No. Acceptance depends on the product, the complete packed parcel, the service and the destination. Vareya checks those conditions during qualification; a size fit on its own is not an approval.",
  },
  {
    question: "How is Boxable Shipping different from Cherry Picking Shipping?",
    answer:
      "Cherry Picking Shipping is Vareya's existing multi-carrier selection mechanism. Boxable Shipping explains the wider question around it: how a complete packed order is assessed for shipping in the first place. The per-order selection detail is on the Cherry Picking Shipping page.",
  },
  {
    question: "Is Boxable Shipping just another name for small parcel fulfilment?",
    answer:
      "No. Small parcel fulfilment describes a service profile. Boxable Shipping describes the shipping part of Vareya's Boxable approach, including the packed-order checks around it. The terms overlap in everyday use, but they are not interchangeable.",
  },
];

export default async function BoxableShippingPage() {
  const __pageT = await getTForContent();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://vareya.ai/" },
    { name: "Boxable Fulfilment", url: "https://vareya.ai/boxable-fulfilment/" },
    { name: "Boxable Shipping", url: "https://vareya.ai/boxable-shipping/" },
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
            <Link href="/boxable-fulfilment/" className="hover:text-white">
              Boxable Fulfilment
            </Link>
            <span aria-hidden="true" className="px-2">
              /
            </span>
            <span aria-current="page">Boxable Shipping</span>
          </nav>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
              Vareya&rsquo;s working definition &middot; October 2026
            </p>
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Boxable Shipping for small and lightweight ecommerce products
            </h1>
            <p className="mb-4 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Shipping starts with the parcel that actually leaves the warehouse, not the product
              photo on a product page. Boxable Shipping is how Vareya assesses that complete packed
              order and matches it to an accepted service for its destination.
            </p>
            <p className="mb-8 max-w-3xl leading-relaxed text-white/75">
              It is part of an agreed fulfilment operation. It is not a standalone shipping-only
              service, a carrier tier or a promise that every small parcel travels the same way.
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
        <img src="/images/p1/carrier-cages.jpg" alt="Carrier cages at VareYa" width={1280} height={719} loading="lazy" decoding="async" className="h-auto max-h-96 w-full rounded-2xl object-contain" />
      </figure>

      <section className="border-b border-slate-200 bg-slate-50 py-12" aria-labelledby="definition">
        <div className="container-site max-w-4xl">
          <h2 id="definition" className="mb-4 text-2xl font-bold text-ink">
            What is Boxable Shipping?
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p className="rounded-xl border border-slate-200 bg-white p-5 font-medium text-ink">
              {SHIPPING_DEFINITION}
            </p>
            <p>
              Complete fulfilment also covers receiving stock, storage, picking and packing.
              Shipping is the part that connects the packed order with the delivery service. That
              distinction matters when a product is small enough to store easily but not
              straightforward to send: the warehouse question and the carrier question are
              different questions.
            </p>
            <p>
              This is Vareya&rsquo;s working definition, dated October 2026. It describes how we
              assess shipping. It is not a carrier rule, an industry category or a registered
              standard, and it does not create a universal size or weight limit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="qualify">
        <div className="container-site max-w-4xl">
          <h2 id="qualify" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            What products qualify for Boxable Shipping?
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p>
              Small and lightweight products may be candidates, but the product category alone does
              not establish eligibility. A serum, a supplement bottle and a phone case can all be
              compact and still raise completely different handling, documentation and route
              questions.
            </p>
            <p>
              We assess the complete packed order: every item in the basket, the protection and
              inserts around it, the final packed dimensions and weight, the handling requirements
              and the destination. Product fit is confirmed during qualification. Boxable does not
              automatically mean letterbox-ready, and a category label such as &ldquo;beauty&rdquo;
              or &ldquo;accessories&rdquo; is a starting point rather than an approval.
            </p>
            <p>
              A small product is not automatically a simple one. Liquids, aerosols, batteries,
              supplements, fragile items, hygiene-sensitive goods and high-value products can carry
              requirements that a size check does not answer. Those requirements are reviewed
              against the product and the route, not inferred from the category.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-4 font-semibold text-ink">What the assessment looks at</h3>
            <ul className="space-y-2 text-sm leading-6 text-muted">
              {QUALIFICATION_FACTORS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="packed-order">
        <div className="container-site max-w-4xl">
          <h2 id="packed-order" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            Start with the packed order
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p>
              A small item can become a larger parcel once it is protected or combined with other
              items. A lightweight product can still take up considerable space. Record the final
              dimensions and weight rather than relying on the product information in your store.
            </p>
            <p>
              Measure the closed, ready-to-ship parcel, including protection and any bulge. Weigh
              the parcel with packaging, filler and label included. For bundles and multi-item
              orders, measure a representative packed bundle instead of multiplying a single item.
              Use the same method each time so the results can be compared.
            </p>
          </div>

          <h3 className="mt-8 mb-3 font-semibold text-ink">Prepare these details</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {PACKED_ORDER_CHECKS.map((item) => (
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

      <section className="py-16 sm:py-20" aria-labelledby="service">
        <div className="container-site max-w-4xl">
          <h2 id="service" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            Match the parcel to a suitable service
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p>
              Carrier services have their own conditions for size, weight, contents and
              destination. Eligibility is confirmed against the service and lane you intend to use,
              not against a general &ldquo;small parcel&rdquo; label. {CLAIM_CARRIER_SELECTION}
            </p>
            <p className="rounded-xl border-l-4 border-primary bg-slate-50 p-5 text-ink">
              &ldquo;For every order that leaves our warehouse, the system compares the available
              shipping methods and selects a suitable option based on destination, package
              dimensions, weight, delivery speed and shipping cost.&rdquo;
            </p>
            <p>
              {APPROVED_FACTS.carriers} The selection mechanism is explained on{" "}
              <Link
                href="/cherry-picking-shipping/"
                className="font-semibold text-primary hover:underline"
              >
                Cherry Picking Shipping
              </Link>
              . Boxable Shipping is the wider explanation around it: what has to be true about the
              packed order before that comparison is meaningful.
            </p>
            <p>
              A low shipping rate is not automatically the right choice, and neither is the
              quickest service. What decides is the fit between the shipment and the service that
              carries it — including whether the destination has the right conditions.{" "}
              {CLAIM_CUSTOMS}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="differences">
        <div className="container-site max-w-5xl">
          <h2 id="differences" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            Boxable Shipping, Boxable Fulfilment and letterbox delivery
          </h2>
          <p className="mb-6 max-w-3xl leading-7 text-muted">
            The three terms answer different questions. Keeping them apart prevents a packaging
            choice from being mistaken for a service promise.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">
                What each Boxable term answers and what it does not prove
              </caption>
              <thead>
                <tr className="border-b border-slate-300">
                  <th scope="col" className="py-3 pr-4 font-semibold text-ink">
                    Term
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold text-ink">
                    What it answers
                  </th>
                  <th scope="col" className="py-3 font-semibold text-ink">
                    What it does not prove
                  </th>
                </tr>
              </thead>
              <tbody>
                {SCOPE_ROWS.map((row) => (
                  <tr key={row.term} className="border-b border-slate-200 align-top">
                    <th scope="row" className="py-4 pr-4 font-semibold text-ink">
                      {row.term}
                    </th>
                    <td className="py-4 pr-4 leading-6 text-muted">{row.answers}</td>
                    <td className="py-4 leading-6 text-muted">{row.doesNot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="limits">
        <div className="container-site max-w-4xl">
          <h2 id="limits" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            What we will not promise
          </h2>
          <ul className="space-y-3 leading-7 text-muted">
            <li>
              We will not treat a category label as proof that a product qualifies for a shipping
              setup.
            </li>
            <li>
              We will not publish a universal size or weight limit as a carrier rule.{" "}
              {CLAIM_BOXABLE_PROFILE_A} {CLAIM_BOXABLE_PROFILE_B} {CLAIM_BOXABLE_ACCEPTANCE}
            </li>
            <li>
              We will not promise a lower price or a delivery time for every order. Rates and
              service levels depend on the agreed scope, the parcel and the route.
            </li>
            <li>
              We will not assume that every small parcel can use a letterbox service, or that a
              mailer makes a parcel letterbox-eligible.
            </li>
            <li>
              We will not describe Boxable Shipping as a standalone shipping-only service. It sits
              inside an agreed Vareya fulfilment operation.
            </li>
            <li>
              We will not present an assessment as carrier acceptance before the product, parcel,
              service and destination have been checked.
            </li>
          </ul>
        </div>
      </section>

      <FAQ
        items={FAQ_ITEMS}
        subheading="The practical questions brands ask about shipping small and lightweight products."
      />

      <P1Foundation topic="F09" />

      <BoxableRelatedLinks current="shipping" />

      <CTABanner
        title="Check whether your packed order fits our operation"
        subtitle={CLAIM_POST_SUBMISSION}
        primaryHref="/free-rate-scan/?lang=en"
        primaryLabel={CLAIM_PRIMARY_CTA}
        secondaryHref="/request-fulfilment-quote/?lang=en"
        secondaryLabel="Request a fulfilment quote"
      />
    </>
  ), __pageT);
}

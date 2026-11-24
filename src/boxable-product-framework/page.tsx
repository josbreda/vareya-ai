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
  CLAIM_POST_SUBMISSION,
  CLAIM_PRIMARY_CTA,
  CLAIM_BOXABLE_PROFILE_A,
  CLAIM_BOXABLE_PROFILE_B,
  CLAIM_BOXABLE_ACCEPTANCE,
} from "@/content/claims";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

const sourceMetadata: Metadata = buildMetadata("/boxable-product-framework/");
export async function generateMetadata(): Promise<Metadata> { return localizePageMetadata(sourceMetadata, "/boxable-product-framework/"); }

/**
 * The Vareya Boxable Product Framework — working method, version 0.1.
 *
 * Deliberately publishes no score, score bands, weights, rating thresholds or
 * product examples: the model has not been calibrated or approved as a public
 * standard. It explains the ten factors, the six gates and the evidence labels
 * so readers can understand and question the method.
 */
const FACTORS = [
  {
    name: "Packed dimensions",
    question: "What space does the closed, ready-to-ship order occupy, including protection and bulge?",
    why: "Volume and shape affect storage, packaging and carrier fit.",
  },
  {
    name: "Packed weight",
    question: "What does the complete parcel weigh, including packaging, filler and label?",
    why: "Weight affects handling and, together with dimensions, the chargeable weight a service applies.",
  },
  {
    name: "Packaging efficiency",
    question: "How much of the internal packaging volume is product rather than empty space?",
    why: "Empty space can add cube and material without protecting the product.",
  },
  {
    name: "Storage efficiency",
    question: "How many saleable units fit a usable storage volume, including agreed separation?",
    why: "Storage density changes the space a product range needs.",
  },
  {
    name: "Shipping and total order cost",
    question: "What does the order cost to fulfil and ship, set against its net order value?",
    why: "A label rate alone is not the full cost of an order.",
  },
  {
    name: "Pick and pack",
    question: "How much active work does a typical order take, from task acceptance to ready-to-ship?",
    why: "Handling time is part of the operational cost.",
  },
  {
    name: "Damage risk",
    question: "How likely is damage in transit, and what would replacement and claims handling cost?",
    why: "Replacement, claims and lost repeat custom sit beyond the label price.",
  },
  {
    name: "Returns complexity",
    question: "How much work does a return create, including receipt, inspection and disposition?",
    why: "A low-value item can cost more to process than to replace.",
  },
  {
    name: "Carrier compatibility",
    question: "Is there an accepted service for each main destination, and a second accepted option?",
    why: "One route is not a network, and backup coverage matters at peak.",
  },
  {
    name: "Scalability",
    question: "Can the setup absorb the agreed peak for the same mix and shift pattern?",
    why: "Average capacity is not peak capacity.",
  },
];

const GATES = [
  {
    id: "G0",
    name: "Data completeness",
    check:
      "Packed weight and dimensions, order mix, destination and the rate or service version are known and traceable.",
    outcome:
      "Incomplete data means no definitive outcome. The missing facts are requested first.",
  },
  {
    id: "G1",
    name: "Core-profile check",
    check:
      CLAIM_BOXABLE_PROFILE_A + " " + CLAIM_BOXABLE_PROFILE_B,
    outcome:
      "Outside these profiles is not a refusal; a separate fit assessment applies. " + CLAIM_BOXABLE_ACCEPTANCE,
  },
  {
    id: "G2",
    name: "Product and storage",
    check:
      "Safety, legal status, documents, temperature, batch or expiry needs and other special requirements are identified.",
    outcome:
      "Unknown means review. A confirmed stop applies to that setup, not automatically to every Vareya service.",
  },
  {
    id: "G3",
    name: "Packaging and protection",
    check:
      "Protection, closure, leak, break or puncture risk and label space are checked against the agreed protocol.",
    outcome: "No test means review. A failed pack is redesigned before it is approved.",
  },
  {
    id: "G4",
    name: "Carrier and destination",
    check:
      "Written acceptance exists for the exact product, service and lane under consideration.",
    outcome:
      "No acceptance means that route is not used. A favourable efficiency view cannot compensate.",
  },
  {
    id: "G5",
    name: "Commercial and capacity",
    check:
      "Cost, contribution, labour and storage capacity and the contract scope are feasible for the operation.",
    outcome:
      "Unknown means review. A shortfall means a different setup or proposal, not a lower standard.",
  },
];

const EVIDENCE = [
  {
    status: "Measured (M)",
    meaning:
      "Taken from a calibrated measurement or a recorded operational observation, with method, sample and date.",
  },
  {
    status: "Documented (D)",
    meaning:
      "Confirmed in a current document, such as a carrier service specification or a signed procedure.",
  },
  {
    status: "Reported (R)",
    meaning:
      "Supplied by the brand or an operational owner. Useful, but not independently measured by Vareya.",
  },
  {
    status: "Assumption (A)",
    meaning:
      "A stated design assumption used to explore a scenario. It is not evidence of how the order behaves.",
  },
  {
    status: "Unknown (U)",
    meaning:
      "No adequate source. Unknown is not zero, and it is not a pass. The factor stays open.",
  },
];

const PREPARE = [
  "Products and quantities in a typical order, including bundles.",
  "Closed, ready-to-ship dimensions, including protection and bulge.",
  "Packed weight, including packaging, filler and label.",
  "Packaging type and materials used for the current pack.",
  "Units per order and how variant mixes change the packed parcel.",
  "Storage conditions, batch, expiry or temperature requirements.",
  "Monthly order volume and the main destination mix.",
  "Current cost components: inbound, storage, pick and pack, packaging, transport and surcharges.",
  "The agreed returns process, including inspection and disposition.",
  "Product documentation or restrictions that affect storage or transport.",
];

const FAQ_ITEMS = [
  {
    question: "Is the Boxable Product Framework an industry standard?",
    answer:
      "No. It is Vareya's working method, version 0.1. It is not a certified standard, not an industry standard and not a carrier rule. It has not been calibrated on a published dataset.",
  },
  {
    question: "Can I see my Boxable score?",
    answer:
      "Not yet. The scoring model is under review and has not been calibrated. We do not publish scores, score thresholds, weights or example results while that work is incomplete. A conversation can still explain the factors, the gates and the evidence gaps for your order profile.",
  },
  {
    question: "Does the framework set a universal weight or size limit?",
    answer:
      "Not as a universal carrier limit. Vareya uses its own classification: " + CLAIM_BOXABLE_PROFILE_A + " " + CLAIM_BOXABLE_PROFILE_B + " " + CLAIM_BOXABLE_ACCEPTANCE,
  },
  {
    question: "What happens when data is missing?",
    answer:
      "The factor stays unknown and the outcome stays provisional. We do not treat missing data as a zero or as a pass, and we do not publish a precise final result while a material factor is unsupported.",
  },
  {
    question: "Does a good assessment mean my product is accepted?",
    answer:
      "No. Acceptance depends on the gates, the carrier service and the agreed scope. The framework organises the review; it does not replace carrier acceptance, product approval or a quotation.",
  },
  {
    question: "Why ten factors?",
    answer:
      "They cover the physical parcel, the operation, the route and the commercial result. The set is an expert design hypothesis, not a regression model, and it does not claim to measure ten independent effects.",
  },
  {
    question: "Is the framework used for every Vareya customer?",
    answer:
      "It is being developed as a consistent review method. It does not replace a quotation, onboarding tests or the agreed service scope, and it is not presented as a certification of any product or operation.",
  },
];

export default async function BoxableProductFrameworkPage() {
  const __pageT = await getTForContent();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://vareya.ai/" },
    { name: "Boxable Fulfilment", url: "https://vareya.ai/boxable-fulfilment/" },
    {
      name: "Boxable Product Framework",
      url: "https://vareya.ai/boxable-product-framework/",
    },
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
            <span aria-current="page">Boxable Product Framework</span>
          </nav>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
              Working method &middot; version 0.1 &middot; October 2026
            </p>
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              The Vareya Boxable Product Framework
            </h1>
            <p className="mb-4 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-xl">
              The framework is the working method behind Vareya&rsquo;s Boxable assessment. It sets
              out how a complete packed order, its handling needs and its routes are reviewed
              together, and how the evidence behind each conclusion is labelled.
            </p>
            <p className="mb-8 max-w-3xl leading-relaxed text-white/75">
              It is a working method, not a certified standard. It is not an industry standard, a
              carrier rule or a product approval.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/free-rate-scan/?lang=en"
                className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-primary hover:bg-slate-100"
              >
                {CLAIM_PRIMARY_CTA}
              </Link>
              <Link
                href="/boxable-fulfilment/"
                className="rounded-lg border border-white/30 px-6 py-3 text-center font-medium hover:bg-white/10"
              >
                Read about Boxable Fulfilment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-200 bg-amber-50 py-10" aria-labelledby="status">
        <div className="container-site max-w-4xl">
          <h2 id="status" className="mb-3 text-lg font-bold text-amber-900">
            Status of this method
          </h2>
          <div className="space-y-3 text-sm leading-6 text-amber-900">
            <p>
              Version 0.1 is a working method under review. It has not been calibrated on a
              published dataset and it is not a certified standard, an accreditation or an industry
              norm. We do not publish scores, score thresholds, weightings, rating scales or example
              products while that work is incomplete.
            </p>
            <p>
              Nothing on this page should be read as carrier acceptance, product approval, a
              quotation or a promise of a particular result.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="purpose">
        <div className="container-site max-w-4xl">
          <h2 id="purpose" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            What the framework is for
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p>
              The framework gives Vareya one consistent way to review a product and order
              combination before describing a fulfilment setup. It is not a product database, and it
              does not classify a product forever.
            </p>
            <p>
              The unit of assessment is not a product name in isolation. It is the SKU, the order
              combination, the complete packaging, the storage and handling process, the
              destination, the carrier service, the rate version and the date. An identical SKU can
              produce a different outcome in a different bundle or on a different route.
            </p>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="mb-2 font-semibold text-ink">Working definition: a boxable product</h3>
              <p className="text-sm leading-6 text-muted">
                In Vareya&rsquo;s framework, a boxable product is an ecommerce item whose packed
                order can be stored, picked, packed and shipped efficiently using compact
                packaging. Physical fit, product safety, handling needs and carrier acceptance are
                checked separately. The core profile is a Vareya assessment rule, not a universal
                carrier limit.
              </p>
            </div>
            <p>
              Measurements use the complete, closed parcel: outside dimensions including bulge,
              protection and label requirements, and the total packed weight. Irregular shapes are
              recorded using the measuring rule of the relevant service. A bare product dimension is
              not a packed-parcel measurement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="layers">
        <div className="container-site max-w-4xl">
          <h2 id="layers" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            Three layers
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="mb-2 font-semibold text-ink">1. Core-profile check</h3>
              <p className="text-sm leading-6 text-muted">
                {CLAIM_BOXABLE_PROFILE_A} {CLAIM_BOXABLE_PROFILE_B} {CLAIM_BOXABLE_ACCEPTANCE}
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="mb-2 font-semibold text-ink">2. Acceptance gates</h3>
              <p className="text-sm leading-6 text-muted">
                May and can the order be stored and carried under the agreed conditions? Six gates
                are checked in order, each with its own pass, review or stop outcome.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="mb-2 font-semibold text-ink">3. Efficiency and evidence</h3>
              <p className="text-sm leading-6 text-muted">
                How straightforward is the accepted setup, and how well is that supported? Ten
                factors carry a rating and an evidence status.
              </p>
            </article>
          </div>
          <p className="mt-6 leading-7 text-muted">
            A favourable efficiency view never overrides a failed gate. A missing fact is unknown,
            not automatically good or bad. A known safety, packaging, carrier or commercial stop
            comes before the core classification, not after it.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="factors">
        <div className="container-site max-w-5xl">
          <h2 id="factors" className="mb-4 text-2xl font-bold text-ink sm:text-3xl">
            The ten factors
          </h2>
          <p className="mb-6 max-w-3xl leading-7 text-muted">
            The draft model looks at ten factors. They are listed here so the method can be
            understood and questioned. The weighting and rating scales are internal design choices
            and are not published as a standard.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <caption className="sr-only">
                The ten factors in the draft Boxable assessment
              </caption>
              <thead>
                <tr className="border-b border-slate-300">
                  <th scope="col" className="py-3 pr-4 font-semibold text-ink">
                    Factor
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold text-ink">
                    What it asks
                  </th>
                  <th scope="col" className="py-3 font-semibold text-ink">
                    Why it matters
                  </th>
                </tr>
              </thead>
              <tbody>
                {FACTORS.map((factor) => (
                  <tr key={factor.name} className="border-b border-slate-200 align-top">
                    <th scope="row" className="py-4 pr-4 font-semibold text-ink">
                      {factor.name}
                    </th>
                    <td className="py-4 pr-4 leading-6 text-muted">{factor.question}</td>
                    <td className="py-4 leading-6 text-muted">{factor.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-6 text-muted">
            The set is an expert design hypothesis. It is not a regression model, and the factors
            are not claimed to be independent of one another: dimensions influence storage and cost,
            while protection influences both damage risk and handling time.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="gates">
        <div className="container-site max-w-5xl">
          <h2 id="gates" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            The gates, in decision order
          </h2>
          <p className="mb-6 max-w-3xl leading-7 text-muted">
            Gates are not weighted. Each one has to be satisfied for the setup under review. The
            sequence matters because a later commercial discussion cannot repair an earlier safety,
            product or carrier problem.
          </p>
          <div className="space-y-4">
            {GATES.map((gate) => (
              <article key={gate.id} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    {gate.id}
                  </span>
                  <h3 className="font-semibold text-ink">{gate.name}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">
                  <strong className="text-ink">Check:</strong> {gate.check}
                </p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  <strong className="text-ink">If not satisfied:</strong> {gate.outcome}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 leading-7 text-muted">
            A known safety, packaging, carrier or commercial stop comes before the core
            classification. Then comes outside-core. Then incomplete data or review. A high
            efficiency result does not clear a gate.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="evidence">
        <div className="container-site max-w-5xl">
          <h2 id="evidence" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            Evidence status: how uncertainty is shown
          </h2>
          <p className="mb-6 max-w-3xl leading-7 text-muted">
            Each factor carries an evidence status, alongside its source, period, sample and
            reviewer. The label is part of the result, not a footnote.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">Evidence labels used in the framework</caption>
              <thead>
                <tr className="border-b border-slate-300">
                  <th scope="col" className="py-3 pr-4 font-semibold text-ink">
                    Status
                  </th>
                  <th scope="col" className="py-3 font-semibold text-ink">
                    What it means
                  </th>
                </tr>
              </thead>
              <tbody>
                {EVIDENCE.map((item) => (
                  <tr key={item.status} className="border-b border-slate-200 align-top">
                    <th scope="row" className="py-4 pr-4 font-semibold text-ink">
                      {item.status}
                    </th>
                    <td className="py-4 leading-6 text-muted">{item.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-3 leading-7 text-muted">
            <p>
              Unknown is not zero. It is a gap that has to be closed or disclosed. A confidence view
              shows how much of the weighting rests on measured or documented evidence. It is a
              coverage measure, not a probability of success and not a statistical guarantee.
            </p>
            <p>
              If a material factor is unknown, we do not publish a precise final result. A clearly
              labelled range may be used for internal discussion, but it is not presented as a
              product classification.
            </p>
            <p>
              A result with thin evidence remains provisional. We require a reviewed evidence level
              before a result informs a commercial proposal; the internal threshold is not
              published.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="limits">
        <div className="container-site max-w-4xl">
          <h2 id="limits" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            What the framework does not do
          </h2>
          <ul className="space-y-3 leading-7 text-muted">
            <li>It is not a quotation, a price or a commitment to a rate.</li>
            <li>It is not carrier acceptance for a product, service or destination.</li>
            <li>It is not a product safety, legal or customs approval.</li>
            <li>It is not a certification, an accreditation or an industry standard.</li>
            <li>It does not replace measuring the packed parcel or testing the pack-out.</li>
            <li>
              It does not publish a score, score thresholds, weights or example products while the
              method is uncalibrated.
            </li>
            <li>It does not create a universal weight or size limit for Vareya&rsquo;s services.</li>
            <li>
              It does not replace specialist advice on dangerous goods, customs or product
              compliance.
            </li>
          </ul>
          <p className="mt-6 leading-7 text-muted">
            The measured packed parcel remains the operational fact. The framework is a decision
            aid, not a substitute for the tape measure or the carrier&rsquo;s own conditions.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="validation">
        <div className="container-site max-w-4xl">
          <h2 id="validation" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            How the method is being validated
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p>
              Validation is planned, not complete. Passing internal checks on the calculation and
              decision logic does not prove that the method predicts real operational outcomes.
            </p>
            <p>The intended validation work covers:</p>
          </div>
          <ul className="mt-4 space-y-3 leading-7 text-muted">
            <li>
              A pilot using real order profiles across straightforward, fragile, regulated and
              borderline cases, without selecting only successful examples.
            </li>
            <li>
              Two assessors reviewing the same profiles independently, with differences recorded per
              factor.
            </li>
            <li>
              Comparison with actual pick time, damage, returns work, exceptions and total order
              cost.
            </li>
            <li>
              Sensitivity checks on the weighting, so a small design change does not silently move
              outcomes.
            </li>
            <li>
              Version control, so earlier assessments keep the model version they were made under.
            </li>
          </ul>
          <p className="mt-6 leading-7 text-muted">
            Until that work is complete, the framework is a working method for internal and client
            discussions. It is not evidence of performance, savings or predictive accuracy.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="versioning">
        <div className="container-site max-w-4xl">
          <h2 id="versioning" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            Version and change control
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p>
              This is version 0.1, dated October 2026. The method page keeps a stable URL. Material
              changes to gates, factors or decision rules are recorded with a version and a date,
              and older assessments keep the version they were made under.
            </p>
            <p>
              A public version 1.0 would require calibration, review and explicit approval. No date
              is promised, and no certification is implied by a version number.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="prepare">
        <div className="container-site max-w-4xl">
          <h2 id="prepare" className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
            What to prepare for an assessment
          </h2>
          <p className="mb-6 leading-7 text-muted">
            The more of these facts are available, the less the review has to rely on assumptions.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {PREPARE.map((item) => (
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

      <FAQ
        items={FAQ_ITEMS}
        subheading="What readers ask about the Boxable Product Framework and its limits."
      />

      <P1Foundation topic="F05" />

      <BoxableRelatedLinks current="framework" />

      <CTABanner
        title="Start with your own packed order"
        subtitle={CLAIM_POST_SUBMISSION}
        primaryHref="/product-fit-check/"
        primaryLabel="Check Your Product Fit"
        secondaryHref="/request-fulfilment-quote/?lang=en"
        secondaryLabel="Request a fulfilment quote"
      />
    </>
  ), __pageT);
}

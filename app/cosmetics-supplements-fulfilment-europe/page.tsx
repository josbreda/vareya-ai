import { localizePageMetadata } from "@/i18n/localize-metadata";
import { localizeNode } from "@/i18n/localize-node";
import { getRequestI18n, getT as getTForContent } from "@/i18n/server";
import type { Metadata } from "next";


import Link from "@/i18n/Link";
import { FAQ } from "@/components/marketing/FAQ";
import {
  APPROVED_DESTINATIONS,
  CAPABILITIES,
  SPECIALIST_REQUIREMENTS_FALLBACK,
} from "@/content/facts";
import { PAGE_META } from "@/content/pages";

const destinationList = APPROVED_DESTINATIONS.join(", ");

const META = PAGE_META["/cosmetics-supplements-fulfilment-europe/"];

const sourceMetadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: {
    canonical: META.canonical,
  },
};
export async function generateMetadata(): Promise<Metadata> { return localizePageMetadata(sourceMetadata, "/cosmetics-supplements-fulfilment-europe/"); }

const PROCESS = [
  {
    title: "Qualification",
    body: "Share your product category, volume and target markets. Product fit is confirmed during qualification.",
  },
  {
    title: "Onboarding",
    body: "Connect your sales channel and agree stock intake.",
  },
  {
    title: "Inbound stock",
    body: "Send stock to the Breda warehouse.",
  },
  {
    title: "Fulfilment",
    body: "Orders are picked, packed and shipped.",
  },
  {
    title: "Returns",
    body: CAPABILITIES.returns,
  },
];

const FAQ_ITEMS = [
  {
    question: "Does Vareya specialise in cosmetics and supplements fulfilment?",
    answer:
      "Yes, alongside phone cases, accessories and other smaller parcel products.",
  },
  {
    question: "Does Vareya offer temperature-controlled storage?",
    answer: SPECIALIST_REQUIREMENTS_FALLBACK,
  },
  {
    question: "Does Vareya manage batch numbers or expiry dates?",
    answer: SPECIALIST_REQUIREMENTS_FALLBACK,
  },
  {
    question: "Is Vareya certified to handle cosmetics or supplements?",
    answer: SPECIALIST_REQUIREMENTS_FALLBACK,
  },
  {
    question: "What parcel sizes are suitable?",
    answer: "Combined dimensions ≤900 mm and a longest side ≤600 mm.",
  },
  {
    question: "Does Vareya integrate with Shopify for cosmetics and supplements orders?",
    answer: CAPABILITIES.shipHero,
  },
  {
    question: "What order volume fits Vareya?",
    answer: CAPABILITIES.volume,
  },
  {
    question: "How are returns handled?",
    answer: CAPABILITIES.returns,
  },
  {
    question: "Can Vareya process orders in the weekend?",
    answer: CAPABILITIES.weekendFulfilment,
  },
  {
    question: "Where does Vareya ship cosmetics and supplements?",
    answer: `Vareya ships to the following destinations: ${destinationList}.`,
  },
];

const INTERNAL_LINKS = [
  { href: "/", label: "Ecommerce fulfilment in Europe" },
  { href: "/eu-fulfilment/", label: "EU fulfilment from the Netherlands" },
  { href: "/shopify-fulfilment-europe/", label: "Shopify fulfilment in Europe" },
  { href: "/eu-fulfilment-us-brands/", label: "EU fulfilment for US brands" },
  { href: "/eu-fulfilment-uk-brands/", label: "EU fulfilment for UK brands" },
];

export default async function CosmeticsPage() {
  const __pageT = await getTForContent();
  const { locale } = await getRequestI18n();
  const ctaSuffix = locale === "nl" ? "nl" : "en";
  return localizeNode((
    <>
      <section className="photo-green bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-site py-20 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/75">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <span aria-current="page">Cosmetics and supplements fulfilment</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Cosmetics and supplements fulfilment from the Netherlands
            </h1>
            <div className="mb-8 max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 sm:text-xl">
              <p>
                Vareya specialises in fulfilment for cosmetics, supplements, phone
                cases, accessories and other smaller parcel products, operating from a
                warehouse in Breda, the Netherlands.
              </p>
              <p>{CAPABILITIES.volume}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/free-rate-scan/?lang=en" className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-primary hover:bg-slate-100">
                Check your EU fulfilment fit
              </Link>
              <Link href="/request-fulfilment-quote/?lang=en" data-topic-id="S01" data-cta-id={`s01--quote--supplements--hero--${ctaSuffix}`} data-locale={locale} data-form-id="request-fulfilment-quote" data-form-version="v1" data-event-version="1" data-test-flag="S01" data-submission-id={`S01-${ctaSuffix}`} className="rounded-lg border border-white/30 px-6 py-3 text-center font-medium hover:bg-white/10">
                Request a fulfilment quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-12" aria-labelledby="quick-answer">
        <div className="container-site max-w-4xl">
          <h2 id="quick-answer" className="mb-4 text-2xl font-bold">Quick answer</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>
              Vareya specialises in fulfilment for cosmetics and supplements brands,
              alongside phone cases, accessories and other smaller parcel products,
              from a warehouse in Breda, the Netherlands. Suitable parcels have
              combined dimensions ≤900 mm.
            </p>
            <p>{CAPABILITIES.volume}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="why-category">
        <div className="container-site max-w-4xl">
          <h2 id="why-category" className="mb-5 text-2xl font-bold sm:text-3xl">
            Why this category
          </h2>
          <p className="leading-8 text-muted sm:text-lg">
            Cosmetics, supplements and similar smaller parcel products share practical
            handling characteristics, typically compact, packaged units shipped in
            volume to individual consumers. Vareya specialises in fulfilling these
            categories, alongside phone cases and accessories, from its warehouse in
            Breda.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="cosmetics-fulfilment">
        <div className="container-site max-w-4xl">
          <h2 id="cosmetics-fulfilment" className="mb-5 text-2xl font-bold sm:text-3xl">
            Cosmetics fulfilment
          </h2>
          <p className="leading-8 text-muted sm:text-lg">
            Cosmetics are typically small, light parcels — compacts, jars, tubes and
            bottles shipped in volume to individual consumers. Vareya picks, packs and
            ships them from the warehouse in Breda, under the same smaller-parcel
            handling rules as the rest of the range. Category specifics that affect
            handling, storage or packing are confirmed during qualification rather
            than assumed in advance.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="supplements-fulfilment">
        <div className="container-site max-w-4xl">
          <h2 id="supplements-fulfilment" className="mb-5 text-2xl font-bold sm:text-3xl">
            Supplements fulfilment
          </h2>
          <p className="mb-4 leading-8 text-muted sm:text-lg">
            Supplements move in the same small-parcel pattern: light units, often in
            stock with batch numbers or expiry dates. Vareya supports stock with batch
            numbers or expiry dates; the exact rules for batch and expiry handling are
            agreed per operation during qualification.
          </p>
          <p className="leading-7 text-muted">
            Specialist requirements — for example regulated storage conditions,
            certification or insurance cover — are not assumed. Raise them during
            qualification so Vareya can confirm which parts can be supported.
          </p>
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
              "Carriers include DHL, PostNL, Asendia, Deutsche Post, Royal Mail, DPD and DHL Express.",
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

      <section className="py-16 sm:py-20" aria-labelledby="process">
        <div className="container-site">
          <h2 id="process" className="mb-10 text-2xl font-bold sm:text-3xl">How the process works</h2>
          <div className="grid gap-5 md:grid-cols-5">
            {PROCESS.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-200 p-5">
                <p className="mb-3 text-sm font-semibold text-primary">Step {index + 1}</p>
                <h3 className="mb-2 font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-6 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="parcel-suitability">
        <div className="container-site max-w-4xl">
          <h2 id="parcel-suitability" className="mb-4 text-2xl font-bold">Parcel suitability</h2>
          <p className="leading-8 text-muted">
            Suitable smaller parcels have combined dimensions ≤900 mm and a
            longest side ≤600 mm. Product fit, including any category-specific
            handling requirements, is confirmed during qualification rather than
            assumed in advance.
          </p>
        </div>
      </section>

      <section className="py-16" aria-labelledby="returns">
        <div className="container-site max-w-4xl">
          <h2 id="returns" className="mb-4 text-2xl font-bold">Returns</h2>
          <p className="leading-7 text-muted">{CAPABILITIES.returns}</p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16" aria-labelledby="requirements">
        <div className="container-site max-w-4xl">
          <h2 id="requirements" className="mb-4 text-2xl font-bold">Requirements to confirm</h2>
          <p className="mb-4 leading-7 text-muted">
            Requirements involving customs, tax, regulated storage, batch handling,
            expiry management or other specialist services should be discussed during
            qualification.
          </p>
          <p className="font-medium leading-7 text-slate-800">{SPECIALIST_REQUIREMENTS_FALLBACK}</p>
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

      <section className="photo-green bg-primary py-16 text-white">
        <div className="container-site text-center">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Assess your product and parcel fit</h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/free-rate-scan/?lang=en" className="rounded-lg bg-white px-6 py-3 font-semibold text-primary hover:bg-slate-100">
              Check your EU fulfilment fit
            </Link>
            <Link href="/request-fulfilment-quote/?lang=en" data-topic-id="S01" data-cta-id={`s01--quote--cosmetics-skincare--body--${ctaSuffix}`} data-locale={locale} data-form-id="request-fulfilment-quote" data-form-version="v1" data-event-version="1" data-test-flag="S01" data-submission-id={`S01-${ctaSuffix}`} className="rounded-lg border border-white/30 px-6 py-3 font-medium hover:bg-white/10">
              Request a fulfilment quote
            </Link>
          </div>
        </div>
      </section>
    </>
  ), __pageT);
}

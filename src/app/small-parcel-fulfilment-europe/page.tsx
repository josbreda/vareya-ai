import { localizePageMetadata } from "@/i18n/localize-metadata";
import { localizeNode } from "@/i18n/localize-node";
import { getT as getTForContent } from "@/i18n/server";
import type { Metadata } from "next";


import Link from "@/i18n/Link";
import { FAQ } from "@/components/marketing/FAQ";
import { CTABanner } from "@/components/marketing/CTABanner";
import {
  APPROVED_DESTINATIONS,
  APPROVED_FACTS,
  CLAIM_CARRIER_SELECTION,
  CLAIM_CUTOFF,
  CLAIM_POSTNL,
  CLAIM_POST_SUBMISSION,
  CLAIM_SHIPHERO,
  CLAIM_SPECIALIST_FALLBACK,
  CLAIM_SUPPORT,
  CLAIM_VOLUME,
  CLAIM_WEEKEND,
  CLAIM_RETURNS,
} from "@/content/claims";
import { PAGE_META } from "@/content/pages";

const META = PAGE_META["/small-parcel-fulfilment-europe/"];

const sourceMetadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: {
    canonical: META.canonical,
  },
  openGraph: {
    title: META.title,
    description: META.description,
    url: META.canonical,
    type: "website",
  },
};
export async function generateMetadata(): Promise<Metadata> { return localizePageMetadata(sourceMetadata, "/small-parcel-fulfilment-europe/"); }

const destinationList = APPROVED_DESTINATIONS.join(", ");

const MECHANISMS = [
  {
    title: "Carrier pricing follows weight and size bands",
    body: "Small, light parcels can sit in lower bands: less actual and volumetric weight, fewer oversized surcharges. The same product in oversized packaging can cost a band more — which is why we always quote the packed parcel.",
  },
  {
    title: "Handling depends on the order",
    body: "Compare the number of picks, packaging steps and checks required for your actual products. Small items do not automatically mean faster packing or fewer handling steps.",
  },
  {
    title: "Storage density",
    body: "Small items can store more units per shelf and more units per pallet — stock can occupy less space, and space is a fulfilment cost.",
  },
];

const SUPPORT_BLOCKS = [
  "Warehouse and systems: " + CLAIM_SHIPHERO + " " + APPROVED_FACTS.shopify,
  "Carriers: " + CLAIM_POSTNL + " " + CLAIM_CARRIER_SELECTION,
  `Destinations: ${APPROVED_DESTINATIONS.length} European and international destinations — the current list is on the request a quote page.`,
  "Returns: " + CLAIM_RETURNS,
  "Timing: " + CLAIM_CUTOFF + " " + CLAIM_WEEKEND,
  "Support: " + CLAIM_SUPPORT,
];

const START_STEPS: { title: string; body: string; href?: string }[] = [
  {
    title: "Check your fit",
    body:
      "Share your order volume, product types and destinations in the free scan. Packed dimensions and weights are requested by email in the follow-up, before any quote is prepared.",
    href: "/free-rate-scan/?lang=en",
  },
  {
    title: "Get a response",
    body: CLAIM_POST_SUBMISSION,
  },
  {
    title: "Quote and onboarding",
    body: "We agree services and rates in a quote, connect your webshop to our WMS and set packing and returns rules together.",
  },
  {
    title: "Go live",
    body: "Stock arrives, test orders run, and your orders ship from Breda.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Is my product a small parcel?",
    answer:
      "If its packed size stays within combined dimensions of ≤900 mm and a longest side of ≤600 mm, it likely is — product fit is confirmed during qualification.",
  },
  {
    question: "Do you handle letterbox-sized parcels?",
    answer:
      "Yes, as part of the small-parcel profile. Letterbox-friendly parcels must additionally fit through a letterbox opening.",
  },
  {
    question: "Can you ship outside the EU?",
    answer:
      `Yes — to the published list of ${APPROVED_DESTINATIONS.length} destinations, with customs clearance support available for shipments into and out of Europe. Contact Vareya to discuss specific requirements.`,
  },
  {
    question: "Can we keep selling on Shopify?",
    answer: "Yes. " + APPROVED_FACTS.shopify + " " + CLAIM_SHIPHERO,
  },
];

const INTERNAL_LINKS = [
  { href: "/boxable-fulfilment/", label: "Boxable fulfilment" },
  { href: "/boxable-shipping/", label: "Boxable Shipping" },
  { href: "/boxable-product-framework/", label: "Boxable Product Framework" },
  { href: "/letterbox-parcel-fulfilment/", label: "Letterbox parcel fulfilment" },
  { href: "/cosmetics-supplements-fulfilment-europe/", label: "Cosmetics and supplements fulfilment" },
  { href: "/shopify-fulfilment-europe/", label: "Shopify fulfilment in Europe" },
  { href: "/eu-fulfilment/", label: "EU fulfilment from the Netherlands" },
  { href: "/request-fulfilment-quote/?lang=en", label: "Request a fulfilment quote" },
];

export default async function SmallParcelFulfilmentEuropePage() {
  const __pageT = await getTForContent();
  return localizeNode((
    <>
      <section className="photo-green bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-site py-20 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/75">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span aria-hidden="true" className="px-2">
              /
            </span>
            <span aria-current="page">Small parcel fulfilment in Europe</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Small Parcel Fulfilment in Europe: Built for Small, Light and Boxable Products
            </h1>
            <div className="mb-8 max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 sm:text-xl">
              <p>
                Small parcel fulfilment is exactly what it sounds like: storing, picking, packing
                and shipping products that are small, light and boxable — with the packing and
                shipping setup matched to that order profile. Vareya runs that profile from Breda,
                in the Netherlands, for brands selling across Europe and beyond.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/free-rate-scan/?lang=en"
                className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-primary hover:bg-slate-100"
              >
                Check your EU fulfilment fit
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


      <section className="border-b border-slate-200 bg-slate-50 py-12" aria-labelledby="parcel-profile">
        <div className="container-site max-w-4xl">
          <h2 id="parcel-profile" className="mb-4 text-2xl font-bold">
            What counts as a small parcel?
          </h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>
              {APPROVED_FACTS.parcelSize} {APPROVED_FACTS.productFit}
            </p>
            <p>
              Within that range there is a further distinction worth knowing: a{" "}
              <strong>letterbox-friendly parcel</strong> is thinner still, so it can pass through a
              letterbox opening. Letterbox parcels are a subset of small parcels, not a separate
              service — the 900/600 profile is the overall small-parcel range, not a letterbox
              limit. We explain the difference in{" "}
              <Link
                href="/letterbox-parcel-fulfilment/"
                className="font-semibold text-primary hover:underline"
              >
                letterbox parcels and how they work
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="why-specialist">
        <div className="container-site max-w-4xl">
          <h2 id="why-specialist" className="mb-5 text-2xl font-bold sm:text-3xl">
            Why small, light and boxable deserves a specialist
          </h2>
          <p className="mb-6 leading-8 text-muted sm:text-lg">
            Fulfilment for small parcels is not just &quot;the same warehouse with smaller
            shelves&quot;. Three mechanisms make it different:
          </p>
          <div className="space-y-5">
            {MECHANISMS.map((mechanism, index) => (
              <article key={mechanism.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="mb-2 font-semibold text-slate-900">
                  {index + 1}. {mechanism.title}
                </h3>
                <p className="text-sm leading-6 text-muted">{mechanism.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 leading-8 text-muted">
            These are structural differences in how costs build up. We do not publish savings
            percentages, because the result depends on your products, your packaging and your
            quotes.
          </p>
          <p className="mt-4 leading-8 text-muted">
            This compact-product focus is what we describe as{" "}
            <Link href="/boxable-fulfilment/" className="font-semibold text-primary hover:underline">
              Boxable Fulfilment
            </Link>
            . The packed-order checks behind it are set out in the{" "}
            <Link href="/boxable-product-framework/" className="font-semibold text-primary hover:underline">
              Boxable Product Framework
            </Link>{" "}
            and the shipping side in{" "}
            <Link href="/boxable-shipping/" className="font-semibold text-primary hover:underline">
              Boxable Shipping
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="what-you-get">
        <div className="container-site max-w-4xl">
          <h2 id="what-you-get" className="mb-6 text-2xl font-bold sm:text-3xl">
            What you get with Vareya
          </h2>
          <ul className="space-y-3 rounded-xl border border-slate-200 bg-white p-6 text-sm leading-6 text-muted">
            {SUPPORT_BLOCKS.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-6 text-muted">
            Vareya ships to the following destinations: {destinationList}.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="how-you-sell">
        <div className="container-site max-w-4xl">
          <h2 id="how-you-sell" className="mb-5 text-2xl font-bold sm:text-3xl">
            Built for the way you sell
          </h2>
          <p className="leading-8 text-muted sm:text-lg">
            We support multiple webshops, product bundles, subscriptions and stock with batch
            numbers or expiry dates. We also handle B2B orders and stock transfers. If you sell
            cosmetics, supplements, phone cases, accessories or similar smaller products, you are
            in our core profile — see our{" "}
            <Link
              href="/cosmetics-supplements-fulfilment-europe/"
              className="font-semibold text-primary hover:underline"
            >
              cosmetics and supplements fulfilment page
            </Link>{" "}
            for that specialisation in detail. {CLAIM_SPECIALIST_FALLBACK}
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-12" aria-labelledby="who-this-is-for">
        <div className="container-site max-w-4xl">
          <h2 id="who-this-is-for" className="mb-4 text-2xl font-bold">
            Who this is for
          </h2>
          <p className="leading-7 text-muted">
            {CLAIM_VOLUME} If you are smaller, or your product sits outside the usual profile,
            start with the scan and add the details when we follow up by email — fit is
            always confirmed case by case.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="how-to-start">
        <div className="container-site">
          <h2 id="how-to-start" className="mb-10 text-2xl font-bold sm:text-3xl">
            How to start
          </h2>
          <div className="grid gap-5 md:grid-cols-4">
            {START_STEPS.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="mb-3 text-sm font-semibold text-primary">Step {index + 1}</p>
                <h3 className="mb-2 font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-6 text-muted">{step.body}</p>
                {step.href && (
                  <Link href={step.href} className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline">
                    Start the free scan <span className="ml-1" aria-hidden="true">→</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      <section className="py-14" aria-labelledby="related-pages">
        <div className="container-site">
          <h2 id="related-pages" className="mb-6 text-2xl font-bold">
            Related fulfilment pages
          </h2>
          <div className="flex flex-wrap gap-3">
            {INTERNAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-primary hover:border-primary/40"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Check whether your small-parcel profile fits"
        subtitle={
          "Share your order profile — volume, products and destinations — and Vareya will review " +
          "your answers and send an initial fit response."
        }
        primaryHref="/free-rate-scan/?lang=en"
        primaryLabel="Check your EU fulfilment fit"
        secondaryHref="/request-fulfilment-quote/?lang=en"
        secondaryLabel="Request a fulfilment quote"
      />
    </>
  ), __pageT);
}

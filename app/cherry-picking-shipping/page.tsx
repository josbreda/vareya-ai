import { localizePageMetadata } from "@/i18n/localize-metadata";
import { localizeNode } from "@/i18n/localize-node";
import { getT as getTForContent } from "@/i18n/server";
import type { Metadata } from "next";


import Link from "@/i18n/Link";
import { FAQ } from "@/components/marketing/FAQ";
import { CTABanner } from "@/components/marketing/CTABanner";
import { CLAIM_PRIMARY_CTA } from "@/content/claims";
import { PAGE_META } from "@/content/pages";
import { breadcrumbSchema } from "@/lib/seo";

const META = PAGE_META["/cherry-picking-shipping/"];

const sourceMetadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: META.canonical },
  openGraph: {
    title: META.title,
    description: META.description,
    url: META.canonical,
    type: "website",
  },
};
export async function generateMetadata(): Promise<Metadata> { return localizePageMetadata(sourceMetadata, "/cherry-picking-shipping/"); }

/**
 * Cherry Picking Shipping™ — owner mandate 16 October 2026 (Raymond, via Jos).
 *
 * Claim discipline (claims-register addendum 16-10 #2):
 * - carrier list + WMS sentence and the per-order selection sentence are the
 *   owner-supplied approved wording;
 * - marketing superlatives from the brief were rewritten to functional
 *   descriptions ("best option" → "a suitable option" / "the right …");
 * - benefit bullets state the mechanism (rates built on combined volumes,
 *   service-level matching), never promised savings or speeds.
 */

const SELECTION_FACTORS = [
  "Destination country and city",
  "Parcel dimensions",
  "Shipment weight",
  "Standard or express service requirements",
  "Carrier service levels",
  "Transit times",
  "Shipping rates",
  "Historical delivery performance",
];

const BENEFITS = [
  "Carrier rates built on combined shipping volumes",
  "Access to multiple international carrier networks",
  "Standard and express service options",
  "International coverage across carrier networks",
  "Reduced dependency on a single carrier",
  "Cross-border routes matched to each destination",
];

const FAQ_ITEMS = [
  {
    question: "What is multi-carrier shipping?",
    answer:
      "Multi-carrier shipping means working with several carriers instead of one, so each shipment can be matched to a suitable service instead of being pushed through a single network.",
  },
  {
    question: "How does automatic carrier selection work?",
    answer:
      "For every order, the warehouse management system compares the available shipping methods and looks at destination, parcel dimensions, weight, service level, transit time and rate before a carrier service is selected for that shipment.",
  },
  {
    question: "What is Cherry Picking Shipping?",
    answer:
      "Cherry Picking Shipping™ is Vareya's multi-carrier shipping strategy: each order is evaluated individually and routed through a shipping service that fits that specific shipment.",
  },
  {
    question: "How do fulfilment companies choose the cheapest shipping method?",
    answer:
      "There is no single cheapest method that fits every parcel. Fulfilment operations compare the services available per shipment — weighing destination, dimensions, weight and service requirements — and select the option that fits that order. At Vareya, that comparison is built into the warehouse management system.",
  },
  {
    question: "What is the best carrier for international ecommerce shipping?",
    answer:
      "No single carrier is right for every international shipment. What fits depends on the destination, parcel profile, required service level and the rate for that specific order — which is why Vareya selects per shipment instead of relying on one carrier.",
  },
  {
    question: "How can Shopify stores reduce shipping costs?",
    answer:
      "Options often start with the shipping setup itself: matching each order to a suitable service, keeping packing efficient so parcels stay in favourable weight bands, and working through a fulfilment partner whose combined volumes support negotiated carrier agreements. What fits — and what it means for your costs — depends on your products, destinations and volumes, and is assessed per operation.",
  },
  {
    question: "How do 3PL companies optimize shipping rates?",
    answer:
      "3PLs typically combine their customers' shipping volume into carrier agreements, connect carriers to a warehouse management system, and compare the available services for every order. Rate structures and outcomes differ per provider and per operation.",
  },
  {
    question: "What is dynamic carrier routing?",
    answer:
      "Dynamic carrier routing means selecting a carrier service per shipment instead of fixing one carrier for every order — often automated in the warehouse management system, based on destination, parcel data and the required service level.",
  },
  {
    question: "How can DTC brands lower parcel delivery costs?",
    answer:
      "DTC brands can look at their parcel profiles, packaging efficiency, destination mix and service levels — and at whether a multi-carrier setup through a fulfilment partner fits their volumes. What fits is confirmed per operation during qualification.",
  },
  {
    question: "What is intelligent shipping optimisation?",
    answer:
      "Intelligent shipping optimisation is the practice of matching each order to a suitable carrier and service using data — destination, dimensions, weight, service level and rate — instead of shipping everything through one network.",
  },
];

const INTERNAL_LINKS = [
  { href: "/boxable-shipping/", label: "Boxable Shipping" },
  { href: "/boxable-fulfilment/", label: "Boxable Fulfilment" },
  { href: "/knowledge/ecommerce-shipping-guide/", label: "Ecommerce shipping from the Netherlands: a practical guide" },
  { href: "/knowledge/fulfilment-cost-drivers/", label: "What determines ecommerce fulfilment and shipping costs?" },
  { href: "/shopify-fulfilment-europe/", label: "Shopify fulfilment in Europe" },
  { href: "/eu-fulfilment/", label: "EU fulfilment from the Netherlands" },
  { href: "/request-fulfilment-quote/?lang=en", label: "Request a fulfilment quote" },
];

export default async function CherryPickingShippingPage() {
  const __pageT = await getTForContent();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://vareya.ai/" },
    { name: "Cherry Picking Shipping", url: "https://vareya.ai/cherry-picking-shipping/" },
  ]);

  return localizeNode((
    <>
      <script
        type="application/ld+json"
        data-schema="breadcrumb"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-ink to-slate-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(94,234,212,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,.05) 1px, transparent 1px), radial-gradient(circle at 80% 20%, rgba(94,234,212,.15), transparent 26%)",
            backgroundSize: "52px 52px, 52px 52px, auto",
          }}
        />
        <div className="container-site relative py-16 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/55">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page">Cherry Picking Shipping</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-network/20 bg-network/10 px-3 py-1 text-[13px] font-medium text-network">
              Multi-carrier shipping
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Cherry Picking Shipping™: every order matched to a suitable shipping option
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-8 text-white/75">
              <p>
                When an ecommerce brand works with a single carrier, it is limited to that
                carrier&apos;s pricing, delivery network and service levels. At Vareya, we believe
                every order deserves a shipping option that fits the shipment in front of us.
              </p>
              <p>
                That is why we use what we call Cherry Picking Shipping™. Vareya holds shipping
                agreements with multiple international delivery partners, including PostNL,
                Asendia, Deutsche Post, Royal Mail, DPD, DHL and DHL Express. These shipping
                services are connected to our warehouse management system (WMS).
              </p>
              <p>
                For every order that leaves our warehouse, the system compares the available
                shipping methods and selects a suitable option based on destination, package
                dimensions, weight, delivery speed and shipping cost.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/free-rate-scan/?lang=en"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-accent-light"
              >
                {CLAIM_PRIMARY_CTA} →
              </Link>
              <Link
                href="/request-fulfilment-quote/?lang=en"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/5"
              >
                Request a fulfilment quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="what-is-cps">
        <div className="container-site max-w-4xl">
          <h2 id="what-is-cps" className="mb-4 text-3xl font-bold text-ink">
            What is Cherry Picking Shipping?
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p>
              Cherry Picking Shipping is Vareya&apos;s multi-carrier shipping strategy: our
              technology evaluates each shipment individually and determines which carrier and
              shipping service fits that specific order.
            </p>
            <p>
              A lightweight parcel going to Germany may travel through a different network than
              an order going to the United Kingdom, France, the United States or Australia. An
              express shipment may be routed through DHL Express, while a standard delivery may
              go through another carrier with a stronger price–performance ratio for that
              parcel. Rather than forcing every shipment into the same network, we select the
              option that fits.
            </p>
            <p className="font-semibold text-ink">That is Cherry Picking Shipping.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="how-select">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[7fr_5fr]">
            <div>
              <h2 id="how-select" className="mb-4 text-3xl font-bold text-ink">
                How does VareYa select a carrier for each order?
              </h2>
              <div className="space-y-4 leading-7 text-muted">
                <p>
                  Our warehouse management system evaluates factors such as destination, parcel
                  profile and the service the order needs — and compares the carriers available
                  for that route.
                </p>
                <p>
                  For Shopify brands and other ecommerce businesses, much of this process starts
                  at checkout: once the customer selects a shipping option, our technology maps
                  the order to a carrier service that fits. The result is a structured shipping
                  process with minimal manual intervention.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="mb-4 text-base font-semibold text-ink">
                Factors the system evaluates
              </h3>
              <ul className="space-y-2.5 text-sm leading-6 text-muted">
                {SELECTION_FACTORS.map((factor) => (
                  <li key={factor} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {factor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="why-matters">
        <div className="container-site max-w-4xl">
          <h2 id="why-matters" className="mb-4 text-3xl font-bold text-ink">
            Why multi-carrier shipping matters for ecommerce brands
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p>
              Shipping costs have a direct impact on profitability. By combining the shipping
              volumes of all Vareya customers, we negotiate carrier agreements that individual
              brands often cannot obtain on their own. Through a single fulfilment partner,
              brands can access:
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 text-sm leading-6 text-ink"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-7 text-muted">
            Instead of managing multiple carrier contracts and comparing rates manually, brands
            access a multi-carrier shipping strategy through a single fulfilment partner.
          </p>
          <p className="mt-4 leading-7 text-muted">
            This selection happens after the packed order has been assessed.{" "}
            <Link href="/boxable-shipping/" className="font-semibold text-primary hover:underline">
              Boxable Shipping
            </Link>{" "}
            explains that wider packed-order check, and{" "}
            <Link href="/boxable-fulfilment/" className="font-semibold text-primary hover:underline">
              Boxable Fulfilment
            </Link>{" "}
            explains how it sits inside the fulfilment operation.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="intelligent-selection">
        <div className="container-site max-w-4xl">
          <h2 id="intelligent-selection" className="mb-4 text-3xl font-bold text-ink">
            Intelligent carrier selection, order by order
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p>
              A low shipping rate is not automatically the right choice, and neither is the
              quickest service. What decides is the fit between a shipment and the service that
              carries it.
            </p>
            <p>
              For growing Shopify brands, DTC companies and international ecommerce businesses,
              shipping should never be one-size-fits-all. Through Cherry Picking Shipping™, every
              order is routed through the shipping service that offers the right balance of cost,
              speed, reliability and customer experience for that specific shipment.
            </p>
            <p>
              Because when thousands of shipments move through a fulfilment operation every
              month, every shipping decision matters.
            </p>
            <p className="font-semibold text-ink">
              One order. The right shipping option. Every time. That is Cherry Picking
              Shipping™ by Vareya.
            </p>
          </div>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} subheading="The questions brands ask about multi-carrier shipping and carrier selection." />

      <section className="bg-surface py-14" aria-labelledby="related-pages">
        <div className="container-site max-w-4xl">
          <h2 id="related-pages" className="mb-6 text-xl font-bold text-ink">
            Related reading and pages
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {INTERNAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex min-h-12 items-center rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-primary transition-colors hover:border-primary/40"
                >
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner
        title="See how Cherry Picking Shipping could work for your orders"
        subtitle="Share your order profile, destinations and service requirements — Vareya assesses the fit during qualification."
      />
    </>
  ), __pageT);
}

import { localizePageMetadata } from "@/i18n/localize-metadata";
import { localizeNode } from "@/i18n/localize-node";
import { getT as getTForContent } from "@/i18n/server";
import type { Metadata } from "next";


import Link from "@/i18n/Link";
import { FAQ } from "@/components/marketing/FAQ";
import { CTABanner } from "@/components/marketing/CTABanner";
import {
  APPROVED_FACTS,
  CLAIM_CARRIER_SELECTION,
  CLAIM_POSTNL,
  CLAIM_POST_SUBMISSION,
  CLAIM_VOLUME,
} from "@/content/claims";
import { PAGE_META } from "@/content/pages";

const META = PAGE_META["/letterbox-parcel-fulfilment/"];

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
    type: "article",
  },
};
export async function generateMetadata(): Promise<Metadata> { return localizePageMetadata(sourceMetadata, "/letterbox-parcel-fulfilment/"); }

const CHECK_POINTS = [
  {
    title: "Delivery without a handover",
    body: "Check whether the selected service permits delivery through the letterbox. A parcel may still fail to fit or encounter an inaccessible delivery point.",
  },
  {
    title: "Service-specific prices",
    body: "Compare the letterbox service with the relevant parcel service using the same destination and packed weight. Check all applicable fees rather than assuming a saving.",
  },
  {
    title: "Customer requirements",
    body: "Check whether tracking, a signature or a handover is important for the order. Choose the service around those requirements.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Does a letterbox parcel need a signature?",
    answer:
      "By design, letterbox delivery is a no-handover service. If signature or handover matters for your product, choose a standard parcel service instead.",
  },
  {
    question: "Why did my parcel not fit through the letterbox?",
    answer:
      "Check the actual letterbox opening and the packed parcel, including any bulge, filler or item that shifted in transit. Thickness is only one of the dimensions to check.",
  },
  {
    question: "Can Vareya handle both letterbox and standard small parcels?",
    answer: "Yes. Letterbox-friendly products are part of our small-parcel profile; " + APPROVED_FACTS.productFit,
  },
];

const INTERNAL_LINKS = [
  { href: "/jewelry-letterbox-fulfilment/", label: "Jewelry Letterbox Fulfilment" },
  { href: "/boxable-fulfilment/", label: "Boxable fulfilment" },
  { href: "/boxable-shipping/", label: "Boxable Shipping" },
  { href: "/small-parcel-fulfilment-europe/", label: "Small parcel fulfilment in Europe" },
  { href: "/knowledge/fulfilment-cost-drivers/", label: "Fulfilment cost drivers" },
  { href: "/cosmetics-supplements-fulfilment-europe/", label: "Cosmetics and supplements fulfilment" },
  { href: "/request-fulfilment-quote/?lang=en", label: "Request a fulfilment quote" },
];

export default async function LetterboxParcelFulfilmentPage() {
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
            <span aria-current="page">Letterbox parcel fulfilment</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Sending Letterbox-Sized Parcels from the Netherlands: What to Know
            </h1>
            <div className="mb-8 max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 sm:text-xl">
              <p>
                A letterbox parcel is a parcel designed to fit through a letterbox opening, so it
                can be delivered without a doorstep handover. Whether that works depends on the
                packed dimensions, the letterbox opening and the selected delivery service. Do not
                assume a product qualifies just because it is small.
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


      <section className="border-b border-slate-200 bg-slate-50 py-12" aria-labelledby="letterbox-friendly">
        <div className="container-site max-w-4xl">
          <h2 id="letterbox-friendly" className="mb-4 text-2xl font-bold">
            What makes a parcel letterbox-friendly?
          </h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>
              The binding constraint is <strong>thickness</strong>. Length and width matter, but a
              parcel only becomes letterbox-friendly when it can pass through the opening — so
              thin, flat and lightweight is the profile. Choose packaging that protects the
              product and stays within the selected service limits. Do not rely on compressing the
              parcel to make it fit.
            </p>
            <p>
              Exact size and weight allowances differ per carrier and per country, and they change
              over time. In the Netherlands you will see the Dutch term{" "}
              <strong>brievenbuspakje</strong>; in the UK, Royal Mail uses its{" "}
              <strong>large letter</strong> format for the same idea. Always check the current
              rules of the carrier and service you use — and remember they apply to the{" "}
              <strong>packed</strong> parcel, including packaging.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="the-differences">
        <div className="container-site max-w-4xl">
          <h2 id="the-differences" className="mb-5 text-2xl font-bold sm:text-3xl">
            Letterbox parcel, small parcel, mailbox parcel — the differences
          </h2>
          <p className="mb-6 leading-8 text-muted sm:text-lg">
            These terms get mixed up constantly. Here is the practical breakdown:
          </p>
          <ul className="list-disc space-y-3 pl-6 leading-7 text-muted">
            <li>
              <strong>Letterbox parcels</strong> must fit through a letterbox opening. Thickness is
              the limit.
            </li>
            <li>
              <strong>Small parcels</strong> are the wider range. For Vareya,{" "}
              {APPROVED_FACTS.parcelSize} {APPROVED_FACTS.productFit} <strong>Important:</strong>{" "}
              that combined-dimensions profile describes our overall small-parcel range — it is{" "}
              <strong>not</strong> a letterbox limit. A parcel can comfortably sit inside the
              small-parcel range and still be far too thick for a letterbox. Letterbox-friendly is
              a stricter, thickness-driven <strong>subset</strong> of the small-parcel world. See{" "}
              <Link
                href="/small-parcel-fulfilment-europe/"
                className="font-semibold text-primary hover:underline"
              >
                small parcel fulfilment in Europe
              </Link>{" "}
              for the wider profile.
            </li>
            <li>
              <strong>Mailbox parcels / mailbox-friendly parcels</strong> — &quot;mailbox&quot; is
              mostly an American-English word for the same delivery idea, but be careful online:
              searching for &quot;mailbox parcel&quot; often brings up virtual mailbox and
              mail-forwarding services, which are a completely different thing. When we say
              mailbox-friendly, we mean letterbox-compatible.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="what-to-check">
        <div className="container-site max-w-4xl">
          <h2 id="what-to-check" className="mb-6 text-2xl font-bold sm:text-3xl">
            What to check before choosing letterbox delivery
          </h2>
          <div className="space-y-5">
            {CHECK_POINTS.map((point, index) => (
              <article key={point.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="mb-2 font-semibold text-slate-900">
                  {index + 1}. {point.title}
                </h3>
                <p className="text-sm leading-6 text-muted">{point.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 leading-8 text-muted sm:text-lg">
            None of this means every product should be forced through the slot. Fragile items,
            high-value products that benefit from a handover or signature, and anything that needs
            protection beyond a mailer are better served as standard parcels.
          </p>
          <p className="mt-4 leading-8 text-muted">
            Letterbox eligibility is not the same question as Boxable fit.{" "}
            <Link href="/boxable-shipping/" className="font-semibold text-primary hover:underline">
              Boxable Shipping
            </Link>{" "}
            explains how the complete packed order is assessed before a service is chosen, and the{" "}
            <Link href="/boxable-fulfilment/" className="font-semibold text-primary hover:underline">
              Boxable Fulfilment
            </Link>{" "}
            page explains the wider operation.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="lightweight-angle">
        <div className="container-site max-w-4xl">
          <h2 id="lightweight-angle" className="mb-5 text-2xl font-bold sm:text-3xl">
            The lightweight angle
          </h2>
          <p className="leading-8 text-muted sm:text-lg">
            Letterbox-friendly products are almost always on the light side, and lightweight
            products deserve a fulfilment partner who is built around them. Carrier prices step up
            in weight and size bands; small, light, boxable items may fit different price bands and
            storage arrangements. Check packing time and storage needs for the actual order mix.
            That is exactly the profile Vareya is set up for from Breda — we specialise in
            cosmetics, supplements, phone cases, accessories and other smaller parcel products.{" "}
            {CLAIM_VOLUME} {APPROVED_FACTS.productFit}
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20" aria-labelledby="fulfilment-handles">
        <div className="container-site max-w-4xl">
          <h2 id="fulfilment-handles" className="mb-5 text-2xl font-bold sm:text-3xl">
            How fulfilment handles letterbox parcels
          </h2>
          <div className="space-y-4 leading-8 text-muted sm:text-lg">
            <p>
              Letterbox fulfilment is a packaging discipline as much as a shipping one. The same
              product can be letterbox-friendly in one mailer and a standard parcel in another — so
              the packing choice is made per product line, and sometimes per order.{" "}
              {CLAIM_CARRIER_SELECTION} And we agree packing instructions with you before go-live.{" "}
              {CLAIM_POSTNL}
            </p>
            <p>
              If you sell thin, light, boxable products into multiple markets, our{" "}
              <Link
                href="/knowledge/fulfilment-cost-drivers/"
                className="font-semibold text-primary hover:underline"
              >
                fulfilment cost drivers article
              </Link>{" "}
              explains how the cost components fit together — and the{" "}
              <Link href="/free-rate-scan/?lang=en" className="font-semibold text-primary hover:underline">
                free scan
              </Link>{" "}
              is the simplest way to check whether your product profile fits our operation.
            </p>
          </div>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      <section className="py-14" aria-labelledby="related-pages">
        <div className="container-site">
          <h2 id="related-pages" className="mb-6 text-2xl font-bold">
            Related pages
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
        title="Check whether your letterbox-sized products fit our operation"
        subtitle={CLAIM_POST_SUBMISSION}
        primaryHref="/free-rate-scan/?lang=en"
        primaryLabel="Check your EU fulfilment fit"
        secondaryHref="/request-fulfilment-quote/?lang=en"
        secondaryLabel="Request a fulfilment quote"
      />
    </>
  ), __pageT);
}

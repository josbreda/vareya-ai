import { VegaMeltsCaseCard } from "@/components/marketing/VegaMeltsCaseCard";
import { localizePageMetadata } from "@/i18n/localize-metadata";
import { localizeNode } from "@/i18n/localize-node";
import { getT as getTForContent } from "@/i18n/server";
import type { Metadata } from "next";


import Link from "@/i18n/Link";
import { CLAIM_PRIMARY_CTA } from "@/content/claims";
import { KNOWLEDGE_LISTING } from "@/content/knowledge-listing";
import { KNOWLEDGE_IMAGE_BY_SLUG } from "@/content/knowledge-images";
import { breadcrumbSchema } from "@/lib/seo";

const sourceMetadata: Metadata = {
  title: "European Fulfilment Knowledge | Vareya",
  description:
    "Practical guides for evaluating European e-commerce fulfilment, cooperative ownership and Shopify operations.",
  alternates: { canonical: "https://vareya.ai/knowledge/" },
  openGraph: {
    title: "European Fulfilment Knowledge | Vareya",
    description:
      "Decision-focused guides about European fulfilment, cooperative ownership and Shopify operations.",
    url: "https://vareya.ai/knowledge/",
    type: "website",
  },
};
export async function generateMetadata(): Promise<Metadata> { return localizePageMetadata(sourceMetadata, "/knowledge/"); }

// Artwork with text: cropping it would hide qualifiers such as "Not a delay of all packaging rules".
const CONTAINED_CARD_IMAGES = new Set([
  "primal-fx-supplements-fulfilment-evidence",
  "ppwr-epr-representative-suspension",
  "dedication-in-fulfilment",
]);

// Keep the complete artwork sharp, while its colors fill the edge-to-edge card header.
const FULL_BLEED_ARTWORK_CARDS = new Set([
  "ppwr-epr-representative-suspension",
  "dedication-in-fulfilment",
]);

const NEW_PAGES = [
  {
    href: "/cherry-picking-shipping/",
    title: "Cherry Picking Shipping™",
    body: "How Vareya matches each order to a suitable carrier service across multiple international networks.",
  },
  {
    href: "/knowledge/fulfilment-cost-benchmark-report/",
    title: "Fulfilment costs in Europe: how to build a benchmark you can check",
    body: "A like-for-like comparison method with a worksheet you fill in with your own quotes.",
  },
  {
    href: "/knowledge/ecommerce-shipping-guide/",
    title: "Ecommerce shipping from the Netherlands",
    body: "Parcel formats, carrier choices, cost build-up and cross-border basics.",
  },
  {
    href: "/knowledge/europe-expansion-guide/",
    title: "Selling into Europe: a practical guide",
    body: "For US and UK brands moving stock into the EU — corridor by corridor.",
  },
  {
    href: "/knowledge/shopify-fulfilment-guide/",
    title: "Shopify fulfilment in Europe: a practical guide",
    body: "The operational side: data flow, onboarding, capabilities and costs.",
  },
  {
    href: "/small-parcel-fulfilment-europe/",
    title: "Small parcel fulfilment in Europe",
    body: "The format Vareya is built for: small, light and boxable products.",
  },
  {
    href: "/letterbox-parcel-fulfilment/",
    title: "Letterbox parcel fulfilment",
    body: "What makes a parcel letterbox-friendly, and when the format makes sense.",
  },
];

export default async function KnowledgePage() {
  const __pageT = await getTForContent();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://vareya.ai/" },
    { name: "Knowledge", url: "https://vareya.ai/knowledge/" },
  ]);

  return localizeNode((
    <>
      <script
        type="application/ld+json"
        data-schema="breadcrumb"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <section className="relative isolate overflow-hidden bg-primary-950 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element -- existing warehouse photograph */}
        <img
          src="/images/p1/warehouse-racks-20261112.webp"
          alt=""
          aria-hidden="true"
          width={1280}
          height={853}
          loading="eager"
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(100deg, rgba(5,23,29,.91) 0%, rgba(5,23,29,.78) 48%, rgba(5,23,29,.46) 100%)" }}
        />
        <div className="container-site relative py-16 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/85">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page">Knowledge</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-network/20 bg-network/10 px-3 py-1 text-[13px] font-medium text-network">
              Knowledge centre
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Practical fulfilment knowledge
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/95">
              Decision-focused guides for brands assessing European fulfilment. Clear
              operational questions, approved facts and honest boundaries — without inflated
              promises.
            </p>
          </div>
        </div>
      </section>
      <nav aria-label="Knowledge topics" className="container-site py-8"><h2 className="mb-4 text-xl font-bold">Explore fulfilment topics</h2><div className="flex flex-wrap gap-3"><Link href="/knowledge/shiphero-3pl-order-inventory-workflow/" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">ShipHero 3PL software</Link><Link href="/shopify-fulfilment-europe/" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">Shopify Fulfilment</Link><Link href="/knowledge/direct-entry-uk-royal-mail-handover/" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">Direct Entry UK &amp; Royal Mail</Link><Link href="/knowledge/packaging-materials-packed-order-check/" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">Packaging Materials</Link><Link href="/knowledge/supplements-fulfilment-batch-expiry/" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">Supplements Fulfilment</Link><Link href="/knowledge/cosmetics-skincare-fulfilment-packing/" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">Cosmetics / Skincare</Link><Link href="/small-parcel-fulfilment-europe/" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">Lightweight &amp; Small Parcel</Link><Link href="/jewelry-letterbox-fulfilment/" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">Jewelry Letterbox case</Link><Link href="/letterbox-parcel-fulfilment/" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">Letterbox Fulfilment</Link><Link href="/boxable-fulfilment/" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">Boxable Fulfilment</Link><Link href="/boxable-shipping/" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">Boxable Shipping</Link><Link href="/eu-fulfilment/" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">European Fulfilment</Link><Link href="/knowledge/how-onboarding-works-at-vareya/" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">Practical warehouse knowledge</Link><Link href="/knowledge/norwegian-lab-belean-letterbox-example/" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">Norwegian Lab / BeLean</Link></div></nav>


      <section className="py-16 sm:py-24" aria-labelledby="latest-guides">
        <div className="container-site">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Published guides
              </p>
              <h2 id="latest-guides" className="text-3xl font-bold text-ink sm:text-4xl">
                Start with the decision in front of you
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted">
              Each guide separates practical warehouse questions from points that still need
              qualification or specialist input.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {KNOWLEDGE_LISTING.map((article, index) => (
              <article
                key={article.slug}
                className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_14px_45px_rgba(8,26,29,0.05)] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_55px_rgba(8,26,29,0.1)]"
              >
                <div className="relative h-36 overflow-hidden bg-primary-950" aria-hidden="true">
                  {article.slug === "shiphero-vareya-growth-case-study" ? (
                    <div className="absolute inset-0 flex items-center justify-center gap-4 bg-white px-5">
                      {/* Owner request 12 Nov 18:26: VareYa + official ShipHero marks together on
                          this Knowledge card only. No partner-status wording; the article hero
                          image path and bytes remain unchanged. */}
                      {/* eslint-disable-next-line @next/next/no-img-element -- existing static brand asset */}
                      <img
                        src="/images/brand/vareya-lockup-classic.webp"
                        alt="VareYa"
                        width={545}
                        height={122}
                        loading="lazy"
                        decoding="async"
                        className="max-h-8 w-auto max-w-[44%] object-contain"
                      />
                      <span className="h-8 w-px bg-slate-200" aria-hidden="true" />
                      {/* eslint-disable-next-line @next/next/no-img-element -- official ShipHero SVG from shiphero.com */}
                      <img
                        src="/images/p1/shiphero-logo-official.svg"
                        alt="ShipHero"
                        width={169}
                        height={49}
                        loading="lazy"
                        decoding="async"
                        className="max-h-8 w-auto max-w-[44%] object-contain"
                      />
                    </div>
                  ) : KNOWLEDGE_IMAGE_BY_SLUG[article.slug] ? (
                    <>
                      {FULL_BLEED_ARTWORK_CARDS.has(article.slug) && (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element -- reuse the card image for a decorative surround */}
                          <img
                            src={KNOWLEDGE_IMAGE_BY_SLUG[article.slug]}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 h-full w-full scale-125 object-cover opacity-80 blur-xl"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/75 via-primary-950/25 to-primary-950/25" />
                        </>
                      )}
                      {/* Mixed source photography and editorial illustrations; see article context. */}
                      {/* eslint-disable-next-line @next/next/no-img-element -- static WebP export, avoids a runtime optimizer dependency */}
                      <img
                        src={KNOWLEDGE_IMAGE_BY_SLUG[article.slug]}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className={`absolute top-0 h-full ${FULL_BLEED_ARTWORK_CARDS.has(article.slug) ? "left-8 w-[calc(100%_-_4rem)] object-contain" : `left-0 w-full ${CONTAINED_CARD_IMAGES.has(article.slug) ? "bg-white object-contain" : "object-cover"}`}`}
                      />
                      {!CONTAINED_CARD_IMAGES.has(article.slug) && <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/15 to-transparent" />}
                    </>
                  ) : (
                    <div
                      className="absolute inset-0 opacity-70"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(94,234,212,.08) 1px, transparent 1px), linear-gradient(rgba(94,234,212,.08) 1px, transparent 1px), radial-gradient(circle at 35% 55%, rgba(94,234,212,.2), transparent 24%)",
                        backgroundSize: "28px 28px, 28px 28px, auto",
                      }}
                    />
                  )}
                  <span className={`absolute bottom-4 font-mono text-xs font-semibold ${FULL_BLEED_ARTWORK_CARDS.has(article.slug)
                    ? "left-2 flex h-5 w-6 items-center justify-center rounded bg-primary-950 text-network"
                    : `left-5 tracking-[0.15em] ${article.slug === "shiphero-vareya-growth-case-study" ? "text-primary" : "text-network"}`}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="font-semibold uppercase tracking-[0.12em] text-primary">
                      {article.topic}
                    </span>
                    {article.publishedAt ? (
                      <time dateTime={article.publishedAt} className="text-muted">{article.publishedLabel}</time>
                    ) : (
                      <span className="text-muted">{article.publishedLabel ?? "Review draft"}</span>
                    )}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-7 text-ink">
                    <Link href={article.href} className="hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{article.title}</Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">{article.summary}</p>
                  <Link
                    href={article.href}
                    className="mt-6 inline-flex items-center font-semibold text-primary transition-colors group-hover:text-primary-dark"
                  >
                    {article.englishOnly ? "Read the guide (English)" : "Read the guide"} <span className="ml-2" aria-hidden="true">→</span>
                    <span className="sr-only">: {article.title}</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20" aria-labelledby="new-pages">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              New on the site
            </p>
            <h2 id="new-pages" className="text-3xl font-bold text-ink">
              Guides and format pages
            </h2>
            <p className="mt-4 leading-7 text-muted">
              The latest additions: cost, shipping, expansion and Shopify guides, plus the small
              parcel and letterbox format pages.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {NEW_PAGES.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-2xl border border-border bg-white p-5 transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <h3 className="text-base font-semibold leading-6 text-ink">{page.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{page.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20" aria-labelledby="cooperative-path">
        <div className="container-site grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Beyond the warehouse
            </p>
            <h2 id="cooperative-path" className="text-3xl font-bold text-ink">
              Explore Vareya&apos;s possible future cooperative model
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Read the distinction between the operational fulfilment service and the
              exploration of a possible future cooperative model — member ownership,
              democratic governance and allocation of any eligible surplus.
            </p>
          </div>
          <Link
            href="/why-vareya-ai/"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Why Vareya.ai
          </Link>
        </div>
      </section>

      <VegaMeltsCaseCard />
      <section className="photo-green bg-primary py-16 text-white" aria-labelledby="knowledge-cta-heading">
        <div className="container-site max-w-3xl text-center">
          <h2 id="knowledge-cta-heading" className="text-3xl font-bold">
            Turn the reading into an operational review
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            Share your volume, product category, sales channels and target markets so Vareya
            can assess the proposed fulfilment setup.
          </p>
          <Link
            href="/free-rate-scan/?lang=en"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-slate-100"
          >
            {CLAIM_PRIMARY_CTA}
          </Link>
        </div>
      </section>
    </>
  ), __pageT);
}

import type { Metadata } from "next";
import Link from "next/link";
import { CLAIM_PRIMARY_CTA } from "@/content/claims";
import { KNOWLEDGE_ARTICLES } from "@/content/knowledge";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "European Fulfilment Knowledge",
  description:
    "Practical guides for evaluating European e-commerce fulfilment, cooperative ownership and Shopify operations.",
  alternates: { canonical: "https://vareya.ai/knowledge/" },
  openGraph: {
    title: "European Fulfilment Knowledge",
    description:
      "Decision-focused guides about European fulfilment, cooperative ownership and Shopify operations.",
    url: "https://vareya.ai/knowledge/",
    type: "website",
  },
};

export default function KnowledgePage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://vareya.ai/" },
    { name: "Knowledge", url: "https://vareya.ai/knowledge/" },
  ]);

  return (
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
            <span aria-current="page">Knowledge</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-network/20 bg-network/10 px-3 py-1 text-[13px] font-medium text-network">
              Knowledge centre
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Practical fulfilment knowledge
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Decision-focused guides for brands assessing European fulfilment. Clear
              operational questions, approved facts and honest boundaries — without inflated
              promises.
            </p>
          </div>
        </div>
      </section>

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
            {KNOWLEDGE_ARTICLES.map((article, index) => (
              <article
                key={article.slug}
                className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_14px_45px_rgba(8,26,29,0.05)] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_55px_rgba(8,26,29,0.1)]"
              >
                <div className="relative h-36 overflow-hidden bg-primary-950" aria-hidden="true">
                  <div
                    className="absolute inset-0 opacity-70"
                    style={{
                      backgroundImage:
                        index === 0
                          ? "radial-gradient(circle at 28% 45%, rgba(94,234,212,.36) 0 3px, transparent 4px), radial-gradient(circle at 68% 35%, rgba(249,115,22,.34) 0 3px, transparent 4px), linear-gradient(135deg, transparent 34%, rgba(94,234,212,.13) 35%, transparent 36%, transparent 60%, rgba(94,234,212,.1) 61%, transparent 62%)"
                          : index === 1
                            ? "linear-gradient(145deg, transparent 25%, rgba(94,234,212,.16) 26%, rgba(94,234,212,.16) 27%, transparent 28%), radial-gradient(circle at 72% 30%, rgba(249,115,22,.24), transparent 25%)"
                            : "linear-gradient(90deg, rgba(94,234,212,.08) 1px, transparent 1px), linear-gradient(rgba(94,234,212,.08) 1px, transparent 1px), radial-gradient(circle at 35% 55%, rgba(94,234,212,.2), transparent 24%)",
                      backgroundSize: index === 2 ? "28px 28px, 28px 28px, auto" : "auto",
                    }}
                  />
                  <span className="absolute bottom-4 left-5 font-mono text-xs font-semibold tracking-[0.15em] text-network">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="font-semibold uppercase tracking-[0.12em] text-primary">
                      {article.topic}
                    </span>
                    <time dateTime={article.publishedAt} className="text-muted">
                      {article.publishedLabel}
                    </time>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-7 text-ink">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">{article.summary}</p>
                  <Link
                    href={`/knowledge/${article.slug}/`}
                    className="mt-6 inline-flex items-center font-semibold text-primary transition-colors group-hover:text-primary-dark"
                  >
                    Read the guide <span className="ml-2" aria-hidden="true">→</span>
                    <span className="sr-only">: {article.title}</span>
                  </Link>
                </div>
              </article>
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
              Explore why Vareya is developing a cooperative model
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Read the distinction between the operational fulfilment service and Raymond&apos;s
              developing vision for member ownership, democratic governance and allocation of
              any eligible surplus.
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

      <section className="bg-primary py-16 text-white" aria-labelledby="knowledge-cta-heading">
        <div className="container-site max-w-3xl text-center">
          <h2 id="knowledge-cta-heading" className="text-3xl font-bold">
            Turn the reading into an operational review
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            Share your volume, product category, sales channels and target markets so Vareya
            can assess the proposed fulfilment setup.
          </p>
          <Link
            href="/fulfilment-scan/"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-slate-100"
          >
            {CLAIM_PRIMARY_CTA}
          </Link>
        </div>
      </section>
    </>
  );
}

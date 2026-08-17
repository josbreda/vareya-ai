import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CLAIM_PRIMARY_CTA } from "@/content/claims";
import {
  getKnowledgeArticle,
  KNOWLEDGE_ARTICLES,
} from "@/content/knowledge";
import { breadcrumbSchema } from "@/lib/seo";
import {
  KnowledgeChecklist,
  KnowledgeCtaLink,
  KnowledgeViewTracker,
} from "@/components/knowledge/KnowledgeTrackers";

export const dynamicParams = false;

export function generateStaticParams() {
  return KNOWLEDGE_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/knowledge/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);

  if (!article) notFound();

  const canonical = `https://vareya.ai/knowledge/${article.slug}/`;
  const reviewDraft = article.indexable === false;

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical },
    robots: reviewDraft
      ? { index: false, follow: false, nocache: true }
      : undefined,
    openGraph: {
      title: article.title,
      description: article.description,
      url: canonical,
      type: "article",
      ...(article.publishedAt ? { publishedTime: article.publishedAt } : {}),
    },
  };
}

export default async function KnowledgeArticlePage({
  params,
}: PageProps<"/knowledge/[slug]">) {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);

  if (!article) notFound();

  const canonical = `https://vareya.ai/knowledge/${article.slug}/`;
  const reviewDraft = article.indexable === false;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    ...(article.publishedAt ? { datePublished: article.publishedAt } : {}),
    ...(article.reviewedAt ? { dateModified: article.reviewedAt } : {}),
    mainEntityOfPage: canonical,
    author: {
      "@type": "Organization",
      name: "Vareya BV",
      url: "https://vareya.ai/",
    },
    publisher: {
      "@type": "Organization",
      name: "Vareya BV",
      url: "https://vareya.ai/",
    },
    inLanguage: "en-GB",
  };

  const faqSections = article.sections.filter((section) => section.faq?.length);
  const faqSchema =
    faqSections.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqSections.flatMap((section) =>
            (section.faq ?? []).map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          ),
        }
      : null;

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://vareya.ai/" },
    { name: "Knowledge", url: "https://vareya.ai/knowledge/" },
    { name: article.title, url: canonical },
  ]);
  const relatedArticles = KNOWLEDGE_ARTICLES.filter(
    (candidate) => candidate.slug !== article.slug,
  );

  const primaryCtaLabel = article.primaryCta?.label ?? CLAIM_PRIMARY_CTA;
  const primaryCtaRoute = article.primaryCta?.route ?? "/free-rate-scan/";

  return (
    <>
      <KnowledgeViewTracker slug={article.slug} />

      <script
        type="application/ld+json"
        data-schema="article"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        data-schema="breadcrumb"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          data-schema="faq"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article>
        <header className="border-b border-border bg-surface">
          <div className="container-site max-w-4xl py-12 sm:py-16">
            <nav aria-label="Breadcrumb" className="mb-9 text-sm text-muted">
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/knowledge/" className="transition-colors hover:text-primary">
                Knowledge
              </Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page" className="text-ink">{article.topic}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="font-semibold uppercase tracking-[0.14em] text-primary">
                {article.topic}
              </span>
              {article.publishedLabel && (
                <>
                  <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
                  <time dateTime={article.publishedAt ?? undefined} className="text-muted">
                    {article.publishedLabel}
                  </time>
                </>
              )}
              {reviewDraft && (
                <span className="rounded-full border border-amber-400/50 bg-amber-400/10 px-3 py-0.5 text-xs font-semibold text-amber-700">
                  Review draft
                </span>
              )}
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {article.description}
            </p>
          </div>
        </header>

        <div className="container-site max-w-4xl py-14 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_180px]">
            <div className="min-w-0">
              {article.sections.map((section, index) => (
                <section
                  key={section.heading}
                  aria-labelledby={`section-${index + 1}`}
                  className="not-first:mt-14"
                >
                  <p className="mb-3 font-mono text-xs font-semibold tracking-[0.16em] text-accent" aria-hidden="true">
                    0{index + 1}
                  </p>
                  <h2
                    id={`section-${index + 1}`}
                    className="text-2xl font-bold text-ink sm:text-3xl"
                  >
                    {section.heading}
                  </h2>

                  {section.paragraphs && section.paragraphs.length > 0 && (
                    <div className="mt-5 space-y-5 text-[1.03rem] leading-8 text-muted">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {section.bullets && (
                    <ul className="mt-6 space-y-3 rounded-2xl border border-border bg-surface p-6 text-sm leading-6 text-muted">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.table && (
                    <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-surface">
                      <table className="w-full min-w-[640px] border-collapse text-left text-sm leading-6 text-muted">
                        <caption className="sr-only">{section.heading}</caption>
                        <thead>
                          <tr className="border-b border-border">
                            {section.table.headers.map((header) => (
                              <th
                                key={header}
                                scope="col"
                                className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-ink"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, rowIndex) => (
                            <tr
                              key={row.join("|")}
                              className={
                                rowIndex % 2 === 1 ? "bg-surface" : "bg-white"
                              }
                            >
                              {row.map((cell, cellIndex) => (
                                <td
                                  key={cell}
                                  className={`border-b border-border/60 px-4 py-3 align-top ${
                                    cellIndex === 0 ? "font-semibold text-ink" : ""
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {section.checklist && (
                    <KnowledgeChecklist slug={article.slug} items={section.checklist} />
                  )}

                  {section.faq && (
                    <div className="mt-6 space-y-6">
                      {section.faq.map((item) => (
                        <div
                          key={item.q}
                          className="rounded-2xl border border-border bg-surface p-6"
                        >
                          <h3 className="text-base font-semibold text-ink">
                            {item.q}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-muted">
                            {item.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.sources && (
                    <ol className="mt-6 space-y-3 rounded-2xl border border-border bg-surface p-6 text-sm leading-6 text-muted">
                      {section.sources.map((source, sourceIndex) => (
                        <li key={source.url} className="flex gap-3">
                          <span className="shrink-0 font-mono text-xs font-semibold text-primary">
                            {sourceIndex + 1}.
                          </span>
                          <a
                            href={source.url}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                          >
                            {source.label}
                          </a>
                        </li>
                      ))}
                    </ol>
                  )}

                  {section.reviewNote && (
                    <div className="mt-6 rounded-2xl border border-amber-400/40 bg-amber-400/5 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
                        {article.reviewer && article.reviewedAt
                          ? `Reviewed by ${article.reviewer} on ${article.reviewedAt}`
                          : "Human contribution and review"}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {section.reviewNote}
                      </p>
                    </div>
                  )}
                </section>
              ))}
            </div>

            <aside className="hidden lg:block" aria-label="On this page">
              <div className="sticky top-24 border-l border-border pl-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                  On this page
                </p>
                <ol className="mt-4 space-y-3">
                  {article.sections.map((section, index) => (
                    <li key={section.heading}>
                      <a
                        href={`#section-${index + 1}`}
                        className="text-xs leading-5 text-muted transition-colors hover:text-primary"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="border-y border-border bg-surface py-14 sm:py-16" aria-labelledby="related-guides">
        <div className="container-site max-w-5xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                Continue the review
              </p>
              <h2 id="related-guides" className="text-2xl font-bold text-ink">
                Related guides
              </h2>
            </div>
            <Link href="/knowledge/" className="text-sm font-semibold text-primary hover:underline">
              All knowledge
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/knowledge/${related.slug}/`}
                className="rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  {related.topic}
                </span>
                <h3 className="mt-2 text-lg font-semibold leading-7 text-ink">
                  {related.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{related.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white" aria-labelledby="article-cta-heading">
        <div className="container-site max-w-3xl text-center">
          <h2 id="article-cta-heading" className="text-3xl font-bold">
            Check the operation against your order profile
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            The Free Rate Scan collects the practical inputs Vareya needs for an initial fit
            review. Product fit is confirmed during qualification.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <KnowledgeCtaLink
              href={primaryCtaRoute}
              label={primaryCtaLabel}
              ctaLocation="footer"
              slug={article.slug}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-slate-100"
            />
            {article.secondaryCta && (
              <Link
                href={article.secondaryCta.route}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                {article.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

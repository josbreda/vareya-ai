import Link from "@/i18n/Link";
import { getT } from "@/i18n/server";
import { HOME_KNOWLEDGE_ARTICLES } from "@/content/knowledge-listing";
import { KNOWLEDGE_IMAGE_BY_SLUG } from "@/content/knowledge-images";
import { ArticleTicker } from "./ArticleTicker";

export async function KnowledgeHighlights() {
  const t = await getT();
  const cards = (cloned: boolean) => HOME_KNOWLEDGE_ARTICLES.map((article) => (
    <article key={article.slug} className="min-w-0" data-article-card data-copy={cloned} aria-hidden={cloned ? true : undefined}>
      <Link href={article.href} tabIndex={cloned ? -1 : undefined} className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition-colors hover:border-primary/60 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-primary">
        <div className="aspect-video overflow-hidden bg-primary-950" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element -- existing optimized editorial assets */}
          <img src={KNOWLEDGE_IMAGE_BY_SLUG[article.slug]} alt="" width={853} height={570} loading="lazy" decoding="async" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-1 flex-col p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">{t(article.topic)}</p>
          <h3 className="mt-2 text-lg font-semibold leading-6 text-ink">{t(article.title)}</h3>
          <p className="mt-2 flex-1 text-sm leading-5 text-muted">{t(article.summary)}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">{t(article.englishOnly ? "Read article (English)" : "Read article")} <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  ));
  return (
    <section id="home-knowledge" className="border-b border-border bg-surface py-10 sm:py-12" aria-labelledby="home-knowledge-heading">
      <div className="container-site">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">{t("From the knowledge bank")}</p>
            <h2 id="home-knowledge-heading" className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{t("Practical fulfilment guides")}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{t("Ideas and examples on packaging, fulfilment and international shipping.")}</p>
          </div>
          <Link href="/knowledge/" data-knowledge-index className="inline-flex min-h-12 w-fit shrink-0 items-center gap-3 rounded-lg border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            {t("Explore the knowledge bank")} <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <ArticleTicker copies={cards(true)}>{cards(false)}</ArticleTicker>
      </div>
    </section>
  );
}

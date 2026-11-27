import type { Metadata } from "next";
import Image from "next/image";
import type { EditorialArticle, EditorialBlock, EditorialInline } from "@/content/editorial-articles";
import { KNOWLEDGE_IMAGE_BY_SLUG } from "@/content/knowledge-images";
import { KnowledgeViewTracker } from "@/components/knowledge/KnowledgeTrackers";
import Link from "@/i18n/Link";
import { getT, reviewRobots } from "@/i18n/server";
import { breadcrumbSchema } from "@/lib/seo";
import spacing from "./editorial-spacing.module.css";

const IMAGE_WIDTH = 1280;
const IMAGE_HEIGHT = 853;

function canonicalUrl(article: EditorialArticle): string {
  return `https://vareya.ai/knowledge/${article.slug}/`;
}

/** English-only body: one clean canonical and no alternates for untranslated languages. */
export function editorialMetadata(article: EditorialArticle): Metadata {
  const url = canonicalUrl(article);
  const image = KNOWLEDGE_IMAGE_BY_SLUG[article.slug];
  return {
    title: { absolute: article.metaTitle },
    description: article.description,
    alternates: { canonical: url },
    robots: reviewRobots(),
    openGraph: {
      title: article.metaTitle,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      images: [{ url: image, width: IMAGE_WIDTH, height: IMAGE_HEIGHT, alt: article.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.description,
      images: [image],
    },
  };
}

function Inline({ content }: { content: readonly EditorialInline[] }) {
  return content.map((part, index) => {
    if (typeof part === "string") return part;
    if (part.href) {
      return (
        <a
          key={index}
          href={part.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary underline underline-offset-4"
        >
          {part.text}
        </a>
      );
    }
    return <strong key={index} className="font-semibold text-ink">{part.text}</strong>;
  });
}

function Block({ block }: { block: EditorialBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="pt-7 text-2xl font-bold text-ink sm:text-3xl"><Inline content={block.content} /></h2>;
    case "h3":
      return <h3 className="pt-3 text-xl font-semibold text-ink"><Inline content={block.content} /></h3>;
    case "ul":
      return (
        <ul className="list-disc space-y-2 pl-6">
          {block.items.map((item, index) => <li key={index}><Inline content={item} /></li>)}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm leading-6">
            <thead>
              <tr className="border-b border-border">
                {block.headers.map((header) => (
                  <th key={header} scope="col" className="px-4 py-3 font-semibold text-ink">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]} className="border-b border-border/60 last:border-b-0">
                  {row.map((cell, index) => (
                    <td key={index} className={`px-4 py-3 align-top ${index === 0 ? "font-semibold text-ink" : ""}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return (
        <p className={block.status ? "rounded-2xl border border-border bg-white p-5 text-base leading-7" : undefined}>
          <Inline content={block.content} />
        </p>
      );
  }
}

export async function EditorialArticlePage({
  article,
  author,
}: {
  article: EditorialArticle;
  author: Record<string, string>;
}) {
  const t = await getT();
  const url = canonicalUrl(article);
  const image = KNOWLEDGE_IMAGE_BY_SLUG[article.slug];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    mainEntityOfPage: url,
    inLanguage: "en-GB",
    image: [`https://vareya.ai${image}`],
    author,
    publisher: { "@type": "Organization", name: "Vareya BV", url: "https://vareya.ai/" },
  };
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://vareya.ai/" },
    { name: "Knowledge", url: "https://vareya.ai/knowledge/" },
    { name: article.title, url },
  ]);

  return (
    <>
      <KnowledgeViewTracker slug={article.slug} />
      <script type="application/ld+json" data-schema="article" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" data-schema="breadcrumb" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <article>
        <header className="border-b border-border bg-surface">
          <div className={`container-site ${spacing.responsive}`} style={{ maxWidth: "56rem", paddingBlock: "var(--editorial-padding)" }}>
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
              <Link href="/" className="hover:text-primary">{t("Home")}</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/knowledge/" className="hover:text-primary">{t("Knowledge")}</Link>
            </nav>
            <div lang="en-GB">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Vareya Knowledge Bank</p>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">{article.title}</h1>
              <div className="mt-6 text-lg leading-8 text-muted">
                {article.lead.map((block, index) => <Block key={index} block={block} />)}
              </div>
              <figure className="mt-9">
                <Image
                  src={image}
                  alt={article.imageAlt}
                  width={IMAGE_WIDTH}
                  height={IMAGE_HEIGHT}
                  sizes="(max-width: 900px) 100vw, 832px"
                  preload
                  className="h-auto w-full rounded-2xl"
                />
                <figcaption className="mt-3 text-sm leading-6 text-muted">{article.caption}</figcaption>
              </figure>
            </div>
          </div>
        </header>
        <div lang="en-GB" className={`container-site ${spacing.responsive}`} style={{ maxWidth: "48rem", paddingBlock: "var(--editorial-padding)" }}>
          <div className="space-y-5 text-lg leading-8 text-muted">
            {article.body.map((block, index) => <Block key={index} block={block} />)}
          </div>
        </div>
      </article>
    </>
  );
}

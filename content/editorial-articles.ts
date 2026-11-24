import type { KnowledgeArticle } from "./knowledge";
import dedication from "./dedication-article.json";
import ppwrEpr from "./ppwr-epr-article.json";

/**
 * English-only editorials supplied as finished text. Their body lives in the
 * JSON files as ordered blocks and is rendered by `EditorialArticlePage`, so
 * the supplied wording, links and tables stay exactly as delivered.
 */
export type EditorialInline =
  | string
  | { text: string; href?: string; strong?: boolean };

export type EditorialBlock =
  | { type: "p"; content: readonly EditorialInline[]; status?: boolean }
  | { type: "h2" | "h3"; content: readonly EditorialInline[] }
  | { type: "ul"; items: readonly (readonly EditorialInline[])[] }
  | { type: "table"; headers: readonly string[]; rows: readonly (readonly string[])[] };

export interface EditorialArticle {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  topic: string;
  publishedAt: string;
  publishedLabel: string;
  imageAlt: string;
  caption: string;
  lead: readonly EditorialBlock[];
  body: readonly EditorialBlock[];
}

export const DEDICATION_ARTICLE = dedication as EditorialArticle;
export const PPWR_EPR_ARTICLE = ppwrEpr as EditorialArticle;

/** Listing, sitemap and related-guide entries; the dedicated routes render the body. */
export const EDITORIAL_LISTING: readonly KnowledgeArticle[] = [
  PPWR_EPR_ARTICLE,
  DEDICATION_ARTICLE,
].map(({ slug, title, description, topic, publishedAt, publishedLabel, imageAlt }) => ({
  slug,
  title,
  description,
  summary: description,
  topic,
  publishedAt,
  publishedLabel,
  imageAlt,
  englishOnly: true,
  sections: [],
}));

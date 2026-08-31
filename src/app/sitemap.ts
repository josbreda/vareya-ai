import { MetadataRoute } from "next";
import { PAGE_META } from "@/content/pages";
import { KNOWLEDGE_ARTICLES } from "@/content/knowledge";

/**
 * Dynamic sitemap — only includes indexable routes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const [path, meta] of Object.entries(PAGE_META)) {
    if (meta.noIndex) continue;

    entries.push({
      url: meta.canonical,
      lastModified: meta.updatedAt ? new Date(meta.updatedAt) : undefined,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1.0 : 0.8,
    });
  }

  // Knowledge articles (indexable only — review drafts stay out)
  for (const article of KNOWLEDGE_ARTICLES) {
    if (article.indexable === false) continue;
    entries.push({
      url: `https://vareya.ai/knowledge/${article.slug}/`,
      lastModified: new Date(article.publishedAt ?? article.reviewedAt ?? Date.now()),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}

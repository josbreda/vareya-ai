import { MetadataRoute } from "next";
import { PAGE_META } from "@/content/pages";

/**
 * Dynamic sitemap — only includes indexable routes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const [path, meta] of Object.entries(PAGE_META)) {
    if (meta.noIndex) continue;

    entries.push({
      url: meta.canonical,
      lastModified: new Date(),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1.0 : 0.8,
    });
  }

  return entries;
}

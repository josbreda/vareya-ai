import type { Metadata } from "next";
import { buildMetadataAlternates, LOCALE_META, localeMeta } from "./core";
import { getRequestI18n, reviewRobots } from "./server";

/** Localize existing metadata without changing a page's publication policy. */
export async function localizePageMetadata(source: Metadata, path: string): Promise<Metadata> {
  const { t, locale } = await getRequestI18n();
  const title = typeof source.title === "string" ? t(source.title) : source.title;
  const description = source.description ? t(source.description) : source.description;
  const alternates = buildMetadataAlternates(path, locale);
  return {
    ...source, title, description,
    alternates: { ...source.alternates, ...alternates },
    robots: reviewRobots() ?? source.robots,
    openGraph: {
      ...source.openGraph,
      title: typeof source.openGraph?.title === "string" ? t(source.openGraph.title) : title ?? undefined,
      description: source.openGraph?.description ? t(source.openGraph.description) : description ?? undefined,
      url: alternates.canonical,
      locale: localeMeta(locale).ogLocale,
      alternateLocale: LOCALE_META.filter(item => item.code !== locale).map(item => item.ogLocale),
    },
    ...(source.twitter ? { twitter: {
      ...source.twitter,
      title: typeof source.twitter.title === "string" ? t(source.twitter.title) : title ?? undefined,
      description: source.twitter.description ? t(source.twitter.description) : description ?? undefined,
    } } : {}),
  };
}

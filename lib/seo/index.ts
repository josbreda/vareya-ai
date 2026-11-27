import { Metadata } from "next";
import { PAGE_META, PageMeta } from "@/content/pages";
import { SAME_AS } from "@/content/social";

/**
 * Builds page metadata from the central PAGE_META registry.
 * Falls back to default Vareya metadata if path not found.
 */
export function buildMetadata(path: string): Metadata {
  const meta: PageMeta | undefined = PAGE_META[path];

  if (!meta) {
    return {
      title: "Vareya | European Fulfilment",
      description:
        "Fast, reliable order fulfilment from Breda, the Netherlands.",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
    },
    robots: meta.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
      siteName: "Vareya",
      locale: "en_GB",
      type: "website",
    },
  };
}

/**
 * Returns structured data for Organization schema.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vareya BV",
    url: "https://vareya.ai",
    email: "info@vareya.ai",
    telephone: "+31 6 19 12 34 72",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bagven Park 6",
      postalCode: "4838 EH",
      addressLocality: "Breda",
      addressCountry: "NL",
    },
    sameAs: [...SAME_AS],
  };
}

/**
 * Returns structured data for WebSite schema.
 */
export function websiteSchema(
  locale: string = "en",
  t?: (key: string) => string,
) {
  const description =
    "European fulfilment for growing e-commerce brands. Based in Breda, the Netherlands.";
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vareya",
    url: "https://vareya.ai",
    description: t ? t(description) : description,
    inLanguage: locale === "en" ? "en-GB" : locale,
  };
}

/**
 * Returns structured data for BreadcrumbList schema.
 */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

import { Metadata } from "next";
import { PAGE_META, PageMeta } from "@/content/pages";

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
    // KVK 65877535 / VAT NL856299790B02 — already published as text on
    // /about/; approved for publication 21 August 2026 (claims-register.md,
    // "Entity decisions approved 21 August 2026"). taxID carries the KVK
    // trade-register number since schema.org has no dedicated KVK property.
    taxID: "65877535",
    vatID: "NL856299790B02",
    // Approved 3 September 2026, claims-register.md Decision 5 — certified
    // KVK trade-register extract: deed of incorporation 15-04-2016, first
    // registration 21-04-2016. Employee count and director details stay
    // unpublished per that decision.
    foundingDate: "2016-04-15",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bagven Park 6",
      postalCode: "4838 EH",
      addressLocality: "Breda",
      addressCountry: "NL",
    },
    sameAs: [
      "https://nl.linkedin.com/company/vareya",
      "https://www.fulfilmentshortlist.com/partijen/vareya",
      "https://www.crunchbase.com/organization/vareya",
      "https://www.creditsafe.com/business-index/en-gb/company/vareya-bv-nl04232551",
    ],
  };
}

/**
 * Returns structured data for WebSite schema.
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vareya",
    url: "https://vareya.ai",
    description:
      "European fulfilment for growing e-commerce brands. Based in Breda, the Netherlands.",
    inLanguage: "en-GB",
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

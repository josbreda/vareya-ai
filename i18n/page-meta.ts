import type { Metadata } from "next";
import { PAGE_META } from "@/content/pages";

import {
  LOCALE_META,
  buildMetadataAlternates,
  localeMeta,
} from "./core";
import { getRequestI18n, reviewRobots } from "./server";

interface LocalizedPageMeta {
  title: string;
  description: string;
  noIndex?: boolean;
  openGraph?: { title: string; description: string };
}

const OG_IMAGE = "https://vareya.ai/og/vareya-og-artwork-20261015.jpg";
const OG_IMAGE_ALT =
  "VareYa brand artwork — a white cube in a glowing green hexagon above the VareYa wordmark, on a dark tech background.";

/**
 * English SEO source for the eleven scoped routes. Values match the metadata
 * the pages exported before localization, so the English rendering is
 * unchanged; the catalogue translates these exact strings.
 */
export const LOCALIZED_PAGE_META: Record<string, LocalizedPageMeta> = {
  "/": {
    title: PAGE_META["/"].title,
    description: PAGE_META["/"].description,
  },
  "/about/": {
    title: "About Vareya | European Fulfilment from the Netherlands",
    description:
      "Vareya fulfils e-commerce orders from Breda, the Netherlands. Shopify integration, multi-carrier delivery, returns handling available.",
  },
  "/why-vareya-ai/": {
    title: "Why Vareya.ai: A Cooperative Fulfilment Vision | Vareya",
    description:
      "Vareya's vision for cooperative fulfilment: a possible future cooperative model with democratic member ownership, shared scale and rules for returning eligible surplus to members.",
    openGraph: {
      title: "Why Vareya.ai: A Cooperative Fulfilment Vision | Vareya",
      description:
        "A possible future member-owned model for organising European e-commerce fulfilment together.",
    },
  },
  "/eu-fulfilment/": {
    title: "EU Fulfilment from the Netherlands | Vareya",
    description:
      "How Vareya uses a warehouse in Breda, the Netherlands, to fulfil ecommerce orders across Europe, covering shipping, returns and onboarding.",
  },
  "/contact/": {
    title: "Contact Vareya | European Fulfilment",
    description:
      "Get in touch with Vareya. Bagven Park 6, 4838 EH Breda, the Netherlands. Call +31 6 19 12 34 72 or email info@vareya.ai.",
  },
  "/free-rate-scan/": {
    title: "Check Your EU Fulfilment Fit | Vareya",
    description:
      "Quick self-assessment to see if Vareya fulfilment is right for your e-commerce brand. Takes a few minutes.",
  },
  "/request-fulfilment-quote/": {
    title: "Request a Fulfilment Quote | Vareya",
    description:
      "Request a tailored fulfilment quote from Vareya. Tell us about your brand, volumes, and needs.",
  },
  "/privacy/": {
    title: "Privacy Policy | Vareya",
    description: "How Vareya collects, uses, and protects your personal data.",
  },
  "/cookies/": {
    title: "Cookie Policy | Vareya",
    description: "How Vareya uses cookies and similar technologies on our website.",
  },
  "/thank-you/quote/": {
    title: "Thank You | Vareya",
    description: "Thank you for requesting a fulfilment quote.",
    noIndex: true,
  },
  "/thank-you/scan/": {
    title: "Thank You | Vareya",
    description: "Thank you for completing the fulfilment scan.",
    noIndex: true,
  },
};

export const LOCALIZED_PAGE_PATHS = Object.keys(LOCALIZED_PAGE_META);

export async function buildLocalizedMetadata(path: string): Promise<Metadata> {
  const { locale, t } = await getRequestI18n();
  const source = LOCALIZED_PAGE_META[path];
  if (!source) return {};

  const alternates = buildMetadataAlternates(path, locale);
  const title = t(source.title);
  const description = t(source.description);
  const ogTitle = t(source.openGraph?.title ?? source.title);
  const ogDescription = t(source.openGraph?.description ?? source.description);

  return {
    title,
    description,
    alternates,
    robots: source.noIndex
      ? { index: false, follow: false }
      : (reviewRobots() ?? { index: true, follow: true }),
    openGraph: {
      type: "website",
      siteName: "Vareya",
      title: ogTitle,
      description: ogDescription,
      url: alternates.canonical,
      locale: localeMeta(locale).ogLocale,
      alternateLocale: LOCALE_META.filter((item) => item.code !== locale).map(
        (item) => item.ogLocale,
      ),
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: t(OG_IMAGE_ALT) }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [OG_IMAGE],
    },
  };
}

import { KNOWLEDGE_ARTICLES, type KnowledgeArticle } from "./knowledge";

/** Listing-only entries keep their existing canonical URL; no duplicate article route. */
export type KnowledgeListingEntry = Pick<KnowledgeArticle,
  "slug" | "title" | "summary" | "topic" | "publishedAt" | "publishedLabel"
> & { href: string; englishOnly?: boolean };

export const JEWELRY_KNOWLEDGE_ENTRY: KnowledgeListingEntry = {
  slug: "jewelry-letterbox-fulfilment",
  href: "/jewelry-letterbox-fulfilment/",
  title: "Jewelry Letterbox Fulfilment™",
  summary: "See how compact jewelry orders are packed for international shipping, with a packaging video and practical examples.",
  topic: "Jewelry & packaging",
  // This is a newly featured existing page, not a newly published article.
  publishedAt: null,
  publishedLabel: "Featured guide",
  englishOnly: true,
};

export const KNOWLEDGE_LISTING: readonly KnowledgeListingEntry[] = [
  JEWELRY_KNOWLEDGE_ENTRY,
  ...KNOWLEDGE_ARTICLES.map((article) => ({
    ...article,
    href: `/knowledge/${article.slug}/`,
  })),
];

function existingGuide(slug: string): KnowledgeListingEntry {
  const entry = KNOWLEDGE_LISTING.find((article) => article.slug === slug);
  if (!entry) throw new Error(`Missing featured knowledge guide: ${slug}`);
  return entry;
}

export const HOME_KNOWLEDGE_ARTICLES: readonly KnowledgeListingEntry[] = [
  JEWELRY_KNOWLEDGE_ENTRY,
  {
    ...existingGuide("smarter-ecommerce-packaging-shipping-profile"),
    englishOnly: true,
    title: "Smarter ecommerce packaging",
    summary: "How product dimensions, protection and packaging shape the shipping options for an order.",
  },
  {
    ...existingGuide("european-fulfilment-international-ecommerce-shipping-netherlands"),
    englishOnly: true,
    title: "International shipping from the Netherlands",
    summary: "A practical look at stock, orders, tracking and returns when shipping to international customers.",
  },
];

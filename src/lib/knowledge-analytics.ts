/**
 * Knowledge article analytics — dataLayer events for knowledge pages.
 * PII-FREE: never push names, emails, companies, phones, websites, scan
 * answers, destination splits, dimensions, weights, SKU counts, comments
 * or submission IDs. Only article slugs, CTA locations and site routes.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function push(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}

export function trackKnowledgeArticleView(articleSlug: string) {
  push("knowledge_article_view", { article_slug: articleSlug });
}

export function trackQuotationChecklistView(articleSlug: string) {
  push("quotation_checklist_view", { article_slug: articleSlug });
}

export function trackFreeRateScanCtaClick(
  ctaLocation: "checklist" | "footer" | "body",
  destinationUrl: string,
  articleSlug: string,
) {
  push("free_rate_scan_cta_click", {
    cta_location: ctaLocation,
    destination_url: destinationUrl,
    article_slug: articleSlug,
  });
}

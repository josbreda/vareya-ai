/**
 * Knowledge article analytics — consent-gated dataLayer events for knowledge
 * pages. Every event goes through the shared trackEvent allowlist, so it is
 * dropped before consent and never carries article slugs, destination URLs,
 * campaign values, answers or submission IDs.
 */

import { trackEvent } from "./analytics/events.js";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackKnowledgeArticleView(articleSlug: string) {
  void articleSlug;
  trackEvent("knowledge_article_view");
}

export function trackQuotationChecklistView(articleSlug: string) {
  void articleSlug;
  trackEvent("quotation_checklist_view");
}

export function trackFreeRateScanCtaClick(
  ctaLocation: "checklist" | "footer" | "body",
  destinationUrl: string,
  articleSlug: string,
) {
  void destinationUrl;
  void articleSlug;
  trackEvent("free_rate_scan_cta_click", { cta_location: ctaLocation });
}

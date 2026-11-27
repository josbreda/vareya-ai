"use client";

import { useAnalyticsConsent } from "@/lib/analytics/useAnalyticsConsent";

/**
 * Loads GTM only once cookie consent has been accepted — either on this
 * page load (if consent was already stored in an earlier session) or the
 * moment ConsentBanner dispatches 'cookie_consent_updated'. Renders
 * nothing; the hook owns script injection. Replaces the previous
 * unconditional <GTM /> head-load, which fired before any consent
 * decision regardless of the visitor's choice.
 */
export function AnalyticsLoader() {
  useAnalyticsConsent();
  return null;
}

/**
 * Analytics event tracking utilities.
 * All events go through dataLayer for GTM/GA4.
 * NEVER send PII (names, emails, phones, form answers).
 */

type EventParams = Record<string, string | number | boolean>;

/**
 * Push an event to the dataLayer.
 * Safe to call on server (no-op).
 */
export function trackEvent(eventName: string, params?: EventParams): void {
  if (typeof window === "undefined") return;

  const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
  if (!dataLayer) return;

  dataLayer.push({
    event: eventName,
    ...params,
  });
}

/**
 * Specific event helpers — enforce no-PII by only accepting approved params.
 */

export function trackPageView(path: string, title: string): void {
  trackEvent("page_view", { page_path: path, page_title: title });
}

export function trackCTAClick(label: string, href: string): void {
  trackEvent("cta_click", { cta_label: label, cta_href: href });
}

export function trackScanStart(): void {
  trackEvent("scan_start", {});
}

export function trackScanStep(step: number, stepTitle: string): void {
  trackEvent("scan_step", { step_number: step, step_title: stepTitle });
}

export function trackScanComplete(submissionId?: string): void {
  trackEvent("scan_complete", submissionId ? { has_submission_id: true } : {});
}

export function trackQuoteFormStart(): void {
  trackEvent("quote_form_start", {});
}

export function trackQuoteFormSubmit(): void {
  trackEvent("quote_form_submit", {});
}

export function trackEmailClick(): void {
  trackEvent("email_click", {});
}

export function trackPhoneClick(): void {
  trackEvent("phone_click", {});
}

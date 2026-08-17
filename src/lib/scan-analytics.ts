/**
 * Scan analytics — dataLayer events for the fulfilment scan.
 * PII-FREE: never push names, emails, phones, websites, destinations,
 * dimensions, weights, SKU counts, pallet counts, comments or submission IDs.
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

export function trackRateScanView() {
  push("rate_scan_view", { scan_page: "/free-rate-scan/" });
}

export function trackRateScanStart() {
  push("rate_scan_start");
}

export function trackRateScanStep(stepIndex: number, stepId: string) {
  push("rate_scan_step", { step_index: stepIndex, step_id: stepId });
}

export function trackRateScanBack(stepIndex: number) {
  push("rate_scan_back", { step_index: stepIndex });
}

export function trackRateScanValidationError(stepId: string) {
  push("rate_scan_validation_error", { step_id: stepId });
}

export function trackRateScanComplete() {
  push("rate_scan_complete");
}

export function trackQuotationProfileComplete() {
  push("quotation_profile_complete");
}

export function trackQuotationProfileIncomplete() {
  push("quotation_profile_incomplete");
}

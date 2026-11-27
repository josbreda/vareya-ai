/** Consent-gated scan events. No UTM values or free text enter analytics.
 * Per-attempt view/start/step/complete refs belong to the form, not global
 * helper state. Calls dropped before consent must never be replayed.
 */
import { trackEvent, type SubmitErrorReason } from "./analytics/events.js";
import type { AttributionParams } from "./attribution.js";
declare global { interface Window { dataLayer?: Record<string, unknown>[]; } }
export type ScanAttribution = AttributionParams;
export type { SubmitErrorReason };
export function trackRateScanView() { trackEvent("rate_scan_view"); }
export function trackRateScanStart() { trackEvent("rate_scan_start"); }
export function trackRateScanStep(stepIndex: number, stepId: string) { trackEvent("rate_scan_step", { step_index: stepIndex, step_id: stepId }); }
export function trackRateScanBack(stepIndex: number) { trackEvent("rate_scan_back", { step_index: stepIndex }); }
export function trackRateScanValidationError(stepId: string) { trackEvent("rate_scan_validation_error", { step_id: stepId }); }
export function trackRateScanComplete(attribution?: ScanAttribution) { void attribution; trackEvent("rate_scan_complete"); }
export function trackRateScanSubmitError(reason?: SubmitErrorReason) { trackEvent("rate_scan_submit_error", { reason: reason ?? "unknown" }); }
export function trackQuotationProfileComplete() { trackEvent("quotation_profile_complete"); }
export function trackQuotationProfileIncomplete() { trackEvent("quotation_profile_incomplete"); }

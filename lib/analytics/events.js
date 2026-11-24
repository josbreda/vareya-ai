import { sendGa4Event } from "./ga4.js";
import { hasAnalyticsConsent } from "./consent.js";
export const FUNNEL_DEFINITION = "2026-10-29-first-change-v1";
export const SCAN_STEP_IDS = ["volume", "category", "markets", "platform", "needs", "contact"];
export const SUBMIT_ERROR_REASONS = ["validation", "turnstile_missing", "turnstile_expired", "turnstile_error", "network", "timeout", "rejected", "storage_unavailable", "unknown"];
const EVENTS = new Set(["product_fit_start", "product_fit_result", "product_fit_handoff", "page_view", "site_route_view", "cta_click", "scan_start", "scan_step", "scan_complete", "quote_form_start", "quote_form_submit", "quote_form_submit_error", "email_click", "phone_click", "rate_scan_view", "rate_scan_start", "rate_scan_step", "rate_scan_back", "rate_scan_validation_error", "rate_scan_complete", "rate_scan_submit_error", "quotation_profile_complete", "quotation_profile_incomplete", "knowledge_article_view", "quotation_checklist_view", "free_rate_scan_cta_click"]);
const GROUPS = ["home", "scan", "quote", "knowledge", "contact", "product_fit", "other"];
export function routeGroup(value) {
    try {
        const path = new URL(value, "https://vareya.ai").pathname.replace(/\/$/, "") || "/";
        if (path === "/")
            return "home";
        if (path === "/free-rate-scan" || path === "/fulfilment-scan")
            return "scan";
        if (path === "/request-fulfilment-quote")
            return "quote";
        if (path === "/product-fit-check")
            return "product_fit";
        if (path === "/contact")
            return "contact";
        if (path === "/knowledge" || path.startsWith("/knowledge/"))
            return "knowledge";
        return "other";
    }
    catch {
        return "other";
    }
}
function validStep(value) {
    return typeof value === "number" && Number.isInteger(value) && value >= 1 && value <= 6;
}
/** Closed event vocabulary + per-event field allowlist. URLs, titles, UTM
 * values, slugs, labels, answers and submission IDs are NEVER serialised.
 * No buffering: events before consent are discarded and never replayed.
 */
export function trackEvent(eventName, params = {}) {
    if (!hasAnalyticsConsent() || !EVENTS.has(eventName))
        return;
    const safe = {};
    if (eventName.startsWith("product_fit_")) safe.funnel_definition = "p1-fit-20261109-v1";
    if (eventName.startsWith("rate_scan_"))
        safe.funnel_definition = FUNNEL_DEFINITION;
    if (eventName === "rate_scan_view")
        safe.scan_page = "/free-rate-scan/";
    if (eventName === "rate_scan_step") {
        if (!validStep(params.step_index) || SCAN_STEP_IDS[params.step_index - 1] !== params.step_id)
            return;
        safe.step_index = params.step_index;
        safe.step_id = params.step_id;
    }
    if (eventName === "rate_scan_back") {
        if (!validStep(params.step_index))
            return;
        safe.step_index = params.step_index;
    }
    if (eventName === "rate_scan_validation_error") {
        if (!SCAN_STEP_IDS.includes(params.step_id))
            return;
        safe.step_id = params.step_id;
    }
    if (eventName === "rate_scan_submit_error")
        safe.reason = SUBMIT_ERROR_REASONS.includes(params.reason) ? params.reason : "unknown";
    if (eventName === "scan_step") {
        if (!validStep(params.step_number))
            return;
        safe.step_number = params.step_number;
    }
    if (eventName === "scan_complete" && params.has_submission_id === true)
        safe.has_submission_id = true;
    if (eventName === "page_view" || eventName === "site_route_view")
        safe.page_group = GROUPS.includes(String(params.page_group)) ? params.page_group : "other";
    if (eventName === "cta_click") {
        if (!["scan", "quote", "contact", "product_fit"].includes(String(params.cta_target)))
            return;
        safe.cta_target = params.cta_target;
        if (GROUPS.includes(String(params.page_group)))
            safe.page_group = params.page_group;
    }
    if (eventName === "free_rate_scan_cta_click") {
        safe.cta_target = "scan";
        if (["body", "footer", "checklist"].includes(String(params.cta_location)))
            safe.cta_location = params.cta_location;
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: eventName }, safe));
    sendGa4Event(eventName, safe);
}
export function trackPageView(path, title) {
    void title;
    trackEvent("page_view", { page_group: routeGroup(path) });
}
export function trackCTAClick(label, href) {
    void label;
    trackEvent("cta_click", { cta_target: routeGroup(href) });
}
export function trackScanStart() { trackEvent("scan_start"); }
export function trackScanStep(step, stepTitle) { void stepTitle; trackEvent("scan_step", { step_number: step }); }
export function trackScanComplete(submissionIdOrAttribution) {
    trackEvent("scan_complete", typeof submissionIdOrAttribution === "string" ? { has_submission_id: true } : {});
}
export function trackQuoteFormStart() { trackEvent("quote_form_start"); }
export function trackQuoteFormSubmit(attribution) { void attribution; trackEvent("quote_form_submit"); }
export function trackQuoteFormSubmitError() { trackEvent("quote_form_submit_error"); }
export function trackEmailClick() { trackEvent("email_click"); }
export function trackPhoneClick() { trackEvent("phone_click"); }

import { hasAnalyticsConsent } from "./consent.js";
export const GA4_ID = "G-MJY8ZF3LDF";
// The existing Google container configures this destination. Never add a
// second config/page_view here; enhanced measurement owns page views.
export function sendGa4Event(name, params) {
  if (!hasAnalyticsConsent() || typeof document === "undefined" ||
      !document.querySelector?.('script[src*="gtm.js?id=GTM-W4H2R22L"]')) return;
  if (name === "page_view") return;
  function command() { window.dataLayer.push(arguments); }
  const safe = Object.assign({}, params, { send_to: GA4_ID });
  command("event", name, safe);
  // One canonical successful submission event per flow. Legacy scan_complete
  // must not create a second lead alongside rate_scan_complete.
  if (name === "rate_scan_complete" || name === "quote_form_submit") {
    command("event", "generate_lead", {
      send_to: GA4_ID,
      lead_source: "website",
      form_type: name === "rate_scan_complete" ? "scan" : "quote",
    });
  }
}

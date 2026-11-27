import { captureAttribution } from "../attribution.js";
import { captureCtaHandoffFromElement, readCtaHandoff } from "./cta-handoff.ts";
import { subscribeConsent, hasAnalyticsConsent } from "./consent.js";
import { routeGroup, trackEvent } from "./events.js";

/** Tiny controller: one per mounted tracker, not per render. No URL history
 * or analytics event queue; lastRoute is a dedupe marker only after consent.
 */
export function createSiteTracker() {
  let lastRoute = "";
  const navigate = () => {
    captureAttribution();
    if (!hasAnalyticsConsent()) { readCtaHandoff(); lastRoute = ""; return; }
    // pathname only as private duplicate marker; never emitted raw.
    const key = window.location.pathname;
    if (key === lastRoute) return;
    lastRoute = key;
    trackEvent("site_route_view", { page_group: routeGroup(key) });
  };
  const click = (event: MouseEvent) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!(event.target instanceof Element)) return;
    // Capture-phase listener sees native Next links before navigation prevents default.
    // Consent is enforced by the helper. Only explicitly attributed interactive clicks are recorded.
    const attributed = event.target.closest("a[data-cta-id], button[data-cta-id], a[data-topic-id], button[data-topic-id]");
    if (attributed) captureCtaHandoffFromElement(attributed);
    const anchor = event.target.closest("a[href]");
    if (!anchor || anchor.hasAttribute("download")) return;
    const href = anchor.getAttribute("href"); if (!href) return;
    try {
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      const target = routeGroup(url.pathname);
      if (!["scan", "quote", "contact"].includes(target)) return;
      trackEvent("cta_click", { cta_target: target, page_group: routeGroup(window.location.pathname) });
      // Intentionally do NOT decorate hrefs with UTMs or change navigation.
    } catch { /* malformed link: no event */ }
  };
  const mount = () => {
    const unsubscribe = subscribeConsent(navigate);
    document.addEventListener("click", click, true);
    navigate();
    return () => { unsubscribe(); document.removeEventListener("click", click, true); };
  };
  return { navigate, mount };
}

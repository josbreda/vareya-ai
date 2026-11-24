"use client";
import { GA4_ID } from "./ga4.js";
import { useEffect, useState } from "react";
import { readConsent, writeConsent, subscribeConsent, hasAnalyticsConsent, type ConsentChoice } from "./consent.js";
export const CONSENT_KEY = "vareya_cookie_consent";
export type { ConsentChoice };
// Keep the banner's existing public API.
export function readStoredConsent(): ConsentChoice | null { return readConsent(); }
export function writeStoredConsent(choice: ConsentChoice): void { writeConsent(choice); }

/** No pre-consent script or event buffer. Withdrawal denies consent immediately;
 * the cookie preferences screen reloads to unload the running third-party tag.
 */
export function useAnalyticsConsent(): boolean {
  const [consented, setConsented] = useState<boolean>(() => hasAnalyticsConsent());
  useEffect(() => {
    if (hasAnalyticsConsent()) enableAnalytics();
    return subscribeConsent(() => {
      const accepted = hasAnalyticsConsent(); setConsented(accepted);
      if (accepted) enableAnalytics();
      else disableAnalytics();
    });
  }, []);
  return consented;
}
function enableAnalytics(): void {
  if (!hasAnalyticsConsent()) return;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId || !/^GTM-[A-Z0-9]+$/.test(gtmId)) return;
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA4_ID}`] = false;
  if (document.querySelector(`script[src*="${gtmId}"]`)) {
    googleConsent("update", "granted");
    return;
  }
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  window.dataLayer = window.dataLayer || [];
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA4_ID}`] = false;
  // No advertising consent is granted by the analytics choice.
  googleConsent("default", "granted");
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  document.head.appendChild(script);
  // No dynamically inserted noscript: JS is already executing.
}

function googleConsent(mode: "default" | "update", analytics: "granted" | "denied") {
  window.dataLayer = window.dataLayer || [];
  function command(...args: unknown[]) {
    void args;
    // Google command queues require an Arguments object, not an event object.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments as unknown as Record<string, unknown>);
  }
  command("consent", mode, {
    analytics_storage: analytics,
    ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
  });
}
function disableAnalytics() {
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA4_ID}`] = true;
  if (document.querySelector('script[src*="googletagmanager.com"]')) googleConsent("update", "denied");
}

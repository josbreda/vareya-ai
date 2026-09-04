"use client";

import { useEffect, useState } from "react";

/**
 * Hook: loads GTM/GA4 only after cookie consent is given.
 * Listens for the custom 'cookie_consent_updated' event from ConsentBanner.
 */
export function useAnalyticsConsent(): boolean {
  const [consented, setConsented] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("vareya_cookie_consent") === "accepted";
  });

  useEffect(() => {
    // Enable analytics when consent was already stored before hydration
    if (typeof window !== "undefined" && localStorage.getItem("vareya_cookie_consent") === "accepted") {
      enableAnalytics();
    }

    // Listen for consent changes
    const handler = (event: Event) => {
      const detail = (event as CustomEvent).detail;
      if (detail === "accepted") {
        setConsented(true);
        enableAnalytics();
      }
    };

    window.addEventListener("cookie_consent_updated", handler);
    return () => window.removeEventListener("cookie_consent_updated", handler);
  }, []);

  return consented;
}

function enableAnalytics() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId) return;

  // Prevent double-load
  if (document.querySelector(`script[src*="${gtmId}"]`)) return;

  // Load GTM
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;

  // Initialize dataLayer
  (window as Window & { dataLayer?: unknown[] }).dataLayer =
    (window as Window & { dataLayer?: unknown[] }).dataLayer || [];
  const dl = (window as Window & { dataLayer?: unknown[] }).dataLayer!;
  dl.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  document.head.appendChild(script);

  // Load GTM noscript
  const noscript = document.createElement("noscript");
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  document.body.insertBefore(noscript, document.body.firstChild);
}

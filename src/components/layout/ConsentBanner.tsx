"use client";

import { useState, useSyncExternalStore } from "react";
import { readStoredConsent, writeStoredConsent } from "@/lib/analytics/useAnalyticsConsent";
import { useLocale, useT } from "@/i18n/client";
import { localizedPath } from "@/i18n/core";

type ConsentChoice = "accepted" | "declined" | null;

/**
 * The consent choice is persisted in browser storage: an external store the
 * server cannot read. Reading it during render made the server always emit
 * the banner while the first client render emitted nothing for a visitor
 * with a stored choice - the hydration mismatch left the server banner nodes
 * behind as inert, visible DOM (review finding F1). useSyncExternalStore is
 * React's hydration-safe way to read an external store: the server render
 * and the hydration render both use the constant server snapshot ("unknown",
 * rendered as nothing), so they always agree; the stored choice is only read
 * on the client right after hydration, which reveals the banner for a fresh
 * visitor and keeps it absent for a stored choice. Server output for the
 * banner is therefore absent and always consistent.
 */
const SERVER_SNAPSHOT = "server";

type ConsentSnapshot = ConsentChoice | typeof SERVER_SNAPSHOT;

/** Used for SSR and for the hydration render, so both agree the banner is hidden. */
function getServerSnapshot(): ConsentSnapshot {
  return SERVER_SNAPSHOT;
}

/** Choices made in this banner go through its own state; nothing external is awaited. */
function subscribe(): () => void {
  return () => {};
}

export function ConsentBanner() {
  const t = useT();
  const locale = useLocale();
  const stored = useSyncExternalStore<ConsentSnapshot>(subscribe, readStoredConsent, getServerSnapshot);
  const [sessionChoice, setSessionChoice] = useState<ConsentChoice>(null);

  // Visible only when the client knows there is no stored choice and this
  // session has not decided yet: hidden while the snapshot is "server"
  // (unknown) and whenever a choice exists - from storage or from a click.
  const visible = sessionChoice === null && stored === null;

  function handleAccept() {
    writeStoredConsent("accepted");
    setSessionChoice("accepted");
    // Enable GTM/GA4
    window.dispatchEvent(new CustomEvent("cookie_consent_updated", { detail: "accepted" }));
  }

  function handleDecline() {
    writeStoredConsent("declined");
    setSessionChoice("declined");
    window.dispatchEvent(new CustomEvent("cookie_consent_updated", { detail: "declined" }));
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-slate-200 shadow-lg p-4 sm:p-6"
      role="dialog"
      aria-label={t("Cookie consent")}
    >
      <div className="container-site flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-slate-600 flex-1">
          {t("We use cookies to analyse site traffic and improve your experience.")}{" "}
          <a href={localizedPath("/privacy/", locale)} className="underline text-primary hover:text-primary-dark">
            {t("Learn more")}
          </a>
          .
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            {t("Only essential")}
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
          >
            {t("Accept all")}
          </button>
        </div>
      </div>
    </div>
  );
}

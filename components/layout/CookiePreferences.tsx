"use client";
import { useSyncExternalStore } from "react";
import { readConsent, writeConsent, subscribeConsent } from "@/lib/analytics/consent.js";
import { useT } from "@/i18n/client";
export function CookiePreferences() {
  const t = useT();
  const choice = useSyncExternalStore(subscribeConsent, readConsent, () => null);
  function decline() {
    writeConsent("declined");
    try { sessionStorage.removeItem("vareya_campaign_session_v1"); } catch { /* storage unavailable */ }
    for (const item of document.cookie.split(";")) {
      const name = item.trim().split("=")[0];
      if (!/^_ga(?:_|$)/.test(name)) continue;
      document.cookie = `${name}=; Max-Age=0; path=/`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.vareya.ai`;
    }
    // Reload only on this preferences page to unload previously accepted tags.
    window.location.reload();
  }
  return <section className="my-6 rounded-xl border border-slate-200 p-5" aria-label={t("Cookie preferences")}>
    <p role="status" className="mb-4">{t(choice === "accepted" ? "Analytics is enabled." : "Only essential cookies are enabled.")}</p>
    <div className="flex flex-wrap gap-3">
      <button type="button" onClick={decline} className="rounded-lg border border-slate-300 px-4 py-2">{t("Only essential")}</button>
      <button type="button" onClick={() => writeConsent("accepted")} className="rounded-lg bg-primary px-4 py-2 text-white">{t("Allow analytics")}</button>
    </div>
  </section>;
}

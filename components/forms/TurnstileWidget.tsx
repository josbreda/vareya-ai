"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useT } from "@/i18n/client";

let apiScriptPromise: Promise<void> | null = null;

/** A bounded, shared loader. A failed download can be retried without reload. */
function ensureTurnstileApi(): Promise<void> {
  if (typeof window === "undefined" || window.turnstile) return Promise.resolve();
  if (apiScriptPromise) return apiScriptPromise;
  apiScriptPromise = new Promise<void>((resolve, reject) => {
    let script = document.querySelector<HTMLScriptElement>('script[src*="challenges.cloudflare.com/turnstile"]');
    if (script?.dataset.vareyaTurnstileFailed === "1") {
      script.remove();
      script = null;
    }
    const needsAppend = !script;
    script ??= document.createElement("script");
    const element = script;
    let settled = false;
    let poll: ReturnType<typeof setTimeout> | undefined;
    const finish = (ok: boolean) => {
      if (settled) return;
      settled = true;
      clearTimeout(poll);
      clearTimeout(timeout);
      element.removeEventListener("load", loaded);
      element.removeEventListener("error", failed);
      if (ok) resolve();
      else {
        element.dataset.vareyaTurnstileFailed = "1";
        reject(new Error("Security check unavailable"));
      }
    };
    const loaded = () => { if (window.turnstile) finish(true); };
    const failed = () => finish(false);
    const check = () => {
      if (settled) return;
      if (window.turnstile) finish(true);
      else poll = setTimeout(check, 150);
    };
    element.addEventListener("load", loaded);
    element.addEventListener("error", failed);
    const timeout = setTimeout(failed, 15_000);
    if (needsAppend) {
      element.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      element.async = true;
      element.defer = true;
      try { document.head.appendChild(element); } catch { finish(false); }
    }
    check();
  }).catch((error: unknown) => {
    apiScriptPromise = null;
    throw error;
  });
  return apiScriptPromise;
}

export type TurnstileState = "waiting" | "ready" | "expired" | "error";
type Status = { state: TurnstileState; reasonKey?: string };

export function TurnstileWidget({ onToken, onStateChange, theme = "light" }: {
  onToken?: (token: string) => void;
  onStateChange?: (state: TurnstileState) => void;
  theme?: "light" | "dark";
}) {
  const t = useT();
  const locale = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const tokenCallbackRef = useRef(onToken);
  const stateCallbackRef = useRef(onStateChange);
  const [status, setStatus] = useState<Status>({ state: "waiting" });
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    tokenCallbackRef.current = onToken;
    stateCallbackRef.current = onStateChange;
  }, [onToken, onStateChange]);

  useEffect(() => {
    let cancelled = false;
    let widgetId: string | null = null;
    const state = (value: TurnstileState, reasonKey?: string) => {
      if (cancelled) return;
      if (value !== "ready") tokenCallbackRef.current?.("");
      stateCallbackRef.current?.(value);
      setStatus({ state: value, reasonKey });
    };
    const fail = () => state("error", "The security check could not load or complete. Retry it below. If it is blocked, allow Cloudflare for this site or contact Vareya. You do not need to reload the page.");

    // Start after commit; the container stays mounted, including in error UI.
    void Promise.resolve().then(async () => {
      if (cancelled) return;
      state("waiting");
      const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
      if (!siteKey) {
        state("error", "The security check is unavailable. Retry it below, or contact Vareya if the problem continues.");
        return;
      }
      try {
        await ensureTurnstileApi();
        if (cancelled) return;
        const container = containerRef.current;
        if (!container || !window.turnstile) { fail(); return; }
        widgetId = window.turnstile.render(container, {
          sitekey: siteKey,
          theme,
          language: locale,
          size: "compact",
          callback: (token: string) => {
            if (cancelled) return;
            if (!token) { fail(); return; }
            tokenCallbackRef.current?.(token);
            state("ready");
          },
          "expired-callback": () => state("expired", "The security check expired. Retry it below. Your form answers are unchanged."),
          "timeout-callback": () => state("expired", "The security check expired. Retry it below. Your form answers are unchanged."),
          "error-callback": () => { fail(); return true; },
        });
      } catch {
        fail();
      }
    });
    return () => {
      cancelled = true;
      if (widgetId !== null && window.turnstile) {
        try { window.turnstile.remove(widgetId); } catch { /* already removed */ }
      }
    };
  }, [theme, locale, retry]);

  return (
    <div role="group" aria-label={t("Security check")} className="mt-3 min-w-0">
      <div ref={containerRef} className="flex min-h-[65px] justify-center" />
      {status.state === "waiting" && <p role="status" className="mt-2 text-sm text-slate-600">{t("Complete the security check when it appears.")}</p>}
      {status.reasonKey && <p role="alert" className="mt-3 rounded-lg border border-amber-400 bg-amber-50 px-4 py-3 text-sm text-amber-900">{t(status.reasonKey)}</p>}
      {status.state !== "ready" && <div className="mt-2 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => {
          tokenCallbackRef.current?.("");
          stateCallbackRef.current?.("waiting");
          setStatus({ state: "waiting" });
          setRetry((value) => value + 1);
        }} className="min-h-11 rounded-lg border border-slate-400 px-4 py-2 text-sm font-medium text-slate-800 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2">{t("Retry security check")}</button>
        <a href="mailto:info@vareya.ai" className="min-h-11 py-3 text-sm text-primary underline focus-visible:outline-2">{t("Contact Vareya")}</a>
      </div>}
    </div>
  );
}

/** Reads the current token for an imperative submit flow. */
export function useTurnstileToken(widgetId: string | null): string {
  if (typeof window === "undefined" || !widgetId || !window.turnstile) return "";
  return window.turnstile.getResponse(widgetId) || "";
}

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
      getResponse: (widgetId: string) => string | undefined;
    };
    __hermesTurnstileReady?: () => void;
  }
}

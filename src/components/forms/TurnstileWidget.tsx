"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Robust Cloudflare Turnstile widget:
 * - waits for the Turnstile API (api.js) instead of assuming it is loaded;
 * - retries rendering with a bounded poll;
 * - reports a visible, actionable error state instead of failing silently;
 * - exposes the token through a callback so forms never submit an empty token.
 */

let apiScriptPromise: Promise<void> | null = null;

function ensureTurnstileApi(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.turnstile) return Promise.resolve();

  if (!apiScriptPromise) {
    apiScriptPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector(
        'script[src*="challenges.cloudflare.com/turnstile"]',
      );
      if (existing) {
        // Another loader is already present — wait for its load
        const check = () => {
          if (window.turnstile) resolve();
          else if ((existing as HTMLScriptElement).dataset.failed) reject(new Error("Turnstile script failed to load"));
          else setTimeout(check, 150);
        };
        existing.addEventListener("load", () => resolve());
        existing.addEventListener("error", () => {
          (existing as HTMLScriptElement).dataset.failed = "1";
          reject(new Error("Turnstile script failed to load"));
        });
        setTimeout(check, 150);
        return;
      }
      const script = document.createElement("script");
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=__hermesTurnstileReady";
      script.async = true;
      script.defer = true;
      script.onerror = () => reject(new Error("Turnstile script failed to load"));
      window.__hermesTurnstileReady = () => resolve();
      document.head.appendChild(script);
    });
  }
  return apiScriptPromise;
}

type Status =
  | { state: "waiting" }
  | { state: "rendering" }
  | { state: "ready"; widgetId: string }
  | { state: "failed"; reason: string };

export function TurnstileWidget({
  onToken,
  theme = "light",
}: {
  onToken?: (token: string) => void;
  theme?: "light" | "dark";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [status, setStatus] = useState<Status>({ state: "waiting" });
  const retriesRef = useRef(0);
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    let cancelled = false;
    const maxRetries = 60; // ~15s at 250ms intervals

    const handleToken = (token: string) => {
      // Localhost is not an allowed domain for the production site key,
      // so in development the widget always fails — fall back to the
      // server's dev-only test token to keep local e2e flows working.
      if (isDev && !token) onToken?.("test");
      else onToken?.(token);
    };

    const renderWidget = () => {
      const container = containerRef.current;
      const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
      if (!container || !window.turnstile || !siteKey) return false;
      try {
        widgetIdRef.current = window.turnstile.render(container, {
          sitekey: siteKey,
          theme,
          callback: (token: string) => handleToken(token),
          "expired-callback": () => handleToken(""),
          "error-callback": () => {
            if (isDev) {
              handleToken("");
              return;
            }
            setStatus({
              state: "failed",
              reason: "The security check could not complete. Please reload the page and try again.",
            });
          },
        });
        setStatus({ state: "ready", widgetId: widgetIdRef.current });
        return true;
      } catch {
        return false;
      }
    };

    const attempt = () => {
      if (cancelled) return;
      if (renderWidget()) return;

      if (!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
        setStatus({
          state: "failed",
          reason: "Security check is not configured on this environment.",
        });
        return;
      }
      if (retriesRef.current >= maxRetries) {
        setStatus({
          state: "failed",
          reason:
            "The security check could not load. This can happen when a browser extension blocks it — please disable ad or privacy blockers and reload, or contact us directly.",
        });
        return;
      }
      retriesRef.current += 1;
      setTimeout(attempt, 250);
    };

    ensureTurnstileApi()
      .then(() => {
        if (!cancelled) attempt();
      })
      .catch(() => {
        if (!cancelled) {
          setStatus({
            state: "failed",
            reason:
              "The security check could not load. This can happen when a browser extension blocks it — please disable ad or privacy blockers and reload, or contact us directly.",
          });
        }
      });

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // widget already gone — safe to ignore
        }
        widgetIdRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  if (status.state === "failed") {
    return (
      <div
        role="alert"
        className="rounded-lg border border-amber-400/60 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900"
      >
        {status.reason}
      </div>
    );
  }

  return (
    <div className="mt-3 flex min-h-[65px] items-start justify-center">
      <div ref={containerRef} />
      {status.state !== "ready" && (
        <p className="text-xs text-muted" aria-live="polite">
          Loading security check…
        </p>
      )}
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
      render: (
        container: HTMLElement,
        options: Record<string, unknown>,
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
      getResponse: (widgetId: string) => string | undefined;
    };
    __hermesTurnstileReady?: () => void;
  }
}

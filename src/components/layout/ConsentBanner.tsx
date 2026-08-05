"use client";

import { useState, useEffect } from "react";

type ConsentChoice = "accepted" | "declined" | null;

export function ConsentBanner() {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("vareya_cookie_consent");
    if (!stored) {
      setVisible(true);
    } else {
      setChoice(stored as ConsentChoice);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("vareya_cookie_consent", "accepted");
    setChoice("accepted");
    setVisible(false);
    // Enable GTM/GA4
    window.dispatchEvent(new CustomEvent("cookie_consent_updated", { detail: "accepted" }));
  }

  function handleDecline() {
    localStorage.setItem("vareya_cookie_consent", "declined");
    setChoice("declined");
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookie_consent_updated", { detail: "declined" }));
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-slate-200 shadow-lg p-4 sm:p-6"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="container-site flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-slate-600 flex-1">
          We use cookies to analyse site traffic and improve your experience.{" "}
          <a href="/privacy/" className="underline text-primary hover:text-primary-dark">
            Learn more
          </a>
          .
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Only essential
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

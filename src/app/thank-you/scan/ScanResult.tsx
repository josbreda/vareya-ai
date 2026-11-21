"use client";

import { useEffect, useSyncExternalStore } from "react";
import type { ScanConsiderations } from "@/lib/scan-considerations";

const STORAGE_KEY = "vareya_scan_result";

function subscribe() {
  // One-shot read of a value written just before this page loaded —
  // nothing to subscribe to after mount, so this is a no-op.
  return () => {};
}

function getSnapshot(): string | null {
  try {
    return sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getServerSnapshot(): string | null {
  return null;
}

/**
 * Reads the considerations the scan form computed client-side and stored
 * in sessionStorage just before redirecting here. useSyncExternalStore
 * (rather than useState+useEffect) keeps the server-rendered HTML and the
 * first client render consistent — sessionStorage never exists during
 * SSR, so both render null first; the real value appears once React
 * reads the client snapshot, with no hydration mismatch.
 */
export function ScanResult() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const result: ScanConsiderations | null = raw ? JSON.parse(raw) : null;

  useEffect(() => {
    if (raw) sessionStorage.removeItem(STORAGE_KEY);
  }, [raw]);

  if (!result) return null;

  return (
    <div className="mt-10 text-left">
      {result.considerations.length > 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-6 mb-4">
          <h2 className="text-sm font-semibold text-slate-900 mb-3">
            Based on your answers
          </h2>
          <ul className="space-y-2 text-sm leading-6 text-muted">
            {result.considerations.map((c) => (
              <li key={c} className="flex gap-2">
                <span aria-hidden="true" className="text-primary">•</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}

      {result.missingForReview.length > 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-6 mb-4">
          <h2 className="text-sm font-semibold text-slate-900 mb-3">
            What Vareya will still need
          </h2>
          <ul className="space-y-2 text-sm leading-6 text-muted">
            {result.missingForReview.map((m) => (
              <li key={m} className="flex gap-2">
                <span aria-hidden="true" className="text-primary">•</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="text-sm leading-6 text-muted rounded-xl border border-slate-200 bg-white p-6">
        {result.nextStep}
      </p>
    </div>
  );
}

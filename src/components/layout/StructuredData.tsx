"use client";

import { useEffect } from "react";
import { trackPageView } from "@/lib/analytics";

/**
 * Injects structured data (JSON-LD) into the page head.
 * Also fires page_view analytics event.
 */
export function StructuredData({
  type,
  data,
  path,
}: {
  type: "organization" | "website" | "breadcrumb";
  data: Record<string, unknown>;
  path?: string;
}) {
  useEffect(() => {
    // Fire page_view on mount
    if (path) {
      trackPageView(path, document.title);
    }
  }, [path]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

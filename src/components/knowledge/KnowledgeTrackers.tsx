"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  trackFreeRateScanCtaClick,
  trackKnowledgeArticleView,
  trackQuotationChecklistView,
} from "@/lib/knowledge-analytics";

/** Fires knowledge_article_view once when the article mounts. */
export function KnowledgeViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    trackKnowledgeArticleView(slug);
  }, [slug]);
  return null;
}

/** Renders the checklist as an accessible list and fires
 *  quotation_checklist_view once when it scrolls ≥50% into view. */
export function KnowledgeChecklist({
  slug,
  items,
}: {
  slug: string;
  items: readonly string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !fired.current) {
          fired.current = true;
          trackQuotationChecklistView(slug);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [slug]);

  return (
    <div
      ref={ref}
      className="mt-6 rounded-2xl border border-border bg-surface p-6"
      role="list"
      aria-label="Quotation-readiness checklist"
    >
      <ul className="space-y-3 text-sm leading-6 text-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-3" role="listitem">
            <span
              className="mt-1.5 h-4 w-4 shrink-0 rounded border border-primary/50"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** CTA link that fires free_rate_scan_cta_click (PII-free) before navigation. */
export function KnowledgeCtaLink({
  href,
  label,
  ctaLocation,
  slug,
  className,
}: {
  href: string;
  label: string;
  ctaLocation: "checklist" | "footer" | "body";
  slug: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackFreeRateScanCtaClick(ctaLocation, href, slug)}
    >
      {label}
    </Link>
  );
}

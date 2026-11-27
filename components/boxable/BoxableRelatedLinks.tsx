import { localizeNode } from "@/i18n/localize-node";
import { getT as getTForContent } from "@/i18n/server";
import Link from "@/i18n/Link";

import {
  BOXABLE_PAGES,
  BOXABLE_SERVICE_LINKS,
  type BoxablePageKey,
} from "@/content/boxable";

/**
 * Shared related-link block for the three static Boxable pages.
 * Links to the two sibling Boxable pages plus the existing service pages that
 * carry the operational detail. No translation keys: these routes are English
 * and deliberately outside the localized allow-list.
 */
export async function BoxableRelatedLinks({ current }: { current: BoxablePageKey }) {
  const __pageT = await getTForContent();
  const siblings = (Object.values(BOXABLE_PAGES) as (typeof BOXABLE_PAGES)[BoxablePageKey][])
    .filter((page) => page.key !== current);

  return localizeNode((
    <section className="border-t border-slate-200 bg-slate-50 py-14" aria-labelledby="related-pages">
      <div className="container-site max-w-4xl">
        <h2 id="related-pages" className="mb-6 text-2xl font-bold text-ink">
          Related pages
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {siblings.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-xl border border-border bg-white p-5 transition-colors hover:border-primary/40"
            >
              <span className="block font-semibold text-primary">{page.label}</span>
              <span className="mt-2 block text-sm leading-6 text-muted">{page.description}</span>
            </Link>
          ))}
        </div>

        <h3 className="mt-8 mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
          Fulfilment and shipping detail
        </h3>
        <ul className="flex flex-wrap gap-3">
          {BOXABLE_SERVICE_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/40"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  ), __pageT);
}

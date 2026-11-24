import { parseLocale, preserveLocaleHref } from "./core.ts";

/** Legacy name retained for callers; all selected languages now survive CTAs. */
export function englishConversionHref(href: string, locale: string): string {
  const selected = parseLocale(locale);
  return selected ? preserveLocaleHref(href, selected) : href;
}

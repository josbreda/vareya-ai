/**
 * Locale, scope, translation and URL primitives for the Vareya review build.
 *
 * This module is deliberately dependency-free and free of Next.js imports so
 * the contracts can be unit-tested with `node --experimental-strip-types`.
 * Server-only access (headers/cookies, JSON dictionaries) lives in
 * `src/i18n/server.ts`; the React context lives in `src/i18n/client.tsx`.
 */

import { SOURCE_ROUTES, REGIONAL_ROUTES } from "./public-routes.ts";

export const LOCALES = ["nl", "en", "de", "fr", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "nl";

export interface LocaleMeta {
  code: Locale;
  /** Name shown in the language menu — always in the language itself. */
  nativeName: string;
  englishName: string;
  /** Open Graph locale token. */
  ogLocale: string;
}

export const LOCALE_META: readonly LocaleMeta[] = [
  { code: "nl", nativeName: "Nederlands", englishName: "Dutch", ogLocale: "nl_NL" },
  { code: "en", nativeName: "English", englishName: "English", ogLocale: "en_GB" },
  { code: "de", nativeName: "Deutsch", englishName: "German", ogLocale: "de_DE" },
  { code: "fr", nativeName: "Français", englishName: "French", ogLocale: "fr_FR" },
  { code: "es", nativeName: "Español", englishName: "Spanish", ogLocale: "es_ES" },
] as const;

export function localeMeta(code: Locale): LocaleMeta {
  return LOCALE_META.find((item) => item.code === code) ?? LOCALE_META[0];
}

/**
 * Original fully translated core routes. Their historical clean URLs are Dutch.
 * English-source translations are registered separately in isScopedRoute.
 */
export const SCOPED_ROUTES = [
  "/",
  "/about/",
  "/why-vareya-ai/",
  "/eu-fulfilment/",
  "/contact/",
  "/free-rate-scan/",
  "/request-fulfilment-quote/",
  "/privacy/",
  "/cookies/",
  "/thank-you/quote/",
  "/thank-you/scan/",
] as const;

export const LOCALE_QUERY_PARAM = "lang";
export const LOCALE_COOKIE_NAME = "vareya_locale";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 12 months
export const LOCALE_HEADER = "x-vareya-locale";
export const LOCALE_SCOPE_HEADER = "x-vareya-scope";

const SCOPED_ROUTE_SET = new Set<string>(SCOPED_ROUTES);

/**
 * Normalizes a request pathname for exact route matching: no query/hash,
 * leading slash, collapsed duplicate slashes, root preserved, trailing slash.
 */
export function normalizeRoutePath(pathname: string): string {
  let path = (pathname || "/").split("#")[0].split("?")[0];
  path = `/${path.replace(/^\/+/, "")}`;
  path = path.replace(/\/{2,}/g, "/");
  if (path !== "/" && !path.endsWith("/")) path += "/";
  return path;
}

export function isScopedRoute(pathname: string): boolean {
  const path = normalizeRoutePath(pathname);
  return SCOPED_ROUTE_SET.has(path) || SOURCE_ROUTES.has(path) || /^\/knowledge\/[^/]+\/$/.test(path);
}

/** Preference routing is not a claim that a page's body has been translated. */
export function isPublicLocaleRoute(pathname: string): boolean {
  const path = normalizeRoutePath(pathname);
  return isScopedRoute(path) || SOURCE_ROUTES.has(path) || /^\/knowledge\/[^/]+\/$/.test(path);
}

export function sourceLocale(pathname: string): Locale {
  const path = normalizeRoutePath(pathname);
  return SCOPED_ROUTE_SET.has(path) || REGIONAL_ROUTES.includes(path) ? "nl" : "en";
}

export function contentLocale(pathname: string, selected: Locale): Locale {
  return isScopedRoute(pathname) ? selected : sourceLocale(pathname);
}

export function parseLocale(value: string | null | undefined): Locale | null {
  if (typeof value !== "string") return null;
  const candidate = value.trim().toLowerCase();
  return (LOCALES as readonly string[]).includes(candidate)
    ? (candidate as Locale)
    : null;
}

/**
 * Explicit URL choice wins, then the remembered cookie, then the route source. The
 * browser's Accept-Language header is deliberately never consulted.
 */
export function resolveLocalePreference(input: {
  queryLang?: string | null;
  cookieLocale?: string | null;
  pathname?: string;
}): Locale {
  return (
    parseLocale(input.queryLang) ??
    parseLocale(input.cookieLocale) ??
    (input.pathname ? sourceLocale(input.pathname) : DEFAULT_LOCALE)
  );
}

export type Messages = Record<string, string>;

/**
 * Dictionary keys are English source strings. JSX/HTML whitespace is not
 * meaningful, so keys collapse every run of whitespace to one space and trim.
 * Translators use the same normalized form.
 */
export function normalizeMessage(input: string): string {
  return String(input).replace(/\s+/g, " ").trim();
}

const PLACEHOLDER = /\{([A-Za-z0-9_]+)\}/g;

/**
 * Replaces `{name}` tokens with values. Unknown tokens stay visible so a
 * missing value is an obvious, reviewable defect rather than silent output.
 */
export function interpolate(
  template: string,
  values?: Record<string, string | number>,
): string {
  if (!values) return template;
  return template.replace(PLACEHOLDER, (match, name: string) => {
    const value = values[name];
    return value === undefined || value === null ? match : String(value);
  });
}

export interface TranslateOptions {
  /** Development-only English fallback, so a half-filled catalogue stays usable. */
  dev?: boolean;
  /** English source dictionary, used only when `dev` is true. */
  fallbackMessages?: Messages;
}

/**
 * Looks a stable English source key up in the selected language.
 *
 * - selected language value wins;
 * - in development only, a missing value falls back to the English source;
 * - in production a missing value renders the English source key itself, which
 *   keeps the defect visible instead of silently shipping English prose.
 */
export function translate(
  locale: Locale,
  messages: Messages,
  key: string,
  values?: Record<string, string | number>,
  options: TranslateOptions = {},
): string {
  const normalizedKey = normalizeMessage(key);
  let value = messages[normalizedKey];

  if (typeof value !== "string" || value === "") {
    if (options.dev && options.fallbackMessages) {
      const fallback = options.fallbackMessages[normalizedKey];
      if (typeof fallback === "string" && fallback !== "") value = fallback;
    }
  }

  return interpolate(typeof value === "string" && value !== "" ? value : normalizedKey, values);
}

export type Translate = (
  key: string,
  values?: Record<string, string | number>,
) => string;

export function createTranslator(
  locale: Locale,
  messages: Messages,
  options: TranslateOptions = {},
): Translate {
  return (key, values) => translate(locale, messages, key, values, options);
}

/** True when the dictionary has a usable value for a source key (used by tests). */
export function hasMessage(messages: Messages, key: string): boolean {
  const value = messages[normalizeMessage(key)];
  return typeof value === "string" && value !== "";
}

/**
 * Builds a link that keeps the current pathname, query string and hash while
 * replacing the `lang` parameter. Used by the switcher's progressive-enhancement
 * anchors and by the client-side history replacement.
 */
export function buildLocalizedHref(
  locale: Locale,
  pathname: string,
  search = "",
  hash = "",
): string {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  params.set(LOCALE_QUERY_PARAM, locale);
  const query = params.toString();
  const normalizedHash = hash && !hash.startsWith("#") ? `#${hash}` : hash;
  return `${pathname || "/"}${query ? `?${query}` : ""}${normalizedHash}`;
}

/** Locale-preserving href for internal navigations after a successful form. */
export function localizedPath(pathname: string, locale: Locale): string {
  return preserveLocaleHref(pathname, locale);
}

/** Internal navigation always carries the selection, including Dutch on English sources.
 * Explicit language changes belong to the switcher, not editorial CTA URLs.
 */
export function preserveLocaleHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const url = new URL(href, SITE_URL);
  if (!isPublicLocaleRoute(url.pathname) && normalizeRoutePath(url.pathname) !== "/fulfilment-scan/") return href;
  url.searchParams.set(LOCALE_QUERY_PARAM, locale);
  return url.pathname + url.search + url.hash;
}

export const SITE_URL = "https://vareya.ai";

/**
 * Source language keeps its historical clean path. Translations use ?lang=xx.
 */
export function localizedAbsoluteUrl(pathname: string, locale: Locale): string {
  const path = normalizeRoutePath(pathname);
  if (locale === sourceLocale(path)) return `${SITE_URL}${path}`;
  return `${SITE_URL}${path}?${LOCALE_QUERY_PARAM}=${locale}`;
}

/** Only advertise languages with actual translated bodies. */
export function buildLanguageAlternates(
  pathname: string,
): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of isScopedRoute(pathname) ? LOCALES : [sourceLocale(pathname)]) {
    languages[locale] = localizedAbsoluteUrl(pathname, locale);
  }
  languages["x-default"] = localizedAbsoluteUrl(pathname, sourceLocale(pathname));
  return languages;
}

export interface MetadataAlternates {
  canonical: string;
  languages: Record<string, string>;
}

export function buildMetadataAlternates(
  pathname: string,
  locale: Locale,
): MetadataAlternates {
  return {
    canonical: localizedAbsoluteUrl(pathname, contentLocale(pathname, locale)),
    languages: buildLanguageAlternates(pathname),
  };
}

/** Maps the server's known English lead errors onto catalogue templates. */
const TURNSTILE_FAILED = /^Security check failed \((.+)\)\. Please refresh and try again\.$/;

export function localizeLeadError(
  t: Translate,
  message: string,
): string {
  const raw = (message || "").trim();
  if (!raw) return "";
  const turnstile = TURNSTILE_FAILED.exec(raw);
  if (turnstile) {
    return t("Security check failed ({codes}). Please refresh and try again.", {
      codes: turnstile[1],
    });
  }
  return t(raw);
}

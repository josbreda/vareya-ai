import enContent from "./content-messages/en.json";
import nlContent from "./content-messages/nl.json";
import deContent from "./content-messages/de.json";
import frContent from "./content-messages/fr.json";
import esContent from "./content-messages/es.json";
/**
 * Server-side i18n access.
 *
 * Preference selection is decided in the proxy. Content-language coverage is
 * separate and backed by the server-only public-content catalogues.
 * Request headers require dynamic rendering for cookie/query SSR.
 */

import { headers } from "next/headers";

import {
  DEFAULT_LOCALE,
  LOCALE_HEADER,
  LOCALE_SCOPE_HEADER,
  createTranslator,
  contentLocale as resolveContentLocale,
  parseLocale,
  type Locale,
  type Messages,
  type Translate,
} from "./core";

import enJson from "./messages/en.json";
import nlJson from "./messages/nl.json";
import deJson from "./messages/de.json";
import frJson from "./messages/fr.json";
import esJson from "./messages/es.json";

const EN = enJson as Messages;

const CLIENT_DICTIONARIES: Record<Locale, Messages> = {
  en: EN,
  nl: nlJson as Messages,
  de: deJson as Messages,
  fr: frJson as Messages,
  es: esJson as Messages,
};

const DICTIONARIES: Record<Locale, Messages> = {
  en: { ...CLIENT_DICTIONARIES.en, ...enContent },
  nl: { ...CLIENT_DICTIONARIES.nl, ...nlContent },
  de: { ...CLIENT_DICTIONARIES.de, ...deContent },
  fr: { ...CLIENT_DICTIONARIES.fr, ...frContent },
  es: { ...CLIENT_DICTIONARIES.es, ...esContent },
};

export interface RequestI18n {
  locale: Locale;
  contentLocale: Locale;
  search: string;
  /** Preference routing enabled; this does not assert body translation coverage. */
  inScope: boolean;
  messages: Messages;
  t: Translate;
}

export function getMessages(locale: Locale): Messages {
  return DICTIONARIES[locale] ?? EN;
}

export function isReviewOnly(): boolean {
  return process.env.VAREYA_REVIEW_ONLY === "1";
}

/** Robots directive used for the isolated preview when the review flag is set. */
export function reviewRobots(): { index: false; follow: false } | undefined {
  return isReviewOnly() ? { index: false, follow: false } : undefined;
}

export async function getRequestI18n(): Promise<RequestI18n> {
  const headerList = await headers();
  const inScope = headerList.get(LOCALE_SCOPE_HEADER) === "1";

  if (!inScope) {
    return {
      locale: "en",
      contentLocale: "en",
      search: "",
      inScope: false,
      messages: {},
      t: createTranslator("en", {}),
    };
  }

  const locale = parseLocale(headerList.get(LOCALE_HEADER)) ?? DEFAULT_LOCALE;
  const dev = process.env.NODE_ENV !== "production";
  const selected = getMessages(locale);

  // Development may fall back to English while translators fill the catalogue;
  // production uses the selected dictionary only so misses stay visible.
  const messages: Messages = dev ? { ...EN, ...selected } : selected;

  return {
    locale,
    contentLocale: resolveContentLocale(headerList.get("x-vareya-path") ?? "/", locale),
    search: headerList.get("x-vareya-search") ?? "",
    inScope,
    messages: CLIENT_DICTIONARIES[locale],
    t: createTranslator(locale, messages, { dev, fallbackMessages: EN }),
  };
}

/** Convenience helper for server components that only need the translator. */
export async function getT(): Promise<Translate> {
  return (await getRequestI18n()).t;
}

"use client";

import {
  createContext,
  useContext,
  useMemo,
  useEffect,
  type ReactNode,
} from "react";

import {
  createTranslator,
  contentLocale,
  type Locale,
  type Messages,
  type Translate,
} from "./core";

interface I18nContextValue {
  locale: Locale;
  search: string;
  inScope: boolean;
  messages: Messages;
  t: Translate;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  search = "",
  messages,
  inScope,
  children,
}: {
  locale: Locale;
  search?: string;
  messages: Messages;
  inScope: boolean;
  children: ReactNode;
}) {
  useEffect(() => {
    // Root layouts are cached across client navigation. When content language
    // changes, refresh the document so its lang attribute and notice stay true.
    const crossScope = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!anchor || anchor.hasAttribute("download") || (anchor.target && anchor.target !== "_self")) return;
      const next = new URL(anchor.href, window.location.href);
      if (next.origin !== window.location.origin) return;
      if (contentLocale(next.pathname, locale) === contentLocale(window.location.pathname, locale)) return;
      event.preventDefault();
      event.stopPropagation();
      window.location.assign(next.href);
    };
    document.addEventListener("click", crossScope, true);
    return () => document.removeEventListener("click", crossScope, true);
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      search,
      inScope,
      messages,
      t: createTranslator(locale, messages),
    }),
    [locale, search, messages, inScope],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useI18n must be used inside <I18nProvider>");
  }
  return value;
}

export function useT(): Translate {
  return useI18n().t;
}

export function useLocale(): Locale {
  return useI18n().locale;
}

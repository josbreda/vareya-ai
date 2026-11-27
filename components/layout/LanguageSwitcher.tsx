"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useI18n } from "@/i18n/client";
import {
  LOCALE_COOKIE_MAX_AGE,
  LOCALE_COOKIE_NAME,
  LOCALE_META,
  buildLocalizedHref,
  type Locale,
} from "@/i18n/core";

function GlobeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3z" />
    </svg>
  );
}

const LOCATION_SEPARATOR = "\u0000";
const locationListeners = new Set<() => void>();

function subscribeToLocation(callback: () => void) {
  locationListeners.add(callback);
  window.addEventListener("popstate", callback);
  window.addEventListener("hashchange", callback);
  return () => {
    locationListeners.delete(callback);
    window.removeEventListener("popstate", callback);
    window.removeEventListener("hashchange", callback);
  };
}

function getLocationSnapshot() {
  return `${window.location.search}${LOCATION_SEPARATOR}${window.location.hash}`;
}


function notifyLocationChanged() {
  for (const listener of locationListeners) listener();
}

/**
 * Compact native-name language menu.
 *
 * Each option is a real link that keeps the current pathname, query string and
 * hash, so it works without JavaScript. With JavaScript, the click replaces
 * the URL in place and refreshes the server components — React state in forms
 * is preserved, which is why switching language never resets entered values.
 */
export function LanguageSwitcher() {
  const { locale, search, t } = useI18n();
  const getServerLocationSnapshot = useCallback(() => `${search}${LOCATION_SEPARATOR}`, [search]);
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const location = useSyncExternalStore(
    subscribeToLocation,
    getLocationSnapshot,
    getServerLocationSnapshot,
  );
  const [currentSearch, currentHash] = location.split(LOCATION_SEPARATOR);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key === "Tab") {
        setOpen(false);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
      const items = menuRef.current?.querySelectorAll<HTMLAnchorElement>("[data-language]");
      if (!items || items.length === 0) return;
      event.preventDefault();
      const activeIndex = Array.from(items).indexOf(
        document.activeElement as HTMLAnchorElement,
      );
      const nextIndex =
        event.key === "Home" ? 0 : event.key === "End" ? items.length - 1 :
        event.key === "ArrowDown"
          ? activeIndex < 0
            ? 0
            : (activeIndex + 1) % items.length
          : activeIndex <= 0
            ? items.length - 1
            : activeIndex - 1;
      items[nextIndex]?.focus();
    };

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target) || buttonRef.current?.contains(target)) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  const openMenu = useCallback(() => {
    setOpen(true);
    // Wait for `hidden` to be removed before focusing the current option.
    window.setTimeout(() => {
      const menu = menuRef.current;
      if (!menu) return;
      const current = menu.querySelector<HTMLAnchorElement>(
        `[data-language="${locale}"]`,
      );
      current?.focus();
    }, 0);
  }, [locale]);

  const switchTo = useCallback(
    (next: Locale, event: React.MouseEvent<HTMLAnchorElement>) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      try {
        document.cookie = `${LOCALE_COOKIE_NAME}=${next}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`;
      } catch {
        // Explicit URL language still works when browser storage is denied.
      }
      const target = buildLocalizedHref(
        next,
        window.location.pathname,
        window.location.search,
        window.location.hash,
      );
      // History-first locale switch: the route does not remount, so client
      // form state survives; refresh re-renders the server components with the
      // new locale header from the proxy.
      window.history.replaceState(null, "", target);
      notifyLocationChanged();
      setOpen(false);
      buttonRef.current?.focus();
      router.refresh();
    },
    [router],
  );

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        data-testid="language-toggle"
        aria-label={t("Choose language")}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="vareya-language-menu"
        onClick={() => (open ? setOpen(false) : openMenu())}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-primary/40 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
      >
        <GlobeIcon />
      </button>

      <div
        ref={menuRef}
        id="vareya-language-menu"
        role="menu"
        aria-label={t("Language")}
        hidden={!open}
        className="absolute right-0 top-full z-[60] mt-2 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl"
      >
        {LOCALE_META.map((item) => {
          const current = item.code === locale;
          return (
            <a
              key={item.code}
              href={buildLocalizedHref(
                item.code,
                pathname,
                currentSearch,
                currentHash,
              )}
              data-language={item.code}
              lang={item.code}
              role="menuitem"
              aria-current={current ? "true" : undefined}
              onClick={(event) => switchTo(item.code, event)}
              className={`block px-4 py-2.5 text-sm transition-colors hover:bg-slate-50 focus:bg-slate-50 focus:outline-none ${
                current ? "font-semibold text-primary" : "text-slate-700"
              }`}
            >
              {item.nativeName}
            </a>
          );
        })}
      </div>
    </div>
  );
}

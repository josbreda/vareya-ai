"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "@/i18n/Link";

import { useT } from "@/i18n/client";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

const NAV_ITEMS = [
  { label: "Boxable Fulfilment", href: "/boxable-fulfilment/" },
  { label: "Boxable Shipping", href: "/boxable-shipping/" },
  { label: "NonBoxable", href: "/nonboxable/" },
  { label: "EU Fulfilment", href: "/eu-fulfilment/" },
  { label: "For Shopify", href: "/shopify-fulfilment-europe/" },
  { label: "Knowledge", href: "/knowledge/" },
];

export function Header({
  showLanguageSwitcher = false,
}: {
  showLanguageSwitcher?: boolean;
}) {
  const t = useT();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={`${pathname === "/" ? "" : "photo-header "}sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200`}>
      <div className="container-site flex items-center justify-between gap-4 min-h-16 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label={t("VareYa — home")}
        >
          {/* Classic lockup (VareYa wordmark + cube icon) — owner request 15 Oct 2026:
              use the logo as on the old website. Dark lettering version for the light header. */}
          <img
            src="/images/brand/vareya-lockup-classic.webp"
            alt="VareYa"
            width={545}
            height={122}
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop nav */}
        <div className="flex min-w-0 items-center gap-2">
          <nav className="hidden xl:flex flex-wrap justify-end items-center gap-x-4 gap-y-2" aria-label={t("Main navigation")}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {t(item.label)}
              </Link>
            ))}
            <Link
              href="/product-fit-check/"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent-light transition-colors"
            >
              {t("Check Your Product Fit")}
            </Link>
          </nav>

          {showLanguageSwitcher && <LanguageSwitcher />}

          {/* Mobile toggle */}
          <button
            className="xl:hidden p-2 text-slate-700 hover:text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={t("Toggle navigation menu")}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="xl:hidden border-t border-slate-200 bg-white" aria-label={t("Mobile navigation")}>
          <div className="container-site py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-slate-700 hover:text-primary py-2"
                onClick={() => setMobileOpen(false)}
              >
                {t(item.label)}
              </Link>
            ))}
            <Link
              href="/product-fit-check/"
              className="inline-flex items-center justify-center px-4 py-3 text-base font-semibold text-white bg-accent rounded-lg hover:bg-accent-light transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t("Check Your Product Fit")}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

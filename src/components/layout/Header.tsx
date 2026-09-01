"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "EU Fulfilment", href: "/eu-fulfilment/" },
  { label: "For Shopify", href: "/shopify-fulfilment-europe/" },
  { label: "US Brands", href: "/eu-fulfilment-us-brands/" },
  { label: "UK Brands", href: "/eu-fulfilment-uk-brands/" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="container-site flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary hover:text-primary-dark transition-colors"
          aria-label="Vareya — Home"
        >
          Vareya
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/free-rate-scan/"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent-light transition-colors"
          >
            Check your EU fulfilment fit
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-700 hover:text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
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

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-slate-200 bg-white" aria-label="Mobile navigation">
          <div className="container-site py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-slate-700 hover:text-primary py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/free-rate-scan/"
              className="inline-flex items-center justify-center px-4 py-3 text-base font-semibold text-white bg-accent rounded-lg hover:bg-accent-light transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Check your EU fulfilment fit
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

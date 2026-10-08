import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnalyticsLoader } from "@/components/layout/AnalyticsLoader";
import { ConsentBanner } from "@/components/layout/ConsentBanner";
import { organizationSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vareya | European Fulfilment for E-Commerce Brands",
  description:
    "Reliable order fulfilment from Breda, the Netherlands. Shopify and Amazon FBM integration, multi-carrier delivery, and returns handling available.",
  metadataBase: new URL("https://vareya.ai"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Vareya",
    title: "Vareya | European Fulfilment for E-Commerce Brands",
    description:
      "Fast, reliable order fulfilment from Breda, the Netherlands. Shopify and Amazon FBM integration.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // lang defaults to en-GB (correct for ~95% of routes) and is corrected
    // to nl-NL for /nl/* by the inline script below. A per-route static
    // value would need the whole app tree split into (en)/(nl) route
    // groups (Next's documented pattern for multiple <html lang> values)
    // — that's a much bigger structural change than this fix warrants, and
    // using headers()/a pathname-reading layout instead was tried and
    // reverted: it forced all ~90 routes from static (○) to dynamic (ƒ)
    // rendering, a real performance regression for a cosmetic attribute.
    // suppressHydrationWarning scopes the known, intentional lang mismatch
    // to this one element — nothing else on the page is exempted.
    <html lang="en-GB" suppressHydrationWarning className={`${inter.variable} h-full`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var p=location.pathname;if(p==='/nl'||p.indexOf('/nl/')===0){document.documentElement.lang='nl-NL';}})();",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <ConsentBanner />
        <AnalyticsLoader />
      </body>
    </html>
  );
}

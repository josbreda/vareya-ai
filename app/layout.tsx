import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomerReviews } from "@/components/layout/CustomerReviews";
import { AnalyticsLoader } from "@/components/layout/AnalyticsLoader";
import { SiteAttributionTracker } from "@/components/analytics/SiteAttributionTracker";
import { ConsentBanner } from "@/components/layout/ConsentBanner";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { I18nProvider } from "@/i18n/client";
import { getRequestI18n, reviewRobots } from "@/i18n/server";
import { localeMeta } from "@/i18n/core";
import { contentNotice } from "@/i18n/content-notice";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const DEFAULT_TITLE = "Vareya | European Fulfilment for E-Commerce Brands";
const DEFAULT_DESCRIPTION =
  "Reliable order fulfilment from Breda, the Netherlands. Shopify and Amazon FBM integration, multi-carrier delivery, and returns handling available.";
const OG_IMAGE_ALT =
  "VareYa brand artwork — a white cube in a glowing green hexagon above the VareYa wordmark, on a dark tech background.";
const OG_DESCRIPTION =
  "Fast, reliable order fulfilment from Breda, the Netherlands. Shopify and Amazon FBM integration.";

export async function generateMetadata(): Promise<Metadata> {
  const { t, inScope, locale } = await getRequestI18n();
  const title = inScope ? t(DEFAULT_TITLE) : DEFAULT_TITLE;
  const description = inScope ? t(DEFAULT_DESCRIPTION) : DEFAULT_DESCRIPTION;

  return {
    metadataBase: new URL("https://vareya.ai"),
    title,
    description,
    robots: reviewRobots() ?? { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: localeMeta(locale).ogLocale,
      siteName: "Vareya",
      title,
      description: t(OG_DESCRIPTION),
      images: [
        {
          url: "/og/vareya-og-artwork-20261015.jpg",
          width: 1200,
          height: 630,
          alt: inScope ? t(OG_IMAGE_ALT) : OG_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t(OG_DESCRIPTION),
      images: ["/og/vareya-og-artwork-20261015.jpg"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale, contentLocale, search, messages, inScope, t } = await getRequestI18n();
  const notice = contentNotice(locale, contentLocale);

  return (
    <html
      lang={inScope ? locale : "en-GB"}
      className={`${inter.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema(locale, t)),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased">
        <I18nProvider locale={locale} search={search} messages={messages} inScope={inScope}>
          <a href="#main-content" className="skip-link">
            {t("Skip to main content")}
          </a>
          <Header showLanguageSwitcher={inScope} />
          <CustomerReviews innerPagesOnly />
          <main id="main-content" className="flex-1" lang={contentLocale}>
            {notice && <p lang={locale} data-testid="content-language-notice" className="border-b border-border bg-slate-50 px-6 py-4 text-center text-sm text-slate-700">{notice}</p>}
            {children}
          </main>
          <Footer />
          <ConsentBanner />
          <AnalyticsLoader />
          <Suspense fallback={null}>
            <SiteAttributionTracker />
          </Suspense>
        </I18nProvider>
      </body>
    </html>
  );
}

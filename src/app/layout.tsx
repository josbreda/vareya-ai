import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GTM } from "@/components/layout/GTM";
import { ConsentBanner } from "@/components/layout/ConsentBanner";
import { organizationSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vareya | European Fulfilment for E-Commerce Brands",
    template: "%s | Vareya",
  },
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
    <html lang="en-GB" className={`${inter.variable} h-full`}>
      <head>
        <GTM />
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
      </body>
    </html>
  );
}

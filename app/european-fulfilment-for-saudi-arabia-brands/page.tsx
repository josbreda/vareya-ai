import { localizePageMetadata } from "@/i18n/localize-metadata";
import { localizeNode } from "@/i18n/localize-node";
import { getT as getTForContent } from "@/i18n/server";
import type { Metadata } from "next";


import { CountryFulfilmentPage } from "@/components/marketing/CountryPages";
import { COUNTRIES } from "@/content/countries";

const COUNTRY = COUNTRIES["saudi-arabia"];
const ROUTE = "/european-fulfilment-for-saudi-arabia-brands/";

const sourceMetadata: Metadata = {
  title: "European Fulfilment for Saudi Arabia Ecommerce Brands | Vareya",
  description: "EU fulfilment for Saudi Arabia brands from the Netherlands. Hold stock in the EU. Customs, VAT roles and Free Rate Scan.",
  alternates: { canonical: "https://vareya.ai/european-fulfilment-for-saudi-arabia-brands/" },
  openGraph: {
    title: "European Fulfilment for Saudi Arabia Ecommerce Brands | Vareya",
    description: "EU fulfilment for Saudi Arabia brands from the Netherlands. Hold stock in the EU. Customs, VAT roles and Free Rate Scan.",
    url: "https://vareya.ai/european-fulfilment-for-saudi-arabia-brands/",
    type: "website",
    locale: "en_GB",
  },
};
export async function generateMetadata(): Promise<Metadata> { return localizePageMetadata(sourceMetadata, "/european-fulfilment-for-saudi-arabia-brands/"); }

export default async function Page() {
  const __pageT = await getTForContent();
  return localizeNode((
    <CountryFulfilmentPage
      data={COUNTRY}
      links={{
        fulfilment: ROUTE,
        shopify: "/shopify-fulfilment-europe-for-saudi-arabia-stores/",
        returns: "/european-returns-handling-for-saudi-arabia-brands/",
        hubs: [
          { href: "/eu-fulfilment/", label: "EU fulfilment from the Netherlands" },
          { href: "/shopify-fulfilment-europe/", label: "Shopify fulfilment in Europe" },
          { href: "/returns-fulfilment-europe/", label: "Returns handling in Europe" },
          { href: "/cosmetics-supplements-fulfilment-europe/", label: "Cosmetics and supplements fulfilment" },
        ],
      }}
    />
  ), __pageT);
}

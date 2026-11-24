import { localizePageMetadata } from "@/i18n/localize-metadata";
import { localizeNode } from "@/i18n/localize-node";
import { getT as getTForContent } from "@/i18n/server";
import type { Metadata } from "next";


import { CountryShopifyPage } from "@/components/marketing/CountryPages";
import { COUNTRIES } from "@/content/countries";

const COUNTRY = COUNTRIES["south-korea"];
const ROUTE = "/shopify-fulfilment-europe-for-south-korea-stores/";

const sourceMetadata: Metadata = {
  title: "Shopify Fulfilment in Europe for South Korea Stores | Vareya",
  description: "Shopify fulfilment in Europe for South Korea stores. Connect your store to Breda: order sync, pick and pack, carrier hand-off, tracking, returns and Free Rate.",
  alternates: { canonical: "https://vareya.ai/shopify-fulfilment-europe-for-south-korea-stores/" },
  openGraph: {
    title: "Shopify Fulfilment in Europe for South Korea Stores | Vareya",
    description: "Shopify fulfilment in Europe for South Korea stores. Connect your store to Breda: order sync, pick and pack, carrier hand-off, tracking, returns and Free Rate.",
    url: "https://vareya.ai/shopify-fulfilment-europe-for-south-korea-stores/",
    type: "website",
    locale: "en_GB",
  },
};
export async function generateMetadata(): Promise<Metadata> { return localizePageMetadata(sourceMetadata, "/shopify-fulfilment-europe-for-south-korea-stores/"); }

export default async function Page() {
  const __pageT = await getTForContent();
  return localizeNode((
    <CountryShopifyPage
      data={COUNTRY}
      links={{
        fulfilment: "/eu-fulfilment-south-korean-brands/",
        shopify: ROUTE,
        returns: "/european-returns-handling-for-south-korea-brands/",
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

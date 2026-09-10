import type { Metadata } from "next";
import { CountryShopifyPage } from "@/components/marketing/CountryPages";
import { COUNTRIES } from "@/content/countries";

const COUNTRY = COUNTRIES["united-states"];
const ROUTE = "/shopify-fulfilment-europe-for-united-states-stores/";

export const metadata: Metadata = {
  title: "Shopify Fulfilment in Europe for US Stores | Vareya",
  description: "How US Shopify stores connect orders to a warehouse in Breda, the Netherlands: order sync, SKU and stock preparation, pick and pack, carrier hand-off, tracking, returns and the Free Rate Scan.",
  alternates: { canonical: "https://vareya.ai/shopify-fulfilment-europe-for-united-states-stores/" },
  openGraph: {
    title: "Shopify Fulfilment in Europe for US Stores | Vareya",
    description: "How US Shopify stores connect orders to a warehouse in Breda, the Netherlands: order sync, SKU and stock preparation, pick and pack, carrier hand-off, tracking, returns and the Free Rate Scan.",
    url: "https://vareya.ai/shopify-fulfilment-europe-for-united-states-stores/",
    type: "website",
    locale: "en_GB",
  },
};

export default function Page() {
  return (
    <CountryShopifyPage
      data={COUNTRY}
      links={{
        fulfilment: "/eu-fulfilment-us-brands/",
        shopify: ROUTE,
        returns: "/european-returns-handling-for-united-states-brands/",
        hubs: [
          { href: "/eu-fulfilment/", label: "EU fulfilment from the Netherlands" },
          { href: "/shopify-fulfilment-europe/", label: "Shopify fulfilment in Europe" },
          { href: "/returns-fulfilment-europe/", label: "Returns handling in Europe" },
          { href: "/cosmetics-supplements-fulfilment-europe/", label: "Cosmetics and supplements fulfilment" },
        ],
      }}
    />
  );
}

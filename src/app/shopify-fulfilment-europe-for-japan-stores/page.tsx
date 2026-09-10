import type { Metadata } from "next";
import { CountryShopifyPage } from "@/components/marketing/CountryPages";
import { COUNTRIES } from "@/content/countries";

const COUNTRY = COUNTRIES["japan"];
const ROUTE = "/shopify-fulfilment-europe-for-japan-stores/";

export const metadata: Metadata = {
  title: "Shopify Fulfilment in Europe for Japan Stores | Vareya",
  description: "How Japan Shopify stores connect orders to a warehouse in Breda, the Netherlands: order sync, SKU and stock preparation, pick and pack, carrier hand-off, tracking, returns and the Free Rate Scan.",
  alternates: { canonical: "https://vareya.ai/shopify-fulfilment-europe-for-japan-stores/" },
  openGraph: {
    title: "Shopify Fulfilment in Europe for Japan Stores | Vareya",
    description: "How Japan Shopify stores connect orders to a warehouse in Breda, the Netherlands: order sync, SKU and stock preparation, pick and pack, carrier hand-off, tracking, returns and the Free Rate Scan.",
    url: "https://vareya.ai/shopify-fulfilment-europe-for-japan-stores/",
    type: "website",
    locale: "en_GB",
  },
};

export default function Page() {
  return (
    <CountryShopifyPage
      data={COUNTRY}
      links={{
        fulfilment: "/european-fulfilment-for-japan-brands/",
        shopify: ROUTE,
        returns: "/european-returns-handling-for-japan-brands/",
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

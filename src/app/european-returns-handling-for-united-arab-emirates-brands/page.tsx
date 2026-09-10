import type { Metadata } from "next";
import { CountryReturnsPage } from "@/components/marketing/CountryPages";
import { COUNTRIES } from "@/content/countries";

const COUNTRY = COUNTRIES["united-arab-emirates"];
const ROUTE = "/european-returns-handling-for-united-arab-emirates-brands/";

export const metadata: Metadata = {
  title: "European Returns Handling for UAE Brands | Vareya",
  description: "How returns handling works within Vareya's fulfilment service for UAE brands selling to European customers: where returns land, what must be agreed up front, and the Free Rate Scan.",
  alternates: { canonical: "https://vareya.ai/european-returns-handling-for-united-arab-emirates-brands/" },
  openGraph: {
    title: "European Returns Handling for UAE Brands | Vareya",
    description: "How returns handling works within Vareya's fulfilment service for UAE brands selling to European customers: where returns land, what must be agreed up front, and the Free Rate Scan.",
    url: "https://vareya.ai/european-returns-handling-for-united-arab-emirates-brands/",
    type: "website",
    locale: "en_GB",
  },
};

export default function Page() {
  return (
    <CountryReturnsPage
      data={COUNTRY}
      links={{
        fulfilment: "/european-fulfilment-for-united-arab-emirates-brands/",
        shopify: "/shopify-fulfilment-europe-for-united-arab-emirates-stores/",
        returns: ROUTE,
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

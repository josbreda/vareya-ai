import type { Metadata } from "next";
import { CountryReturnsPage } from "@/components/marketing/CountryPages";
import { COUNTRIES } from "@/content/countries";

const COUNTRY = COUNTRIES["china"];
const ROUTE = "/european-returns-handling-for-china-brands/";

export const metadata: Metadata = {
  title: "European Returns Handling for China Brands | Vareya",
  description: "How returns handling works within Vareya's fulfilment service for China brands selling to European customers: where returns land, what must be agreed up front, and the Free Rate Scan.",
  alternates: { canonical: "https://vareya.ai/european-returns-handling-for-china-brands/" },
  openGraph: {
    title: "European Returns Handling for China Brands | Vareya",
    description: "How returns handling works within Vareya's fulfilment service for China brands selling to European customers: where returns land, what must be agreed up front, and the Free Rate Scan.",
    url: "https://vareya.ai/european-returns-handling-for-china-brands/",
    type: "website",
    locale: "en_GB",
  },
};

export default function Page() {
  return (
    <CountryReturnsPage
      data={COUNTRY}
      links={{
        fulfilment: "/european-fulfilment-for-china-brands/",
        shopify: "/shopify-fulfilment-europe-for-china-stores/",
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

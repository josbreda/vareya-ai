import type { Metadata } from "next";
import { CountryReturnsPage } from "@/components/marketing/CountryPages";
import { COUNTRIES } from "@/content/countries";

const COUNTRY = COUNTRIES["south-korea"];
const ROUTE = "/european-returns-handling-for-south-korea-brands/";

export const metadata: Metadata = {
  title: "European Returns Handling for South Korea Brands | Vareya",
  description: "How returns handling works within Vareya's fulfilment service for South Korea brands selling to European customers: where returns land, what must be agreed up front, and the Free Rate Scan.",
  alternates: { canonical: "https://vareya.ai/european-returns-handling-for-south-korea-brands/" },
  openGraph: {
    title: "European Returns Handling for South Korea Brands | Vareya",
    description: "How returns handling works within Vareya's fulfilment service for South Korea brands selling to European customers: where returns land, what must be agreed up front, and the Free Rate Scan.",
    url: "https://vareya.ai/european-returns-handling-for-south-korea-brands/",
    type: "website",
    locale: "en_GB",
  },
};

export default function Page() {
  return (
    <CountryReturnsPage
      data={COUNTRY}
      links={{
        fulfilment: "/eu-fulfilment-south-korean-brands/",
        shopify: "/shopify-fulfilment-europe-for-south-korea-stores/",
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

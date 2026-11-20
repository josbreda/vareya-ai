import type { Metadata } from "next";
import { CountryFulfilmentPage } from "@/components/marketing/CountryPages";
import { COUNTRIES } from "@/content/countries";

const COUNTRY = COUNTRIES["norway"];
const ROUTE = "/european-fulfilment-for-norway-brands/";

export const metadata: Metadata = {
  title: "European Fulfilment for Norway Ecommerce Brands | Vareya",
  description: "EU fulfilment for Norway brands. Hold stock in the Netherlands, ship across Europe. Customs, VAT and Free Rate Scan.",
  alternates: { canonical: "https://vareya.ai/european-fulfilment-for-norway-brands/" },
  openGraph: {
    title: "European Fulfilment for Norway Ecommerce Brands | Vareya",
    description: "EU fulfilment for Norway brands. Hold stock in the Netherlands, ship across Europe. Customs, VAT and Free Rate Scan.",
    url: "https://vareya.ai/european-fulfilment-for-norway-brands/",
    type: "website",
    locale: "en_GB",
  },
};

export default function Page() {
  return (
    <CountryFulfilmentPage
      data={COUNTRY}
      links={{
        fulfilment: ROUTE,
        shopify: "/shopify-fulfilment-europe-for-norway-stores/",
        returns: "/european-returns-handling-for-norway-brands/",
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

import type { Metadata } from "next";
import { CountryFulfilmentPage } from "@/components/marketing/CountryPages";
import { COUNTRIES } from "@/content/countries";

const COUNTRY = COUNTRIES["saudi-arabia"];
const ROUTE = "/european-fulfilment-for-saudi-arabia-brands/";

export const metadata: Metadata = {
  title: "European Fulfilment for Saudi Arabia Ecommerce Brands | Vareya",
  description: "A practical guide for Saudi Arabia ecommerce brands assessing fulfilment from a warehouse in the Netherlands for European orders. Covers holding stock in the EU, the Saudi Arabia-EU corridor, customs and VAT roles, product fit and the Free Rate Scan.",
  alternates: { canonical: "https://vareya.ai/european-fulfilment-for-saudi-arabia-brands/" },
  openGraph: {
    title: "European Fulfilment for Saudi Arabia Ecommerce Brands | Vareya",
    description: "A practical guide for Saudi Arabia ecommerce brands assessing fulfilment from a warehouse in the Netherlands for European orders. Covers holding stock in the EU, the Saudi Arabia-EU corridor, customs and VAT roles, product fit and the Free Rate Scan.",
    url: "https://vareya.ai/european-fulfilment-for-saudi-arabia-brands/",
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
  );
}

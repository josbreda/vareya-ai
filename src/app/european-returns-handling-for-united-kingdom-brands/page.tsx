import { localizePageMetadata } from "@/i18n/localize-metadata";
import { localizeNode } from "@/i18n/localize-node";
import { getT as getTForContent } from "@/i18n/server";
import type { Metadata } from "next";


import { CountryReturnsPage } from "@/components/marketing/CountryPages";
import { COUNTRIES } from "@/content/countries";

const COUNTRY = COUNTRIES["united-kingdom"];
const ROUTE = "/european-returns-handling-for-united-kingdom-brands/";

const sourceMetadata: Metadata = {
  title: "European Returns Handling for UK Brands | Vareya",
  description: "European returns handling for UK brands selling via Vareya from the Netherlands. Where returns land, what to agree up front, and the Free Rate Scan.",
  alternates: { canonical: "https://vareya.ai/european-returns-handling-for-united-kingdom-brands/" },
  openGraph: {
    title: "European Returns Handling for UK Brands | Vareya",
    description: "European returns handling for UK brands selling via Vareya from the Netherlands. Where returns land, what to agree up front, and the Free Rate Scan.",
    url: "https://vareya.ai/european-returns-handling-for-united-kingdom-brands/",
    type: "website",
    locale: "en_GB",
  },
};
export async function generateMetadata(): Promise<Metadata> { return localizePageMetadata(sourceMetadata, "/european-returns-handling-for-united-kingdom-brands/"); }

export default async function Page() {
  const __pageT = await getTForContent();
  return localizeNode((
    <CountryReturnsPage
      data={COUNTRY}
      links={{
        fulfilment: "/eu-fulfilment-uk-brands/",
        shopify: "/shopify-fulfilment-europe-for-united-kingdom-stores/",
        returns: ROUTE,
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

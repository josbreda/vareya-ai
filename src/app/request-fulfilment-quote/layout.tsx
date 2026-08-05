import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Fulfilment Quote | Vareya",
  description:
    "Request a tailored fulfilment quote from Vareya. Tell us about your brand, volumes, and needs.",
  alternates: {
    canonical: "https://vareya.ai/request-fulfilment-quote/",
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}

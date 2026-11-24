import type { Metadata } from "next";
import { buildLocalizedMetadata } from "@/i18n/page-meta";

export function generateMetadata(): Promise<Metadata> {
  return buildLocalizedMetadata("/request-fulfilment-quote/");
}

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}

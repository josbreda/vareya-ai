import type { Metadata } from "next";
import { buildLocalizedMetadata } from "@/i18n/page-meta";

export function generateMetadata(): Promise<Metadata> {
  return buildLocalizedMetadata("/free-rate-scan/");
}

export default function ScanLayout({ children }: { children: React.ReactNode }) {
  return children;
}

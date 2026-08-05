import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Your EU Fulfilment Fit | Vareya",
  description:
    "Quick self-assessment to see if Vareya fulfilment is right for your e-commerce brand. Takes under 3 minutes.",
  alternates: {
    canonical: "https://vareya.ai/fulfilment-scan/",
  },
};

export default function ScanLayout({ children }: { children: React.ReactNode }) {
  return children;
}

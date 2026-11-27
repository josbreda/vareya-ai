import type { Metadata } from "next";
import { EditorialArticlePage, editorialMetadata } from "@/components/knowledge/EditorialArticlePage";
import { PPWR_EPR_ARTICLE } from "@/content/editorial-articles";

export function generateMetadata(): Metadata {
  return editorialMetadata(PPWR_EPR_ARTICLE);
}

export default function PpwrEprPage() {
  return (
    <EditorialArticlePage
      article={PPWR_EPR_ARTICLE}
      author={{ "@type": "Organization", name: "Vareya BV", url: "https://vareya.ai/" }}
    />
  );
}

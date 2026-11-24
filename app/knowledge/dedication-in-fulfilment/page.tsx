import type { Metadata } from "next";
import { EditorialArticlePage, editorialMetadata } from "@/components/knowledge/EditorialArticlePage";
import { DEDICATION_ARTICLE } from "@/content/editorial-articles";

export function generateMetadata(): Metadata {
  return editorialMetadata(DEDICATION_ARTICLE);
}

export default function DedicationPage() {
  return (
    <EditorialArticlePage
      article={DEDICATION_ARTICLE}
      author={{ "@type": "Person", name: "Raymond Faber", jobTitle: "Founder, VareYa" }}
    />
  );
}

/* eslint-disable @next/next/no-html-link-for-pages -- Full English document navigation. */
import Image from "next/image";
import type { Metadata } from "next";
import story from "@/content/primal-evidence.json";
import { KnowledgeViewTracker, KnowledgeCtaLink } from "@/components/knowledge/KnowledgeTrackers";

const canonical = "https://vareya.ai/knowledge/primal-fx-supplements-fulfilment-evidence/";
const cover = "/images/p1/primal-fx-cover.jpg";
type EvidencePhoto = { src: string; alt: string; caption: string; width?: number; height?: number; fullWidth?: boolean };
type EvidenceSection = { heading: string; paragraphs: string[]; photos?: EvidencePhoto[] };
const sections: EvidenceSection[] = story.sections;

export const metadata: Metadata = {
  title: { absolute: story.title }, description: story.description,
  alternates: { canonical },
  openGraph: { type: "article", title: story.title, description: story.description, url: canonical, images: [cover] },
};

export default function PrimalEvidence() {
  return <article lang="en-GB">
    <KnowledgeViewTracker slug={story.slug} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "Article", headline: story.title,
      description: story.description, datePublished: story.publishedAt, dateModified: "2026-11-12",
      mainEntityOfPage: canonical, author: { "@type": "Organization", name: "Vareya" },
      image: [`https://vareya.ai${cover}`],
    }).replace(/</g, "\\u003c") }} />
    <header className="border-b border-border bg-surface">
      <div className="container-site max-w-4xl py-14" style={{ maxWidth: "56rem", paddingBlock: "3.5rem" }}>
        <a href="/knowledge/?lang=en" className="text-primary underline">Knowledge Centre</a>
        <p className="mt-8 text-sm uppercase tracking-widest text-primary">Customer evidence · 11 November 2026</p>
        <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">{story.title}</h1>
        <p className="mt-6 text-xl leading-8 text-muted">{story.summary}</p>
        <figure className="mt-8">
          <Image src={cover} alt="PRIMAL FX — supplied fulfilment cover illustration" width={1280} height={853} sizes="(max-width:896px) 100vw, 848px" className="h-auto w-full rounded-xl object-contain" />
          <figcaption className="mt-3 text-sm leading-6 text-muted">Supplied cover illustration. The order examples below are the evidence; the cover does not establish delivery times or service guarantees.</figcaption>
        </figure>
        <nav aria-label="Two order examples" className="mt-6 flex flex-wrap gap-5 text-primary underline">
          <a href="#spain-carton">Example 1: three products in a carton</a>
          <a href="#germany-mailer">Example 2: one pouch in a mailer</a>
        </nav>
      </div>
    </header>
    <div className="container-site max-w-3xl py-12" style={{ maxWidth: "48rem", paddingBlock: "3rem" }}>
      {sections.map((section, index) => <section key={section.heading} id={index === 1 ? "spain-carton" : index === 2 ? "germany-mailer" : undefined} className="mb-12 scroll-mt-28">
        <h2 className="text-2xl font-bold">{section.heading}</h2>
        <div className="mt-5 space-y-5 text-lg leading-8 text-muted">{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        {section.photos && <div className="mt-7 grid items-start gap-7 sm:grid-cols-2">
          {section.photos.map(photo => <figure key={photo.src} className={photo.fullWidth ? "sm:col-span-2" : undefined}>
            <Image src={`/images/primal-fx/${photo.src}`} alt={photo.alt} width={photo.width ?? 960} height={photo.height ?? 1280} sizes={photo.fullWidth ? "(max-width:896px) 100vw, 848px" : "(max-width:640px) 100vw, 360px"} className={`h-auto w-full rounded-xl bg-surface object-contain${photo.fullWidth ? "" : " max-h-[480px]"}`} />
            <figcaption className="mt-3 text-sm leading-6 text-muted">{photo.caption}</figcaption>
          </figure>)}
        </div>}
      </section>)}
      <aside className="rounded-xl bg-surface p-7">
        <h2 className="text-2xl font-bold">Find the right format for your products</h2>
        <p className="mt-4 leading-7">Explore <a className="text-primary underline" href="/cosmetics-supplements-fulfilment-europe/?lang=en">supplement fulfilment</a> and <a className="text-primary underline" href="/boxable-fulfilment/?lang=en">Boxable Fulfilment</a>, or share your product and order profile.</p>
        <p className="mt-4"><a className="text-primary underline" href="/product-fit-check/?lang=en">Check Your Product Fit</a></p>
        <KnowledgeCtaLink slug={story.slug} href="/free-rate-scan/?lang=en" label="Check your EU fulfilment fit" ctaLocation="footer" className="mt-5 inline-flex rounded-lg bg-primary px-6 py-3 text-white" />
      </aside>
    </div>
  </article>;
}

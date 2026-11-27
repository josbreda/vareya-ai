import spacing from "@/components/knowledge/editorial-spacing.module.css";
/* eslint-disable @next/next/no-html-link-for-pages -- English editorial uses full document navigation, consistent with the existing English case study. */
import type { Metadata } from "next";
import Image from "next/image";
import story from "@/content/postnl-article.json";
import { KnowledgeViewTracker, KnowledgeCtaLink } from "@/components/knowledge/KnowledgeTrackers";
const canonical = "https://vareya.ai/knowledge/vareya-postnl-people-behind-parcels/";
const image = "/images/knowledge/vareya-postnl-gerrit-van-estrik-retirement.png";
export const metadata: Metadata = {
  title: { absolute: story.metaTitle }, description: story.description,
  alternates: { canonical },
  openGraph: { title: story.metaTitle, description: story.description, url: canonical, type: "article", publishedTime: story.publishedAt, images: [{url:image,width:1280,height:960,alt:story.imageAlt}] },
  twitter: { card:"summary_large_image",title:story.metaTitle,description:story.description,images:[image] }
};
export default function PostnlStory() {
 const article = {"@context":"https://schema.org","@type":"BlogPosting",headline:story.title,description:story.description,datePublished:story.publishedAt,dateModified:story.publishedAt,mainEntityOfPage:canonical,inLanguage:"en-GB",image:[`https://vareya.ai${image}`],author:{"@type":"Organization",name:"Vareya BV",url:"https://vareya.ai/"},publisher:{"@type":"Organization",name:"Vareya BV",url:"https://vareya.ai/"}};
 const faq={"@context":"https://schema.org","@type":"FAQPage",mainEntity:story.faq.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))};
 return <div lang="en-GB">
 <KnowledgeViewTracker slug={story.slug}/>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(article)}}/>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faq)}}/>
 <article>
 <header className="border-b border-border bg-surface">
 <div className={`container-site max-w-4xl py-12 sm:py-16 ${spacing.responsive}`} style={{maxWidth: "56rem", paddingBlock: "var(--editorial-padding)"}}>
 <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted"><a href="/?lang=en">Home</a><span className="mx-3">/</span><a href="/knowledge/?lang=en">Knowledge</a></nav>
 <p className="text-sm font-semibold uppercase tracking-widest text-primary">People in logistics · <time dateTime={story.publishedAt}>{story.publishedLabel}</time></p>
 <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">{story.title}</h1>
 <p className="mt-6 text-xl leading-8 text-muted">{story.summary}</p>
 <figure className="mt-9"><Image src={image} alt={story.imageAlt} width={1280} height={960} sizes="(max-width: 900px) 100vw, 832px" preload className="h-auto w-full rounded-2xl"/><figcaption className="mt-3 text-sm leading-6 text-muted">{story.caption}</figcaption></figure>
 </div></header>
 <div className={`container-site max-w-3xl py-12 sm:py-16 ${spacing.responsive}`} style={{maxWidth: "48rem", paddingBlock: "var(--editorial-padding)"}}>
 <div className="space-y-5 text-lg leading-8 text-muted">{story.opening.map(p=><p key={p}>{p}</p>)}</div>
 {story.sections.map((s,i)=><section key={s.heading} className="mt-12" aria-labelledby={`postnl-section-${i}`}><h2 id={`postnl-section-${i}`} className="text-2xl font-bold text-ink sm:text-3xl">{s.heading}</h2><div className="mt-5 space-y-5 text-lg leading-8 text-muted">{s.paragraphs.map(p=>p.startsWith("“Behind every")?<blockquote key={p} className="border-l-4 border-primary pl-6 text-xl font-medium text-ink"><p>{p}</p><cite className="mt-3 block text-sm not-italic text-muted">Raymond, in his LinkedIn retirement tribute</cite></blockquote>:<p key={p}>{p}</p>)}</div></section>)}
 <p className="mt-10 text-sm leading-6 text-muted">Based on Raymond’s personal LinkedIn tribute to Gerrit van Estrik. Photograph supplied by Vareya.</p>
 </div></article>
 <section className="border-y border-border bg-surface py-10" aria-labelledby="postnl-cta"><div className="container-site max-w-3xl" style={{maxWidth: "48rem"}}><h2 id="postnl-cta" className="text-2xl font-bold text-ink">{story.cta.heading}</h2><p className="mt-4 leading-7 text-muted">{story.cta.body}</p><p className="mt-3 font-medium text-ink">{story.cta.tagline}</p><KnowledgeCtaLink href={story.cta.href} label={story.cta.label} ctaLocation="footer" slug={story.slug} className="mt-5 inline-flex min-h-12 items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white"/></div></section>
 <section className="container-site max-w-3xl py-12" style={{maxWidth: "48rem", paddingBlock: "3rem"}} aria-labelledby="postnl-faq"><h2 id="postnl-faq" className="text-2xl font-bold text-ink">Frequently asked questions</h2><div className="mt-7 space-y-7">{story.faq.map(f=><div key={f.q}><h3 className="text-lg font-semibold text-ink">{f.q}</h3><p className="mt-2 leading-7 text-muted">{f.a}</p></div>)}</div></section>
 <nav className="container-site max-w-3xl pb-14" style={{maxWidth: "48rem", paddingBottom: "3.5rem"}} aria-label="Related reading"><h2 className="text-xl font-bold text-ink">Explore fulfilment and shipping</h2><ul className="mt-4 space-y-3 text-primary underline underline-offset-4"><li><a href="/boxable-fulfilment/?lang=en">Boxable Fulfilment™</a></li><li><a href="/boxable-shipping/?lang=en">Boxable Shipping™</a></li><li><a href="/eu-fulfilment/?lang=en">Ecommerce fulfilment from the Netherlands</a></li><li><a href="https://www.postnl.nl/en/">PostNL: official website</a></li></ul></nav>
 </div>;
}

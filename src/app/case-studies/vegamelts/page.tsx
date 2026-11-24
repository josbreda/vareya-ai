/* eslint-disable @next/next/no-html-link-for-pages -- Full document navigation keeps the English case study and localized page layouts in sync. */
import type { Metadata } from "next";
import Image from "next/image";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import styles from "./case-study.module.css";

const route = "/case-studies/vegamelts/";
const canonical = `https://vareya.ai${route}`;
const headline = "How VegaMelts Grew Orders by 300% with VareYa Boxable Fulfilment™";
export const metadata: Metadata = {
  ...buildMetadata(route),
  openGraph: {
    ...buildMetadata(route).openGraph,
    type: "article",
    publishedTime: "2026-11-09",
    images: [{ url: "/images/vegamelts/products.png", width: 960, height: 1280, alt: "Compact supplement products featured in the VegaMelts case study" }],
  },
  twitter: { card: "summary_large_image", title: headline, description: "Compact products. Smarter fulfilment. 300% order growth.", images: ["/images/vegamelts/products.png"] },
};

const process = ["VegaMelts product", "Intelligent picking", "Compact packing", "Boxable parcel", "Optimised shipping", "Customer delivery"];
const advantage = ["Smaller products", "Less packaging", "Smaller shipments", "More shipping possibilities", "Lower fulfilment and shipping costs"];
const sections = [
  ["challenge", "The growth challenge"],
  ["approach", "The Boxable approach"],
  ["shipping", "Smarter shipping"],
  ["results", "The results"],
  ["delivery", "The delivery experience"],
  ["next-stage", "Built for what’s next"],
];

export default function VegaMeltsCaseStudy() {
  const article = { "@context": "https://schema.org", "@type": "Article", headline, description: "How compact packaging, efficient fulfilment and appropriate shipping methods supported VegaMelts’ order growth.", datePublished: "2026-11-09", dateModified: "2026-11-09", mainEntityOfPage: canonical, inLanguage: "en-GB", image: [`https://vareya.ai/images/vegamelts/products.png`], author: { "@type": "Organization", name: "VareYa", url: "https://vareya.ai" }, publisher: { "@type": "Organization", name: "VareYa", url: "https://vareya.ai" } };
  const breadcrumbs = breadcrumbSchema([{ name: "Home", url: "https://vareya.ai/" }, { name: "VegaMelts case study", url: canonical }]);
  return (
    <article className={styles.story} lang="en-GB">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <header className={styles.hero}>
        <div className="container-site">
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}><a href="/?lang=en">Home</a><span aria-hidden="true">/</span><span aria-current="page">VegaMelts</span></nav>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>Customer story · Supplements</p>
              <h1>How VegaMelts Grew Orders by <span>300%</span> with VareYa Boxable Fulfilment™</h1>
              <p className={styles.intro}>How smarter packaging, fulfilment and shipping helped VegaMelts scale while keeping fulfilment lean and cost-efficient.</p>
              <a className={styles.heroLink} href="#results">Explore the results <span aria-hidden="true">↗</span></a>
            </div>
            <figure className={styles.heroPhoto}>
              <Image src="/images/vegamelts/products.png" alt="Compact vitamin B12 and iron supplement tins photographed on a wooden surface" fill sizes="(max-width: 800px) 100vw, 520px" preload className={styles.cover} />
              <figcaption>Small products. Room to grow.</figcaption>
            </figure>
          </div>
          <div className={styles.heroBottom}><span>VegaMelts × VareYa</span><span>Boxable Fulfilment™ · Boxable Shipping™</span></div>
        </div>
      </header>

      <div className={styles.metrics} aria-label="Case study highlights">
        <div className="container-site">
          <div><strong>+300%</strong><span>Order growth reported</span></div>
          <div><strong>Compact</strong><span>Packaging built around the product</span></div>
          <div><strong>Scalable</strong><span>A lean fulfilment operation</span></div>
        </div>
      </div>

      <div className={`container-site ${styles.bodyGrid}`}>
        <aside className={styles.contents} aria-label="On this page"><p>Inside the story</p><nav>{sections.map(([id, label], i) => <a key={id} href={`#${id}`}><span>0{i + 1}</span>{label}</a>)}</nav></aside>
        <div className={styles.body}>
          <div className={styles.opening}>
            <p>Growth creates an operational question for every ecommerce brand: how do you process substantially more orders without letting fulfilment complexity, packaging requirements and shipping costs grow at the same pace?</p>
            <p>For VegaMelts, the answer is a fulfilment model built around the physical characteristics of the product itself.</p>
            <p>VareYa’s Boxable Fulfilment™ and Boxable Shipping™ approach combines compact packaging, efficient fulfilment and appropriate shipping methods to create an operation designed to scale with VegaMelts’ growth.</p>
          </div>

          <section id="challenge" className={styles.section}>
            <p className={styles.kicker}>01 / The challenge</p><h2>Growth without fulfilment complexity</h2>
            <p>VegaMelts sells compact, lightweight supplement products. That makes the products particularly well suited to a different approach to traditional ecommerce fulfilment.</p>
            <p>As order volumes increased, the challenge was to keep fulfilment fast, scalable, cost-efficient and operationally simple — suitable for international ecommerce and capable of handling substantially higher order volumes.</p>
            <p>Using unnecessarily large conventional parcel packaging for a small, thin product adds volume that the product itself does not require. That can mean more packaging material, larger shipments and unnecessary handling.</p>
            <p>The opportunity was therefore bigger than simply fulfilling more orders. It was about creating a fulfilment method that fits the product.</p>
            <div className={styles.productPair}>
              <figure><div className={styles.productPhoto}><Image src="/images/vegamelts/product-front.png" alt="Front view of a small, flat vitamin B12 supplement tin" fill sizes="(max-width: 600px) 90vw, 360px" className={styles.cover} /></div><figcaption>A compact product format.</figcaption></figure>
              <figure><div className={styles.productPhoto}><Image src="/images/vegamelts/product-profile.png" alt="Side view showing the thin profile of the supplement tin" fill sizes="(max-width: 600px) 90vw, 360px" className={styles.cover} /></div><figcaption>A thin profile that informs the packing brief.</figcaption></figure>
            </div>
          </section>

          <section id="approach" className={styles.section}>
            <p className={styles.kicker}>02 / The approach</p><h2>VareYa Boxable Fulfilment™</h2>
            <p>VareYa approached the VegaMelts operation from the product outward.</p>
            <ol className={styles.process}>{process.map((step, i) => <li key={step}><span>{String(i + 1).padStart(2, "0")}</span><strong>{step}</strong>{i < process.length - 1 && <span aria-hidden="true" className={styles.arrow}>↓</span>}</li>)}</ol>
            <p>Instead of automatically placing a small product into a conventional ecommerce parcel, Boxable Fulfilment™ focuses on reducing unnecessary packaging volume while maintaining suitable product protection and a professional customer experience.</p>
            <p>VegaMelts products can be packed into compact, flat packaging designed around what the order actually needs.</p>
            <p>Boxable Shipping™ extends that principle into transportation. The packed order can be matched with an appropriate shipping method based on dimensions, weight, destination, delivery method and carrier requirements.</p>
            <p>Where the packed dimensions and applicable carrier requirements allow it, orders can also be prepared in a letterbox-friendly format.</p>
            <details className={styles.illustration}><summary>See the illustrated Boxable packing journey <span aria-hidden="true">+</span></summary><figure><Image src="/images/vegamelts/boxable-process-illustration.png" alt="Illustrated concept showing compact supplements, packing materials, picking and packing, labelling, dispatch and letterbox delivery" width={853} height={1280} sizes="(max-width: 800px) 94vw, 760px" /><figcaption>Packaging concept illustration supplied for this case study. It is illustrative, rather than a photograph of the actual packing operation. Product artwork and the “VergaMelts” spelling differ from the supplied product photos. Packaging, delivery eligibility and any environmental benefits must be assessed for the actual order and route.</figcaption></figure></details>
          </section>

          <section id="shipping" className={styles.section}>
            <p className={styles.kicker}>03 / The operational advantage</p><h2>Smaller packages. Smarter shipping.</h2>
            <p>Boxable Fulfilment™ is a fulfilment methodology built around compact ecommerce products. For VegaMelts, that means using the characteristics of the product as an operational advantage.</p>
            <div className={styles.advantage}><h3>Turning product size into a fulfilment advantage</h3><ol>{advantage.map((step, i) => <li key={step}>{i > 0 && <span aria-hidden="true">↓</span>}{step}</li>)}</ol></div>
            <p>The model can reduce unnecessary packaging, minimise parcel volume, streamline picking and packing and provide access to shipping methods appropriate for compact orders.</p>
            <p>The result is a leaner fulfilment operation that can support international growth without defaulting to increasingly large boxes and increasingly complicated processes.</p>
          </section>

          <section id="results" className={styles.section}>
            <p className={styles.kicker}>04 / The results</p><h2>300% order growth</h2>
            <p>The strongest result is the growth itself: VegaMelts’ order volume increased by 300%, supported by a fulfilment model designed for higher volumes without unnecessary packaging and operational complexity.</p>
            <div className={styles.resultMain}><strong>+300%</strong><span>ORDER GROWTH</span></div>
            <div className={styles.resultPair}><div><span aria-hidden="true">↓</span><h3>Shipping costs</h3><p>More compact shipments and smarter selection of shipping methods contributed to lower shipping costs.</p></div><div><span aria-hidden="true">↑</span><h3>Fulfilment efficiency</h3><p>Standardised compact packaging and streamlined fulfilment created a faster and more efficient operating model.</p></div></div>
            <p>Most importantly, the fulfilment operation was designed to support growth rather than become a constraint on growth.</p>
            <p className={styles.sourceNote}>The 300% growth figure was supplied by VareYa for this case study. Comparison dates, underlying order counts and quantified cost savings were not supplied.</p>
          </section>

          <section id="delivery" className={styles.section}>
            <p className={styles.kicker}>05 / The customer experience</p><h2>A small difference that changes delivery</h2>
            <p>For suitable VegaMelts orders, Boxable Fulfilment™ provides another advantage: letterbox-friendly delivery. A thin product can be packed in a thin shipping format rather than an unnecessarily oversized parcel.</p>
            <p>Where dimensions and carrier requirements permit, there is no unnecessarily oversized parcel and no excessive packaging. The customer does not necessarily need to be home to receive an eligible letterbox delivery.</p>
            <div className={styles.philosophy}><span>The Boxable philosophy</span><p>Ship the product in the format the product actually needs.</p></div>
          </section>

          <section id="next-stage" className={styles.section}>
            <p className={styles.kicker}>06 / What comes next</p><h2>Built for the next stage of growth</h2>
            <p>The VegaMelts case demonstrates an important principle for ecommerce fulfilment: growth does not necessarily require bigger boxes, more packaging or proportionally more operational complexity.</p>
            <p>For businesses selling compact and lightweight products, fulfilment can be designed around the product itself. That makes the approach particularly relevant for supplements, vitamins, nutraceuticals, skincare, cosmetics, beauty products and other compact ecommerce products.</p>
            <p>Product suitability is assessed using the complete packed order, handling requirements and shipping route.</p>
            <p className={styles.closing}>VegaMelts grew.<br />The packages didn’t have to.</p><p>That is Boxable Fulfilment™.</p>
          </section>
        </div>
      </div>

      <section className={styles.cta} aria-labelledby="case-cta"><div className="container-site"><p className={styles.eyebrow}>Your next step</p><h2 id="case-cta">Could your products be Boxable?</h2><p>Smaller packages can open up smarter fulfilment and shipping possibilities. VareYa can analyse your products, packaging and shipping profile to identify where Boxable Fulfilment™ and Boxable Shipping™ could create a leaner fulfilment model.</p><div className={styles.ctaLinks}><a href="/free-rate-scan/?lang=en">Request a Fulfilment Scan <span aria-hidden="true">→</span></a><a href="/boxable-fulfilment/?lang=en">Discover Boxable Fulfilment™ <span aria-hidden="true">→</span></a><a href="/product-fit-check/?lang=en">Check Your Product Fit <span aria-hidden="true">→</span></a></div></div></section>
    </article>
  );
}

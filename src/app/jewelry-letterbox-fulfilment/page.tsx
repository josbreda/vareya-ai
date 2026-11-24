/* eslint-disable @next/next/no-img-element -- preserve supplied promotional artwork without cropping */
import type { Metadata } from "next";
import { PAGE_META } from "@/content/pages";
import "./jewelry.css";

const meta = PAGE_META["/jewelry-letterbox-fulfilment/"];
export const metadata: Metadata = {
  title: meta.title, description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, type: "website", locale: "en_GB", images: [{ url: "/jewelry-letterbox/ship-smaller.png", width: 853, height: 1280, alt: "VareYa compact jewelry fulfilment" }] },
  twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: ["/jewelry-letterbox/ship-smaller.png"] },
};

export default function JewelryLetterboxFulfilmentPage() {
  return <div className="jewelry-landing" lang="en">
    <section className="hero">
      <div className="hero-grid wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="dot"></span> JEWELRY LETTERBOX FULFILMENT™</p>
          <h1>Small package.<br />Tracked delivery.<br /><em>Global reach.</em></h1>
          <p className="hero-lead">International fulfilment designed around small, lightweight jewelry orders.</p>
          <p className="hero-description">VareYa optimises the complete fulfilment and shipping process for ecommerce jewelry brands. Compact products are packed into small branded padded envelopes and shipped internationally with Track &amp; Trace, creating a leaner alternative to unnecessarily large parcel formats.</p>
          <div className="hero-actions"><a className="button" href="https://vareya.ai/free-rate-scan/?lang=en">Request a Jewelry Fulfilment Scan <span aria-hidden="true">↗</span></a><a className="text-link light" href="#in-action"><span className="play" aria-hidden="true">▶</span> See it in action</a></div>
          <div className="hero-tags"><span>Compact by design</span><span>Tracked internationally</span></div>
        </div>
        <figure className="hero-visual"><img src="/jewelry-letterbox/ship-smaller.png" width="853" height="1280" fetchPriority="high" alt="VareYa branded black padded envelope under the message Ship smaller. Spend less. Grow faster." /><figcaption><span>SMALL FORMAT. BIG POSSIBILITIES.</span><span aria-hidden="true">↗</span></figcaption></figure>
      </div>
    </section>

    <section className="reference wrap" aria-labelledby="reference-title">
      <div className="section-label"><span id="reference-title">THE REFERENCE ORDER</span><span>01 / BUILT AROUND THE ORDER</span></div>
      <div className="specs"><div><strong>100 × 165 <small>mm</small></strong><span>Branded padded envelope</span></div><div><strong>300 <small>g</small></strong><span>Complete packed order</span></div><div><strong>Track &amp; Trace</strong><span>Shipment visibility</span></div><div><strong>40+ <small>countries</small></strong><span>Worldwide shipping</span></div></div>
      <p className="footnote">Reference configuration. Actual eligibility, dimensions and shipping options depend on the individual order, destination and carrier requirements.</p>
    </section>

    <section className="approach section wrap" id="approach">
      <div className="section-heading"><p className="eyebrow">A SMALLER WAY FORWARD</p><h2>Why jewelry works for<br />Letterbox Fulfilment<span className="tm">™</span></h2></div>
      <div className="approach-grid">
        <figure className="image-frame"><img src="/jewelry-letterbox/pick-pack.png" width="853" height="1280" loading="lazy" alt="VareYa jewelry pick station and branded padded envelopes prepared for dispatch" /><figcaption>From carefully organised stock to a compact, branded shipment.</figcaption></figure>
        <div className="approach-copy"><p className="intro">Jewelry combines <strong>high product value with a very small physical footprint.</strong></p><p>Instead of automatically using conventional parcel packaging, VareYa designs the fulfilment flow around what the jewelry order actually requires.</p>
          <ol className="process"><li><span>01</span>Jewelry Product</li><li><span>02</span>Efficient Picking &amp; Packing</li><li><span>03</span>Premium Branded Packaging</li><li><span>04</span>100 × 165 mm Padded Envelope</li><li><span>05</span>Track &amp; Trace</li><li><span>06</span>Letterbox-Friendly Delivery</li><li><span>07</span>40+ Countries Worldwide <b aria-hidden="true">↗</b></li></ol>
          <p className="suitable">Suitable for compact products including <strong>rings, earrings, necklaces, bracelets, chains, pendants and small jewelry sets.</strong></p>
        </div>
      </div>
    </section>

    <section className="film section" id="in-action"><div className="wrap film-grid">
      <div><p className="eyebrow">THE FORMAT, IN FOCUS</p><h2>Small enough<br />to make a<br /><em>big difference.</em></h2><p>A closer look at compact jewelry fulfilment, from product to packed order.</p><div className="film-meta"><span className="play" aria-hidden="true">▶</span><span>JEWELRY LETTERBOX FULFILMENT<br /><small>Watch the packaging example</small></span></div></div>
      <figure className="video-frame"><video controls playsInline preload="metadata" aria-label="Example of boxable jewelry fulfilment"><source src="/jewelry-letterbox/letterbox-fulfilment.mp4" type="video/mp4" />Your browser does not support embedded video. <a href="/jewelry-letterbox/letterbox-fulfilment.mp4">Download the video</a>.</video><figcaption>THE VAREYA APPROACH · COMPACT. BRANDED. TRACKED.</figcaption></figure>
    </div></section>

    <section className="section wrap benefits" id="benefits"><div className="section-heading"><p className="eyebrow">LESS PACKAGE. MORE POTENTIAL.</p><h2>Smaller package.<br />Smarter economics.</h2><p>VareYa optimises <strong>fulfilment, packaging and shipping as one process.</strong></p></div>
      <div className="benefit-grid"><article><div className="direction" aria-hidden="true">↘</div><h3>Shipping costs</h3><p>A compact 300 g shipment can access shipping options better suited to small, lightweight orders than unnecessarily large conventional parcels.</p></article><article><div className="direction" aria-hidden="true">↘</div><h3>Operational costs</h3><p>Standardised compact packaging helps reduce unnecessary packaging material, handling and packing complexity.</p></article><article><div className="direction" aria-hidden="true">↗</div><h3>Margin opportunity</h3><p>Lower fulfilment and shipping costs can increase the amount of order value remaining as contribution margin.</p></article></div>
      <div className="equation"><span>Lower fulfilment cost</span><b>+</b><span>Lower shipping cost</span><b>=</b><strong>Greater margin opportunity<br />per order <span aria-hidden="true">↗</span></strong></div>
    </section>

    <section className="delivery section"><div className="wrap delivery-grid"><div><p className="eyebrow">COMPACT DOESN’T MEAN COMPROMISE</p><h2>Letterbox-friendly.<br />Track &amp; Trace.</h2><p className="intro">Small does not have to mean untracked.</p><p>Eligible jewelry orders combine:</p><div className="delivery-list"><span><b>01</b>Compact format</span><span><b>02</b>Letterbox-friendly delivery</span><span><b>03</b>Track &amp; Trace</span><span><b>04</b>International shipping</span></div><p className="footnote">Where the selected service and destination permit letterbox delivery, the customer does not necessarily need to be home to receive the shipment.</p></div><div className="reach"><p className="eyebrow">FROM VAREYA TO</p><div className="reach-number">40<span>+</span></div><h3>Countries worldwide.</h3><p>One compact fulfilment model designed for international ecommerce.</p><div className="reach-line"><span>VareYa</span><i></i><span>Your customer</span></div><p className="reach-note">Dimensions, weight, destination and carrier service determine the appropriate shipping configuration.</p></div></div></section>

    <section className="section wrap global"><div className="global-copy"><p className="eyebrow">ONE CONNECTED PROCESS</p><h2>Store efficiently.<br />Pack smaller.<br />Ship tracked.<br /><em>Reach customers<br />worldwide.</em></h2><p>VareYa selects an appropriate fulfilment and shipping configuration based on the order’s <strong>dimensions, weight, destination, delivery requirements and available carrier services.</strong></p><a className="text-link" href="https://vareya.ai/free-rate-scan/?lang=en">Explore your fulfilment fit <span aria-hidden="true">↗</span></a></div><figure className="image-frame"><img src="/jewelry-letterbox/warehouse.png" width="853" height="1280" loading="lazy" alt="VareYa branded bulk storage area with organised small-product inventory" /><figcaption>Storage, picking, packing and shipping. Designed to work together.</figcaption></figure></section>

    <section className="cta" id="scan"><div className="wrap"><p className="eyebrow">YOUR NEXT CHAPTER STARTS SMALL</p><h2>Could your jewelry orders<br />be letterbox-ready?</h2><p>Let VareYa analyse your products, packaging, destination mix and current shipping profile to identify opportunities for a more efficient international fulfilment model.</p><a className="button button-dark" href="https://vareya.ai/free-rate-scan/?lang=en">Request a Jewelry Fulfilment Scan <span aria-hidden="true">↗</span></a></div></section>
  
    <div className="wrap jewelry-signoff"><strong>Jewelry Letterbox Fulfilment™ by VareYa</strong><p>Small enough for the letterbox. Built for global ecommerce.</p>
      <nav aria-label="Product fit and letterbox guidance" className="mt-5 flex flex-wrap gap-5">
        <a className="text-link" href="/letterbox-parcel-fulfilment/?lang=en">Letterbox parcel requirements →</a>
        <a className="text-link" href="/product-fit-check/?lang=en">Check Your Product Fit →</a>
      </nav>
    </div>
  </div>;
}

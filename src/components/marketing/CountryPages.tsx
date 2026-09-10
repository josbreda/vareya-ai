import Link from "next/link";
import { FAQ } from "@/components/marketing/FAQ";
import {
  CAPABILITIES,
  SPECIALIST_REQUIREMENTS_FALLBACK,
} from "@/content/facts";
import type { CountryData } from "@/content/countries";
import { EU_SOURCES } from "@/content/countries";

export interface CountryPageLinks {
  fulfilment: string; // route A (same country)
  shopify: string; // route B (same country)
  returns: string; // route C (same country)
  hubs: { href: string; label: string }[]; // shared hub/service pages
}

/* ---------- shared blocks ---------- */

function Hero({
  breadcrumb,
  h1,
  intro,
  extra,
}: {
  breadcrumb: string;
  h1: string;
  intro: string[];
  extra?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
      <div className="container-site py-20 sm:py-24">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/75">
          <Link href="/" className="hover:text-white">Home</Link>
          <span aria-hidden="true" className="px-2">/</span>
          <span aria-current="page">{breadcrumb}</span>
        </nav>
        <div className="max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{h1}</h1>
          <div className="mb-8 max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 sm:text-xl">
            {intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            {extra ? <p>{extra}</p> : null}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/free-rate-scan/" className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-primary hover:bg-slate-100">
              Check your EU fulfilment fit
            </Link>
            <Link href="/request-fulfilment-quote/" className="rounded-lg border border-white/30 px-6 py-3 text-center font-medium hover:bg-white/10">
              Request a fulfilment quote
            </Link>
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/70">
            Share your current order profile and destination mix for an initial
            fulfilment fit assessment. No sales call required.
          </p>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="py-16" aria-labelledby="capabilities">
      <div className="container-site">
        <h2 id="capabilities" className="mb-8 text-2xl font-bold">Capabilities</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            CAPABILITIES.shopify,
            CAPABILITIES.amazonFbm,
            CAPABILITIES.returns,
            "Carriers include DHL, PostNL, Asendia, FedEx and Royal Mail.",
            CAPABILITIES.cutOff,
            CAPABILITIES.volume,
          ].map((item) => (
            <p key={item} className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6 text-muted">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function FitSection() {
  return (
    <section className="bg-slate-50 py-16" aria-labelledby="fit">
      <div className="container-site max-w-4xl">
        <h2 id="fit" className="mb-5 text-2xl font-bold">Good fit / may not be a fit</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="mb-3 font-semibold text-slate-900">Typically a good fit</h3>
            <ul className="space-y-2 text-sm leading-6 text-muted">
              <li>✓ {CAPABILITIES.volume}</li>
              <li>✓ Vareya specialises in cosmetics, supplements, phone cases, accessories and other smaller parcel products.</li>
              <li>✓ Suitable smaller parcels have combined dimensions below 900 mm and a maximum length of 600 mm.</li>
              <li>✓ Brands selling through Shopify or Amazon FBM. Shopify integration is available. Amazon FBM fulfilment is available.</li>
              <li>✓ Brands that want orders fulfilled from the Netherlands for European customers.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="mb-3 font-semibold text-slate-900">May not be a fit</h3>
            <ul className="space-y-2 text-sm leading-6 text-muted">
              <li>✗ Order volumes well below the 500-orders-per-month level.</li>
              <li>✗ Parcels that exceed the combined 900 mm / length 600 mm guideline.</li>
              <li>✗ Products with specialist customs, tax or handling requirements — include them in the fulfilment scan so Vareya can confirm which parts of the proposed setup can be supported.</li>
            </ul>
            <p className="mt-4 text-sm leading-6 text-muted">Product fit is confirmed during qualification.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SourcesSection({ data }: { data: CountryData }) {
  const all = [...data.sources, ...EU_SOURCES];
  return (
    <div className="mt-8">
      <h3 className="mb-3 font-semibold text-slate-900">Official planning resources</h3>
      <ul className="space-y-2">
        {all.map((source) => (
          <li key={source.href}>
            <a href={source.href} target="_blank" rel="noreferrer" className="text-primary underline-offset-2 hover:underline">
              {source.label} ↗
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted">
        Official sources checked on {data.consultedAt}. This page is general operational
        information, not legal, tax or customs advice.
      </p>
    </div>
  );
}

function RelatedLinks({ links, selfHref }: { links: CountryPageLinks; selfHref: string }) {
  const items = [
    { href: links.fulfilment, label: "European fulfilment" },
    { href: links.shopify, label: "Shopify fulfilment in Europe" },
    { href: links.returns, label: "European returns handling" },
    ...links.hubs,
  ].filter((item) => item.href !== selfHref);
  return (
    <section className="py-14" aria-labelledby="related-pages">
      <div className="container-site">
        <h2 id="related-pages" className="mb-6 text-2xl font-bold">Related fulfilment pages</h2>
        <div className="flex flex-wrap gap-3">
          {items.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-primary hover:border-primary/40">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ title }: { title: string }) {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="container-site text-center">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl">{title}</h2>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/free-rate-scan/" className="rounded-lg bg-white px-6 py-3 font-semibold text-primary hover:bg-slate-100">
            Check your EU fulfilment fit
          </Link>
          <Link href="/request-fulfilment-quote/" className="rounded-lg border border-white/30 px-6 py-3 font-medium hover:bg-white/10">
            Request a fulfilment quote
          </Link>
        </div>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/70">
          Share your current order profile and destination mix for an initial
          fulfilment fit assessment.
        </p>
      </div>
    </section>
  );
}

/* ---------- A: European fulfilment for {country} brands ---------- */

export function CountryFulfilmentPage({ data, links }: { data: CountryData; links: CountryPageLinks }) {
  const faqs = [
    {
      question: `When does holding stock in the EU become worth assessing for a ${data.adjective} brand?`,
      answer:
        "When European order volume grows and shipping every order individually from " +
        `${data.name} becomes operationally relevant to compare. Whether it fits depends on the ` +
        "operation. Product fit is confirmed during qualification.",
    },
    {
      question: `What is the difference between holding stock in the EU and shipping every order from ${data.name}?`,
      answer:
        "With stock in the EU, goods cross the EU border once as a consolidated inbound shipment and customer orders travel within the EU. Shipping every order individually means each parcel crosses the EU border on its own, so customs formalities, duties and VAT may apply per parcel depending on value and classification.",
    },
    {
      question: `Does Vareya arrange the freight from ${data.name}?`,
      answer:
        "Inbound transport is normally arranged by the brand or its freight forwarder. Vareya receives and checks the stock once it arrives in Breda. Exact intake steps are agreed during onboarding.",
    },
    {
      question: `Does Vareya handle customs, VAT or import for ${data.adjective} brands?`,
      answer: SPECIALIST_REQUIREMENTS_FALLBACK,
    },
    {
      question: "What order volume is needed?",
      answer: CAPABILITIES.volume,
    },
    {
      question: "Can Vareya connect to a Shopify store?",
      answer: CAPABILITIES.shipHero,
    },
  ];

  return (
    <>
      <Hero
        breadcrumb={`European fulfilment for ${data.adjective} brands`}
        h1={`European fulfilment for ${data.adjective} ecommerce brands`}
        intro={[
          `For ${data.adjective} brands selling into Europe, holding inventory closer to EU customers may be worth assessing. Vareya fulfils orders from a warehouse in Breda, the Netherlands, shipping across Europe and to other approved international markets.`,
          CAPABILITIES.volume,
        ]}
      />

      <section className="border-b border-slate-200 bg-slate-50 py-12" aria-labelledby="quick-answer">
        <div className="container-site max-w-4xl">
          <h2 id="quick-answer" className="mb-4 text-2xl font-bold">Quick answer</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>
              {data.adjective} brands sometimes ship every European order individually from
              {" "}{data.name}. When European order volume grows, comparing that setup with
              fulfilment from a warehouse inside the EU can be worthwhile. {data.distanceNote}
            </p>
            <p>{CAPABILITIES.volume}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="market">
        <div className="container-site max-w-4xl">
          <h2 id="market" className="mb-5 text-2xl font-bold sm:text-3xl">
            Why {data.adjective} brands position stock in Europe
          </h2>
          <div className="space-y-4 leading-8 text-muted sm:text-lg">
            {data.market.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="customs-vat">
        <div className="container-site max-w-4xl">
          <h2 id="customs-vat" className="mb-4 text-2xl font-bold">Customs, VAT and the border</h2>
          <div className="space-y-4 leading-7 text-muted">
            {data.customs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            <p className="font-medium text-slate-800">{SPECIALIST_REQUIREMENTS_FALLBACK}</p>
          </div>
          <SourcesSection data={data} />
        </div>
      </section>

      <Capabilities />
      <FitSection />

      <FAQ items={faqs} />
      <RelatedLinks links={links} selfHref={links.fulfilment} />
      <FinalCta title={`Assess EU fulfilment for your ${data.adjective} brand`} />
    </>
  );
}

/* ---------- B: Shopify fulfilment in Europe for {country} stores ---------- */

const SHOPIFY_PREP = [
  "Complete SKU master data: identifiers, barcodes, dimensions and weight",
  "Product classification (HS code) for every SKU",
  "Up-to-date product data in Shopify, including variants and weights",
  "Barcode labelling or final labelling format agreed with the warehouse",
  "Packaging and storage instructions per product",
  "Sales-channel connection details for the Shopify store",
  "Planned inbound shipment contents and arrival window",
  "Return handling instructions, if returns should land at the warehouse",
];

const ORDER_FLOW = [
  { step: "Order placed", body: "A customer places an order in the Shopify store." },
  { step: "Order synced", body: "The order flows to the warehouse system. Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify." },
  { step: "Picked and packed", body: "The order is picked and packed in Breda, the Netherlands." },
  { step: "Carrier hand-off", body: "The parcel is handed to the carrier network. Vareya's shipping system can automatically select an appropriate carrier for each shipment, based on destination and parcel characteristics." },
  { step: "Tracking", body: "Tracking information is shared with the store so the customer can follow the parcel." },
  { step: "Returns", body: "Where agreed, returns land at the Breda warehouse. Returns handling is available. Contact Vareya to discuss the required returns process." },
];

export function CountryShopifyPage({ data, links }: { data: CountryData; links: CountryPageLinks }) {
  const faqs = [
    {
      question: `Can a ${data.adjective} Shopify store connect to the Breda warehouse?`,
      answer: CAPABILITIES.shipHero,
    },
    {
      question: "Do I need to change my Shopify store or catalogue?",
      answer:
        "The store and catalogue stay yours. The fulfilment change is operational: stock is positioned in the EU and orders are fulfilled from Breda. Exact connection details are agreed during onboarding.",
    },
    {
      question: "How do orders reach the warehouse?",
      answer:
        "Orders sync from the store through the Shopify integration. Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify.",
    },
    {
      question: "What volume does Vareya serve?",
      answer: CAPABILITIES.volume,
    },
    {
      question: "What happens with returns?",
      answer: CAPABILITIES.returns,
    },
  ];

  return (
    <>
      <Hero
        breadcrumb={`Shopify fulfilment in Europe for ${data.adjective} stores`}
        h1={`Shopify fulfilment in Europe for ${data.adjective} stores`}
        intro={[
          `A practical guide for ${data.adjective} Shopify stores assessing order fulfilment from a warehouse in the Netherlands for European customers. Shopify integration is available.`,
          CAPABILITIES.volume,
        ]}
      />

      <section className="border-b border-slate-200 bg-slate-50 py-12" aria-labelledby="quick-answer">
        <div className="container-site max-w-4xl">
          <h2 id="quick-answer" className="mb-4 text-2xl font-bold">Quick answer</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>
              Your Shopify store stays exactly as it is. Orders flow from the store to a
              warehouse in Breda, the Netherlands, where they are picked, packed and handed
              to the carrier network. {data.distanceNote}
            </p>
            <p>{CAPABILITIES.shipHero}</p>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="context">
        <div className="container-site max-w-4xl">
          <h2 id="context" className="mb-5 text-2xl font-bold sm:text-3xl">
            Shopify and EU fulfilment for {data.adjective} stores
          </h2>
          <div className="space-y-4 leading-8 text-muted sm:text-lg">
            {data.shopifyContext.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="order-flow">
        <div className="container-site">
          <h2 id="order-flow" className="mb-3 text-2xl font-bold sm:text-3xl">The order flow</h2>
          <p className="mb-8 max-w-3xl leading-7 text-muted">
            From checkout to delivery, the steps below show what happens after the store
            and the warehouse are connected.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Step</th>
                  <th scope="col" className="px-4 py-3 font-semibold">What happens</th>
                </tr>
              </thead>
              <tbody>
                {ORDER_FLOW.map((row) => (
                  <tr key={row.step} className="border-t border-slate-100 align-top">
                    <td className="px-4 py-3 font-medium text-slate-900">{row.step}</td>
                    <td className="px-4 py-3 text-muted">{row.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="prepare">
        <div className="container-site max-w-4xl">
          <h2 id="prepare" className="mb-4 text-2xl font-bold sm:text-3xl">
            What to prepare before stock ships
          </h2>
          <p className="mb-6 leading-7 text-muted">
            Most onboarding delays come from missing data, not from the warehouse work
            itself. This list shows what is usually needed before the first inbound shipment:
          </p>
          <ul className="mb-6 space-y-2">
            {SHOPIFY_PREP.map((item) => (
              <li key={item} className="flex gap-3 leading-7 text-muted">
                <span aria-hidden="true" className="mt-1 text-primary">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-muted">
            Customs, VAT and product-compliance details for the inbound shipment are the
            brand&apos;s responsibility and should be confirmed with qualified advisers.
            {` ${SPECIALIST_REQUIREMENTS_FALLBACK}`}
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="onboarding">
        <div className="container-site max-w-4xl">
          <h2 id="onboarding" className="mb-4 text-2xl font-bold sm:text-3xl">
            Information to include in the fulfilment scan
          </h2>
          <ul className="mb-6 space-y-2">
            {[
              "Monthly order volume and seasonal peaks",
              "Number of SKUs and typical parcel dimensions and weight",
              "Which European countries you sell into",
              "Your current setup — shipping from outside the EU, self-fulfilment or an existing 3PL",
              "How returns are handled today",
              "Any customs, tax or specialist handling requirements",
            ].map((item) => (
              <li key={item} className="flex gap-3 leading-7 text-muted">
                <span aria-hidden="true" className="mt-1 text-primary">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="leading-7 text-muted">
            Vareya will review your answers and send an initial fit response by email
            within one working day.
          </p>
        </div>
      </section>

      <Capabilities />
      <FAQ items={faqs} />
      <RelatedLinks links={links} selfHref={links.shopify} />
      <FinalCta title={`Connect your ${data.adjective} Shopify store to EU fulfilment`} />
    </>
  );
}

/* ---------- C: European returns handling for {country} brands ---------- */

const RETURN_LANDING_OPTIONS = [
  {
    option: "The Breda warehouse",
    fits: "Brands whose orders are fulfilled by Vareya, where returns land with the same operation that ships them.",
    watch: "Returns handling is provided as part of Vareya's fulfilment service. The required process is agreed during qualification.",
  },
  {
    option: "Your own EU address",
    fits: "Brands with staff who can physically receive, inspect and restock returns.",
    watch: "Time, space and staffing scale directly with return volume.",
  },
  {
    option: "Carrier pickup points / parcel shops",
    fits: "Consumer convenience for drop-off, especially in dense European markets.",
    watch: "The parcel still needs a destination address and a receiving process.",
  },
];

const RETURNS_QUESTIONS = [
  "Where do returns physically arrive, and who signs for them?",
  "What inspection happens before restocking — and who decides what is resellable?",
  "How are restocked items booked back into available inventory?",
  "How are damaged or unsellable returns handled (quarantine, disposal, return to brand)?",
  "How are return notifications shared with the sales platform and the customer?",
  "Which return flows are needed for the European countries you sell into?",
];

export function CountryReturnsPage({ data, links }: { data: CountryData; links: CountryPageLinks }) {
  const faqs = [
    {
      question: `Does Vareya handle returns for ${data.adjective} brands?`,
      answer: CAPABILITIES.returns,
    },
    {
      question: "Is returns handling offered without a fulfilment contract?",
      answer:
        "Returns handling is provided as part of Vareya's fulfilment service. Stock fulfilled elsewhere is outside this scope; include your setup in the fulfilment scan so Vareya can confirm what can be supported.",
    },
    {
      question: "Does Vareya offer a customer-facing returns portal?",
      answer:
        "No. Vareya does not claim a branded returns portal or automated refund workflows. The returns process for your operation is agreed during qualification. If a fully automated customer-facing portal is essential, a provider that explicitly offers one may fit better.",
    },
    {
      question: "Are inspection, repacking and disposal included?",
      answer:
        "Inspection, repacking, restocking, consolidation and disposal are settled as part of the agreed returns process during qualification — they are not presented as standard services. Use the fulfilment scan to set out what your products need.",
    },
    {
      question: "Which countries can returns come back from?",
      answer:
        "Returns handling is agreed per operation. Contact Vareya to discuss the required returns process for your destination countries.",
    },
  ];

  return (
    <>
      <Hero
        breadcrumb={`European returns handling for ${data.adjective} brands`}
        h1={`European returns handling for ${data.adjective} brands`}
        intro={[
          `A practical guide for ${data.adjective} brands selling to European customers: where returns should land, what must be agreed up front, and how returns handling works within Vareya's fulfilment service from Breda, the Netherlands.`,
          CAPABILITIES.returns,
        ]}
      />

      <section className="border-b border-slate-200 bg-slate-50 py-12" aria-labelledby="quick-answer">
        <div className="container-site max-w-4xl">
          <h2 id="quick-answer" className="mb-4 text-2xl font-bold">Quick answer</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>
              Returns are a core part of European fulfilment. For brands whose orders are
              fulfilled by Vareya, returns can land at the warehouse in Breda, the
              Netherlands. {data.distanceNote}
            </p>
            <p>
              Returns handling is provided as part of Vareya&apos;s fulfilment service, and
              the required process is agreed during qualification. Vareya does not claim a
              branded returns portal or automated refund workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="context">
        <div className="container-site max-w-4xl">
          <h2 id="context" className="mb-5 text-2xl font-bold sm:text-3xl">
            Why EU returns matter for {data.adjective} brands
          </h2>
          <div className="space-y-4 leading-8 text-muted sm:text-lg">
            {data.returnsContext.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="landing">
        <div className="container-site">
          <h2 id="landing" className="mb-5 text-2xl font-bold sm:text-3xl">Where returns can land</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {RETURN_LANDING_OPTIONS.map((opt) => (
              <div key={opt.option} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="mb-2 font-semibold text-slate-900">{opt.option}</h3>
                <p className="mb-3 text-sm leading-6 text-muted">{opt.fits}</p>
                <p className="text-sm leading-6 text-muted">{opt.watch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="agree">
        <div className="container-site max-w-4xl">
          <h2 id="agree" className="mb-4 text-2xl font-bold sm:text-3xl">
            What to agree before returns start arriving
          </h2>
          <p className="mb-6 leading-7 text-muted">
            A workable returns process is defined before the first return arrives. These
            questions are settled during qualification — they are not standard services
            Vareya claims today:
          </p>
          <ul className="mb-6 space-y-2">
            {RETURNS_QUESTIONS.map((item) => (
              <li key={item} className="flex gap-3 leading-7 text-muted">
                <span aria-hidden="true" className="mt-1 text-primary">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-muted">
            This is general operational information, not legal, tax or customs advice.
            {` ${SPECIALIST_REQUIREMENTS_FALLBACK}`}
          </p>
        </div>
      </section>

      <Capabilities />
      <FAQ items={faqs} />
      <RelatedLinks links={links} selfHref={links.returns} />
      <FinalCta title={`Set up European returns for your ${data.adjective} brand`} />
    </>
  );
}

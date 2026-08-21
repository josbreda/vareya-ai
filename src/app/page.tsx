import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/marketing/FAQ";
import { NetworkHero } from "@/components/marketing/NetworkHero";
import { RotatingHeadline } from "@/components/marketing/RotatingHeadline";
import { APPROVED_DESTINATIONS, CAPABILITIES } from "@/content/facts";

export const metadata: Metadata = {
  title: "EU Ecommerce Fulfilment from the Netherlands | Vareya",
  description:
    "Vareya fulfils ecommerce orders from a warehouse in Breda, the Netherlands, shipping across Europe and beyond. Check your fulfilment fit in minutes.",
  alternates: { canonical: "https://vareya.ai/" },
};

const destinationList = APPROVED_DESTINATIONS.join(", ");

const PROCESS_STEPS = [
  {
    title: "Qualification",
    body: "Share your volume, product category, sales channels and target markets. Product fit is confirmed during qualification.",
  },
  {
    title: "Onboarding",
    body: "Connect your sales channel and agree stock intake with Vareya.",
  },
  {
    title: "Inbound stock",
    body: "Send stock to the Breda warehouse.",
  },
  {
    title: "Pick, pack and ship",
    body: "Orders are picked, packed and handed to the relevant carrier.",
  },
  {
    title: "Returns",
    body: CAPABILITIES.returns,
  },
];

const TARGET_CARDS = [
  {
    href: "/eu-fulfilment/",
    title: "EU fulfilment",
    body: "Using the Netherlands as a base for shipping across Europe.",
  },
  {
    href: "/eu-fulfilment-us-brands/",
    title: "US brands",
    body: "Assessing fulfilment within Europe for US-based ecommerce brands.",
  },
  {
    href: "/eu-fulfilment-uk-brands/",
    title: "UK brands",
    body: "Shipping into the EU from a Netherlands base.",
  },
  {
    href: "/cosmetics-supplements-fulfilment-europe/",
    title: "Cosmetics and supplements",
    body: "Fulfilment for smaller-parcel product categories.",
  },
];

const HOME_FAQ = [
  {
    question: "What does Vareya do?",
    answer:
      "Vareya fulfils ecommerce orders from a warehouse in Breda, the Netherlands, shipping across Europe and to a range of international markets.",
  },
  {
    question: "Which sales channels does Vareya support?",
    answer: `${CAPABILITIES.shopify} ${CAPABILITIES.amazonFbm}`,
  },
  {
    question: "What order volume does Vareya work with?",
    answer: CAPABILITIES.volume,
  },
  {
    question: "Does Vareya handle returns?",
    answer: CAPABILITIES.returns,
  },
  {
    question: "How do I know if my brand is a fit?",
    answer:
      "Complete the fulfilment scan. Product fit is confirmed during qualification.",
  },
];

export default function HomePage() {
  return (
    <>
      <NetworkHero
        badge="European Fulfilment — Breda, NL"
        title="Ecommerce fulfilment in Europe, run from the Netherlands"
        description="Vareya fulfils ecommerce orders from a warehouse in Breda, the Netherlands, shipping across Europe and beyond. Shopify and Amazon FBM integration, multi-carrier delivery, and returns handling included."
        primaryCTA={{ label: "Check your EU fulfilment fit", href: "/free-rate-scan/" }}
        secondaryCTA={{ label: "Request a fulfilment quote", href: "/request-fulfilment-quote/" }}
        proofItems={["Breda, NL", "Shopify-ready", "5 carriers", "Returns included"]}
      >
        {/* Warehouse SVG illustration */}
        <svg className="w-full max-w-[380px] h-auto" viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="whGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#5EEAD4" stopOpacity=".25"/>
              <stop offset="1" stopColor="#0F766E" stopOpacity=".08"/>
            </linearGradient>
          </defs>
          <rect width="400" height="320" rx="16" fill="url(#whGrad)" stroke="rgba(94,234,212,.12)"/>
          {/* Isometric floor */}
          <polygon points="200,20 355,100 200,180 45,100" fill="rgba(15,118,110,.1)" stroke="rgba(94,234,212,.18)"/>
          <polygon points="200,180 355,100 355,220 200,300" fill="rgba(15,118,110,.05)" stroke="rgba(94,234,212,.1)"/>
          <polygon points="200,180 45,100 45,220 200,300" fill="rgba(15,118,110,.07)" stroke="rgba(94,234,212,.12)"/>
          {/* Racks */}
          <rect x="260" y="155" width="28" height="12" rx="2" fill="rgba(249,115,22,.18)"/>
          <rect x="250" y="172" width="38" height="12" rx="2" fill="rgba(94,234,212,.12)"/>
          <rect x="100" y="150" width="24" height="10" rx="2" fill="rgba(94,234,212,.1)"/>
          {/* Parcels */}
          <circle cx="200" cy="240" r="4" fill="#5EEAD4" opacity=".5"/>
          <circle cx="215" cy="250" r="3" fill="#5EEAD4" opacity=".3"/>
          <circle cx="185" cy="255" r="3.5" fill="#F97316" opacity=".4"/>
          <circle cx="160" cy="230" r="2.5" fill="#5EEAD4" opacity=".25"/>
        </svg>
      </NetworkHero>

      <section className="border-b border-slate-200 bg-slate-50 py-10" aria-labelledby="quick-answer">
        <div className="container-site max-w-4xl">
          <RotatingHeadline
            prefix="European fulfilment for"
            words={["Shopify", "Amazon FBM", "DTC brands", "cosmetics", "supplements", "accessories"]}
            interval={1800}
            className="mb-3 text-2xl font-bold text-slate-900 block"
          />
          <div className="space-y-3 leading-7 text-muted">
            <p>
              Vareya is an ecommerce fulfilment operator based in Breda, the
              Netherlands, shipping orders across Europe, the United Kingdom, the
              United States and other international markets. Vareya works with Shopify
              and Amazon FBM sellers and specialises in cosmetics, supplements, phone
              cases, accessories and other smaller parcel products.
            </p>
            <p>{CAPABILITIES.volume}</p>
          </div>
        </div>
      </section>

      <section className="py-12" aria-labelledby="capabilities">
        <div className="container-site">
          <h2 id="capabilities" className="mb-8 text-center text-2xl font-bold">
            Fulfilment capabilities
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Netherlands-based warehouse.",
              CAPABILITIES.shopify,
              CAPABILITIES.amazonFbm,
              CAPABILITIES.returns,
              CAPABILITIES.postNL,
              CAPABILITIES.shipHero,
              CAPABILITIES.carrierSelection,
              CAPABILITIES.customs,
              CAPABILITIES.weekendFulfilment,
              CAPABILITIES.cutOff,
            ].map((item) => (
              <p key={item} className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6 text-muted">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="who-vareya-helps">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 id="who-vareya-helps" className="mb-5 text-2xl font-bold">
              Who Vareya helps
            </h2>
            <div className="space-y-4 leading-7 text-muted">
              <p>{CAPABILITIES.volume}</p>
              <p>
                Vareya works with brands selling through Shopify or Amazon FBM and
                specialises in cosmetics, supplements, phone cases, accessories and
                other smaller parcel products. Suitable smaller parcels have combined
                dimensions below 900 mm and a maximum length of 600 mm. Product fit is
                confirmed during qualification.
              </p>
            </div>
          </div>
          <div>
            <h2 className="mb-5 text-2xl font-bold">Problems Vareya helps solve</h2>
            <div className="space-y-4 leading-7 text-muted">
              <p>
                Growing order volumes can outpace an in-house fulfilment setup. Shipping
                into multiple European and international markets from a single base adds
                coordination overhead. Fulfilment also needs to connect cleanly with the
                sales channels a brand already uses.
              </p>
              <p>{CAPABILITIES.returns}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="process">
        <div className="container-site">
          <h2 id="process" className="mb-10 text-center text-2xl font-bold sm:text-3xl">
            How the process works
          </h2>
          <div className="grid gap-6 md:grid-cols-5">
            {PROCESS_STEPS.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-200 p-5">
                <p className="mb-3 text-sm font-semibold text-primary">Step {index + 1}</p>
                <h3 className="mb-2 font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-6 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="relevant-capabilities">
        <div className="container-site max-w-4xl">
          <h2 id="relevant-capabilities" className="mb-6 text-2xl font-bold">
            Relevant capabilities
          </h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>{CAPABILITIES.shopify}</p>
            <p>{CAPABILITIES.amazonFbm}</p>
            <p>{CAPABILITIES.returns}</p>
            <p>{CAPABILITIES.postNL}</p>
            <p>{CAPABILITIES.shipHero}</p>
            <p>{CAPABILITIES.customs}</p>
            <p>{CAPABILITIES.weekendFulfilment}</p>
            <p>{CAPABILITIES.cutOff}</p>
            <p>{CAPABILITIES.volume}</p>
            <p>
              Suitable smaller parcels have combined dimensions below 900 mm and a
              maximum length of 600 mm.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Ecommerce integrations</h2>
            <p className="leading-7 text-muted">
              {CAPABILITIES.shopify} If you sell through a different platform, share
              the details during qualification so product fit can be assessed.
            </p>
            <Link href="/shopify-fulfilment-europe/" className="mt-4 inline-flex font-semibold text-primary hover:underline">
              Explore Shopify fulfilment in Europe
            </Link>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">International shipping</h2>
            <p className="leading-7 text-muted">
              {CAPABILITIES.postNL}
            </p>
            <p className="mt-3 leading-7 text-muted">
              {CAPABILITIES.carrierSelection}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12" aria-labelledby="support">
        <div className="container-site max-w-4xl">
          <h2 id="support" className="mb-4 text-2xl font-bold">How you're supported</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>{CAPABILITIES.support}</p>
            <p>{CAPABILITIES.slas}</p>
            <p>{CAPABILITIES.allInRates}</p>
            <p className="italic text-slate-500">{CAPABILITIES.ambition}</p>
          </div>
        </div>
      </section>

      <section className="py-12" aria-labelledby="returns-heading">
        <div className="container-site max-w-4xl">
          <h2 id="returns-heading" className="mb-4 text-2xl font-bold">Returns</h2>
          <p className="leading-7 text-muted">{CAPABILITIES.returns}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="markets">
        <div className="container-site">
          <h2 id="markets" className="mb-10 text-center text-2xl font-bold sm:text-3xl">
            Explore your fulfilment route
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TARGET_CARDS.map((card) => (
              <Link key={card.href} href={card.href} className="rounded-xl border border-slate-200 p-6 transition-all hover:border-primary/40 hover:shadow-sm">
                <h3 className="mb-2 font-semibold text-slate-900">{card.title}</h3>
                <p className="text-sm leading-6 text-muted">{card.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white" aria-labelledby="scan-cta">
        <div className="container-site text-center">
          <h2 id="scan-cta" className="mb-4 text-2xl font-bold sm:text-3xl">
            Check whether your operation may fit
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/80">
            Check whether your current volume, product category, sales channels and
            target markets may fit Vareya&apos;s fulfilment setup.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/free-rate-scan/" className="rounded-lg bg-white px-6 py-3 font-semibold text-primary hover:bg-slate-100">
              Check your EU fulfilment fit
            </Link>
            <Link href="/request-fulfilment-quote/" className="rounded-lg border border-white/30 px-6 py-3 font-medium hover:bg-white/10">
              Request a fulfilment quote
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={HOME_FAQ} />

      <section className="py-12" aria-label="Contact Vareya">
        <div className="container-site text-center">
          <p className="mb-4 text-muted">Need another way to reach Vareya?</p>
          <Link href="/contact/" className="font-semibold text-primary hover:underline">
            Contact Vareya
          </Link>
        </div>
      </section>
    </>
  );
}

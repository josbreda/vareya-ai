import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/marketing/FAQ";
import {
  APPROVED_DESTINATIONS,
  CAPABILITIES,
  SPECIALIST_REQUIREMENTS_FALLBACK,
} from "@/content/facts";

export const metadata: Metadata = {
  title: "EU Fulfilment for UK Ecommerce Brands | Vareya",
  description:
    "How UK ecommerce brands can assess EU-based fulfilment from a Netherlands warehouse for shipping to European customers.",
  alternates: {
    canonical: "https://vareya.ai/eu-fulfilment-uk-brands/",
  },
};

const destinationList = APPROVED_DESTINATIONS.join(", ");

const PROCESS = [
  {
    title: "Qualification",
    body: "Share your current UK-based setup, EU order volume and product category.",
  },
  {
    title: "Onboarding",
    body: "Connect your sales channel and agree stock intake to Breda.",
  },
  {
    title: "Inbound stock",
    body: "Send stock from the UK, or an existing EU location, to Breda.",
  },
  {
    title: "Fulfilment",
    body: "EU and other international orders are picked, packed and shipped from Breda.",
  },
  {
    title: "Returns",
    body: CAPABILITIES.returns,
  },
];

const FAQ_ITEMS = [
  {
    question: "Does EU-based fulfilment solve all Brexit-related issues for UK brands?",
    answer:
      "EU-based fulfilment addresses where stock is held and how orders are shipped. Broader trade, tax and customs topics should be discussed during qualification.",
  },
  {
    question: "Does Vareya provide customs or tax services for UK brands?",
    answer: SPECIALIST_REQUIREMENTS_FALLBACK,
  },
  {
    question: "Which markets can Vareya ship to from the Netherlands?",
    answer: destinationList,
  },
  {
    question: "What order volume is needed?",
    answer: CAPABILITIES.volume,
  },
  {
    question: "Can Vareya handle EU returns for a UK brand?",
    answer: CAPABILITIES.returns,
  },
];

const INTERNAL_LINKS = [
  { href: "/", label: "Ecommerce fulfilment in Europe" },
  { href: "/eu-fulfilment/", label: "EU fulfilment from the Netherlands" },
  { href: "/shopify-fulfilment-europe/", label: "Shopify fulfilment in Europe" },
  { href: "/eu-fulfilment-us-brands/", label: "EU fulfilment for US brands" },
  {
    href: "/cosmetics-supplements-fulfilment-europe/",
    label: "Cosmetics and supplements fulfilment",
  },
];

export default function UkBrandsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-site py-20 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/75">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <span aria-current="page">EU fulfilment for UK brands</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              EU fulfilment for UK ecommerce brands
            </h1>
            <div className="mb-8 max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 sm:text-xl">
              <p>
                For UK brands shipping to EU customers, holding inventory within the EU
                is one operational option worth assessing. Vareya fulfils orders from a
                warehouse in Breda, the Netherlands, shipping across Europe and to other
                international markets.
              </p>
              <p>{CAPABILITIES.volume}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/fulfilment-scan/" className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-primary hover:bg-slate-100">
                Check your EU fulfilment fit
              </Link>
              <Link href="/request-fulfilment-quote/" className="rounded-lg border border-white/30 px-6 py-3 text-center font-medium hover:bg-white/10">
                Request a fulfilment quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-12" aria-labelledby="quick-answer">
        <div className="container-site max-w-4xl">
          <h2 id="quick-answer" className="mb-4 text-2xl font-bold">Quick answer</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>
              UK ecommerce brands shipping to EU customers sometimes assess whether
              EU-based inventory is operationally relevant to their shipping and return
              flow. Vareya fulfils orders from a warehouse in Breda, the Netherlands,
              shipping across Europe and other international markets.
            </p>
            <p>{CAPABILITIES.volume}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="why-eu-inventory">
        <div className="container-site max-w-4xl">
          <h2 id="why-eu-inventory" className="mb-5 text-2xl font-bold sm:text-3xl">
            Why UK brands consider EU-based inventory
          </h2>
          <div className="space-y-4 leading-8 text-muted sm:text-lg">
            <p>
              Some UK ecommerce brands look at holding inventory within the EU as one
              way to approach shipping to EU customers. This is an operational question
              about where stock is held and how orders are shipped.
            </p>
            <p>{SPECIALIST_REQUIREMENTS_FALLBACK}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="capabilities">
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

      <section className="py-16 sm:py-20" aria-labelledby="process">
        <div className="container-site">
          <h2 id="process" className="mb-10 text-2xl font-bold sm:text-3xl">How the process works</h2>
          <div className="grid gap-5 md:grid-cols-5">
            {PROCESS.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-200 p-5">
                <p className="mb-3 text-sm font-semibold text-primary">Step {index + 1}</p>
                <h3 className="mb-2 font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-6 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="markets">
        <div className="container-site max-w-5xl">
          <h2 id="markets" className="mb-5 text-2xl font-bold">Target markets</h2>
          <p className="leading-8 text-muted">From Breda, Vareya ships to {destinationList}.</p>
        </div>
      </section>

      <section className="py-16" aria-labelledby="returns">
        <div className="container-site max-w-4xl">
          <h2 id="returns" className="mb-4 text-2xl font-bold">Returns</h2>
          <p className="leading-7 text-muted">{CAPABILITIES.returns}</p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16" aria-labelledby="requirements">
        <div className="container-site max-w-4xl">
          <h2 id="requirements" className="mb-4 text-2xl font-bold">Requirements to confirm</h2>
          <p className="mb-4 leading-7 text-muted">
            Requirements involving customs, tax, regulated storage, batch handling,
            expiry management or other specialist services should be discussed during
            qualification.
          </p>
          <p className="font-medium leading-7 text-slate-800">{SPECIALIST_REQUIREMENTS_FALLBACK}</p>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      <section className="py-14" aria-labelledby="related-pages">
        <div className="container-site">
          <h2 id="related-pages" className="mb-6 text-2xl font-bold">Related fulfilment pages</h2>
          <div className="flex flex-wrap gap-3">
            {INTERNAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-primary hover:border-primary/40">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white">
        <div className="container-site text-center">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Assess EU fulfilment for your UK brand</h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/fulfilment-scan/" className="rounded-lg bg-white px-6 py-3 font-semibold text-primary hover:bg-slate-100">
              Check your EU fulfilment fit
            </Link>
            <Link href="/request-fulfilment-quote/" className="rounded-lg border border-white/30 px-6 py-3 font-medium hover:bg-white/10">
              Request a fulfilment quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

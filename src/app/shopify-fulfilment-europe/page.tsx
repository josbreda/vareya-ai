import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/marketing/FAQ";
import { APPROVED_DESTINATIONS, CAPABILITIES } from "@/content/facts";

export const metadata: Metadata = {
  title: "Shopify Fulfilment in Europe | Vareya",
  description:
    "Vareya offers Shopify integration for ecommerce fulfilment from a warehouse in Breda, the Netherlands, shipping across Europe and beyond.",
  alternates: {
    canonical: "https://vareya.ai/shopify-fulfilment-europe/",
  },
};

const destinationList = APPROVED_DESTINATIONS.join(", ");

const PROCESS = [
  {
    title: "Qualification",
    body: "Confirm Shopify as your sales channel and share volume and product details.",
  },
  {
    title: "Onboarding",
    body: "Connect your Shopify store with Vareya.",
  },
  {
    title: "Inbound stock",
    body: "Send stock to the Breda warehouse.",
  },
  {
    title: "Fulfilment",
    body: "Shopify orders are picked, packed and shipped.",
  },
  {
    title: "Returns",
    body: CAPABILITIES.returns,
  },
];

const FAQ_ITEMS = [
  {
    question: "Does Vareya integrate directly with Shopify?",
    answer: `Yes. ${CAPABILITIES.shopify}`,
  },
  {
    question: "Does the integration sync in real time?",
    answer:
      "Integration specifics are confirmed with Vareya directly, based on your store setup.",
  },
  {
    question: "Can Vareya fulfil for more than one Shopify store?",
    answer: "This is assessed during qualification, based on your setup.",
  },
  {
    question: "Does Shopify integration include returns automatically?",
    answer: CAPABILITIES.returns,
  },
  {
    question: "What Shopify order volume does Vareya work with?",
    answer: CAPABILITIES.volume,
  },
];

const INTERNAL_LINKS = [
  { href: "/", label: "Ecommerce fulfilment in Europe" },
  { href: "/eu-fulfilment/", label: "EU fulfilment from the Netherlands" },
  { href: "/eu-fulfilment-us-brands/", label: "EU fulfilment for US brands" },
  { href: "/eu-fulfilment-uk-brands/", label: "EU fulfilment for UK brands" },
  {
    href: "/cosmetics-supplements-fulfilment-europe/",
    label: "Cosmetics and supplements fulfilment",
  },
];

export default function ShopifyFulfilmentPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-site py-20 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/75">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <span aria-current="page">Shopify fulfilment in Europe</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Shopify fulfilment from a Netherlands warehouse
            </h1>
            <div className="mb-8 max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 sm:text-xl">
              <p>
                Shopify integration is available with Vareya&apos;s fulfilment setup,
                based in Breda, the Netherlands. Orders are fulfilled and shipped
                across Europe and to a range of other international markets.
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
              Shopify integration is available with Vareya&apos;s ecommerce fulfilment
              service, operated from a warehouse in Breda, the Netherlands. Vareya
              ships Shopify orders across Europe and to other international markets.
            </p>
            <p>{CAPABILITIES.volume}</p>
            <p>Product fit is confirmed during qualification.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="integration">
        <div className="container-site max-w-4xl">
          <h2 id="integration" className="mb-5 text-2xl font-bold sm:text-3xl">
            Shopify integration
          </h2>
          <p className="leading-8 text-muted sm:text-lg">
            Shopify integration is available with Vareya&apos;s fulfilment service.
            Specific integration details, such as store setup, data mapping and go-live
            timing, are confirmed directly with Vareya during onboarding, since they
            depend on each brand&apos;s individual Shopify configuration.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="process">
        <div className="container-site">
          <h2 id="process" className="mb-10 text-2xl font-bold sm:text-3xl">How the process works</h2>
          <div className="grid gap-5 md:grid-cols-5">
            {PROCESS.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="mb-3 text-sm font-semibold text-primary">Step {index + 1}</p>
                <h3 className="mb-2 font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-6 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="fit">
        <div className="container-site max-w-4xl">
          <h2 id="fit" className="mb-5 text-2xl font-bold">Who this fits</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>{CAPABILITIES.volume}</p>
            <p>
              Vareya works with Shopify brands in cosmetics, supplements, phone cases,
              accessories or other smaller parcel products. Product fit is confirmed
              during qualification.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="shipping">
        <div className="container-site max-w-5xl">
          <h2 id="shipping" className="mb-5 text-2xl font-bold">International shipping</h2>
          <p className="leading-8 text-muted">
            Shopify orders are shipped to {destinationList}, via DHL, PostNL, Asendia,
            FedEx and Royal Mail.
          </p>
        </div>
      </section>

      <section className="py-16" aria-labelledby="returns">
        <div className="container-site max-w-4xl">
          <h2 id="returns" className="mb-4 text-2xl font-bold">Returns</h2>
          <p className="leading-7 text-muted">{CAPABILITIES.returns}</p>
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
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Assess your Shopify fulfilment setup</h2>
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

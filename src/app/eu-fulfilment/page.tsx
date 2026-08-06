import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/marketing/FAQ";
import { APPROVED_DESTINATIONS, CAPABILITIES } from "@/content/facts";

export const metadata: Metadata = {
  title: "EU Fulfilment from the Netherlands | Vareya",
  description:
    "How Vareya uses a warehouse in Breda, the Netherlands, to fulfil ecommerce orders across Europe, covering shipping, returns and onboarding.",
  alternates: { canonical: "https://vareya.ai/eu-fulfilment/" },
};

const destinationList = APPROVED_DESTINATIONS.join(", ");

const PROCESS = [
  "Share volume, product category and target markets. Product fit is confirmed during qualification.",
  "Connect your sales channel and agree stock intake.",
  "Send stock to Breda.",
  "Orders are picked, packed and shipped via the carrier network.",
  CAPABILITIES.returns,
];

const FAQ_ITEMS = [
  {
    question: "Why do brands fulfil from the Netherlands for EU orders?",
    answer:
      "Its location and logistics infrastructure make it a common base for shipping across Europe.",
  },
  {
    question: "Does Vareya only ship within Europe?",
    answer:
      "No. Vareya also ships to markets including the United States, Canada, Australia, New Zealand, Brazil, China, Hong Kong and Japan.",
  },
  {
    question: "What volume do I need to work with Vareya?",
    answer: CAPABILITIES.volume,
  },
  {
    question: "Can Vareya handle my returns?",
    answer: CAPABILITIES.returns,
  },
  {
    question: "How long does onboarding take?",
    answer:
      "This is confirmed during qualification, as it depends on your specific setup.",
  },
];

const INTERNAL_LINKS = [
  { href: "/", label: "Ecommerce fulfilment in Europe" },
  { href: "/shopify-fulfilment-europe/", label: "Shopify fulfilment in Europe" },
  { href: "/eu-fulfilment-us-brands/", label: "EU fulfilment for US brands" },
  { href: "/eu-fulfilment-uk-brands/", label: "EU fulfilment for UK brands" },
  {
    href: "/cosmetics-supplements-fulfilment-europe/",
    label: "Cosmetics and supplements fulfilment",
  },
];

export default function EUFulfilmentPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-site py-20 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/75">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <span aria-current="page">EU fulfilment</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Using the Netherlands as your EU fulfilment base
            </h1>
            <div className="mb-8 max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 sm:text-xl">
              <p>
                Many international ecommerce brands use the Netherlands as a base for
                shipping into Europe. Vareya fulfils orders from a warehouse in Breda,
                handling shipping, onboarding and the agreed return flow.
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
              The Netherlands is a common base for EU ecommerce fulfilment because of
              its location and logistics infrastructure. Vareya operates a warehouse in
              Breda, the Netherlands, shipping orders across Europe and to other
              international markets.
            </p>
            <p>{CAPABILITIES.volume}</p>
            <p>{CAPABILITIES.returns}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="why-netherlands">
        <div className="container-site max-w-4xl">
          <h2 id="why-netherlands" className="mb-5 text-2xl font-bold sm:text-3xl">
            Why the Netherlands
          </h2>
          <p className="leading-8 text-muted sm:text-lg">
            The Netherlands sits within reach of major European population centres and
            has established logistics and carrier infrastructure. For brands shipping
            into multiple European countries, holding stock in one Netherlands-based
            location can simplify the operational picture compared with shipping each
            order individually from outside Europe.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="capability-block">
        <div className="container-site">
          <h2 id="capability-block" className="mb-8 text-2xl font-bold">Capabilities</h2>
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
            {PROCESS.map((body, index) => (
              <article key={body} className="rounded-xl border border-slate-200 p-5">
                <p className="mb-3 text-sm font-semibold text-primary">Step {index + 1}</p>
                <p className="text-sm leading-6 text-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="shipping-destinations">
        <div className="container-site max-w-5xl">
          <h2 id="shipping-destinations" className="mb-5 text-2xl font-bold">
            Shipping and destinations
          </h2>
          <p className="leading-8 text-muted">
            From Breda, Vareya ships to {destinationList}, using DHL, PostNL, Asendia,
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

      <section className="border-y border-slate-200 bg-slate-50 py-16" aria-labelledby="fit">
        <div className="container-site max-w-4xl">
          <h2 id="fit" className="mb-5 text-2xl font-bold">Who this fits</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>{CAPABILITIES.volume}</p>
            <p>
              Vareya works with brands selling via Shopify or Amazon FBM, in cosmetics,
              supplements, phone cases, accessories or other smaller parcel products
              with combined dimensions below 900 mm and a maximum length of 600 mm.
              Product fit is confirmed during qualification.
            </p>
          </div>
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
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Assess your EU fulfilment setup</h2>
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

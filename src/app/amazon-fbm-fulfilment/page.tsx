import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/marketing/FAQ";
import { CAPABILITIES, APPROVED_DESTINATIONS } from "@/content/facts";

export const metadata: Metadata = {
  title: "Amazon FBM Fulfilment from the Netherlands | Vareya",
  description:
    "What Amazon FBM means for European sellers, when a 3PL adds value, FBM vs FBA trade-offs, and how Vareya supports Amazon FBM alongside Shopify from a warehouse in Breda, the Netherlands.",
  alternates: {
    canonical: "https://vareya.ai/amazon-fbm-fulfilment/",
  },
};

const destinationList = APPROVED_DESTINATIONS.join(", ");

const PROCESS = [
  {
    title: "Sell on Amazon",
    body: "You list and sell on Amazon using merchant-fulfilled (FBM/MFN) settings.",
  },
  {
    title: "Orders reach Vareya",
    body: "Amazon orders are integrated into the fulfilment workflow alongside your other channels.",
  },
  {
    title: "Pick, pack and ship",
    body: "Orders are picked, packed and shipped from the Breda warehouse.",
  },
  {
    title: "Tracking and returns",
    body: "Tracking is returned to the channel, and returns are handled according to the agreed returns process.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is Amazon FBM?",
    answer:
      "FBM (Fulfilled by Merchant), also called MFN (Merchant Fulfilled Network), means the seller — or their fulfilment partner — stores inventory and dispatches Amazon orders, instead of sending stock into Amazon's fulfilment centres.",
  },
  {
    question: "Does Vareya support Amazon FBM?",
    answer: CAPABILITIES.amazonFbm,
  },
  {
    question: "Can Vareya handle Shopify and Amazon orders together?",
    answer:
      "Shopify integration is available. Amazon FBM fulfilment is available. Multi-channel specifics are confirmed during qualification, based on your setup.",
  },
  {
    question: "Does Vareya offer Seller Fulfilled Prime?",
    answer:
      "No. Vareya does not claim Seller Fulfilled Prime or other Prime delivery programmes. If Prime eligibility is essential for you, Amazon's own FBA programme or a provider that explicitly supports Prime workflows may be a better fit.",
  },
  {
    question: "What order volume fits Vareya?",
    answer: CAPABILITIES.volume,
  },
  {
    question: "Where does Vareya ship Amazon FBM orders?",
    answer: `Vareya ships to the following destinations: ${destinationList}.`,
  },
];

const INTERNAL_LINKS = [
  { href: "/", label: "Ecommerce fulfilment in Europe" },
  { href: "/eu-fulfilment/", label: "EU fulfilment from the Netherlands" },
  { href: "/shopify-fulfilment-europe/", label: "Shopify fulfilment in Europe" },
  { href: "/shipbob-alternative-europe/", label: "ShipBob alternatives for Europe" },
  { href: "/cosmetics-supplements-fulfilment-europe/", label: "Cosmetics and supplements fulfilment" },
];

export default function AmazonFbmPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-site py-20 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/75">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <span aria-current="page">Amazon FBM fulfilment</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Amazon FBM fulfilment from a Netherlands warehouse
            </h1>
            <div className="mb-8 max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 sm:text-xl">
              <p>
                Amazon FBM means you fulfil orders yourself — or with a
                fulfilment partner. This page explains what that looks like for
                European sellers, when a 3PL makes sense, and how Vareya fits
                into a merchant-fulfilled setup.
              </p>
              <p>{CAPABILITIES.amazonFbm}</p>
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
              FBM gives you control over storage and shipping but adds
              operational work. Many European sellers use a 3PL for that work
              while keeping merchant-fulfilled listings. Vareya fulfils Amazon
              FBM orders from its warehouse in Breda, the Netherlands, and
              supports brands shipping 500 or more orders per month. Product
              fit is confirmed during qualification.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="fbm-vs-fba">
        <div className="container-site max-w-4xl">
          <h2 id="fbm-vs-fba" className="mb-5 text-2xl font-bold sm:text-3xl">FBM vs FBA: the trade-offs</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[560px] bg-white text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="p-4 font-semibold">Aspect</th>
                  <th className="p-4 font-semibold">FBA (Fulfilled by Amazon)</th>
                  <th className="p-4 font-semibold">FBM (Fulfilled by Merchant)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 align-top">
                  <td className="p-4 font-medium">Inventory</td>
                  <td className="p-4 text-muted">Stock sits in Amazon's fulfilment centres.</td>
                  <td className="p-4 text-muted">Stock sits with you or your chosen 3PL.</td>
                </tr>
                <tr className="border-b border-slate-100 align-top">
                  <td className="p-4 font-medium">Control</td>
                  <td className="p-4 text-muted">Amazon handles storage, picking, packing and shipping.</td>
                  <td className="p-4 text-muted">You or your 3PL handle the operation.</td>
                </tr>
                <tr className="border-b border-slate-100 align-top">
                  <td className="p-4 font-medium">Prime eligibility</td>
                  <td className="p-4 text-muted">Standard FBA offers Prime delivery benefits.</td>
                  <td className="p-4 text-muted">Standard FBM does not carry Prime benefits by default.</td>
                </tr>
                <tr className="align-top">
                  <td className="p-4 font-medium">Multi-channel</td>
                  <td className="p-4 text-muted">Separate Amazon inventory pool.</td>
                  <td className="p-4 text-muted">One stock pool can serve Amazon plus your own store (e.g. Shopify), subject to your setup.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-5 text-muted">
            FBA/FBM descriptions reflect how Amazon describes the two programmes
            on its seller pages; Vareya makes no claims about Amazon programmes.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="when-3pl">
        <div className="container-site max-w-4xl">
          <h2 id="when-3pl" className="mb-5 text-2xl font-bold sm:text-3xl">When a European 3PL makes sense for FBM</h2>
          <ul className="list-disc space-y-2 pl-6 leading-7 text-muted">
            <li>You sell on Amazon and your own store and want one inventory pool.</li>
            <li>Storage, picking and packing have outgrown your own space.</li>
            <li>You want to ship from the Netherlands to European customers without running your own warehouse.</li>
            <li>You need returns handling as part of the same operation. {CAPABILITIES.returns}</li>
          </ul>
        </div>
      </section>

      <section className="py-16" aria-labelledby="process">
        <div className="container-site">
          <h2 id="process" className="mb-10 text-2xl font-bold sm:text-3xl">How FBM fulfilment works with Vareya</h2>
          <div className="grid gap-5 md:grid-cols-4">
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

      <section className="bg-slate-50 py-16" aria-labelledby="vareya-fit">
        <div className="container-site max-w-4xl">
          <h2 id="vareya-fit" className="mb-5 text-2xl font-bold sm:text-3xl">Who Vareya fits — and who it does not</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="mb-3 font-semibold">Vareya may fit if you…</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                <li>run Amazon FBM alongside Shopify or other channels;</li>
                <li>ship 500 or more orders per month;</li>
                <li>sell cosmetics, supplements, phone cases, accessories or other smaller parcels;</li>
                <li>want one Netherlands warehouse for European and international shipping.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="mb-3 font-semibold">Vareya is not the best fit if you…</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                <li>need Prime eligibility — Vareya does not claim Seller Fulfilled Prime;</li>
                <li>want inventory inside Amazon's fulfilment centres (that is FBA);</li>
                <li>ship products outside the approved parcel or product profile.</li>
              </ul>
            </div>
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
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Check whether your Amazon setup fits</h2>
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

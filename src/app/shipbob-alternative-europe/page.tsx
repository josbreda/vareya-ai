import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/marketing/FAQ";
import { CAPABILITIES, APPROVED_DESTINATIONS } from "@/content/facts";

export const metadata: Metadata = {
  title: "ShipBob Alternatives for European Fulfilment | Vareya",
  description:
    "What DTC brands should compare when evaluating European alternatives to ShipBob: EU warehouse footprint, support structure, carrier setup and volume fit. Includes Vareya's fit for 500+ orders per month.",
  alternates: {
    canonical: "https://vareya.ai/shipbob-alternative-europe/",
  },
};

const destinationList = APPROVED_DESTINATIONS.join(", ");

// Public, verifiable ShipBob facts (independent sources; reviewed 21-08-2026).
// Vareya-side facts come from the approved claims register only.
const COMPARISON = [
  {
    dimension: "EU warehouse footprint",
    shipbob: "Fulfilment centres in the United Kingdom, the Netherlands and Poland (publicly announced network; mainland-EU centre opened 2025).",
    vareya: "One warehouse in Breda, the Netherlands.",
    source: "shipbob.com/shipbob-locations/europe + DC Velocity (2025)",
  },
  {
    dimension: "Volume fit",
    shipbob: "Serves a wide range of order volumes; support model varies by volume.",
    vareya: CAPABILITIES.volume,
    source: "Vareya claims register v1.4",
  },
  {
    dimension: "Support structure",
    shipbob: "Review platforms describe support that scales with volume; smaller merchants report slower response.",
    vareya: CAPABILITIES.support,
    source: "Public review platforms (Trustpilot, G2) vs register",
  },
  {
    dimension: "Pricing structure",
    shipbob: "Published fee components: implementation, receiving, warehousing, pick/pack/ship.",
    vareya: CAPABILITIES.allInRates,
    source: "shipbob.com/pricing vs register",
  },
  {
    dimension: "Shopify integration",
    shipbob: "Shopify App Store app (publicly rated listing).",
    vareya: CAPABILITIES.shipHero,
    source: "apps.shopify.com/shipbob vs register",
  },
  {
    dimension: "Amazon FBM",
    shipbob: "Supports Amazon FBM workflows in North America per its own documentation.",
    vareya: CAPABILITIES.amazonFbm,
    source: "shipbob.com/blog/amazon-fbm vs register",
  },
  {
    dimension: "Carriers",
    shipbob: "Combination of international and domestic carriers per market.",
    vareya: "Carriers include DHL, PostNL, Asendia, FedEx and Royal Mail. PostNL is Vareya's main carrier for shipments within the Netherlands.",
    source: "Register v1.4",
  },
  {
    dimension: "Cut-off / weekend",
    shipbob: "Standard operational model; no Europe-wide 23:00 cut-off claim found.",
    vareya: `${CAPABILITIES.cutOff} ${CAPABILITIES.weekendFulfilment}`,
    source: "Register v1.4",
  },
];

const FAQ_ITEMS = [
  {
    question: "Is Vareya a direct alternative to ShipBob?",
    answer: `Vareya is a Netherlands-based fulfilment company for brands shipping 500 or more orders per month. ${CAPABILITIES.volume} Whether Vareya fits depends on your product, channels and markets. Product fit is confirmed during qualification.`,
  },
  {
    question: "Does Vareya have warehouses across Europe like ShipBob?",
    answer:
      "No. Vareya operates from one warehouse in Breda, the Netherlands. Brands that require multi-country inventory placement may be better served by a multi-warehouse network. Vareya ships from its Breda warehouse across Europe and beyond.",
  },
  {
    question: "Which brands typically look beyond ShipBob for European fulfilment?",
    answer:
      "Brands often re-evaluate when they want a Netherlands-based operation, fixed all-in rates, or a support setup that matches their size. Vareya does not publish comparisons of other providers' service levels; the fit is confirmed per brand during qualification.",
  },
  {
    question: "Does Vareya support Shopify like ShipBob does?",
    answer: `${CAPABILITIES.shipHero}`,
  },
  {
    question: "Can Vareya handle Amazon FBM orders?",
    answer: CAPABILITIES.amazonFbm,
  },
  {
    question: "Where does Vareya ship?",
    answer: `Vareya ships to the following destinations: ${destinationList}.`,
  },
];

const INTERNAL_LINKS = [
  { href: "/", label: "Ecommerce fulfilment in Europe" },
  { href: "/eu-fulfilment/", label: "EU fulfilment from the Netherlands" },
  { href: "/shopify-fulfilment-europe/", label: "Shopify fulfilment in Europe" },
  { href: "/eu-fulfilment-us-brands/", label: "EU fulfilment for US brands" },
  { href: "/knowledge/compare-fulfilment-partners/", label: "Shipping software, carrier contract or fulfilment partner" },
];

export default function ShipBobAlternativePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-site py-20 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/75">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <span aria-current="page">ShipBob alternatives</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              ShipBob alternatives for European fulfilment: what DTC brands compare
            </h1>
            <div className="mb-8 max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 sm:text-xl">
              <p>
                Many direct-to-consumer brands evaluate European alternatives to
                ShipBob when their needs change — whether that means a
                Netherlands-based warehouse, a different support structure, or
                fixed all-in rates. This page sets out the criteria worth
                comparing, so you can make the decision on facts.
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
              ShipBob is a global fulfilment network with centres across North
              America, Europe and other regions. Vareya is a fulfilment company
              with one warehouse in Breda, the Netherlands, focused on brands
              shipping 500 or more orders per month in cosmetics, supplements,
              phone cases, accessories and other smaller parcel products.
            </p>
            <p>
              If your priority is a multi-country network, ShipBob&apos;s footprint
              may fit better. If your priority is a Netherlands-based operation
              with fixed all-in rates, included support and a carrier setup built
              around PostNL for Dutch deliveries, Vareya is worth assessing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="fits-shipbob">
        <div className="container-site max-w-4xl">
          <h2 id="fits-shipbob" className="mb-5 text-2xl font-bold sm:text-3xl">Who ShipBob typically fits</h2>
          <ul className="list-disc space-y-2 pl-6 leading-7 text-muted">
            <li>Brands that want inventory distributed across multiple countries and continents.</li>
            <li>Operations that need a wide retail-channel footprint (B2B, marketplaces, omnichannel).</li>
            <li>Merchants who prefer a large, established platform ecosystem.</li>
          </ul>
          <p className="mt-4 leading-7 text-muted">
            This list describes general characteristics and is not a claim about
            any individual client of ShipBob.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="alternatives">
        <div className="container-site max-w-4xl">
          <h2 id="alternatives" className="mb-5 text-2xl font-bold sm:text-3xl">When brands look at alternatives</h2>
          <p className="leading-8 text-muted">
            In public discussions, brands re-evaluate providers for reasons such
            as support responsiveness, unexpected costs, onboarding friction or
            a desire for a local operation. We cannot verify those experiences,
            so we do not repeat them as facts. What we can do is be specific
            about how Vareya operates:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-muted">
            <li>{CAPABILITIES.allInRates}</li>
            <li>{CAPABILITIES.support}</li>
            <li>{CAPABILITIES.slas}</li>
            <li>{CAPABILITIES.cutOff}</li>
            <li>{CAPABILITIES.weekendFulfilment}</li>
          </ul>
        </div>
      </section>

      <section className="py-16" aria-labelledby="criteria">
        <div className="container-site max-w-4xl">
          <h2 id="criteria" className="mb-5 text-2xl font-bold sm:text-3xl">Comparison criteria for European DTC fulfilment</h2>
          <p className="mb-8 leading-7 text-muted">
            Whatever provider you compare, these are the dimensions that change
            your day-to-day operation — and where the two models differ most.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[640px] bg-white text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="p-4 font-semibold">Dimension</th>
                  <th className="p-4 font-semibold">ShipBob (public info)</th>
                  <th className="p-4 font-semibold">Vareya</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.dimension} className="border-b border-slate-100 align-top">
                    <td className="p-4 font-medium">{row.dimension}</td>
                    <td className="p-4 text-muted">{row.shipbob}</td>
                    <td className="p-4 text-muted">{row.vareya}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-5 text-muted">
            Sources for the ShipBob column are public pages and publications
            reviewed 21 August 2026 ({COMPARISON.map((r) => r.source).filter((v, i, a) => a.indexOf(v) === i).join("; ")}).
            Vareya statements come from the approved claims register. Where a
            fact could not be verified for both sides, it is not included.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="vareya-fit">
        <div className="container-site max-w-4xl">
          <h2 id="vareya-fit" className="mb-5 text-2xl font-bold sm:text-3xl">Where Vareya fits — and where it does not</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="mb-3 font-semibold">Vareya may fit if you…</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                <li>ship 500 or more orders per month;</li>
                <li>sell cosmetics, supplements, phone cases, accessories or other smaller parcels (combined dimensions below 900 mm, maximum length 600 mm);</li>
                <li>want a single Netherlands warehouse shipping across Europe and beyond;</li>
                <li>use Shopify, Amazon FBM, or both;</li>
                <li>value fixed all-in rates and included support.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="mb-3 font-semibold">Vareya is not the best fit if you…</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                <li>need inventory held in multiple countries simultaneously;</li>
                <li>ship products outside the approved parcel or product profile;</li>
                <li>need capabilities Vareya does not claim, such as temperature-controlled storage or batch/expiry-date management — include such requirements in the fulfilment scan to confirm what can be supported;</li>
                <li>require guarantees beyond the agreed terms. Delivery timing depends on the agreed shipping method and is confirmed during qualification.</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 leading-7 text-muted">
            Product fit is confirmed during qualification.
          </p>
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
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Check whether Vareya fits your operation</h2>
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

import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/marketing/FAQ";
import { CAPABILITIES } from "@/content/facts";

export const metadata: Metadata = {
  title: "Ecommerce Returns Handling for European Fulfilment | Vareya",
  description:
    "A decision framework for European ecommerce returns: where returns should land, what a 3PL needs from you, and what Vareya does and does not claim for returns handling from Breda, the Netherlands.",
  alternates: {
    canonical: "https://vareya.ai/returns-fulfilment-europe/",
  },
};

// Original decision framework (honest operational content; Vareya-side facts
// come from the approved claims register only).
const LANDING_OPTIONS = [
  {
    option: "Your own address",
    fits: "Brands with staff who can physically receive, inspect and restock returns.",
    watch: "Time, space and staffing scale directly with return volume.",
  },
  {
    option: "A 3PL with returns handling",
    fits: "Brands shipping from a warehouse whose staff already manage inbound stock.",
    watch: "The required process must be agreed up front — inspection, restocking and disposal rules.",
  },
  {
    option: "Carrier pickup points / parcel shops",
    fits: "Consumer convenience for drop-off, especially in dense European markets.",
    watch: "The parcel still needs a destination address and a receiving process.",
  },
];

const QUESTIONS_TO_ASK = [
  "Where do returns physically arrive, and who signs for them?",
  "What inspection happens before restocking — and who decides what is resellable?",
  "How quickly are returns processed back into available inventory?",
  "How are damaged or unsellable returns handled (quarantine, disposal, return to brand)?",
  "How are return notifications shared with the sales platform and the customer?",
  "Which carriers and what return flows are supported for the destination countries you sell into?",
];

const FAQ_ITEMS = [
  {
    question: "Does Vareya handle returns?",
    answer: CAPABILITIES.returns,
  },
  {
    question: "Does Vareya offer a customer-facing returns portal?",
    answer:
      "No. Vareya does not claim a branded returns portal or automated refund workflows. The returns process for your operation is agreed during qualification. If a fully automated customer-facing portal is essential, a provider that explicitly offers one may fit better.",
  },
  {
    question: "Which countries can returns come back from?",
    answer:
      "Returns handling is agreed per operation. Contact Vareya to discuss the required returns process for your destination countries.",
  },
  {
    question: "Does Vareya restock returned items automatically?",
    answer:
      "The required returns process — including inspection and restocking rules — is discussed and agreed during qualification. Vareya does not publish a standard turnaround time.",
  },
  {
    question: "What should I prepare before discussing returns with a 3PL?",
    answer:
      "Your return rate per destination country, your returns policy (how customers initiate returns), your resell/disposal rules, and your required notifications to the sales platform. These are part of the fulfilment scan and the qualification conversation.",
  },
];

const INTERNAL_LINKS = [
  { href: "/", label: "Ecommerce fulfilment in Europe" },
  { href: "/eu-fulfilment/", label: "EU fulfilment from the Netherlands" },
  { href: "/knowledge/switching-fulfilment-providers-europe/", label: "How to switch fulfilment providers" },
  { href: "/knowledge/fulfilment-quotation-requirements/", label: "What a 3PL needs for a quotation" },
  { href: "/cosmetics-supplements-fulfilment-europe/", label: "Cosmetics and supplements fulfilment" },
];

export default function ReturnsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-site py-20 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/75">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <span aria-current="page">Returns handling</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ecommerce returns handling for European fulfilment
            </h1>
            <div className="mb-8 max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 sm:text-xl">
              <p>
                Returns are where ecommerce operations quietly lose margin and
                customer trust. This page gives you a framework to decide where
                returns should land and what to agree with a fulfilment partner
                — before the first return arrives.
              </p>
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
              For a fulfilment company, returns handling means receiving the
              returned parcel, inspecting it according to your rules and
              getting resellable stock back into inventory — or handling
              unsellable stock the way you agreed. {CAPABILITIES.returns}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="framework">
        <div className="container-site max-w-4xl">
          <h2 id="framework" className="mb-5 text-2xl font-bold sm:text-3xl">Decision framework: where should returns land?</h2>
          <p className="mb-6 leading-7 text-muted">
            Three options cover most European operations. The right choice
            depends on your return volume, your staff capacity and your
            resell/disposal rules.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[640px] bg-white text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="p-4 font-semibold">Option</th>
                  <th className="p-4 font-semibold">Typically fits</th>
                  <th className="p-4 font-semibold">Watch out for</th>
                </tr>
              </thead>
              <tbody>
                {LANDING_OPTIONS.map((row) => (
                  <tr key={row.option} className="border-b border-slate-100 align-top">
                    <td className="p-4 font-medium">{row.option}</td>
                    <td className="p-4 text-muted">{row.fits}</td>
                    <td className="p-4 text-muted">{row.watch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="questions">
        <div className="container-site max-w-4xl">
          <h2 id="questions" className="mb-5 text-2xl font-bold sm:text-3xl">Six questions to settle with any 3PL before you agree returns handling</h2>
          <ul className="list-decimal space-y-2 pl-6 leading-7 text-muted">
            {QUESTIONS_TO_ASK.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
          <p className="mt-4 leading-7 text-muted">
            If a provider cannot answer these six questions clearly, the returns
            process is not yet defined — regardless of what the brochure says.
          </p>
        </div>
      </section>

      <section className="py-16" aria-labelledby="vareya-position">
        <div className="container-site max-w-4xl">
          <h2 id="vareya-position" className="mb-5 text-2xl font-bold sm:text-3xl">How Vareya handles returns</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>{CAPABILITIES.returns}</p>
            <p>
              The required returns process — including inspection, restocking
              and disposal rules — is agreed per operation during qualification.
              This is step 5 of Vareya&apos;s standard process, after pick, pack
              and handover to the carrier.
            </p>
          </div>
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="mb-3 font-semibold">When Vareya may not be the right fit for returns</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
              <li>You require a branded customer-facing returns portal with automated refunds — Vareya does not claim this.</li>
              <li>You need published, guaranteed return turnaround times — Vareya does not publish standard turnaround figures; specifics are agreed during qualification.</li>
              <li>You require temperature-controlled returns quarantine — include such requirements in the scan so fit can be confirmed.</li>
            </ul>
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
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Check how your returns process fits</h2>
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

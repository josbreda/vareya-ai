import type { Metadata } from "next";
import Link from "next/link";
import {
  CLAIM_PRIMARY_CTA,
  CLAIM_RETURNS,
  CLAIM_VOLUME,
} from "@/content/claims";
import { APPROVED_FACTS } from "@/content/claims";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Why Vareya.ai: A Cooperative Fulfilment Vision",
  description:
    "Raymond's vision for cooperative fulfilment: developing democratic member ownership, shared scale and rules for returning eligible surplus to members.",
  alternates: { canonical: "https://vareya.ai/why-vareya-ai/" },
  openGraph: {
    title: "Why Vareya.ai: A Cooperative Fulfilment Vision",
    description:
      "A developing member-owned model for organising European e-commerce fulfilment together.",
    url: "https://vareya.ai/why-vareya-ai/",
    type: "website",
  },
};

const PRINCIPLES = [
  {
    number: "01",
    title: "Democratic member ownership",
    body: "The intended model gives participating members a defined voice in strategic decisions. The final voting rights and reserved decisions will be set out in the cooperative's formal documents.",
  },
  {
    number: "02",
    title: "Shared scale",
    body: "Participating brands combine fulfilment demand. The cooperative can then organise shared warehouse, carrier and technology requirements around the group rather than around one brand alone.",
  },
  {
    number: "03",
    title: "Value back to members",
    body: "The vision is that any eligible surplus created by the cooperative goes back to members or strengthens their shared operation, according to rules adopted by the cooperative.",
  },
] as const;

const BUILDING_STEPS = [
  {
    title: "Prove the operational fit",
    body: "Start with the practical work: product fit, order data, stock intake, picking, packing, dispatch and returns.",
  },
  {
    title: "Develop the member rules",
    body: "Define eligibility, voting rights, cost allocation, reserves, surplus treatment, leaving rules and dispute resolution.",
  },
  {
    title: "Test governance in practice",
    body: "Use early member input to check that strategic participation supports — rather than slows — day-to-day fulfilment.",
  },
] as const;

export default function WhyVareyaPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://vareya.ai/" },
    { name: "Why Vareya.ai", url: "https://vareya.ai/why-vareya-ai/" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        data-schema="breadcrumb"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-ink to-slate-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 78% 24%, rgba(94,234,212,.18), transparent 28%), radial-gradient(circle at 15% 80%, rgba(249,115,22,.12), transparent 22%)",
          }}
        />
        <div className="container-site relative py-16 sm:py-24 lg:py-28">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/55">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page">Why Vareya.ai</span>
          </nav>

          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-network/20 bg-network/10 px-3 py-1 text-[13px] font-medium text-network">
              Raymond&apos;s vision
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              A different kind of fulfilment company
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Vareya is developing a cooperative model in which the brands using the
              operation can help own it, shape it and share in the value it creates.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/fulfilment-scan/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-ink transition-colors hover:bg-accent-light"
              >
                {CLAIM_PRIMARY_CTA}
              </Link>
              <Link
                href="/knowledge/what-is-cooperative-fulfilment/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Read how the model could work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-network/15 bg-primary-950 py-7 text-white" aria-label="Vision status">
        <div className="container-site flex max-w-4xl flex-col gap-2 sm:flex-row sm:items-start sm:gap-5">
          <span className="shrink-0 text-sm font-semibold uppercase tracking-[0.16em] text-network">
            Clear status
          </span>
          <p className="text-sm leading-6 text-white/70">
            The cooperative structure and membership terms are being developed. This page
            explains the intended direction; it is not a completed membership offer or a
            substitute for the cooperative&apos;s final legal documents.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="model-heading">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                The proposed model
              </p>
              <h2 id="model-heading" className="text-3xl font-bold text-ink sm:text-4xl">
                Organise fulfilment around the members who depend on it
              </h2>
              <p className="mt-5 leading-7 text-muted">
                The goal is not to add a cooperative label to a conventional service. It is
                to design ownership, governance and value allocation around participating
                brands while keeping warehouse responsibilities clear.
              </p>
            </div>

            <div className="grid gap-4">
              {PRINCIPLES.map((principle) => (
                <article
                  key={principle.number}
                  className="group grid gap-4 rounded-2xl border border-border bg-white p-6 shadow-[0_14px_45px_rgba(8,26,29,0.05)] sm:grid-cols-[auto_1fr] sm:p-7"
                >
                  <span className="font-mono text-sm font-semibold text-accent" aria-hidden="true">
                    {principle.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{principle.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{principle.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24" aria-labelledby="today-heading">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Operation and ownership
            </p>
            <h2 id="today-heading" className="text-3xl font-bold text-ink sm:text-4xl">
              What exists today — and what comes next
            </h2>
            <p className="mt-5 leading-7 text-muted">
              The practical fulfilment operation is the foundation. The cooperative layer is
              being designed alongside it and needs its own formal decisions.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-white p-7 sm:p-9">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                Operational foundation
              </p>
              <h3 className="text-2xl font-bold text-ink">Fulfilment from Breda</h3>
              <div className="mt-5 space-y-3 text-sm leading-6 text-muted">
                <p>Warehouse: {APPROVED_FACTS.address}.</p>
                <p>{APPROVED_FACTS.shopify}</p>
                <p>{APPROVED_FACTS.amazonFbm}</p>
                <p>{CLAIM_RETURNS}</p>
              </div>
            </article>

            <article className="rounded-2xl border border-primary/20 bg-primary-950 p-7 text-white sm:p-9">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-network">
                Cooperative development
              </p>
              <h3 className="text-2xl font-bold">Membership rules still to formalise</h3>
              <p className="mt-5 text-sm leading-6 text-white/70">
                Eligibility, democratic rights, cost allocation, reserves, treatment of any
                surplus and exit terms must be adopted in the cooperative&apos;s constitutional
                and membership documents before they become final member commitments.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="building-heading">
        <div className="container-site max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Build deliberately
          </p>
          <h2 id="building-heading" className="text-3xl font-bold text-ink sm:text-4xl">
            From practical fit to shared governance
          </h2>

          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {BUILDING_STEPS.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-border p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl border border-accent/25 bg-accent-soft p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-ink">Who should explore the model?</h3>
            <p className="mt-3 leading-7 text-muted">
              Brands should first assess whether the operation fits their product, volume,
              channels and markets. {CLAIM_VOLUME} If the operational fit is sound, the
              developing member model becomes the next conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white" aria-labelledby="vision-cta-heading">
        <div className="container-site max-w-3xl text-center">
          <h2 id="vision-cta-heading" className="text-3xl font-bold">
            Start with the operational fit
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            Share your current order profile, channels, product category and target markets.
            Vareya can then review the operation before discussing the developing member model.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/fulfilment-scan/"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-slate-100"
            >
              {CLAIM_PRIMARY_CTA}
            </Link>
            <Link
              href="/contact/"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ask about the vision
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

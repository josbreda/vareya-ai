import { CustomerReviews } from "@/components/layout/CustomerReviews";
import { VegaMeltsCaseCard } from "@/components/marketing/VegaMeltsCaseCard";
import { WarehouseMedia } from "@/components/marketing/WarehouseMedia";
import { KnowledgeHighlights } from "@/components/marketing/KnowledgeHighlights";
import type { Metadata } from "next";
import Link from "@/i18n/Link";
import { FAQ } from "@/components/marketing/FAQ";
import { NetworkHero } from "@/components/marketing/NetworkHero";
import { RotatingHeadline } from "@/components/marketing/RotatingHeadline";
import { CAPABILITIES } from "@/content/facts";
import { RAYMOND_PHOTOS } from "@/content/raymond";
import { BRAND, FOCUS_ITEMS } from "@/content/brand";
import { ContentPhoto } from "@/components/marketing/ContentPhoto";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { getRequestI18n } from "@/i18n/server";
import { englishConversionHref } from "@/i18n/conversion-links";
import { buildLocalizedMetadata } from "@/i18n/page-meta";

export function generateMetadata(): Promise<Metadata> {
  return buildLocalizedMetadata("/");
}

const DEDICATION_TAG = "#Dedication";

const PROCESS_STEPS = [
  {
    title: "Qualification",
    body: "Share your volume, product category, sales channels and target markets. Product fit is confirmed during qualification.",
  },
  {
    title: "Onboarding",
    body: "Agree services and pricing, sign the fulfilment agreement, connect your webshop to the WMS, set up packing and returns, then run test orders before go-live.",
  },
  {
    title: "Inbound stock",
    body: "Create a purchase order in the WMS and list what you are sending. On arrival we check and count the delivery, and stock levels update once the purchase order is accepted.",
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
      "Vareya fulfils ecommerce orders from a warehouse in Breda, the Netherlands: receiving stock, picking and packing orders, handing them to a carrier, and processing returns.",
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
    question: "Why fulfil from the Netherlands?",
    answer:
      "Breda sits within reach of most continental European destinations and the UK, with access to several parcel carriers from one site. Whether that fits your brand depends on where your customers actually are — product fit is confirmed during qualification.",
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

const WAREHOUSE_PHOTO = {
  "en": {
    "title": "Warehouse views",
    "alt": "A warehouse employee scans a product with a handheld barcode scanner."
  },
  "nl": {
    "title": "Een blik op het magazijn",
    "alt": "Een magazijnmedewerker scant een product met een handscanner."
  },
  "de": {
    "title": "Einblicke ins Lager",
    "alt": "Ein Lagermitarbeiter scannt ein Produkt mit einem Handscanner."
  },
  "fr": {
    "title": "Vues de l’entrepôt",
    "alt": "Un employé de l’entrepôt scanne un produit avec un lecteur de codes-barres."
  },
  "es": {
    "title": "Vistas del almacén",
    "alt": "Un empleado del almacén escanea un producto con un lector de códigos de barras."
  }
} as const;

export default async function HomePage() {
  const { t, locale } = await getRequestI18n();
  // Same catalogue string in every language; only the hashtag itself becomes a link.
  const [signatureLead, signatureTail] = t("— Raymond, Vareya · #Dedication").split(DEDICATION_TAG);
  const warehouse = WAREHOUSE_PHOTO[locale];
  const homeFaq = HOME_FAQ.map((item) => ({
    question: t(item.question),
    answer: t(item.answer),
  }));
  const capabilityItems = [
    t("A warehouse based in Breda, the Netherlands."),
    t(CAPABILITIES.since2016),
    `${t(CAPABILITIES.shopify)} ${t(CAPABILITIES.shipHero)}`,
    t(CAPABILITIES.amazonFbm),
    t(CAPABILITIES.returns),
    t(CAPABILITIES.postNL),
    t(CAPABILITIES.carrierSelection),
    t(CAPABILITIES.customs),
    `${t(CAPABILITIES.weekendFulfilment)} ${t(CAPABILITIES.cutOff)}`,
    t(CAPABILITIES.allInRates),
    `${t(CAPABILITIES.support)} ${t(CAPABILITIES.slas)}`,
  ];

  return (
    <>
      <NetworkHero
        badge={t("European Fulfilment — Breda, NL")}
        title={t(BRAND.h1)}
        payoff={t(BRAND.payoff)}
        description={`${t(BRAND.heroParagraph)} ${t(BRAND.heroMission)}`}
        primaryCTA={{
          label: t("Check your EU fulfilment fit"),
          href: englishConversionHref("/free-rate-scan/", locale),
        }}
        proofItems={[
          t("Breda, NL"),
          t("Shopify-ready"),
          t("Multi-carrier"),
          t("Returns handled"),
        ]}
      >
        {/*
          Hero visual: owner-supplied VareYa brand artwork (Raymond, 15 October
          2026) — the cube from the logo inside its green hexagon. Replaces the
          temporary picking photo; that photo (photo-32) remains in the
          "Inside the warehouse" grid below.
        */}
        <div className="w-full max-w-[360px] rounded-2xl border border-white/10 bg-white/5 p-2">
          <ContentPhoto
            photo={RAYMOND_PHOTOS["brand-lockup"]}
            alt={t(RAYMOND_PHOTOS["brand-lockup"].alt)}
            className="aspect-square w-full rounded-xl object-cover"
          />
        </div>
      </NetworkHero>

      <CustomerReviews />

      <section className="border-b border-slate-200 bg-slate-50 py-10" aria-labelledby="quick-answer">
        <div className="container-site max-w-4xl">
          <RotatingHeadline
            prefix={t("European fulfilment for")}
            words={[
              t("Shopify"),
              t("Amazon FBM"),
              t("DTC brands"),
              t("cosmetics"),
              t("supplements"),
              t("accessories"),
            ]}
            interval={1800}
            className="mb-3 text-2xl font-bold text-slate-900 block"
          />
          <div className="space-y-3 leading-7 text-muted">
            <p>
              {t("Vareya operates ecommerce fulfilment from a warehouse in Breda, the Netherlands, shipping orders across Europe, the United Kingdom, the United States and other international markets. The focus is Shopify and Amazon FBM sellers in cosmetics, supplements, phone cases, accessories and other smaller parcel categories.")}
            </p>
            <p>{t(CAPABILITIES.volume)}</p>
          </div>
        </div>
      </section>

      <KnowledgeHighlights />

      <VegaMeltsCaseCard />

      <section className="py-14 sm:py-16" aria-labelledby="mission">
        <div className="container-site max-w-4xl">
          <h2 id="mission" className="mb-4 text-2xl font-bold sm:text-3xl">
            {t("Our mission")}
          </h2>
          <p className="mb-3 leading-8 text-muted sm:text-lg">{t(BRAND.mission)}</p>
          <p className="italic leading-7 text-slate-600">{t(BRAND.ambition)}</p>
          <h3 className="mt-10 mb-6 text-xl font-bold text-slate-900">{t("What we focus on")}</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FOCUS_ITEMS.map((item) => (
              <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-5">
                <h4 className="mb-2 font-semibold text-slate-900">{t(item.title)}</h4>
                <p className="text-sm leading-6 text-muted">{t(item.body)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="inside-warehouse">
        <div className="container-site">
          <h2 id="inside-warehouse" className="mb-3 text-center text-2xl font-bold sm:text-3xl">
            {warehouse.title}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {/* eslint-disable-next-line @next/next/no-img-element -- static warehouse photograph */}
            <img
              src="/images/p1/warehouse-product-scanning.webp"
              alt={warehouse.alt}
              width={1280}
              height={853}
              loading="lazy"
              decoding="async"
              className="h-56 w-full rounded-xl border border-slate-200 object-cover sm:h-64"
            />
            <ContentPhoto
              photo={RAYMOND_PHOTOS["photo-32"]}
              alt={t(RAYMOND_PHOTOS["photo-32"].alt)}
              className="h-56 w-full rounded-xl border border-slate-200 bg-slate-100 object-cover sm:h-64"
            />
          </div>
        </div>
      </section>

      {/* Owner request 12 Nov 18:33: the approved since-2016 banner + three-photo
          gallery moves higher; the component and its images stay unchanged. */}
      <WarehouseMedia />

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="who-vareya-helps">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 id="who-vareya-helps" className="mb-5 text-2xl font-bold">
              {t("Who this fits")}
            </h2>
            <div className="space-y-4 leading-7 text-muted">
              <p>{t(CAPABILITIES.volume)}</p>
              <p>
                {t("Vareya works with brands selling through Shopify or Amazon FBM in cosmetics, supplements, phone cases, accessories and comparable smaller parcel products — combined dimensions ≤900 mm, longest side ≤600 mm. Product fit is confirmed during qualification.")}
              </p>
            </div>
          </div>
          <div>
            <h2 className="mb-5 text-2xl font-bold">{t("Problems this solves")}</h2>
            <div className="space-y-4 leading-7 text-muted">
              <p>
                {t("Growing order volumes can outpace an in-house setup. Shipping into several European and international markets from one base adds coordination that a single-country operation doesn't have to think about. Fulfilment also needs to connect cleanly to the sales channel a brand already runs orders through.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12" aria-labelledby="capabilities">
        <h2 id="capabilities" className="sr-only">{t("What Vareya provides")}</h2>
        <div className="container-site">
          <p className="mx-auto mb-8 max-w-2xl text-center leading-7 text-muted">
            {t("A single warehouse in Breda handles the operational side of selling into Europe:")}
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilityItems.map((item) => (
              <p key={item} className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6 text-muted">
                {item}
              </p>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center italic text-sm text-slate-500">
            {t(CAPABILITIES.ambition)}
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="process">
        <div className="container-site">
          <h2 id="process" className="mb-10 text-center text-2xl font-bold sm:text-3xl">
            {t("How the process works")}
          </h2>
          <div className="grid gap-6 md:grid-cols-5">
            {PROCESS_STEPS.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="mb-3 text-sm font-semibold text-primary">{t("Step {number}", { number: index + 1 })}</p>
                <h3 className="mb-2 font-semibold text-slate-900">{t(step.title)}</h3>
                <p className="text-sm leading-6 text-muted">{t(step.body)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">{t("Sales channel integrations")}</h2>
            <p className="leading-7 text-muted">
              {t("Orders connect through Shopify or Amazon FBM today. Selling through something else? Share the details during qualification so fit can be assessed.")}
            </p>
            <p className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-6">
              <Link href="/shopify-fulfilment-europe/" className="inline-flex font-semibold text-primary hover:underline">
                {t("Explore Shopify fulfilment in Europe")}
              </Link>
              <Link href="/amazon-fbm-fulfilment/" className="inline-flex font-semibold text-primary hover:underline">
                {t("Explore Amazon FBM fulfilment")}
              </Link>
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">{t("Why Breda")}</h2>
            <p className="leading-7 text-muted">
              {t("Breda puts most continental European destinations and the UK within reach of a single warehouse, with several parcel carriers reachable from that one site rather than coordinating separate regional setups. Whether that geography fits your actual customer base is a qualification question, not a given — Vareya assesses it per brand.")}
            </p>
            <p className="mt-4">
              <Link href="/eu-fulfilment/" className="inline-flex font-semibold text-primary hover:underline">
                {t("See EU fulfilment from the Netherlands")}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="people">
        <div className="container-site grid gap-10 lg:grid-cols-[5fr_7fr] lg:items-center">
          {/* Owner request 15 Oct 2026: the people-block photo must be Raymond himself. */}
          <ContentPhoto
            photo={RAYMOND_PHOTOS["raymond-portrait"]}
            alt={t(RAYMOND_PHOTOS["raymond-portrait"].alt)}
            className="h-72 w-full rounded-xl border border-slate-200 bg-slate-100 object-cover"
          />
          <div>
            <h2 id="people" className="mb-5 text-2xl font-bold sm:text-3xl">
              {t("The people behind Vareya")}
            </h2>
            <blockquote className="mb-5 border-l-4 border-primary pl-5">
              <p lang={locale} className="text-xl font-semibold text-slate-900">
                {t("Je koopt bij de VENT niet bij de TENT!")}
              </p>
              <p className="mt-2 text-lg font-semibold text-primary">{t("People buy people.")}</p>
              <footer className="mt-1 text-sm text-slate-500">
                {signatureLead}
                <Link href="/knowledge/dedication-in-fulfilment/" className="underline underline-offset-4 hover:text-primary">{DEDICATION_TAG}</Link>
                {signatureTail}
              </footer>
            </blockquote>
            <p className="mb-4 leading-7 text-muted">
              {t("You buy from the people, not from the warehouse. When you work with Vareya, you meet your operational contact or account manager — the person who sets up the operation with you and who stays in touch through the monthly catch-up.")}
            </p>
            <p className="mb-6 leading-7 text-muted">
              {t("Which contact arrangement fits your operation is agreed during qualification.")}
            </p>
            <SocialLinks />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="markets">
        <div className="container-site">
          <h2 id="markets" className="mb-10 text-center text-2xl font-bold sm:text-3xl">
            {t("Explore your fulfilment route")}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TARGET_CARDS.map((card) => (
              <Link key={card.href} href={card.href} className="min-w-0 break-words rounded-xl border border-slate-200 p-6 transition-all hover:border-primary/40 hover:shadow-sm">
                <h3 className="mb-2 font-semibold text-slate-900">{t(card.title)}</h3>
                <p className="text-sm leading-6 text-muted">{t(card.body)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="photo-green bg-primary py-16 text-white" aria-labelledby="scan-cta">
        <div className="container-site text-center">
          <h2 id="scan-cta" className="mb-4 text-2xl font-bold sm:text-3xl">
            {t("Check whether your operation may fit")}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            {t("Share your current volume, product category, sales channel and target markets for an initial fulfilment fit assessment.")}
          </p>
          <Link href="/free-rate-scan/" className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-primary hover:bg-slate-100">
            {t("Check your EU fulfilment fit")}
          </Link>
          <p className="mt-5 text-sm text-white/70">
            {t("Prefer a tailored quote instead?")}{" "}
            <Link href="/request-fulfilment-quote/" className="underline underline-offset-2 hover:text-white">
              {t("Request a fulfilment quote")}
            </Link>
            .
          </p>
        </div>
      </section>

      <FAQ items={homeFaq} />

      <section className="py-12" aria-label={t("Contact Vareya")}>
        <div className="container-site text-center">
          <p className="mb-4 text-muted">{t("Need another way to reach Vareya?")}</p>
          <Link href="/contact/" className="font-semibold text-primary hover:underline">
            {t("Contact Vareya")}
          </Link>
        </div>
      </section>
    </>
  );
}

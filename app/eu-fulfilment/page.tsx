import type { Metadata } from "next";
import Link from "@/i18n/Link";
import { FAQ } from "@/components/marketing/FAQ";
import { ContentPhoto } from "@/components/marketing/ContentPhoto";
import { APPROVED_DESTINATIONS, CAPABILITIES } from "@/content/facts";
import {
  INBOUND_STOCK,
  ONBOARDING_STEPS,
  ONBOARDING_SUMMARY,
  RAYMOND_PHOTOS,
  SERVICES_INTRO,
} from "@/content/raymond";
import { getRequestI18n } from "@/i18n/server";
import { buildLocalizedMetadata } from "@/i18n/page-meta";

export function generateMetadata(): Promise<Metadata> {
  return buildLocalizedMetadata("/eu-fulfilment/");
}

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
  { href: "/boxable-fulfilment/", label: "Boxable" },
  { href: "/boxable-shipping/", label: "Boxable Shipping" },
];

export default async function EUFulfilmentPage() {
  const { t } = await getRequestI18n();
  const destinationList = APPROVED_DESTINATIONS.map((name) => t(name)).join(", ");
  const faqItems = FAQ_ITEMS.map((item) => ({
    question: t(item.question),
    answer: t(item.answer),
  }));

  return (
    <>
      <section className="photo-green bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-site py-20 sm:py-24">
          <nav aria-label={t("Breadcrumb")} className="mb-8 text-sm text-white/75">
            <Link href="/" className="hover:text-white">{t("Home")}</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <span aria-current="page">{t("EU fulfilment")}</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {t("Using the Netherlands as your EU fulfilment base")}
            </h1>
            <div className="mb-8 max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 sm:text-xl">
              <p>
                {t("Many international ecommerce brands use the Netherlands as a base for shipping into Europe. Vareya fulfils orders from a warehouse in Breda, handling shipping, onboarding and the agreed return flow.")}
              </p>
              <p>{t(CAPABILITIES.volume)}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/free-rate-scan/" className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-primary hover:bg-slate-100">
                {t("Check your EU fulfilment fit")}
              </Link>
              <Link href="/request-fulfilment-quote/" className="rounded-lg border border-white/30 px-6 py-3 text-center font-medium hover:bg-white/10">
                {t("Request a fulfilment quote")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-12" aria-labelledby="quick-answer">
        <div className="container-site max-w-4xl">
          <h2 id="quick-answer" className="mb-4 text-2xl font-bold">{t("Quick answer")}</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>
              {t("The Netherlands is a common base for EU ecommerce fulfilment because of its location and logistics infrastructure. Vareya operates a warehouse in Breda, the Netherlands, shipping orders across Europe and to other international markets.")}
            </p>
            <p>{t(CAPABILITIES.volume)}</p>
            <p>{t(CAPABILITIES.returns)}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="why-netherlands">
        <div className="container-site max-w-4xl">
          <h2 id="why-netherlands" className="mb-5 text-2xl font-bold sm:text-3xl">
            {t("Why the Netherlands")}
          </h2>
          <p className="leading-8 text-muted sm:text-lg">
            {t("The Netherlands sits within reach of major European population centres and has established logistics and carrier infrastructure. For brands shipping into multiple European countries, holding stock in one Netherlands-based location can simplify the operational picture compared with shipping each order individually from outside Europe.")}
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="capability-block">
        <div className="container-site">
          <h2 id="capability-block" className="mb-8 text-2xl font-bold">{t("Capabilities")}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              t(CAPABILITIES.shopify),
              t(CAPABILITIES.amazonFbm),
              t(CAPABILITIES.returns),
              t("Carriers include DHL, PostNL, Asendia, Deutsche Post, Royal Mail, DPD and DHL Express."),
              t(CAPABILITIES.cutOff),
              t(CAPABILITIES.volume),
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
          <h2 id="process" className="mb-10 text-2xl font-bold sm:text-3xl">{t("How the process works")}</h2>
          <div className="grid gap-5 md:grid-cols-5">
            {PROCESS.map((body, index) => (
              <article key={body} className="rounded-xl border border-slate-200 p-5">
                <p className="mb-3 text-sm font-semibold text-primary">{t("Step {number}", { number: index + 1 })}</p>
                <p className="text-sm leading-6 text-muted">{t(body)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="onboarding-steps">
        <div className="container-site">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 id="onboarding-steps" className="mb-4 text-2xl font-bold sm:text-3xl">
              {t("Onboarding: from first contact to live orders")}
            </h2>
            <p className="leading-7 text-muted">
              {t("Three clear phases take you from first contact to live orders.")}
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <ol className="space-y-5">
              {ONBOARDING_STEPS.map((step, index) => (
                <li key={step.title} className="rounded-xl border border-slate-200 bg-white p-6">
                  <p className="mb-2 text-sm font-semibold text-primary">{t("Phase {number}", { number: index + 1 })}</p>
                  <h3 className="mb-2 font-semibold text-slate-900">{t(step.title)}</h3>
                  <p className="text-sm leading-6 text-muted">{t(step.body)}</p>
                </li>
              ))}
            </ol>
            <div className="space-y-6">
              <ContentPhoto photo={RAYMOND_PHOTOS["photo-24"]} alt={t(RAYMOND_PHOTOS["photo-24"].alt)} />
              <p className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-muted">
                {t(ONBOARDING_SUMMARY)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="inbound-stock">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 id="inbound-stock" className="mb-4 text-2xl font-bold sm:text-3xl">
                {t(INBOUND_STOCK.title)}
              </h2>
              <div className="space-y-4 leading-7 text-muted">
                <p>{t(INBOUND_STOCK.plan)}</p>
                <p>{t(INBOUND_STOCK.receive)}</p>
              </div>
            </div>
            <ContentPhoto photo={RAYMOND_PHOTOS["photo-35"]} alt={t(RAYMOND_PHOTOS["photo-35"].alt)} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="services-scope">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <ContentPhoto
              photo={RAYMOND_PHOTOS["photo-11"]}
              alt={t(RAYMOND_PHOTOS["photo-11"].alt)}
              className="h-[420px] w-full rounded-xl border border-slate-200 bg-slate-100 object-cover"
            />
            <div>
              <h2 id="services-scope" className="mb-4 text-2xl font-bold sm:text-3xl">
                {t("Services: fulfilment for the way you sell")}
              </h2>
              <p className="leading-7 text-muted">{t(SERVICES_INTRO)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="shipping-destinations">
        <div className="container-site max-w-5xl">
          <h2 id="shipping-destinations" className="mb-5 text-2xl font-bold">
            {t("Shipping and destinations")}
          </h2>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <p className="leading-8 text-muted">
              {t("From Breda, Vareya ships to {destinations}, using DHL, PostNL, Asendia, Deutsche Post, Royal Mail, DPD and DHL Express.", { destinations: destinationList })}
            </p>
            <ContentPhoto photo={RAYMOND_PHOTOS["photo-19"]} alt={t(RAYMOND_PHOTOS["photo-19"].alt)} />
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="returns">
        <div className="container-site max-w-4xl">
          <h2 id="returns" className="mb-4 text-2xl font-bold">{t("Returns")}</h2>
          <p className="leading-7 text-muted">{t(CAPABILITIES.returns)}</p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16" aria-labelledby="fit">
        <div className="container-site max-w-4xl">
          <h2 id="fit" className="mb-5 text-2xl font-bold">{t("Who this fits")}</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>{t(CAPABILITIES.volume)}</p>
            <p>
              {t("Vareya works with brands selling via Shopify or Amazon FBM, in cosmetics, supplements, phone cases, accessories or other smaller parcel products with combined dimensions ≤900 mm and a longest side ≤600 mm. Product fit is confirmed during qualification.")}
            </p>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <section className="py-14" aria-labelledby="related-pages">
        <div className="container-site">
          <h2 id="related-pages" className="mb-6 text-2xl font-bold">{t("Related fulfilment pages")}</h2>
          <div className="flex flex-wrap gap-3">
            {[{ label: "Digistore24 Fulfilment", href: "/digistore24-fulfilment-europe/" }, ...INTERNAL_LINKS].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-primary hover:border-primary/40">
                {t(link.label)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="photo-green bg-primary py-16 text-white">
        <div className="container-site text-center">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">{t("Assess your EU fulfilment setup")}</h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/free-rate-scan/" className="rounded-lg bg-white px-6 py-3 font-semibold text-primary hover:bg-slate-100">
              {t("Check your EU fulfilment fit")}
            </Link>
            <Link href="/request-fulfilment-quote/" className="rounded-lg border border-white/30 px-6 py-3 font-medium hover:bg-white/10">
              {t("Request a fulfilment quote")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

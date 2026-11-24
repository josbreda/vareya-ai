import type { Metadata } from "next";
import Link from "@/i18n/Link";
import { COMPANY, CAPABILITIES } from "@/content/facts";
import { RAYMOND_PHOTOS, SUPPORT } from "@/content/raymond";
import { ContentPhoto } from "@/components/marketing/ContentPhoto";
import { getRequestI18n } from "@/i18n/server";
import { buildLocalizedMetadata } from "@/i18n/page-meta";

export function generateMetadata(): Promise<Metadata> {
  return buildLocalizedMetadata("/about/");
}

export default async function AboutPage() {
  const { t } = await getRequestI18n();
  return (
    <>
      <section className="photo-green bg-gradient-to-br from-primary-950 via-ink to-ink text-white">
        <div className="container-site py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 mb-5 text-[13px] text-network bg-network/10 border border-network/20 rounded-full">
              {t("About")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              {t("Fulfilment from Breda, the Netherlands")}
            </h1>
            <p className="text-lg text-white/65 leading-relaxed max-w-xl">
              {t("Vareya fulfils e-commerce orders for growing brands — with Shopify integration, multi-carrier delivery, and returns handling available.")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">{t("Who we are")}</h2>
          <div className="prose prose-slate max-w-none text-muted leading-7 space-y-4">
            <p>
              {t("Vareya BV is a fulfilment company based in {city}, {country}. We fulfil e-commerce orders from our warehouse at {street}, {postcode} {city}. {since}", {
                city: t(COMPANY.city),
                country: t(COMPANY.country),
                street: COMPANY.street,
                postcode: COMPANY.postcode,
                since: t(CAPABILITIES.since2016),
              })}
            </p>
            <p>
              {t(CAPABILITIES.shopify)} {t(CAPABILITIES.amazonFbm)}
            </p>
            <p>
              {t("Vareya specialises in cosmetics, supplements, phone cases, accessories and other smaller parcel products.")} {t(CAPABILITIES.volume)}
            </p>
            <p>
              {t("Vareya is exploring a possible future cooperative model. No cooperative legal entity is currently part of Vareya's existing company structure. If the model moves forward, the brands Vareya serves could become members, sharing ownership and a voice in the strategic decisions reserved for them. The cooperative's legal form and membership terms would be set out in its formal documents.")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold mb-8">{t("Fulfilment capabilities")}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: t("Netherlands-based warehouse"), body: t("Based in {city}, with access to major European logistics routes.", { city: t(COMPANY.city) }) },
              { title: t("Shopify integration"), body: t(CAPABILITIES.shopify) },
              { title: t("Amazon FBM"), body: t(CAPABILITIES.amazonFbm) },
              { title: t("Returns handling"), body: t(CAPABILITIES.returns) },
              { title: t("Multi-carrier delivery"), body: t(CAPABILITIES.postNL) },
              { title: t("Flexible cut-off"), body: t(CAPABILITIES.cutOff) },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl bg-white border border-border">
                <h3 className="font-semibold text-ink mb-1 text-sm">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">{t("Team and support")}</h2>
          <div className="mb-8 max-w-3xl space-y-4 text-muted leading-7">
            <p>{t(SUPPORT.intro)}</p>
            <p>{t(SUPPORT.availability)}</p>
            <p className="text-sm text-slate-500">{t(SUPPORT.bound)}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <ContentPhoto photo={RAYMOND_PHOTOS["photo-27"]} alt={t(RAYMOND_PHOTOS["photo-27"].alt)} />
            <ContentPhoto photo={RAYMOND_PHOTOS["photo-33"]} alt={t(RAYMOND_PHOTOS["photo-33"].alt)} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">{t("Published about Vareya")}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.shiphero.com/case-studies/vareya-fulfillment"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-white border border-border hover:border-primary/40 transition-colors"
            >
              <h3 className="font-semibold text-ink mb-1 text-sm">{t("ShipHero case study")}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {t("ShipHero, Vareya's warehouse management system, published a case study about Vareya's client onboarding (September 2022).")}
              </p>
            </a>
            <a
              href="https://help.digistore24.com/hc/en-us/articles/23713793720721-Connect-Vareya-to-Digistore24"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-white border border-border hover:border-primary/40 transition-colors"
            >
              <h3 className="font-semibold text-ink mb-1 text-sm">{t("Digistore24 documentation")}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {t("The Digistore24 Help Center documents how sellers connect Vareya as their fulfilment partner.")}
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">{t("Contact")}</h2>
          <div className="prose prose-slate max-w-none text-muted leading-7 space-y-4">
            <p>
              {COMPANY.street}, {COMPANY.postcode} {t(COMPANY.city)}, {t(COMPANY.country)}
            </p>
            <p>
              {t("Tel:")} <a href={`tel:${COMPANY.phone}`} className="text-primary hover:underline">{COMPANY.phone}</a>
            </p>
            <p>
              {t("Email:")} <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>
            </p>
            <p>
              {t("KVK: 65877535 · BTW: NL856299790B02")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-primary text-white">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t("Ready to check your fulfilment fit?")}
          </h2>
          <p className="text-primary-light/80 mb-8">
            {t("Take our quick fulfilment scan — it takes a few minutes.")}
          </p>
          <Link
            href="/free-rate-scan/"
            className="inline-flex items-center px-6 py-3 bg-accent text-ink font-semibold rounded-[10px] hover:bg-[#FF8A3D] transition-colors"
          >
            {t("Check your EU fulfilment fit →")}
          </Link>
        </div>
      </section>
    </>
  );
}

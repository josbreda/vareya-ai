import type { Metadata } from "next";
import Link from "@/i18n/Link";
import { getT } from "@/i18n/server";
import { localizePageMetadata } from "@/i18n/localize-metadata";
import { buildMetadata } from "@/lib/seo";
import { COMPANY } from "@/content/facts";

const DIRECTORY = "https://www.digistore24.com/support/fulfillment_centers";
const GUIDE = "https://help.digistore24.com/hc/en-us/articles/23713793720721-Connect-Vareya-to-Digistore24";
const CARDS = [
  ["Stock, picking and packing", "Receive stock in Breda, store it under agreed conditions and prepare physical orders with the right packaging and inserts."],
  ["Compact products, assessed individually", "Vareya focuses on small, lightweight orders. Supplements, cosmetics and other products with special handling needs are reviewed before onboarding."],
  ["Shipping and returns by agreement", "Agree destinations, carrier services and the returns process before launch. Product fit and service eligibility are separate checks."],
] as const;
const STEPS = [
  ["Agree your fulfilment setup", "Share your physical product range, packed dimensions, order volume and target countries. Vareya reviews the operation and provides the connection details."],
  ["Follow the official connection guide", "Digistore24 documents a Vareya-specific IPN connection. Use its current instructions to select products and map their SKUs to the warehouse."],
  ["Test before releasing orders", "Confirm that a representative test order reaches the correct warehouse items. Agree how order changes, exceptions and shipping updates will be handled."],
] as const;
export async function generateMetadata(): Promise<Metadata> {
  return localizePageMetadata(buildMetadata("/digistore24-fulfilment-europe/"), "/digistore24-fulfilment-europe/");
}
export default async function Digistore24Page() {
  const t = await getT();
  return <>
    <section className="bg-primary-dark py-14 text-white sm:py-20">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-lime-300">DIGISTORE24 · VAREYA</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{t("Digistore24 Fulfilment in Europe with Vareya")}</h1>
          <p className="mt-6 text-xl leading-8 text-white/90">{t("Sell physical products through Digistore24. Store, pick, pack and ship from Vareya’s operation in Breda, the Netherlands.")}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/product-fit-check/" data-cta-id="digistore24-fit" className="rounded-lg bg-white px-6 py-3 font-semibold text-primary">{t("Check Your Product Fit")}</Link>
            <a href={GUIDE} className="rounded-lg border border-white/40 px-6 py-3 font-semibold">{t("Read the official integration guide")}</a>
          </div>
        </div>
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element -- existing first-party warehouse photograph */}
          <img src="/images/phase6/warehouse-packing.jpg" width={1280} height={960} alt={t("Packing area in the VareYa warehouse in Breda")} className="aspect-[4/3] w-full rounded-2xl object-cover" />
          <figcaption className="mt-3 text-sm text-white/75">{t("Vareya’s packing operation in Breda, the Netherlands.")}</figcaption>
        </figure>
      </div>
    </section>
    <section className="border-b border-slate-200 bg-emerald-50 py-10">
      <div className="container-site max-w-5xl">
        <h2 className="text-2xl font-bold text-primary">{t("Listed by Digistore24. Documented by Digistore24.")}</h2>
        <p className="mt-4 leading-7">{t("Digistore24 lists Vareya under code VAR, Netherlands, for Digistore24 GmbH (Germany). It also publishes a dedicated Vareya connection guide.")}</p>
        <div className="mt-5 flex flex-wrap gap-6 font-semibold text-primary underline">
          <a href={DIRECTORY}>{t("Official fulfilment-center listing")}</a>
          <a href={GUIDE}>{t("Connect Vareya to Digistore24")}</a>
        </div>
        <p className="mt-4 text-sm text-muted">{t("These sources confirm the listing and documented connection. Your product, reseller, destination and service scope still need to be agreed.")}</p>
      </div>
    </section>
    <section className="py-14">
      <div className="container-site">
        <h2 className="text-3xl font-bold text-primary">{t("European fulfilment for your physical products")}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">{CARDS.map(([title,body])=><article key={title} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-xl font-bold">{t(title)}</h3><p className="mt-4 leading-7 text-muted">{t(body)}</p></article>)}</div>
        <div className="mt-7 flex flex-wrap gap-6 font-semibold text-primary underline"><Link href="/boxable-fulfilment/">{t("Explore Boxable Fulfilment")}</Link><Link href="/nonboxable/">{t("Compare letterbox and NonBoxable")}</Link></div>
      </div>
    </section>
    <section className="bg-slate-50 py-14">
      <div className="container-site max-w-5xl">
        <h2 className="text-3xl font-bold text-primary">{t("From Digistore24 order to warehouse")}</h2>
        <ol className="mt-8 space-y-5">{STEPS.map(([title,body],i)=><li key={title} className="flex gap-5 rounded-xl bg-white p-6"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">{i+1}</span><div><h3 className="text-xl font-bold">{t(title)}</h3><p className="mt-3 leading-7 text-muted">{t(body)}</p></div></li>)}</ol>
        <p className="mt-6 text-sm text-muted">{t("Keep connection credentials in the secure setup process. The official guide is the source for current configuration steps.")}</p>
      </div>
    </section>
    <section className="py-14">
      <div className="container-site grid gap-10 lg:grid-cols-2">
        <div><h2 className="text-3xl font-bold text-primary">{t("Prepare a useful fulfilment conversation")}</h2><p className="mt-5 leading-7 text-muted">{t("Bring your SKU list, product and packaging details, expected monthly orders, destinations and any batch, expiry or handling requirements. Select Digistore24 as your platform in the fitcheck or scan.")}</p><p className="mt-4 leading-7 text-muted">{t("Digital-only products do not need physical fulfilment. For physical products, the connection is one part of an agreed warehouse and shipping setup.")}</p></div>
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-7"><h2 className="text-2xl font-bold text-primary">{t("Your fulfilment contact in the Netherlands")}</h2><address className="mt-5 space-y-2 not-italic"><p className="font-semibold">{COMPANY.legalName}</p><p>{COMPANY.street}<br />{COMPANY.postcode} {COMPANY.city}<br />{t(COMPANY.country)}</p><p><a href={`mailto:${COMPANY.email}`} className="underline">{COMPANY.email}</a></p><p><a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="underline">{COMPANY.phone}</a></p></address><Link href="/contact/" className="mt-5 inline-block font-semibold text-primary underline">{t("Contact Vareya")}</Link></div>
      </div>
    </section>
    <section className="bg-primary py-14 text-white"><div className="container-site text-center"><h2 className="text-3xl font-bold">{t("Ready to discuss your Digistore24 orders?")}</h2><p className="mx-auto mt-4 max-w-2xl text-white/85">{t("Start with preliminary product fit, or request a quotation when your fulfilment requirements are clear.")}</p><div className="mt-7 flex flex-wrap justify-center gap-4"><Link href="/product-fit-check/" data-cta-id="digistore24-fit-footer" className="rounded-lg bg-white px-6 py-3 font-semibold text-primary">{t("Check Your Product Fit")}</Link><Link href="/request-fulfilment-quote/" data-cta-id="digistore24-quote" className="rounded-lg border border-white/50 px-6 py-3 font-semibold">{t("Request a fulfilment quote")}</Link></div></div></section>
  </>;
}

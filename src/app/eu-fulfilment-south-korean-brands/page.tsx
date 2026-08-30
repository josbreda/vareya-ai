import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/marketing/FAQ";
import {
  APPROVED_DESTINATIONS,
  CAPABILITIES,
  SPECIALIST_REQUIREMENTS_FALLBACK,
} from "@/content/facts";

export const metadata: Metadata = {
  title: "EU Fulfilment for South Korean Brands | Vareya",
  description:
    "A practical guide for South Korean ecommerce brands assessing fulfilment from a Netherlands warehouse for European orders. Covers preparation, customs and VAT roles, product compliance and the Free Rate Scan.",
  alternates: {
    canonical: "https://vareya.ai/eu-fulfilment-south-korean-brands/",
  },
};

const destinationList = APPROVED_DESTINATIONS.join(", ");

// Route map: who owns each stage. Only Vareya's verified role is claimed.
const CORRIDOR = [
  {
    stage: "Korea-side readiness",
    owner: "Brand + its Korean export partner",
    body: "SKU data, product classification, origin evidence and export documents are prepared before goods leave South Korea.",
  },
  {
    stage: "Freight to the EU",
    owner: "Brand's freight forwarder or transport partner",
    body: "Transport, insurance and export formalities are arranged and paid for by the brand or its partners.",
  },
  {
    stage: "EU import and customs",
    owner: "Importer of record + customs representative",
    body: "The responsible party submits the import declaration. Duties and VAT follow the product, its classification and proof of origin.",
  },
  {
    stage: "Receiving and storage",
    owner: "Vareya",
    body: "Stock is received at the warehouse in Breda and stored until orders are processed.",
  },
  {
    stage: "Fulfilment",
    owner: "Vareya",
    body: "Orders are picked, packed and shipped through the carrier network from the Netherlands.",
  },
  {
    stage: "Returns",
    owner: "Vareya, per the agreed process",
    body: "Returns handling is available. Contact Vareya to discuss the required returns process.",
  },
];

const READINESS_CHECKLIST = [
  "Complete SKU master data: identifiers, barcodes, dimensions and weight",
  "Correct product classification (HS code) for every SKU",
  "Proof of origin documentation where a reduced duty rate is relevant",
  "An importer of record and, where needed, an EORI number",
  "A defined VAT route for EU sales",
  "Product compliance status, including any EU responsible-person or notification requirements",
  "Final label and packaging information",
  "Storage and handling instructions per product",
  "Sales-channel connection details (for example Shopify)",
  "Planned inbound shipment contents and arrival window",
];

const FAQ_ITEMS = [
  {
    question: "When does holding stock in the EU become worth assessing?",
    answer:
      "When European order volume grows and shipping every order individually from South Korea becomes operationally relevant to compare. Whether it fits depends on the operation. Product fit is confirmed during qualification.",
  },
  {
    question: "Does the EU-South Korea free trade agreement remove all import duties?",
    answer:
      "The agreement has eliminated customs duties on nearly all products since 2011, but the rate that applies to a specific product depends on its classification and whether it meets the origin rules and has the right documentation. Brands should confirm details with a customs adviser.",
  },
  {
    question: "Does Vareya handle customs, VAT or import for Korean brands?",
    answer: SPECIALIST_REQUIREMENTS_FALLBACK,
  },
  {
    question: "Does Vareya arrange the freight from South Korea?",
    answer:
      "Inbound transport is normally arranged by the brand or its freight forwarder. Vareya receives and checks the stock once it arrives in Breda. Exact intake steps are agreed during onboarding.",
  },
  {
    question: "Are cosmetics from South Korea handled differently?",
    answer:
      "Under EU rules, cosmetic products placed on the EU market require a responsible person established in the EU and product notification through the EU cosmetics notification portal. Warehousing and fulfilment do not replace those steps. Product fit is confirmed during qualification.",
  },
  {
    question: "Can Vareya ship to South Korea too?",
    answer: `Yes. From Breda, Vareya ships to ${destinationList}.`,
  },
  {
    question: "What order volume is needed?",
    answer: CAPABILITIES.volume,
  },
  {
    question: "Can Vareya connect to a Shopify store?",
    answer: CAPABILITIES.shipHero,
  },
];

const KOREAN_FAQS = [
  {
    question: "EU 풀필먼트란 무엇인가요?",
    answer:
      "주문을 받은 상품을 EU 내 물류센터에서 보관하고, 주문에 따라 피킹·포장하여 고객에게 배송하는 운영 방식을 말합니다. 반품 처리도 같은 흐름 안에서 정할 수 있습니다.",
  },
  {
    question: "Shopify 스토어를 연동할 수 있나요?",
    answer:
      "Shopify 연동이 가능합니다. Vareya는 물류 관리 시스템(WMS)으로 ShipHero를 사용하며 Shopify와 연동되어 있습니다. 연동 범위는 자격 확인 단계에서 확정됩니다.",
  },
  {
    question: "반품은 어떻게 처리되나요?",
    answer:
      "반품 처리가 가능합니다. 필요한 반품 절차는 Vareya에 문의해 확인해 주세요. (Returns handling is available. Contact Vareya to discuss the required returns process.)",
  },
];

const INTERNAL_LINKS = [
  { href: "/", label: "Ecommerce fulfilment in Europe" },
  { href: "/eu-fulfilment/", label: "EU fulfilment from the Netherlands" },
  { href: "/shopify-fulfilment-europe/", label: "Shopify fulfilment in Europe" },
  { href: "/eu-fulfilment-us-brands/", label: "EU fulfilment for US brands" },
  { href: "/eu-fulfilment-uk-brands/", label: "EU fulfilment for UK brands" },
  {
    href: "/cosmetics-supplements-fulfilment-europe/",
    label: "Cosmetics and supplements fulfilment",
  },
];

const OFFICIAL_SOURCES = [
  {
    label: "EU trade relations with South Korea",
    href: "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/south-korea_en",
  },
  {
    label: "EU–South Korea Free Trade Agreement (Access2Markets)",
    href: "https://trade.ec.europa.eu/access-to-markets/en/content/eu-south-korea-free-trade-agreement",
  },
  {
    label: "Importing non-EU products: a checklist (Business.gov.nl)",
    href: "https://business.gov.nl/international/import/importing-products-from-a-non-eu-country/",
  },
  {
    label: "EU VAT One Stop Shop (European Commission)",
    href: "https://vat-one-stop-shop.ec.europa.eu/index_en",
  },
  {
    label: "EU cosmetics legislation (European Commission)",
    href: "https://single-market-economy.ec.europa.eu/sectors/cosmetics/legislation_en",
  },
];

export default function SouthKoreanBrandsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-site py-20 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/75">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <span aria-current="page">EU fulfilment for South Korean brands</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              EU fulfilment for South Korean ecommerce brands
            </h1>
            <div className="mb-8 max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 sm:text-xl">
              <p>
                For South Korean brands selling into Europe, holding inventory closer to
                EU customers may be worth assessing. Vareya fulfils orders from a warehouse
                in Breda, the Netherlands, shipping across Europe and to other international
                markets.
              </p>
              <p>{CAPABILITIES.volume}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/free-rate-scan/" className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-primary hover:bg-slate-100">
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
              South Korean brands sometimes ship every European order individually from
              South Korea. When European order volume grows, comparing that setup with
              fulfilment from a warehouse inside the EU can be worthwhile. Vareya operates
              a warehouse in Breda, the Netherlands, and fulfils orders from there across
              Europe and to other international markets.
            </p>
            <p>{CAPABILITIES.volume}</p>
            <p lang="ko" className="rounded-lg border border-slate-200 bg-white p-4 leading-7">
              한국 브랜드를 위한 안내: 유럽 내 물류센터에서 주문을 처리하는 방식과 한국에서
              개별 발송하는 방식을 비교해 보세요. Vareya는 네덜란드 브레다(Breda)의
              물류센터에서 유럽 및 국제 배송을 지원합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="why-eu-fulfilment">
        <div className="container-site max-w-4xl">
          <h2 id="why-eu-fulfilment" className="mb-5 text-2xl font-bold sm:text-3xl">
            Why Korean brands look at EU fulfilment
          </h2>
          <div className="space-y-4 leading-8 text-muted sm:text-lg">
            <p>
              The Netherlands sits within reach of major European population centres and has
              established logistics and carrier infrastructure. Holding stock in one
              Netherlands-based location can simplify the operational picture compared with
              shipping each order individually from outside Europe.
            </p>
            <p>
              Trade between the EU and South Korea is governed by a free trade agreement that
              has been applied since July 2011 and has eliminated customs duties on nearly
              all products. Whether a specific product benefits from a reduced duty depends
              on its classification and origin documentation.
            </p>
            <p>{SPECIALIST_REQUIREMENTS_FALLBACK}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="corridor">
        <div className="container-site">
          <h2 id="corridor" className="mb-3 text-2xl font-bold sm:text-3xl">The corridor in one view</h2>
          <p className="mb-8 max-w-3xl leading-7 text-muted">
            From factory to customer, the work is shared. This table shows which part each
            party typically owns. Vareya&apos;s role covers receiving, storage, fulfilment and
            the agreed returns process.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Stage</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Typical owner</th>
                  <th scope="col" className="px-4 py-3 font-semibold">What happens</th>
                </tr>
              </thead>
              <tbody>
                {CORRIDOR.map((step) => (
                  <tr key={step.stage} className="border-t border-slate-100 align-top">
                    <td className="px-4 py-3 font-medium text-slate-900">{step.stage}</td>
                    <td className="px-4 py-3 text-muted">{step.owner}</td>
                    <td className="px-4 py-3 text-muted">{step.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="readiness">
        <div className="container-site max-w-4xl">
          <h2 id="readiness" className="mb-4 text-2xl font-bold sm:text-3xl">
            What to prepare before stock leaves Korea
          </h2>
          <p className="mb-6 leading-7 text-muted">
            Most onboarding delays come from missing data and documents, not from the
            warehouse work itself. This checklist shows the information that is usually
            needed before the first inbound shipment:
          </p>
          <ul className="mb-6 space-y-2">
            {READINESS_CHECKLIST.map((item) => (
              <li key={item} className="flex gap-3 leading-7 text-muted">
                <span aria-hidden="true" className="mt-1 text-primary">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-muted">
            This is general operational information, not legal, tax or customs advice.
            Customs, VAT and product-compliance details should be confirmed with qualified
            advisers before the first shipment.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="customs-vat">
        <div className="container-site max-w-4xl">
          <h2 id="customs-vat" className="mb-4 text-2xl font-bold">
            Customs, VAT and product compliance
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p>
              Importing goods from South Korea into the EU normally requires an import
              declaration, and duties and VAT may apply. An EORI number is needed for the
              party that deals with customs. Whether a reduced duty rate applies depends on
              the product and its origin documentation.
            </p>
            <p>
              For cosmetics, EU rules require a responsible person established within the EU
              and notification of each product before it is placed on the EU market.
              Warehousing and fulfilment do not replace these steps.
            </p>
            <p className="font-medium text-slate-800">{SPECIALIST_REQUIREMENTS_FALLBACK}</p>
          </div>
          <div className="mt-8">
            <h3 className="mb-3 font-semibold text-slate-900">Official planning resources</h3>
            <ul className="space-y-2">
              {OFFICIAL_SOURCES.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline-offset-2 hover:underline"
                  >
                    {source.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="capabilities">
        <div className="container-site">
          <h2 id="capabilities" className="mb-8 text-2xl font-bold">Capabilities</h2>
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

      <section className="bg-slate-50 py-16" aria-labelledby="fit">
        <div className="container-site max-w-4xl">
          <h2 id="fit" className="mb-5 text-2xl font-bold">Who this fits</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>{CAPABILITIES.volume}</p>
            <p>
              Vareya specialises in cosmetics, supplements, phone cases, accessories and
              other smaller parcel products. Suitable smaller parcels have combined
              dimensions below 900 mm and a maximum length of 600 mm. Product fit is
              confirmed during qualification.
            </p>
          </div>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      <section className="border-y border-slate-200 bg-slate-50 py-14" aria-labelledby="korean-faq">
        <div className="container-site max-w-3xl">
          <h2 id="korean-faq" lang="ko" className="mb-4 text-2xl font-bold">
            자주 묻는 질문
          </h2>
          <div className="flex flex-col gap-4">
            {KOREAN_FAQS.map((item) => (
              <details key={item.question} className="group rounded-lg border border-slate-200 bg-white">
                <summary lang="ko" className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 sm:p-5">
                  {item.question}
                  <span aria-hidden="true" className="ml-4 text-muted group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p lang="ko" className="px-4 pb-4 text-sm leading-relaxed text-muted sm:px-5 sm:pb-5">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
          <div lang="ko" className="mt-8 rounded-xl bg-primary p-6 text-center text-white">
            <p className="mb-3 font-semibold">EU 풀필먼트 적합성 확인하기</p>
            <Link href="/free-rate-scan/" className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-primary hover:bg-slate-100">
              Free Rate Scan(무료 요금 점검) 시작하기
            </Link>
          </div>
        </div>
      </section>

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
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Assess EU fulfilment for your Korean brand</h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/free-rate-scan/" className="rounded-lg bg-white px-6 py-3 font-semibold text-primary hover:bg-slate-100">
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

import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/marketing/FAQ";
import {
  APPROVED_DESTINATIONS,
  CAPABILITIES,
  SPECIALIST_REQUIREMENTS_FALLBACK,
} from "@/content/facts";

export const metadata: Metadata = {
  title: "Shopify Fulfilment Europe | European 3PL | Vareya",
  description:
    "Connect your Shopify store to a European fulfilment operation in the Netherlands. Vareya handles inventory, pick and pack, shipping and returns for growing ecommerce brands.",
  alternates: {
    canonical: "https://vareya.ai/shopify-fulfilment-europe/",
  },
  openGraph: {
    title: "Shopify Fulfilment Europe | European 3PL | Vareya",
    description:
      "Connect your Shopify store to a European fulfilment operation in the Netherlands. Vareya handles inventory, pick and pack, shipping and returns for growing ecommerce brands.",
    url: "https://vareya.ai/shopify-fulfilment-europe/",
    type: "website",
    locale: "en_US",
  },
};

const destinationList = APPROVED_DESTINATIONS.join(", ");

const TRUST_BAR = [
  "Based in Breda, the Netherlands",
  "Direct Shopify integration",
  "ShipHero warehouse management system",
  "Multi-carrier shipping: DHL, PostNL, Asendia, FedEx and Royal Mail",
  CAPABILITIES.returns,
  "Weekend fulfilment on a structural basis",
  CAPABILITIES.cutOff,
  "Customs clearance support for shipments into and out of Europe",
  CAPABILITIES.allInRates,
];

const GOOD_FIT = [
  CAPABILITIES.volume,
  "Sells through Shopify.",
  "Ships smaller parcel products — combined dimensions below 900 mm, maximum length 600 mm.",
  "Wants to hold stock inside the EU and ship to European customers from there.",
  "Needs pick, pack and multi-carrier shipping from one warehouse.",
  "Wants an agreed process for European returns.",
];

const MAY_NOT_FIT = [
  "Very low or occasional order volumes, well below the 500-orders-per-month level.",
  "Oversized or unusually heavy products outside the parcel guideline above.",
  "Specialist storage or handling requirements that have not yet been agreed.",
  SPECIALIST_REQUIREMENTS_FALLBACK,
];

const SIGNALS = [
  {
    title: "International delivery is getting harder to manage",
    body: "Shipping individual parcels into Europe from outside the region can add coordination around carriers, customs documentation and returns for every single order.",
  },
  {
    title: "European customers expect a local delivery experience",
    body: "Customers generally want clear tracking and a manageable returns process. Holding stock closer to the customer can make that easier to control.",
  },
  {
    title: "In-house fulfilment is limiting growth",
    body: "As order volumes grow, picking, packing, carrier hand-offs and exceptions can take time away from product, marketing and customer development.",
  },
  {
    title: "Returns are fragmented across regions",
    body: "A European returns location allows an agreed process for receiving, inspecting and processing returned goods rather than routing every return back out of the region.",
  },
];

const INTEGRATION_SCOPE = [
  "Shopify store connection",
  "Product and SKU mapping",
  "Inventory setup",
  "Order transmission",
  "Fulfilment status updates",
  "Returns agreements",
];

const INTEGRATION_INPUTS = [
  "Number of Shopify stores and active Shopify Markets",
  "Number of SKUs, and your SKU and barcode structure",
  "Bundles, kits, multipacks or product variants",
  "Order tags or fulfilment rules already in use",
  "Pre-orders, backorders or subscription orders",
  "Target countries and expected order volumes",
  "Returns requirements",
];

const ORDER_FLOW = [
  { step: "Qualification", body: "Vareya reviews order volume, product category, parcel dimensions, SKU count and destinations to confirm operational fit before any integration work starts." },
  { step: "Onboarding", body: "The Shopify connection is prepared. Product information, SKUs, stock locations and order rules are reviewed and mapped to the warehouse setup." },
  { step: "Inbound stock", body: "The brand sends stock to the Breda warehouse. Expected quantities, product identification and timing are agreed before arrival." },
  { step: "Inventory receipt", body: "Incoming stock is received and processed according to the agreed inbound procedure." },
  { step: "Order import", body: "Eligible Shopify orders are transferred into the fulfilment workflow, including any agreed order holds or special rules." },
  { step: "Pick and pack", body: "Orders are picked from inventory, checked and packed according to the agreed packaging instructions." },
  { step: "Carrier and shipping", body: CAPABILITIES.carrierSelection },
  { step: "Tracking", body: "Shipment and tracking information can be returned through the connected setup, subject to the agreed integration configuration." },
  { step: "Returns", body: CAPABILITIES.returns },
];

const COST_DRIVERS = [
  "Monthly order volume",
  "Number of SKUs and storage space",
  "Items per order",
  "Product and parcel dimensions",
  "Packaging requirements",
  "Destination mix and carrier services",
  "Returns volume",
  "Inbound shipments and any special handling",
];

const QUOTE_INPUTS = [
  "Current and expected monthly order volume",
  "Product category and SKU count",
  "Average items per order",
  "Product and parcel dimensions and weights",
  "Target countries",
  "Shopify store configuration",
  "Current inventory location",
  "Required returns process",
];

const EVALUATION_QUESTIONS = [
  "How does the Shopify connection work, and what is confirmed before go-live?",
  "Which warehouse management system is used?",
  "Which product categories and parcel profiles fit the warehouse?",
  "Which carriers are available, and how is a carrier selected per shipment?",
  "What is included in the quotation, and what sits outside it?",
  "How are returns received, inspected and reported?",
  "Which service levels can be agreed, and what is included by default?",
  "Is weekend fulfilment available, and under what conditions?",
  "Who supports the brand after go-live?",
];

const MIGRATION_STAGES = [
  { title: "Confirm operational fit", body: "Review products, volumes, destinations and service requirements against the new provider's setup." },
  { title: "Define responsibilities", body: "Agree who controls Shopify settings, inventory data, customer communication, inbound transport and returns during the switch." },
  { title: "Clean the product catalogue", body: "Resolve duplicate SKUs, missing barcodes and inconsistent variants before stock moves." },
  { title: "Prepare the integration", body: "Configure the Shopify and warehouse workflows and test the agreed data exchanges." },
  { title: "Plan the inventory transfer", body: "Decide whether stock moves in one shipment or through a phased transition." },
  { title: "Reconcile inventory", body: "Compare outgoing inventory records against the quantities received at the new warehouse." },
  { title: "Test representative orders", body: "Cover different destinations, products, variants and delivery methods before full cutover." },
  { title: "Monitor the first weeks", body: "Review order flow, stock and exceptions closely after go-live." },
];

const COUNTRY_CLUSTERS = [
  { slug: "united-states", name: "United States" },
  { slug: "united-kingdom", name: "United Kingdom" },
  { slug: "canada", name: "Canada" },
  { slug: "australia", name: "Australia" },
  { slug: "switzerland", name: "Switzerland" },
  { slug: "norway", name: "Norway" },
  { slug: "japan", name: "Japan" },
  { slug: "south-korea", name: "South Korea" },
  { slug: "united-arab-emirates", name: "United Arab Emirates" },
  { slug: "saudi-arabia", name: "Saudi Arabia" },
  { slug: "hong-kong", name: "Hong Kong" },
  { slug: "turkey", name: "Turkey" },
  { slug: "brazil", name: "Brazil" },
  { slug: "china", name: "China" },
];

const FAQ_ITEMS = [
  {
    question: "What is Shopify fulfilment in Europe?",
    answer:
      "Shopify fulfilment in Europe means storing inventory in a European warehouse and connecting it to your Shopify store. When a customer orders, the order is transferred to the fulfilment operation, picked, packed and shipped, and shipment information can be returned to your connected systems.",
  },
  {
    question: "Does Vareya integrate directly with Shopify?",
    answer: `Yes. ${CAPABILITIES.shopify} ${CAPABILITIES.shipHero}`,
  },
  {
    question: "Where is Vareya's warehouse?",
    answer: "Vareya operates its ecommerce fulfilment service from Breda, the Netherlands.",
  },
  {
    question: "What order volume is a suitable fit?",
    answer: `${CAPABILITIES.volume} Final fit also depends on product category, parcel dimensions and destinations, and is confirmed during qualification.`,
  },
  {
    question: "Does the integration sync in real time?",
    answer: "Integration specifics are confirmed with Vareya directly, based on your store setup.",
  },
  {
    question: "Can Vareya fulfil for more than one Shopify store?",
    answer: "This is assessed during qualification, based on your store and inventory setup.",
  },
  {
    question: "Does Vareya handle Shopify returns?",
    answer: `${CAPABILITIES.returns} Physical return handling and the commercial refund to the customer are treated as separate responsibilities, confirmed with each brand during onboarding.`,
  },
  {
    question: "Which warehouse management system does Vareya use?",
    answer: CAPABILITIES.shipHero,
  },
  {
    question: "Which carriers does Vareya use?",
    answer: CAPABILITIES.postNL,
  },
  {
    question: "Which markets can Vareya ship to from the Netherlands?",
    answer: `From Breda, Vareya ships to ${destinationList}.`,
  },
  {
    question: "Does Vareya support weekend fulfilment?",
    answer: CAPABILITIES.weekendFulfilment,
  },
  {
    question: "What is Vareya's cut-off time?",
    answer: CAPABILITIES.cutOff,
  },
  {
    question: "How much does Shopify fulfilment cost?",
    answer: `${CAPABILITIES.allInRates} The cost depends on your order and parcel profile — share your order profile for an initial assessment.`,
  },
  {
    question: "Can a US, UK, Canadian or Australian Shopify brand use Vareya?",
    answer: `Brands from outside the EU can be considered for Vareya's European fulfilment setup when their order volume, products and destination profile fit the operation. ${SPECIALIST_REQUIREMENTS_FALLBACK}`,
  },
  {
    question: "Is \"Shopify fulfillment Europe\" the same as \"Shopify fulfilment Europe\"?",
    answer:
      "Yes. \"Fulfillment\" is the more common US English spelling, while \"fulfilment\" is commonly used in British English. Both describe the same process of storing inventory and processing customer orders.",
  },
];

const INTERNAL_LINKS = [
  { href: "/", label: "Ecommerce fulfilment in Europe" },
  { href: "/eu-fulfilment/", label: "EU fulfilment from the Netherlands" },
  { href: "/eu-fulfilment-us-brands/", label: "EU fulfilment for US brands" },
  { href: "/eu-fulfilment-uk-brands/", label: "EU fulfilment for UK brands" },
  { href: "/returns-fulfilment-europe/", label: "Returns handling in Europe" },
  {
    href: "/cosmetics-supplements-fulfilment-europe/",
    label: "Cosmetics and supplements fulfilment",
  },
];

export default function ShopifyFulfilmentPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="container-site py-20 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/75">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <span aria-current="page">Shopify fulfilment in Europe</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Shopify fulfilment in Europe for growing ecommerce brands
            </h1>
            <div className="mb-8 max-w-3xl space-y-3 text-lg leading-relaxed text-white/85 sm:text-xl">
              <p>
                Connect your Shopify store to a European fulfilment operation and
                ship orders from the Netherlands to customers across Europe and
                selected international markets.
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

      <section className="border-b border-slate-200 bg-white py-8" aria-labelledby="trust-bar">
        <h2 id="trust-bar" className="sr-only">Vareya at a glance</h2>
        <div className="container-site">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {TRUST_BAR.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-primary">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-12" aria-labelledby="quick-answer">
        <div className="container-site max-w-4xl">
          <h2 id="quick-answer" className="mb-4 text-2xl font-bold">Quick answer</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>
              Shopify fulfilment in Europe means storing inventory in a European
              warehouse and connecting that warehouse to your Shopify store. Vareya
              operates this service from a warehouse in Breda, the Netherlands, and
              ships Shopify orders across Europe and to other international markets.
            </p>
            <p>
              For international Shopify brands — in the United States, United
              Kingdom, Canada, Australia and beyond — a European fulfilment setup
              can replace shipping every individual order from outside the EU. The
              right setup depends on order volume, product dimensions, target
              countries, customs responsibilities and returns requirements.
            </p>
            <p>{CAPABILITIES.volume} Product fit is confirmed during qualification.</p>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="fit">
        <div className="container-site max-w-4xl">
          <h2 id="fit" className="mb-5 text-2xl font-bold sm:text-3xl">Is Vareya the right fit for your Shopify brand?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="mb-3 font-semibold text-slate-900">Typically a good fit</h3>
              <ul className="space-y-2 text-sm leading-6 text-muted">
                {GOOD_FIT.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="mb-3 font-semibold text-slate-900">May not be a fit</h3>
              <ul className="space-y-2 text-sm leading-6 text-muted">
                {MAY_NOT_FIT.map((item) => (
                  <li key={item}>✗ {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-muted">
            We prefer to confirm these boundaries before inventory moves — that
            protects both the brand and the fulfilment operation during onboarding.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="signals">
        <div className="container-site">
          <h2 id="signals" className="mb-3 text-2xl font-bold sm:text-3xl">When should a Shopify brand consider European fulfilment?</h2>
          <p className="mb-10 max-w-3xl leading-7 text-muted">
            A Shopify brand may consider European fulfilment when international
            growth creates operational complexity that is harder to manage from its
            current location.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {SIGNALS.map((signal) => (
              <article key={signal.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="mb-2 font-semibold text-slate-900">{signal.title}</h3>
                <p className="text-sm leading-6 text-muted">{signal.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="integration">
        <div className="container-site max-w-4xl">
          <h2 id="integration" className="mb-5 text-2xl font-bold sm:text-3xl">
            How the Shopify integration works
          </h2>
          <p className="mb-6 leading-8 text-muted sm:text-lg">
            {CAPABILITIES.shopify} {CAPABILITIES.shipHero} The exact configuration is
            confirmed during onboarding, since every Shopify store can have
            different apps, markets, SKUs, bundles and order rules.
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 font-semibold text-slate-900">A typical setup covers</h3>
              <ul className="space-y-2 text-sm leading-6 text-muted">
                {INTEGRATION_SCOPE.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-primary">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-slate-900">What Vareya checks before connecting</h3>
              <ul className="space-y-2 text-sm leading-6 text-muted">
                {INTEGRATION_INPUTS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-primary">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm leading-6 text-muted">
            <Link href="/knowledge/shopify-fulfilment-europe-what-to-look-for/" className="text-primary underline-offset-2 hover:underline">
              What to look for in a Shopify fulfilment partner ↗
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="order-flow">
        <div className="container-site">
          <h2 id="order-flow" className="mb-8 text-2xl font-bold sm:text-3xl">From Shopify order to customer delivery</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Step</th>
                  <th scope="col" className="px-4 py-3 font-semibold">What happens</th>
                </tr>
              </thead>
              <tbody>
                {ORDER_FLOW.map((row) => (
                  <tr key={row.step} className="border-t border-slate-100 align-top">
                    <td className="px-4 py-3 font-medium text-slate-900">{row.step}</td>
                    <td className="px-4 py-3 text-muted">{row.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="inventory">
        <div className="container-site max-w-4xl">
          <h2 id="inventory" className="mb-4 text-2xl font-bold">Shopify inventory and warehouse stock</h2>
          <p className="leading-7 text-muted">
            Reliable fulfilment starts with consistent product and inventory data.
            Before stock arrives, the Shopify product catalogue and warehouse
            records are aligned — covering SKU and barcode structure, product
            variants, bundles or kits, and how low-stock alerts are handled. Whether
            multiple Shopify stores can share the same fulfilment inventory is
            assessed during qualification, based on your store and inventory setup.
          </p>
          <p className="mt-4 text-sm leading-6 text-muted">
            <Link href="/knowledge/shopify-product-sku-data-preparation/" className="text-primary underline-offset-2 hover:underline">
              Preparing your product and SKU data before onboarding ↗
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="shipping">
        <div className="container-site max-w-5xl">
          <h2 id="shipping" className="mb-4 text-2xl font-bold">Shipping from the Netherlands</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>{CAPABILITIES.postNL}</p>
            <p>Shopify orders are shipped to {destinationList}.</p>
            <p>{CAPABILITIES.cutOff}</p>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="returns">
        <div className="container-site max-w-4xl">
          <h2 id="returns" className="mb-4 text-2xl font-bold">Returns</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>{CAPABILITIES.returns}</p>
            <p>
              Physical return handling and the commercial refund to the customer are
              separate responsibilities. The exact division is confirmed with each
              brand during onboarding — Vareya does not assume the refund
              relationship with your customer unless that has been agreed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="international">
        <div className="container-site max-w-4xl">
          <h2 id="international" className="mb-5 text-2xl font-bold sm:text-3xl">
            European fulfilment for Shopify brands outside the EU
          </h2>
          <div className="space-y-4 leading-8 text-muted">
            <p>
              International Shopify brands often consider a European warehouse when
              they want to hold inventory closer to European customers. That
              normally involves two separate movements: transporting inventory in
              bulk into Europe, and then fulfilling individual customer orders from
              the European warehouse — rather than sending every customer order into
              Europe as its own international parcel.
            </p>
            <p>
              Before stock moves into Europe, your brand will need to confirm who
              acts as exporter and importer, which EORI number is used, how VAT
              obligations are handled, and which documentation accompanies the
              shipment. {SPECIALIST_REQUIREMENTS_FALLBACK}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="country-clusters">
        <div className="container-site">
          <h2 id="country-clusters" className="mb-2 text-2xl font-bold">Expanding your Shopify brand into Europe</h2>
          <p className="mb-6 max-w-3xl leading-7 text-muted">
            Market-specific guides covering the export, import and fulfilment steps
            relevant to your home market.
          </p>
          <div className="flex flex-wrap gap-3">
            {COUNTRY_CLUSTERS.map((country) => (
              <Link
                key={country.slug}
                href={`/shopify-fulfilment-europe-for-${country.slug}-stores/`}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-primary hover:border-primary/40"
              >
                Shopify fulfilment for {country.name} stores
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="categories">
        <div className="container-site">
          <h2 id="categories" className="mb-8 text-2xl font-bold">Shopify fulfilment for smaller parcel products</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              `Vareya specialises in ${CAPABILITIES.specialisations.slice(0, -1).join(", ")} and ${CAPABILITIES.specialisations[CAPABILITIES.specialisations.length - 1]}.`,
              `Suitable smaller parcels have combined dimensions below ${CAPABILITIES.parcelLimits.combinedDimensionsMm} mm and a maximum length of ${CAPABILITIES.parcelLimits.maxLengthMm} mm.`,
              CAPABILITIES.productFit,
            ].map((item) => (
              <p key={item} className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6 text-muted">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="service">
        <div className="container-site max-w-4xl">
          <h2 id="service" className="mb-4 text-2xl font-bold">Service and SLAs</h2>
          <p className="leading-7 text-muted">
            {CAPABILITIES.slas} {CAPABILITIES.support}
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="cost">
        <div className="container-site max-w-4xl">
          <h2 id="cost" className="mb-4 text-2xl font-bold sm:text-3xl">How much does Shopify fulfilment in Europe cost?</h2>
          <p className="mb-6 leading-7 text-muted">
            {CAPABILITIES.allInRates} A reliable quotation depends on more than your
            monthly order count. Cost drivers typically include:
          </p>
          <ul className="mb-8 grid gap-2 sm:grid-cols-2">
            {COST_DRIVERS.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-6 text-muted">
                <span aria-hidden="true" className="text-primary">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <h3 className="mb-3 font-semibold text-slate-900">What Vareya needs for a quotation</h3>
          <ul className="space-y-2 text-sm leading-6 text-muted">
            {QUOTE_INPUTS.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="text-primary">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 flex flex-col gap-1 text-sm leading-6 text-muted sm:flex-row sm:gap-6">
            <Link href="/knowledge/fulfilment-cost-drivers/" className="text-primary underline-offset-2 hover:underline">
              What determines ecommerce fulfilment and shipping costs ↗
            </Link>
            <Link href="/knowledge/fulfilment-quotation-requirements/" className="text-primary underline-offset-2 hover:underline">
              What a 3PL needs for a quotation ↗
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16" aria-labelledby="evaluate">
        <div className="container-site max-w-4xl">
          <h2 id="evaluate" className="mb-4 text-2xl font-bold">How to evaluate a European Shopify 3PL</h2>
          <p className="mb-6 leading-7 text-muted">
            Use the same questions for every provider you compare:
          </p>
          <ul className="space-y-2 text-sm leading-6 text-muted">
            {EVALUATION_QUESTIONS.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="text-primary">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-6 text-muted">
            <Link href="/knowledge/shopify-3pl-europe-how-to-compare/" className="text-primary underline-offset-2 hover:underline">
              Read the full comparison guide ↗
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="migration">
        <div className="container-site">
          <h2 id="migration" className="mb-3 text-2xl font-bold sm:text-3xl">Switching your Shopify fulfilment provider</h2>
          <p className="mb-8 max-w-3xl leading-7 text-muted">
            Changing fulfilment providers is best treated as a controlled migration
            rather than a single stock transfer. A typical migration covers these
            stages — the detail is confirmed with Vareya for your specific setup.
          </p>
          <div className="grid gap-5 md:grid-cols-4">
            {MIGRATION_STAGES.map((stage, index) => (
              <article key={stage.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="mb-2 text-sm font-semibold text-primary">Stage {index + 1}</p>
                <h3 className="mb-2 font-semibold text-slate-900">{stage.title}</h3>
                <p className="text-sm leading-6 text-muted">{stage.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-muted">
            <Link href="/knowledge/switching-fulfilment-providers-europe/" className="text-primary underline-offset-2 hover:underline">
              Read the full switching guide ↗
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16" aria-labelledby="why-netherlands">
        <div className="container-site max-w-4xl">
          <h2 id="why-netherlands" className="mb-4 text-2xl font-bold">Why use the Netherlands as a base?</h2>
          <div className="space-y-3 leading-7 text-muted">
            <p>
              The Netherlands is a practical location from which to organise
              fulfilment to multiple European destinations. The more relevant
              question for your brand is not whether the Netherlands is universally
              the best location, but whether a Breda-based warehouse fits your
              customer geography, parcel profile and inbound route.
            </p>
            <p>
              A Netherlands setup is worth assessing when a meaningful share of your
              customers is in continental Europe, you want inventory held inside the
              EU, and access to multiple parcel carriers matters for your delivery
              mix. {CAPABILITIES.internationalExperience}
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
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Assess your Shopify fulfilment setup</h2>
          <Link href="/free-rate-scan/" className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-primary hover:bg-slate-100">
            Check your EU fulfilment fit
          </Link>
          <p className="mt-5 text-sm text-white/70">
            Prefer a tailored quote instead?{" "}
            <Link href="/request-fulfilment-quote/" className="underline underline-offset-2 hover:text-white">
              Request a fulfilment quote
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

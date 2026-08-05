import Link from "next/link";
import { Metadata } from "next";
import { CapabilityStrip } from "@/components/marketing/CapabilityStrip";
import { ProcessSection } from "@/components/marketing/ProcessSection";
import { CTABanner } from "@/components/marketing/CTABanner";
import { FAQ } from "@/components/marketing/FAQ";
import { APPROVED_VALUE_PROPS, APPROVED_HEADLINES } from "@/content/claims";

export const metadata: Metadata = {
  title: "Vareya | European Fulfilment for E-Commerce Brands",
  description:
    "Fast, reliable order fulfilment from Breda, the Netherlands. Shopify and Amazon FBM integration, multi-carrier delivery, and returns handling included.",
  alternates: {
    canonical: "https://vareya.ai/",
  },
};

const HOME_FAQ = [
  {
    question: "What is the minimum monthly order volume?",
    answer:
      "Vareya is generally best suited to brands shipping 500 or more orders per month. If you are close to that threshold, we are happy to discuss your situation during qualification.",
  },
  {
    question: "Which e-commerce platforms do you integrate with?",
    answer:
      "We currently offer direct Shopify integration. Amazon FBM fulfilment is also available. Orders sync automatically to our fulfilment system.",
  },
  {
    question: "Which carriers do you use?",
    answer:
      "We work with DHL, PostNL, Asendia, FedEx, and Royal Mail. This gives you reliable delivery coverage across Europe.",
  },
  {
    question: "Do you handle returns?",
    answer:
      "Yes, returns handling is included as part of our standard fulfilment service. Customer returns come back to our Breda warehouse where we inspect, restock, and update your inventory.",
  },
  {
    question: "What products do you specialise in?",
    answer:
      "We specialise in cosmetics, supplements, phone cases, accessories, and other smaller parcel products. Suitable parcels have combined dimensions below 900 mm and a maximum length of 600 mm. Product fit is reviewed during qualification.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Start by taking our fulfilment scan. It takes under 3 minutes and gives you a clear picture of whether Vareya is a good fit. After that, we will reach out to discuss timelines.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container-site relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {APPROVED_HEADLINES.primary}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
              {APPROVED_HEADLINES.secondary}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/fulfilment-scan/"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary bg-white rounded-lg hover:bg-slate-100 transition-colors shadow-sm"
              >
                {APPROVED_HEADLINES.scan}
              </Link>
              <Link
                href="/request-fulfilment-quote/"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              >
                {APPROVED_HEADLINES.quote}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capability strip */}
      <CapabilityStrip />

      {/* Value propositions */}
      <section className="py-16 sm:py-20">
        <div className="container-site">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Why brands choose Vareya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {APPROVED_VALUE_PROPS.map((prop) => (
              <div
                key={prop.title}
                className="p-6 rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-slate-900 mb-2">{prop.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{prop.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSection />

      {/* Integrations */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container-site text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Works with your platform
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-10">
            Direct integrations with Shopify and Amazon FBM. Orders sync automatically — no CSV uploads or manual entry.
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 px-6 py-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="font-semibold text-slate-900">Shopify</span>
              <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">
                Direct integration
              </span>
            </div>
            <div className="flex items-center gap-2 px-6 py-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="font-semibold text-slate-900">Amazon FBM</span>
              <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">
                Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />

      {/* FAQ */}
      <FAQ items={HOME_FAQ} />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, CAPABILITIES } from "@/content/facts";

export const metadata: Metadata = {
  title: "About Vareya | European Fulfilment from the Netherlands",
  description:
    "Vareya fulfils e-commerce orders from Breda, the Netherlands. Cooperative fulfilment for growing brands — Shopify integration, multi-carrier delivery, returns handling.",
  alternates: { canonical: "https://vareya.ai/about/" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-950 via-ink to-ink text-white">
        <div className="container-site py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 mb-5 text-[13px] text-network bg-network/10 border border-network/20 rounded-full">
              About
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Fulfilment from Breda, the Netherlands
            </h1>
            <p className="text-lg text-white/65 leading-relaxed max-w-xl">
              Vareya fulfils e-commerce orders for growing brands — with Shopify integration, multi-carrier delivery, and returns handling included.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Who we are</h2>
          <div className="prose prose-slate max-w-none text-muted leading-7 space-y-4">
            <p>
              Vareya BV is a fulfilment company based in {COMPANY.city},{" "}
              {COMPANY.country}. We fulfil e-commerce orders from our warehouse at{" "}
              {COMPANY.street}, {COMPANY.postcode} {COMPANY.city}.
            </p>
            <p>
              {CAPABILITIES.shopify} {CAPABILITIES.amazonFbm}
            </p>
            <p>
              Vareya specialises in cosmetics, supplements, phone cases, accessories and other
              smaller parcel products. {CAPABILITIES.volume}
            </p>
            <p>
              Vareya is being built as a cooperative (Coöperatie U.A.). We believe that the brands
              who depend on fulfilment should own the operation — not outside shareholders.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold mb-8">Fulfilment capabilities</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Netherlands-based warehouse", body: `Based in ${COMPANY.city}, with access to major European logistics routes.` },
              { title: "Shopify integration", body: CAPABILITIES.shopify },
              { title: "Amazon FBM", body: CAPABILITIES.amazonFbm },
              { title: "Returns handling", body: CAPABILITIES.returns },
              { title: "Multi-carrier delivery", body: `Carriers include DHL, PostNL, Asendia, FedEx and Royal Mail.` },
              { title: "Flexible cut-off", body: CAPABILITIES.cutOff },
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
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <div className="prose prose-slate max-w-none text-muted leading-7 space-y-4">
            <p>
              {COMPANY.street}, {COMPANY.postcode} {COMPANY.city}, {COMPANY.country}
            </p>
            <p>
              Tel: <a href={`tel:${COMPANY.phone}`} className="text-primary hover:underline">{COMPANY.phone}</a>
            </p>
            <p>
              Email: <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>
            </p>
            <p>
              KVK: 65877535 &middot; BTW: NL856299790B02
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-primary text-white">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to check your fulfilment fit?
          </h2>
          <p className="text-primary-light/80 mb-8">
            Take our quick fulfilment scan — it takes under 3 minutes.
          </p>
          <Link
            href="/fulfilment-scan/"
            className="inline-flex items-center px-6 py-3 bg-accent text-ink font-semibold rounded-[10px] hover:bg-[#FF8A3D] transition-colors"
          >
            Check your fit →
          </Link>
        </div>
      </section>
    </>
  );
}

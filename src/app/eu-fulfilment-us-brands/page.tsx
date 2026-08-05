import Link from "next/link";
import { Metadata } from "next";
import { CTABanner } from "@/components/marketing/CTABanner";
import { FAQ } from "@/components/marketing/FAQ";

export const metadata: Metadata = {
  title: "EU Fulfilment for US Brands | Vareya",
  description: "Expand your US brand into Europe with fulfilment from the Netherlands. Multi-carrier delivery, returns handling, and Shopify integration.",
  alternates: { canonical: "https://vareya.ai/eu-fulfilment-us-brands/" },
};

const FAQ_ITEMS = [
  { question: "How do I get my products from the US to your warehouse?", answer: "You ship your inventory to our Breda fulfilment centre. We handle receiving, storage, and quality checks. We will provide shipping guidance during onboarding." },
  { question: "Do I need to set up a European company?", answer: "Every brand's situation is different. We recommend speaking with your legal and tax advisors about the best structure for your European operations. Our fulfilment service works regardless of where your company is registered." },
  { question: "Can you ship to all European countries?", answer: "Yes. Our multi-carrier partnerships with DHL, PostNL, Asendia, FedEx, and Royal Mail cover all major European markets. Your customers across the EU receive the same reliable delivery experience." },
  { question: "How do returns work for US brands?", answer: "Returns handling is included in our service. European customers send returns back to our Breda warehouse. We inspect, restock, and update your inventory. You do not need a separate European returns address." },
  { question: "Will my Shopify store work with European fulfilment?", answer: "Yes. Our direct Shopify integration works seamlessly whether your store is US-based, EU-based, or both. Orders sync automatically to our fulfilment system." },
];

export default function UsBrandsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-20 sm:py-28">
        <div className="container-site">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              EU fulfilment for US brands
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
              Expand your US brand into Europe without setting up your own warehouse. One fulfilment partner in the Netherlands for all your European orders.
            </p>
            <Link href="/fulfilment-scan/" className="inline-flex items-center px-6 py-3 text-base font-semibold text-primary bg-white rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
              Check your fit
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Go European without the overhead</h2>
              <div className="text-muted space-y-4 leading-relaxed">
                <p>Expanding a US brand into Europe is exciting — but setting up your own warehouse, hiring a logistics team, and negotiating carrier contracts in a new market is not.</p>
                <p>Vareya gives you a single European fulfilment partner. One warehouse in the Netherlands. Multi-carrier delivery across all EU markets. Returns handling included. Your customers get fast, reliable delivery — and you avoid the complexity of building European logistics from scratch.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{ title: "One warehouse", desc: "No need to lease, staff, or manage your own European facility." }, { title: "All EU markets", desc: "Multi-carrier delivery across every major European country from a single location." }, { title: "Returns handled", desc: "European returns come to us. We inspect, restock, and update your inventory." }, { title: "Shopify-ready", desc: "Your Shopify store connects directly — whether US-based or international." }].map(item => (
                <div key={item.title} className="p-5 rounded-xl border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container-site">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">How it works for US brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ step: 1, title: "Ship inventory to Breda", desc: "Send your products to our Netherlands fulfilment centre. We handle receiving and storage." }, { step: 2, title: "Connect your store", desc: "Link your Shopify or Amazon store. Orders sync automatically to our fulfilment system." }, { step: 3, title: "We fulfil to your European customers", desc: "Orders are picked, packed, and shipped via DHL, PostNL, Asendia, FedEx, or Royal Mail. Tracking flows back to your store." }].map(item => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg mb-4">{item.step}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to bring your brand to Europe?"
        subtitle="Take the fulfilment scan to see if Vareya is the right partner for your European expansion."
        primaryLabel="Check your fit"
      />
      <FAQ items={FAQ_ITEMS} />
    </>
  );
}

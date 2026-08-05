import Link from "next/link";
import { Metadata } from "next";
import { CTABanner } from "@/components/marketing/CTABanner";
import { FAQ } from "@/components/marketing/FAQ";

export const metadata: Metadata = {
  title: "EU Fulfilment for UK Brands | Vareya",
  description: "Post-Brexit EU fulfilment for UK brands. Warehouse in Breda, Netherlands with multi-carrier European delivery.",
  alternates: { canonical: "https://vareya.ai/eu-fulfilment-uk-brands/" },
};

const FAQ_ITEMS = [
  { question: "Why use a Netherlands-based fulfilment partner?", answer: "Operating from within the EU means your European customers get fast, reliable delivery from a central location. Our Breda warehouse sits at the heart of European logistics corridors." },
  { question: "How do I ship inventory to your warehouse?", answer: "You send your products to our Breda fulfilment centre. We handle receiving, storage, and quality checks. We will provide clear shipping instructions during onboarding." },
  { question: "Can I still serve my UK customers?", answer: "Vareya's fulfilment centre is optimised for European delivery. Many UK brands maintain separate fulfilment arrangements for their domestic UK customers while using Vareya for their European orders." },
  { question: "Do you integrate with my existing e-commerce platform?", answer: "Yes. Our Shopify integration works whether your store is UK-based or international. Amazon FBM fulfilment is also available." },
  { question: "How do returns work for UK brands?", answer: "Returns handling is included as standard. European customers return products to our Breda warehouse. We inspect, restock, and update your inventory." },
];

export default function UkBrandsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-20 sm:py-28">
        <div className="container-site">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              EU fulfilment for UK brands
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
              Keep serving your European customers with fulfilment from within the EU. Warehouse in the Netherlands, multi-carrier delivery, and returns handling included.
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Keep Europe simple</h2>
              <div className="text-muted space-y-4 leading-relaxed">
                <p>For UK brands, serving European customers means solving fulfilment. Vareya gives you an EU-based fulfilment partner without the complexity of setting up your own continental operation.</p>
                <p>Our Breda warehouse sits at the centre of European logistics. From here, your orders reach customers in Germany, France, the Netherlands, and across the EU — fast and reliably. Multi-carrier delivery, Shopify integration, and returns handling are all part of the service.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{ title: "EU-based warehouse", desc: "Fulfilment from within the European Union. Central location in Breda, NL." }, { title: "Multi-carrier EU delivery", desc: "DHL, PostNL, Asendia, FedEx, and Royal Mail — full European coverage." }, { title: "Returns to Breda", desc: "European returns handled at our warehouse. No need for a separate EU returns address." }, { title: "Shopify integration", desc: "Direct Shopify connection. Orders sync automatically from your store." }].map(item => (
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
        <div className="container-site text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">One partner for all of Europe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[{ title: "Single warehouse", desc: "One fulfilment centre in the Netherlands covers all your European markets. No need to manage multiple warehouses or carrier relationships across different countries." }, { title: "Fast delivery", desc: "Central location means short transit times to major European markets. Your customers in Berlin, Paris, or Amsterdam all get the same reliable service." }, { title: "Simple operations", desc: "Send your inventory to Breda, connect your store, and start fulfilling European orders. We handle the logistics — you focus on your brand." }].map(item => (
              <div key={item.title} className="p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to simplify your EU fulfilment?"
        subtitle="Take the fulfilment scan to see if Vareya is right for your UK brand's European operations."
        primaryLabel="Check your fit"
      />
      <FAQ items={FAQ_ITEMS} />
    </>
  );
}

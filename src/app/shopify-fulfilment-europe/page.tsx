import Link from "next/link";
import { Metadata } from "next";
import { CTABanner } from "@/components/marketing/CTABanner";
import { CapabilityStrip } from "@/components/marketing/CapabilityStrip";
import { FAQ } from "@/components/marketing/FAQ";

export const metadata: Metadata = {
  title: "Shopify Fulfilment Europe | Vareya",
  description: "Direct Shopify integration for European order fulfilment. Orders sync automatically from your store to our Breda warehouse.",
  alternates: { canonical: "https://vareya.ai/shopify-fulfilment-europe/" },
};

const FAQ_ITEMS = [
  { question: "How does Shopify integration work?", answer: "Once connected, your Shopify orders flow automatically to our fulfilment system. No CSV uploads, no manual data entry. When an order is placed on your store, we receive it within minutes and begin processing." },
  { question: "How long does setup take?", answer: "The Shopify integration setup is straightforward. Once your products are registered in our system and your store is connected, you can start sending orders. We guide you through the entire process." },
  { question: "Can I track orders from Shopify?", answer: "Yes. Tracking information flows back to your Shopify store automatically. Your customers receive shipping updates just as they would with any other fulfilment setup." },
  { question: "Do you support Shopify Markets?", answer: "If you sell to multiple European countries through Shopify Markets, our multi-carrier setup ensures your orders are delivered efficiently across all your target markets." },
  { question: "What happens if an order fails to sync?", answer: "Our system monitors order sync health. If an order fails to sync, we have processes in place to identify and resolve the issue quickly. You can always reach our team directly." },
];

export default function ShopifyFulfilmentPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-20 sm:py-28">
        <div className="container-site">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Shopify fulfilment for Europe
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
              Direct Shopify integration. Orders sync automatically from your store to our Breda warehouse. No CSV uploads, no manual entry.
            </p>
            <Link href="/fulfilment-scan/" className="inline-flex items-center px-6 py-3 text-base font-semibold text-primary bg-white rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
              Check your fit
            </Link>
          </div>
        </div>
      </section>

      <CapabilityStrip />

      <section className="py-16 sm:py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Your Shopify store, our fulfilment</h2>
              <div className="text-muted space-y-4 leading-relaxed">
                <p>Running a Shopify store is complex enough. Fulfilment should be simple. With Vareya, your Shopify orders flow directly into our fulfilment system — no spreadsheets, no manual uploads, no copy-paste.</p>
                <p>When a customer places an order, we receive it within minutes. Our team picks, packs, and ships it using your choice of carrier. Tracking information flows back to Shopify automatically, keeping your customers informed every step of the way.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[{ step: 1, title: "Connect your store", desc: "Link your Shopify store to Vareya in minutes. We provide step-by-step guidance." }, { step: 2, title: "Send your inventory", desc: "Ship your products to our Breda warehouse. We handle receiving and storage." }, { step: 3, title: "Orders sync automatically", desc: "Every Shopify order appears in our fulfilment queue. No manual work needed." }, { step: 4, title: "We pick, pack, and ship", desc: "Your orders are processed and tracking flows back to Shopify." }].map(item => (
                <div key={item.step} className="flex gap-4 p-4 rounded-xl border border-slate-200">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container-site text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Built for Shopify merchants</h2>
          <p className="text-muted max-w-2xl mx-auto mb-10">Fulfilment that works the way your Shopify store does — automatically.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[{ title: "Automatic order sync", desc: "Orders flow from Shopify to our warehouse without any manual steps. Focus on growing your store — we handle the rest." }, { title: "Tracking updates", desc: "Shipping updates and tracking numbers sync back to Shopify. Your customers stay informed throughout the delivery process." }, { title: "One integration, all of Europe", desc: "One Shopify-Vareya connection covers your European fulfilment needs across the markets discussed during qualification." }].map(item => (
              <div key={item.title} className="p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to connect your Shopify store?"
        subtitle="Take our fulfilment scan to see if Vareya is the right fulfilment partner for your Shopify brand."
        primaryLabel="Check your fit"
      />
      <FAQ items={FAQ_ITEMS} />
    </>
  );
}

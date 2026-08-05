import Link from "next/link";
import { Metadata } from "next";
import { CTABanner } from "@/components/marketing/CTABanner";
import { FAQ } from "@/components/marketing/FAQ";
import { CAPABILITIES } from "@/content/facts";

export const metadata: Metadata = {
  title: "Cosmetics & Supplements Fulfilment Europe | Vareya",
  description: "Specialist fulfilment for cosmetics and supplement brands. Product-fit review, careful handling, and multi-carrier European delivery.",
  alternates: { canonical: "https://vareya.ai/cosmetics-supplements-fulfilment-europe/" },
};

const FAQ_ITEMS = [
  { question: "What cosmetics and supplement products do you handle?", answer: `We specialise in smaller parcel products including cosmetics, supplements, phone cases, and accessories. Suitable parcels have combined dimensions below ${CAPABILITIES.parcelLimits.combinedDimensionsMm} mm and a maximum length of ${CAPABILITIES.parcelLimits.maxLengthMm} mm. Product fit is reviewed during qualification.` },
  { question: "Do you offer temperature-controlled storage?", answer: "Our standard fulfilment centre provides a clean, secure storage environment suitable for most cosmetics and supplement products. If you have specific storage requirements, please mention them during qualification and we can discuss your needs." },
  { question: "How do you handle batch numbers and expiry dates?", answer: "We understand the importance of batch tracking for cosmetics and supplements. During onboarding, we work with you to understand your product requirements and ensure our fulfilment process meets your needs." },
  { question: "What is the qualification process?", answer: "When you submit a fulfilment scan or quote request, we review your product categories, order volumes, and specific requirements. This helps us confirm that your products are a good fit for our fulfilment process before we begin onboarding." },
  { question: "Can you handle fragile cosmetics packaging?", answer: "Our picking and packing process is designed for careful handling. During qualification, we discuss any special packaging requirements your products may have to ensure they arrive with your customers in perfect condition." },
];

export default function CosmeticsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-20 sm:py-28">
        <div className="container-site">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Cosmetics &amp; supplements fulfilment for Europe
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
              Specialist fulfilment for cosmetics, supplement, and small parcel brands. Product-fit review, careful handling, and multi-carrier European delivery.
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Fulfilment that understands your products</h2>
              <div className="text-muted space-y-4 leading-relaxed">
                <p>Cosmetics and supplements are not like t-shirts or books. They need careful handling, attention to packaging, and a fulfilment partner who understands that your products represent your brand's reputation.</p>
                <p>Vareya specialises in smaller parcel products — cosmetics, supplements, phone cases, accessories. Our product-fit review during qualification ensures your items are a good match for our fulfilment process before you commit.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{ title: "Product-fit review", desc: "Every brand goes through qualification. We make sure your products match our fulfilment process." }, { title: "Careful handling", desc: "Picking and packing designed for cosmetics and small parcel products." }, { title: "Right-size parcels", desc: `Suitable for parcels up to ${CAPABILITIES.parcelLimits.maxLengthMm} mm length, ${CAPABILITIES.parcelLimits.combinedDimensionsMm} mm combined.` }, { title: "Multi-carrier delivery", desc: `${CAPABILITIES.carriers.join(", ")} — reliable delivery across Europe.` }].map(item => (
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Built for beauty and wellness brands</h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">From serums to supplements, your products deserve fulfilment that matches your brand quality.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ title: "Qualification first", desc: "Before you send a single product, we review your catalogue to confirm we are the right fulfilment partner. No surprises, no mismatched expectations." }, { title: "Attention to detail", desc: "Your packaging, your branding, your customer experience. We handle every order with the care your brand deserves." }, { title: "Scalable as you grow", desc: `From ${CAPABILITIES.minMonthlyOrders.toLocaleString()} orders a month to many times that. Our process scales with your brand's growth.` }].map(item => (
              <div key={item.title} className="p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Is Vareya right for your brand?"
        subtitle="Take our fulfilment scan to see if your cosmetics or supplements brand is a good fit for our fulfilment process."
        primaryLabel="Check your fit"
      />
      <FAQ items={FAQ_ITEMS} />
    </>
  );
}

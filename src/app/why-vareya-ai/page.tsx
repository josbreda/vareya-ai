import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, CAPABILITIES } from "@/content/facts";

export const metadata: Metadata = {
  title: "Why Vareya.ai | European Fulfilment Vision",
  description:
    "Fulfilment organised cooperatively: members own the operation, efficiency benefits go back to members, and decisions are made together. Built from Breda, the Netherlands.",
  alternates: { canonical: "https://vareya.ai/why-vareya-ai/" },
};

export default function WhyVareyaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-950 via-ink to-ink text-white">
        <div className="container-site py-16 sm:py-24">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 mb-5 text-[13px] text-network bg-network/10 border border-network/20 rounded-full">
              Vision
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              A different kind of fulfilment company
            </h1>
            <p className="text-lg text-white/65 leading-relaxed max-w-xl">
              Most fulfilment providers are built to maximise margins for outside shareholders. Vareya is being built differently — as a cooperative where the brands that use the service become members and owners.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">The cooperative model</h2>
          <div className="prose prose-slate max-w-none space-y-4 text-muted leading-7">
            <p>
              Vareya is being set up as a cooperative (Coöperatie U.A.), which means the members — the brands that
              use the fulfilment service — collectively own and govern the operation.
            </p>
            <p>
              This is different from a traditional fulfilment company. In a traditional model, every bit of efficiency
              that gets discovered becomes margin for shareholders. In Vareya&apos;s model, the operation belongs to
              the members themselves.
            </p>
            <p>
              The principle is simple: organise fulfilment cooperatively, bundle volumes from multiple
              smaller brands, and create an efficient fulfilment setup where the benefits of scale go
              back to the members.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold mb-8">What this means in practice</h2>
          <div className="grid gap-6">
            {[
              {
                title: "Democratic governance",
                body: "Members make decisions together. One member, one vote — regardless of volume. The direction of Vareya is guided by the members, not by external shareholders.",
              },
              {
                title: "Efficiency belongs to members",
                body: "When the cooperative operates efficiently, the surplus goes back to the members — not to outside investors. This aligns the incentives: everyone benefits from doing things well.",
              },
              {
                title: "Bundled volumes, better terms",
                body: "Individual brands are often too small to negotiate the best rates with carriers, packaging suppliers, or technology providers. By combining volumes across members, the cooperative can negotiate as a larger entity.",
              },
              {
                title: "Built for the long term",
                body: "Cooperatives are designed for continuity, not for an exit. The goal is building a stable, reliable fulfilment operation that serves members for decades — not selling to the highest bidder after a few years.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-white border border-border">
                <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Who this is for</h2>
          <div className="prose prose-slate max-w-none space-y-4 text-muted leading-7">
            <p>
              Vareya is designed for brands that want more than just a fulfilment provider. It is for
              brands that want to be part of building something — a shared operation that gets better
              as more members join.
            </p>
            <p>{CAPABILITIES.volume}</p>
            <p>
              Vareya currently operates from {COMPANY.city}, {COMPANY.country}, and is building its
              cooperative membership. The first members will help shape how the cooperative operates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">How we are building this</h2>
          <div className="prose prose-slate max-w-none space-y-4 text-muted leading-7">
            <p>
              Vareya is not a finished product. The cooperative structure, the membership model,
              and the governance processes are being built alongside the fulfilment operation itself.
            </p>
            <p>
              The early members will help define how the cooperative works — from governance rules
              to how surplus gets distributed. This is a deliberate choice: building the structure
              with the people who will use it, rather than imposing a finished template.
            </p>
            <p>
              What is operational today is the fulfilment service itself: the warehouse in Breda,
              the carrier network, the Shopify and Amazon FBM integrations, and the returns handling.
              The cooperative layer is being added on top of that foundation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-primary text-white">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Interested in being part of this?
          </h2>
          <p className="text-primary-light/80 mb-8">
            The first members will shape how Vareya operates. If the cooperative model resonates with how
            you think about your business, we would like to talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/fulfilment-scan/"
              className="inline-flex items-center px-6 py-3 bg-accent text-ink font-semibold rounded-[10px] hover:bg-[#FF8A3D] transition-colors"
            >
              Check your fit →
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center px-6 py-3 border border-white/20 text-white rounded-[10px] hover:bg-white/5 transition-colors"
            >
              Contact Vareya
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

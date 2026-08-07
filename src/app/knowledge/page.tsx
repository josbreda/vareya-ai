import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Knowledge | Vareya Fulfilment",
  description:
    "Practical knowledge about European e-commerce fulfilment. Articles on logistics, cooperatives, cross-border shipping, and more.",
  alternates: { canonical: "https://vareya.ai/knowledge/" },
};

const ARTICLES = [
  {
    slug: "what-is-cooperative-fulfilment",
    title: "What is cooperative fulfilment?",
    summary:
      "How a cooperative model changes the relationship between a fulfilment provider and the brands it serves.",
    published: "August 2026",
    topic: "Cooperative model",
  },
  {
    slug: "ecommerce-fulfilment-netherlands-guide",
    title: "E-commerce fulfilment from the Netherlands: a practical guide",
    summary:
      "Why the Netherlands is a strong base for European fulfilment operations.",
    published: "August 2026",
    topic: "Logistics",
  },
  {
    slug: "shopify-fulfilment-europe-what-to-look-for",
    title: "Shopify fulfilment in Europe: what to look for",
    summary:
      "Key questions to ask when evaluating a European fulfilment partner for your Shopify store.",
    published: "August 2026",
    topic: "Shopify",
  },
];

export default function KnowledgePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-950 via-ink to-ink text-white">
        <div className="container-site py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 mb-5 text-[13px] text-network bg-network/10 border border-network/20 rounded-full">
              Knowledge
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Practical fulfilment knowledge
            </h1>
            <p className="text-lg text-white/65 leading-relaxed max-w-xl">
              Articles on European e-commerce fulfilment — written for brands evaluating their options.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site max-w-4xl">
          <div className="grid gap-6">
            {ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/knowledge/${article.slug}`}
                className="block p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all bg-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {article.topic}
                    </span>
                    <h2 className="text-lg font-semibold text-ink mt-1 mb-2">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                  <span className="text-xs text-muted whitespace-nowrap mt-1">
                    {article.published}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-xl bg-surface border border-border text-center">
            <h3 className="font-semibold text-ink mb-2">More articles coming</h3>
            <p className="text-sm text-muted">
              Vareya&apos;s knowledge section is being built gradually. Practical, honest articles —
              no marketing fluff. If there is a topic you would like us to cover, let us know.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-primary text-white">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Check whether fulfilment may fit
          </h2>
          <p className="text-primary-light/80 mb-8">
            Take the fulfilment scan — it takes under 3 minutes and gives you a clear picture of
            whether Vareya matches your current setup.
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

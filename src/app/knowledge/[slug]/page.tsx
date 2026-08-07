import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Article {
  slug: string;
  title: string;
  description: string;
  published: string;
  topic: string;
  body: string;
}

const ARTICLES: Record<string, Article> = {
  "what-is-cooperative-fulfilment": {
    slug: "what-is-cooperative-fulfilment",
    title: "What is cooperative fulfilment?",
    description:
      "How a cooperative model changes the relationship between a fulfilment provider and the brands it serves — and why this matters for smaller e-commerce brands.",
    published: "August 2026",
    topic: "Cooperative model",
    body: `
In traditional fulfilment, a third-party logistics (3PL) provider charges per pick, per pack, and per shipment. The 3PL is a supplier: you pay for a service, and your incentive is to negotiate the lowest price. The 3PL's incentive is to maximise its margin within that price.

**Cooperative fulfilment turns that dynamic around.**

In a cooperative model, the brands that use the fulfilment service collectively own the operation. There are no outside shareholders extracting profit. The brands \u2014 the members \u2014 own the warehouse, the carrier contracts, the technology, and the processes together.

## How it works

The core mechanism is simple:

1. **Volume bundling.** Individual brands — especially those shipping a few hundred to a few thousand orders per month — are often too small to negotiate good rates with carriers, packaging suppliers, or software providers. By combining volumes across multiple member brands, the cooperative negotiates as a larger entity.

2. **Democratic governance.** Members make decisions together. One member, one vote — not one share, one vote. The cooperative's direction is guided by the people who depend on it day to day, not by investors looking for a return.

3. **Surplus goes back to members.** When Vareya operates efficiently, the financial surplus returns to the members. This aligns everyone's incentives: the cooperative has no reason to cut corners at the members' expense, because the members *are* the cooperative.

4. **Built for continuity.** Cooperatives are not built to be sold. The goal is building a stable, reliable operation that serves its members for the long term.

## Why this matters for smaller brands

Smaller e-commerce brands face a structural disadvantage in fulfilment. They do not have the volume to justify their own warehouse, their own carrier contracts, or their own technology stack. Traditional 3PLs often have minimum volume thresholds that exclude them \u2014 or they charge rates that make the unit economics difficult.

A cooperative model solves this by letting smaller brands pool their volumes. Each brand individually might be too small for the best rates. Together, the group becomes a meaningful logistics operation.

## What cooperative fulfilment is not

It is worth being clear about what this *does not* mean:

- It does **not** mean the brands have to manage the warehouse themselves. Vareya handles the day-to-day fulfilment operations — receiving, storage, picking, packing, shipping, and returns. The cooperative owns the operation; it does not require members to work in it.

- It does **not** mean every decision requires a vote. Operational decisions are made by the people running the warehouse. Strategic decisions — pricing structure, major investments, membership criteria — are made collectively.

- It is **not** a temporary experiment. Cooperatives are a well-established legal form in the Netherlands (Coöperatie U.A.) with clear governance rules, member protections, and operational frameworks.

## Is this new?

Cooperative models exist in many industries — agriculture, banking, insurance, retail. Agricultural cooperatives, for example, allow individual farmers to pool their produce and negotiate better prices together than any single farmer could achieve alone.

Applying the same logic to e-commerce fulfilment is less common, but the underlying principle is the same: bundling demand creates collective bargaining power that individual players cannot access on their own.

## The status of Vareya's cooperative

Vareya is being built as a cooperative. The fulfilment operation — warehouse in Breda, carrier network, Shopify and Amazon FBM integrations — is operational. The cooperative structure itself is being built alongside it.

The first members will help define how the cooperative works in practice. This is a deliberate choice: building the governance with the people who will use it, rather than imposing a finished framework on a group that had no say in designing it.

## Questions to ask when evaluating a cooperative fulfilment model

If you are considering a cooperative approach to fulfilment, here are some questions worth asking:

- Who makes the decisions about pricing, investments, and membership?
- How is surplus distributed?
- What happens if a member leaves?
- What are the membership criteria?
- How are disputes resolved?
- What legal structure underpins the cooperative?

These are the same questions Vareya is working through as it builds its cooperative foundation.
    `.trim(),
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return { title: "Article not found" };

  return {
    title: `${article.title} | Vareya Knowledge`,
    description: article.description,
    alternates: { canonical: `https://vareya.ai/knowledge/${slug}` },
  };
}

export default async function KnowledgeArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES[slug];

  if (!article) notFound();

  return (
    <>
      <article className="py-16 sm:py-20">
        <div className="container-site max-w-3xl">
          <Link
            href="/knowledge/"
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-8"
          >
            ← Back to Knowledge
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              {article.topic}
            </span>
            <span className="text-xs text-muted">{article.published}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-10">
            {article.description}
          </p>

          <div className="prose prose-slate max-w-none text-muted leading-7 space-y-4">
            {article.body.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-xl font-bold text-ink mt-10 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-lg font-semibold text-ink mt-8 mb-3">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("1. ") || paragraph.startsWith("2. ") || paragraph.startsWith("3. ") || paragraph.startsWith("4. ")) {
                return (
                  <p key={i}>{paragraph}</p>
                );
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc pl-5 space-y-1">
                    {paragraph.split("\n").map((item, j) => (
                      <li key={j}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              // Bold text handling
              const withBold = paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
              if (withBold !== paragraph) {
                return (
                  <p key={i} dangerouslySetInnerHTML={{ __html: withBold }} />
                );
              }
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </div>
      </article>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="container-site max-w-3xl text-center">
          <h2 className="text-xl font-bold text-ink mb-4">
            Want to learn more about cooperative fulfilment?
          </h2>
          <p className="text-muted mb-6">
            If the cooperative model resonates with how you think about your business, the next step
            is checking whether your fulfilment setup may fit.
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

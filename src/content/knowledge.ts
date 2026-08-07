import {
  CLAIM_RETURNS,
  CLAIM_SPECIALIST_FALLBACK,
  CLAIM_VOLUME,
} from "@/content/claims";
import { APPROVED_FACTS } from "@/content/claims";

export interface KnowledgeSection {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
}

export interface KnowledgeArticle {
  slug: string;
  title: string;
  description: string;
  summary: string;
  publishedAt: string;
  publishedLabel: string;
  topic: string;
  sections: readonly KnowledgeSection[];
}

export const KNOWLEDGE_ARTICLES = [
  {
    slug: "what-is-cooperative-fulfilment",
    title: "What is cooperative fulfilment?",
    description:
      "A practical explanation of member-owned fulfilment, shared governance and the questions a developing cooperative must answer.",
    summary:
      "How member ownership could change the relationship between a fulfilment operation and the brands it serves.",
    publishedAt: "2026-08-07",
    publishedLabel: "7 August 2026",
    topic: "Cooperative model",
    sections: [
      {
        heading: "The idea behind cooperative fulfilment",
        paragraphs: [
          "A conventional fulfilment provider supplies a service to its customers. A cooperative changes that relationship: eligible customers can also become members of the organisation that operates the service.",
          "In Raymond's vision for Vareya, participating brands would combine their fulfilment demand while sharing ownership of the cooperative. Member rights, responsibilities and voting arrangements would be set out in the cooperative's formal documents rather than left as a marketing promise.",
          "This distinction matters. Shared ownership is not the same as asking every member to run a warehouse. The operational team can still manage receiving, storage, picking, packing and dispatch while members take part in the strategic decisions reserved for them.",
        ],
      },
      {
        heading: "How the proposed member model would work",
        paragraphs: [
          "The proposed model has three connected parts: volume is combined across participating brands, strategic governance is shared democratically, and any eligible surplus is allocated for members under agreed rules. In other words, the intended efficiency benefit goes back to members rather than being designed only for outside shareholders.",
          "The detail is important. The cooperative documents need to define who can join, which matters members vote on, how costs are allocated, how any surplus is treated and what happens when a member leaves. Until those rules are adopted, they should be understood as the direction of travel rather than final membership terms.",
        ],
        bullets: [
          "Which businesses qualify for membership?",
          "Which decisions are operational and which are reserved for members?",
          "How are costs, reserves and any eligible surplus allocated?",
          "How can a member join, leave or raise a dispute?",
        ],
      },
      {
        heading: "What a brand should assess",
        paragraphs: [
          "A cooperative legal form does not replace operational due diligence. A brand should still assess product fit, sales-channel integration, stock intake, dispatch requirements, returns and reporting before choosing a fulfilment setup.",
          CLAIM_VOLUME,
          "Vareya is developing the cooperative layer alongside its existing fulfilment operation in Breda. The first participating brands are expected to help test the governance principles against practical warehouse needs before final membership terms are presented.",
        ],
      },
    ],
  },
  {
    slug: "ecommerce-fulfilment-netherlands-guide",
    title: "E-commerce fulfilment from the Netherlands: a practical guide",
    description:
      "A decision-focused guide to using a Netherlands warehouse as the operational base for European e-commerce fulfilment.",
    summary:
      "The operational questions to answer before choosing a Netherlands base for European order fulfilment.",
    publishedAt: "2026-08-07",
    publishedLabel: "7 August 2026",
    topic: "European logistics",
    sections: [
      {
        heading: "Start with the order profile, not the map",
        paragraphs: [
          "The Netherlands can be a practical base for European e-commerce, but warehouse location is only one part of the decision. Begin with the destinations your customers actually order from, the parcel profile, sales channels, return requirements and the origin of inbound stock.",
          `Vareya operates from ${APPROVED_FACTS.address}. ${APPROVED_FACTS.carriers}`,
          "A carrier list alone does not decide the right routing. Service choice depends on destination, parcel characteristics and the commercial arrangement agreed during qualification.",
        ],
        bullets: [
          "Monthly orders by destination country",
          "SKU count, dimensions, weight and product category",
          "Inbound origin and expected replenishment rhythm",
          "Sales channels and required order data",
          "Return instructions and disposition rules",
        ],
      },
      {
        heading: "Separate warehouse scope from specialist advice",
        paragraphs: [
          "Cross-border fulfilment can involve warehouse operations, transport, customs, tax and product-specific obligations. Treat these as separate workstreams and identify the responsible specialist for each one before stock moves.",
          CLAIM_SPECIALIST_FALLBACK,
          "For returns, document what should happen after an item arrives: inspection criteria, restocking rules, quarantine instructions and the data your team needs. " + CLAIM_RETURNS,
        ],
      },
      {
        heading: "Prepare a qualification pack",
        paragraphs: [
          "A useful fulfilment review needs more than a total order count. Prepare recent order data by market, a SKU file with parcel characteristics, inbound assumptions, channel details, return instructions and a realistic preferred start window.",
          CLAIM_VOLUME,
          "Use that pack to compare proposed workflows and clarify exceptions before agreeing an onboarding plan. Product fit is confirmed during qualification.",
        ],
      },
    ],
  },
  {
    slug: "shopify-fulfilment-europe-what-to-look-for",
    title: "Shopify fulfilment in Europe: what to look for",
    description:
      "Practical questions for reviewing a European fulfilment setup for Shopify orders, stock, exceptions and returns.",
    summary:
      "A practical checklist for evaluating a European fulfilment operation for a Shopify store.",
    publishedAt: "2026-08-07",
    publishedLabel: "7 August 2026",
    topic: "Shopify",
    sections: [
      {
        heading: "Map the complete order flow",
        paragraphs: [
          APPROVED_FACTS.shopify,
          "Before onboarding, map what should happen from a customer placing an order through to the warehouse receiving the order data, selecting stock, preparing the parcel and recording dispatch. Include cancellations, address changes and other exceptions rather than reviewing only the normal path.",
          "Confirm which Shopify data is required, how product and order identifiers are matched, when stock updates are exchanged and who investigates an order that does not enter the agreed workflow.",
        ],
        bullets: [
          "Store, market and currency configuration",
          "SKU and variant identifiers",
          "Order holds, edits and cancellation rules",
          "Stock-status and dispatch updates",
          "Responsibility for exception handling",
        ],
      },
      {
        heading: "Review the physical operation",
        paragraphs: [
          "A channel connection is only one part of fulfilment. Review the physical product, inbound stock process, packaging instructions, parcel profile, destination mix and return requirements at the same time.",
          CLAIM_VOLUME,
          CLAIM_RETURNS,
          "Product fit is confirmed during qualification. Share any unusual product or handling requirement before stock is sent to the warehouse.",
        ],
      },
      {
        heading: "Agree an onboarding check before launch",
        paragraphs: [
          "Write down the agreed data flow and physical workflow, then use a controlled set of representative orders to check identifiers, stock allocation, dispatch updates and exceptions. The objective is to discover missing rules before normal order processing begins.",
          "Keep named owners on both sides for catalogue data, inbound coordination and order exceptions. After launch, review exceptions and stock discrepancies against the agreed process so that changes are deliberate and traceable.",
          "For a Vareya review, include the Shopify store setup, recent order profile, SKU data, target markets and required start window in the fulfilment scan.",
        ],
      },
    ],
  },
] as const satisfies readonly KnowledgeArticle[];

export type KnowledgeSlug = (typeof KNOWLEDGE_ARTICLES)[number]["slug"];

export function getKnowledgeArticle(slug: string): KnowledgeArticle | undefined {
  return KNOWLEDGE_ARTICLES.find((article) => article.slug === slug);
}

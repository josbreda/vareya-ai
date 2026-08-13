import {
  CLAIM_ALL_IN,
  CLAIM_CARRIER_SELECTION,
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
  {
    slug: "fulfilment-quotation-requirements",
    title: "What information does a 3PL need to prepare a fulfilment quotation?",
    description:
      "The data groups a fulfilment provider needs for a meaningful quotation — order volume, destination mix, parcel profile, storage, platform and priorities.",
    summary:
      "A quotation-ready profile, not a guess: the five data groups that turn an enquiry into a usable fulfilment quotation.",
    publishedAt: "2026-08-10",
    publishedLabel: "10 August 2026",
    topic: "Quotation",
    sections: [
      {
        heading: "Why quotation quality depends on input data",
        paragraphs: [
          "A fulfilment quotation is only as useful as the information behind it. Order volume, destinations, parcel characteristics, storage needs and platform setup each change the operational cost of fulfilment, so a provider that quotes without them is estimating rather than pricing an actual operation.",
          "A quotation-ready profile turns the same questions into concrete answers a provider can work with. The five data groups below mirror what a serious fulfilment review asks for.",
        ],
        bullets: [
          "Business identity and product type",
          "Order volume and destination mix",
          "Parcel dimensions and weights",
          "Storage requirement and software platform",
          "Decision priorities and start window",
        ],
      },
      {
        heading: "The five data groups in detail",
        paragraphs: [
          "Business and products: company details, website, country of operation and a clear product category with a short description. Product type decides handling rules, packaging and any specialist requirements.",
          "Orders and destinations: average monthly orders, plus how those orders are split across countries. A 60/20/20 split between the Netherlands, Germany and France needs different carrier choices than a single-country profile. Seasonal peaks belong here too, because capacity planning depends on them.",
          "Parcels and composition: average length, width, height and weight of a typical parcel, the SKU count and the average number of items per order. Exact figures are ideal, but an honest estimate is still usable — an unknown value is not.",
          "Storage and software: how many pallets of storage you need (or an alternative estimate), which ecommerce platform you run, and where stock currently ships from. Returns requirements close the operational picture.",
          "Priorities and contact: what you care about most — shipping costs, delivery speed, returns, customs support, integration or something else — together with a realistic start date and your contact details.",
        ],
      },
      {
        heading: "Estimate, exact or unknown",
        paragraphs: [
          "Operational fields rarely need to be exact on the first pass. A useful convention: mark each figure as exact, estimated or unknown. That tells the provider which numbers are reliable, which need confirmation later, and which questions the quotation cannot yet answer.",
          CLAIM_VOLUME,
          "A provider can still give an initial fit response on estimated data. What matters is that the gaps are visible to both sides before onboarding, rather than discovered after stock has moved.",
        ],
      },
      {
        heading: "From profile to quotation review",
        paragraphs: [
          "Once the profile is complete, a provider can assess operational fit and prepare a quotation review. Vareya's approach collects this profile through the fulfilment scan, then sends an initial fit response by email within one working day.",
          "Product fit is confirmed during qualification. Exact rates and service levels are agreed per client — the scan does not display a price.",
        ],
      },
    ],
  },
  {
    slug: "fulfilment-cost-drivers",
    title: "What determines ecommerce fulfilment and shipping costs?",
    description:
      "The cost drivers behind fulfilment pricing: order volume, parcel profile, destination mix, storage, platform integration and service-level requirements.",
    summary:
      "Where fulfilment costs actually come from — the six drivers that decide what a fulfilment operation quotes.",
    publishedAt: "2026-08-10",
    publishedLabel: "10 August 2026",
    topic: "Costs",
    sections: [
      {
        heading: "The six cost drivers, in order of impact",
        paragraphs: [
          "Fulfilment pricing is not a single number applied uniformly. Six drivers shape what any provider quotes, and understanding them makes both quotations and invoices readable.",
          "Order volume sets the baseline: how many orders pass through the warehouse each month, and how concentrated they are. Volume influences storage planning, staffing and the commercial terms a provider can offer.",
          "Parcel profile comes next. Combined dimensions below 900 mm with a maximum length of 600 mm describe the smaller-parcel range Vareya is set up for; heavier or larger items change handling, packaging and carrier fees.",
          "Destination mix decides carrier routing. Different countries carry different carrier costs and service options, so the same parcel profile can quote differently depending on where orders actually go.",
          "Storage requirement — pallets, SKU spread and replenishment rhythm — drives warehouse space. Platform integration determines how orders, stock and returns flow between your shop and the warehouse system.",
          "Service-level requirements — cut-off times, weekend processing, customised SLAs and returns — are the final lever, and often the most negotiable.",
        ],
      },
      {
        heading: "Where rate transparency shows up",
        paragraphs: [
          CLAIM_ALL_IN,
          "The point of an all-in rate is predictability: the agreement lists what is included, and nothing beyond that is added later without being in the agreement. That is different from claiming every possible surcharge or duty is covered — customs duties and taxes are separate matters confirmed during qualification.",
        ],
      },
      {
        heading: "What to compare when comparing quotations",
        paragraphs: [
          "Two quotations can look similar and differ materially in scope. Compare the same six drivers: does each quote assume the same volume band, the same destination mix, the same parcel profile, the same storage model and the same service-level commitments?",
          "A lower headline rate that assumes a different volume band or excludes returns is not a cheaper operation — it is a different quotation. Line up the assumptions first, then compare the numbers.",
          "Vareya's fulfilment rates are fixed and all-in per agreement. The scan collects the same driver data a quotation needs, so the fit review starts from the actual operation rather than a guess.",
        ],
      },
    ],
  },
  {
    slug: "compare-fulfilment-partners",
    title: "Shipping software, carrier contract or fulfilment partner: what is the difference?",
    description:
      "Three different solutions for getting orders out: shipping software, a direct carrier contract, and a physical fulfilment partner — and when each one fits.",
    summary:
      "Shipping software, carrier contracts and fulfilment partners solve different problems. A practical way to choose between them.",
    publishedAt: "2026-08-10",
    publishedLabel: "10 August 2026",
    topic: "Comparison",
    sections: [
      {
        heading: "Three solutions, three different problems",
        paragraphs: [
          "Shipping software prints labels and automates shipping rules by connecting a shop to multiple carriers. A direct carrier contract sets the rates a business pays a carrier for transport. A fulfilment partner stores the stock, picks, packs and ships the orders — and typically brings software access and negotiated carrier rates with it.",
          "They are not interchangeable, and they solve different problems at different scales. The useful question is which layer of the process you want to operate yourself.",
        ],
        bullets: [
          "Shipping software: you store, pick and pack — software automates labels, tracking and returns flows.",
          "Carrier contract: you store, pick, pack and label — the contract sets transport pricing.",
          "Fulfilment partner: the partner stores, picks, packs and ships on your behalf.",
        ],
      },
      {
        heading: "How the choice plays out in practice",
        paragraphs: [
          "A brand running its own small warehouse and wanting cheaper, smarter shipping benefits most from shipping software. A brand that already has an efficient in-house operation and only needs better transport rates can negotiate a direct carrier contract.",
          "A brand whose order volume has outgrown the space, time or process available in-house is the natural fit for a fulfilment partner. The operational handover — receiving, storage, picking, packing, dispatch and returns — is the core of what changes hands.",
          CLAIM_VOLUME,
        ],
      },
      {
        heading: "What a fulfilment partner adds",
        paragraphs: [
          "A fulfilment partner operates the physical warehouse and the fulfilment process. Vareya operates from Breda in the Netherlands, uses ShipHero as its warehouse management system fully integrated with Shopify, and ships through a carrier network led by PostNL for shipments within the Netherlands.",
          CLAIM_CARRIER_SELECTION,
          "The scan is the practical bridge: it collects the order profile a partner needs to check fit, without a sales call as the first step. Product fit is confirmed during qualification.",
        ],
      },
    ],
  },
] as const satisfies readonly KnowledgeArticle[];

export type KnowledgeSlug = (typeof KNOWLEDGE_ARTICLES)[number]["slug"];

export function getKnowledgeArticle(slug: string): KnowledgeArticle | undefined {
  return KNOWLEDGE_ARTICLES.find((article) => article.slug === slug);
}

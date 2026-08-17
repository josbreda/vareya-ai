import {
  CLAIM_ALL_IN,
  CLAIM_CARRIER_SELECTION,
  CLAIM_POST_SUBMISSION,
  CLAIM_RETURNS,
  CLAIM_SPECIALIST_FALLBACK,
  CLAIM_VOLUME,
} from "@/content/claims";
import { APPROVED_FACTS } from "@/content/claims";

export interface KnowledgeTable {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
}

export interface KnowledgeFaqItem {
  q: string;
  a: string;
}

export interface KnowledgeSource {
  label: string;
  url: string;
}

export interface KnowledgeSection {
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  table?: KnowledgeTable;
  checklist?: readonly string[];
  faq?: readonly KnowledgeFaqItem[];
  sources?: readonly KnowledgeSource[];
  reviewNote?: string;
}

export interface KnowledgeArticle {
  slug: string;
  title: string;
  description: string;
  summary: string;
  publishedAt: string | null;
  publishedLabel: string | null;
  topic: string;
  indexable?: boolean;
  reviewer?: string | null;
  reviewedAt?: string | null;
  primaryCta?: { label: string; route: string };
  secondaryCta?: { label: string; route: string };
  sections: readonly KnowledgeSection[];
}

export const KNOWLEDGE_ARTICLES: readonly KnowledgeArticle[] = [
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
      "The nine operational inputs a 3PL needs for a meaningful fulfilment quotation — volume, destinations, parcels, SKUs, storage and platform. Includes a quotation checklist.",
    summary:
      "A quotation-ready profile: the nine inputs that turn an enquiry into a reliable fulfilment quotation, with two composite examples and a checklist.",
    publishedAt: null,
    publishedLabel: null,
    topic: "Quotation",
    indexable: false,
    reviewer: null,
    reviewedAt: null,
    primaryCta: { label: "Start your Free Rate Scan", route: "/free-rate-scan/" },
    secondaryCta: {
      label: "Request a fulfilment quote",
      route: "/request-fulfilment-quote/",
    },
    sections: [
      {
        heading: "Direct answer",
        paragraphs: [
          "To prepare a meaningful fulfilment quotation, a 3PL will normally need your product type, business location, monthly order volume, destination-country distribution, packed parcel dimensions and weights, SKU count, average items per order, storage requirement, ecommerce platform and selection priorities. Exact figures are ideal, honest estimates are useful, and unknown values should be marked clearly because they may require follow-up before a final quotation can be prepared.",
        ],
      },
      {
        heading: "Why a quotation needs an operational profile",
        paragraphs: [
          "A fulfilment quotation is not simply a price list. It is an estimate of the work, storage and shipping profile your orders will create: how many parcels are processed, what they contain, how large and heavy they are, where they go, how stock is stored and how orders enter the warehouse system.",
          "A quotation prepared without a sufficiently detailed operational profile will necessarily rely on assumptions. Those assumptions should be visible, so the webshop understands which parts of the quotation may still change.",
          "A store platform and a broad order-volume range can be enough to create a lead record, but not enough to price the operation reliably. Two webshops with the same monthly order volume can require very different storage, picking, packaging and carrier arrangements.",
        ],
      },
      {
        heading: "The nine core information categories",
        paragraphs: [
          "Most fulfilment providers will request much of the information below, although the exact requirements and pricing structure vary by provider.",
        ],
        bullets: [
          "Product type — what the webshop sells and whether specialist handling, storage or packaging may be relevant.",
          "Country where the webshop is established — this may affect contracting, invoicing, inbound arrangements and tax or customs considerations, depending on the proposed setup. Specialist legal or tax requirements should be reviewed separately.",
          "Monthly order volume — the baseline for capacity and commercial assumptions.",
          "Destination countries and percentage distribution — where orders actually go, not only where the webshop is willing to ship.",
          "Packed parcel dimensions and weights — the parcel as it leaves the warehouse, including packaging.",
          "Number of SKUs — the number of distinct sellable products in the catalogue.",
          "Average items and order lines per order — the typical number of physical units and distinct SKUs handled for one shipment.",
          "Storage requirement — pallets, bins, shelving or another practical estimate of the space needed.",
          "Ecommerce platform and selection priorities — how orders enter the operation and what matters most when choosing a 3PL.",
        ],
      },
      {
        heading: "Quotation-input table",
        table: {
          headers: [
            "Information",
            "Why it matters",
            "Initial confidence",
            "Common mistake",
            "Possible quotation impact",
          ],
          rows: [
            [
              "Product type",
              "Influences handling, storage, packaging and carrier suitability",
              "Category should be exact; further detail may follow",
              "Giving a category that hides fragile, high-value or specialist characteristics",
              "Incorrect handling or risk assumptions",
            ],
            [
              "Business country",
              "May influence contracting, invoicing and inbound arrangements",
              "Exact",
              "Naming the warehouse country instead of the legal entity's country",
              "Incorrect setup assumptions",
            ],
            [
              "Monthly order volume",
              "Supports capacity and commercial planning",
              "Historic figure or clearly labelled forecast",
              "Using a peak month as the normal average",
              "Wrong capacity or pricing assumptions",
            ],
            [
              "Destination distribution",
              "Influences carrier mix, routing and destination-specific pricing",
              "Historic report, invoice, forecast or unknown",
              "Saying “worldwide” without a country split",
              "Quotation based on the wrong destination mix",
            ],
            [
              "Packed dimensions and weights",
              "Carriers and warehouse processes use the packed parcel",
              "Exact is ideal; estimate is useful; unknown requires follow-up",
              "Providing product dimensions instead of packed-parcel dimensions",
              "Understated shipping or handling assumptions",
            ],
            [
              "SKU count",
              "Influences storage layout, inventory complexity and pick locations",
              "Exact or well-founded estimate",
              "Counting variants inconsistently",
              "Incorrect storage and pick-density assumptions",
            ],
            [
              "Items and order lines",
              "Influence pick actions, checks, packaging and processing time",
              "Historic average or estimate",
              "Reporting orders only and ignoring order composition",
              "Pick-and-pack workload understated",
            ],
            [
              "Storage requirement",
              "Determines the physical space and storage method required",
              "Pallets, bins, stock units, estimate or unknown",
              "Giving stock units without product dimensions or storage type",
              "Too much or too little space reserved",
            ],
            [
              "Platform and priorities",
              "Influences the integration path and the service design",
              "Platform exact; priorities ranked or described",
              "Leaving priorities unstated",
              "Provider optimises for the wrong outcome",
            ],
          ],
        },
      },
      {
        heading: "Monthly volume and destination distribution",
        paragraphs: [
          "Monthly order volume shows the scale of an operation, but not its full shipping profile. Two webshops can each ship 1,000 orders per month and still require different quotations when one sends most parcels to one or two countries and the other distributes them across many markets.",
          "The most reliable country split comes from historic shipment data. A carrier invoice or shipping report can also provide useful evidence. A realistic current-sales or launch forecast can support an initial assessment, but it must be identified as a forecast rather than historic demand.",
          "A useful quotation profile should therefore record the evidence basis for the destination split:",
        ],
        bullets: [
          "historic shipping report;",
          "carrier invoice or carrier report;",
          "current-sales forecast;",
          "launch forecast;",
          "unknown.",
        ],
      },
      {
        heading: "Seasonal peaks",
        paragraphs: [
          "Seasonal peaks should be shown alongside the normal monthly figure, not used as a substitute for it.",
        ],
      },
      {
        heading: "Packed parcel dimensions and weights",
        paragraphs: [
          "A quotation should use the parcel as it actually leaves the warehouse: packed, protected, labelled and ready for the carrier. Packaging adds size and weight. Carriers may also use dimensional weight, so product dimensions alone can produce a misleading shipping assumption.",
          "Exact packed-parcel data is best. A realistic estimate is still useful for an initial assessment. If the figure is unknown, it should be marked as unknown and followed up before a final quotation is prepared.",
        ],
      },
      {
        heading: "SKU count, items, order lines and pick actions",
        paragraphs: [
          "These terms describe different aspects of the operation:",
        ],
        bullets: [
          "SKU count is the total number of distinct sellable products.",
          "Items per order is the average number of physical units in one shipment.",
          "Order lines is the average number of distinct SKUs in one order.",
          "Pick actions is the number of physical picks required to complete an order.",
          "Batch-picking suitability depends on recurring order patterns, not on total SKU count alone.",
        ],
      },
      {
        heading: "Why the distinction matters",
        paragraphs: [
          "A total SKU count mainly affects storage and pick-location complexity. Items and order lines per order more directly influence the work required for an individual shipment. A catalogue with many SKUs and mostly single-item orders is a different operation from a smaller catalogue with multi-item orders.",
          "An order count alone therefore does not show the full workload.",
        ],
      },
      {
        heading: "Storage requirements",
        paragraphs: [
          "Storage density varies significantly by product. A pallet of large products may hold only a few units, while a pallet of compact products may hold many thousands. The same stock count can therefore require a very different physical footprint.",
          "A useful first assessment may use:",
        ],
        bullets: [
          "estimated pallet positions;",
          "bin or shelf storage;",
          "estimated stock units;",
          "a clearly marked unknown value for manual review.",
        ],
      },
      {
        heading: "Ecommerce platform and operational priorities",
        paragraphs: [
          "The ecommerce platform shapes the integration path between the webshop and the fulfilment operation. The quotation also benefits from knowing what the webshop values most, such as transparent pricing, carrier choice, delivery speed, returns, customer support, flexibility, integrations or international reach.",
          `${APPROVED_FACTS.shopify} ${APPROVED_FACTS.amazonFbm} Specific integration, onboarding and operational requirements are confirmed during qualification.`,
        ],
      },
      {
        heading: "What may initially be estimated",
        paragraphs: [
          "An initial assessment can often begin with estimates for:",
        ],
        bullets: [
          "monthly order volume;",
          "destination-country distribution;",
          "parcel dimensions and weights;",
          "SKU count;",
          "average items and order lines;",
          "storage requirement;",
          "current fulfilment costs;",
          "current shipping costs by destination.",
        ],
      },
      {
        heading: "What ultimately needs to become accurate",
        paragraphs: [
          "Before a final quotation can be relied upon, the provider may need more accurate information about:",
        ],
        bullets: [
          "product type;",
          "legal business location;",
          "monthly order volume;",
          "destination distribution;",
          "packed dimensions and weights;",
          "SKU count;",
          "items and order lines;",
          "platform and integration requirements;",
          "service priorities;",
          "storage and returns requirements where relevant.",
        ],
      },
      {
        heading: "Forecast-based assessments",
        paragraphs: [
          "Every value should be labelled exact, estimate or unknown. A forecast-based assessment should show the assumptions used.",
          "This does not mean a pre-launch brand has no route forward. A start-up or new-market profile can be assessed using a realistic forecast, provided the quotation or price indication clearly states its assumptions and explains how actual volumes may affect the final setup.",
        ],
      },
      {
        heading: "Illustrative incomplete profile",
        paragraphs: [
          "Composite anonymised example. It does not describe an identifiable current or former Vareya customer.",
          "A Shopify webshop supplied a broad monthly order range and basic contact information. Product type, business country, country split, packed dimensions and weights, SKU count, items per order, storage requirement, returns needs, timing and selection priorities were missing.",
          "Lesson: a platform and order-volume range may be enough to register an enquiry, but not enough for a meaningful fulfilment quotation.",
        ],
      },
      {
        heading: "Illustrative stronger profile",
        paragraphs: [
          "Composite anonymised example. Details and figures have been generalised to reduce identifiability.",
          "An international apparel brand supplied a much fuller profile: approximately 100–200 SKUs, significant monthly UK and EU order volumes, a low average number of items per order, a recognised ecommerce platform and several important European markets. It also asked relevant questions about warehouse software, account structure, SLAs, returns, integrations and coordination with another warehouse.",
          "Important details still required clarification, including destination percentages, packed-parcel data, return volumes, storage method, seasonal peaks, packaging requirements and the exact multi-location operating assumptions.",
          "Lesson: a strong operational profile supports a meaningful first assessment, but a final quotation may still require specific shipping, storage, returns and implementation data.",
        ],
      },
      {
        heading: "When a quotation is not yet reliable",
        paragraphs: [
          "A final quotation may not yet be reliable when:",
        ],
        bullets: [
          "monthly volume is unknown and no realistic forecast has been provided;",
          "the destination mix is described only as “worldwide”;",
          "product dimensions are supplied instead of packed-parcel dimensions;",
          "storage needs are unknown and no stock estimate is available;",
          "items or order lines are not understood;",
          "the platform or integration route is unclear;",
          "product, returns or specialist requirements remain unresolved;",
          "the service priorities are not stated.",
        ],
      },
      {
        heading: "The appropriate first response",
        paragraphs: [
          "The appropriate first response is then an initial fit assessment with visible assumptions and a clear list of missing information—not a final quotation presented as complete.",
        ],
      },
      {
        heading: "Questions to ask when comparing 3PL quotations",
        paragraphs: [
          "Before comparing prices, check whether the quotations were built on comparable information:",
        ],
        bullets: [
          "What is included in the stated rate?",
          "Which costs sit outside that rate?",
          "Which inputs were treated as exact and which as estimates?",
          "Which destination mix was assumed?",
          "Were packed-parcel dimensions used?",
          "How are storage, packaging, returns, inbound work and specialist handling treated?",
          "What changes when the actual volume or country mix differs from the forecast?",
          "When and how is the quotation reviewed?",
        ],
      },
      {
        heading: "Vareya's rate scope",
        paragraphs: [
          `${CLAIM_ALL_IN} The agreement and quotation should make the included scope, assumptions and exclusions clear.`,
        ],
      },
      {
        heading: "Quotation-readiness checklist",
        paragraphs: [
          "Mark each item exact, estimate or unknown:",
        ],
        checklist: [
          "Product type and relevant handling characteristics",
          "Country where the webshop is established",
          "Monthly order volume and seasonal peak",
          "Destination countries and percentage distribution",
          "Evidence basis for the destination split",
          "Packed parcel dimensions and weights",
          "Number of SKUs",
          "Average items and order lines per order",
          "Storage requirement or stock estimate",
          "Ecommerce platform and integration context",
          "Returns requirement",
          "Priorities when selecting a 3PL",
          "Desired start date",
        ],
      },
      {
        heading: "Unknown values are valid",
        paragraphs: [
          "Unknown values are valid. They simply show which questions require follow-up before a final quotation can be prepared.",
        ],
      },
      {
        heading: "How Vareya reviews a profile",
        paragraphs: [
          CLAIM_VOLUME,
          "Each submission is reviewed individually. The assessment considers data completeness, product and parcel fit, destination mix, operational complexity, platform, storage and service requirements. Product fit is confirmed during qualification.",
          "Profiles based mainly on forecasts, products requiring specialist handling, high-value products or complex operating requirements may require manual review. The assessment does not automatically accept or reject a business.",
          "Brands below the preferred volume may still submit the Free Rate Scan using their actual figures or a clearly labelled forecast. Vareya can then confirm by email whether an initial assessment or another quotation route is appropriate.",
        ],
      },
      {
        heading: "Frequently asked questions",
        faq: [
          {
            q: "Do I need exact figures to start?",
            a: "No. Honest estimates can support an initial assessment. Unknown values should be marked clearly. More accurate data may be required before a final quotation is prepared.",
          },
          {
            q: "Can a pre-launch webshop request an assessment?",
            a: "Yes. A pre-launch or start-up profile can use a realistic forecast. The first response should make clear which conclusions are based on assumptions and which information is still needed.",
          },
          {
            q: "Why is destination distribution so important?",
            a: "Because the same total order volume can produce a different shipping profile when it is concentrated in a few countries or distributed across many markets.",
          },
          {
            q: "Why does storage matter when I know my stock count?",
            a: "Because product size and storage method determine how much physical space the stock requires. The same number of units can occupy very different amounts of warehouse space.",
          },
          {
            q: "Does the ecommerce platform matter?",
            a: `Yes. It affects how order and stock information connect to the fulfilment operation. ${APPROVED_FACTS.shopify} ${APPROVED_FACTS.amazonFbm}`,
          },
          {
            q: "Can returns be included?",
            a: CLAIM_RETURNS,
          },
          {
            q: "What happens after I submit the Free Rate Scan?",
            a: `${CLAIM_POST_SUBMISSION} The response can summarise what has been understood, the apparent fit, the confidence of the information, missing details, quotation readiness, important assumptions and the appropriate next step. This is not an automatic or guaranteed final quotation.`,
          },
        ],
      },
      {
        heading: "About the Free Rate Scan",
        paragraphs: [
          "The Free Rate Scan helps build the operational profile needed for an initial fulfilment and shipping assessment. It records the available information, including whether important figures are exact, estimated or unknown.",
          "Completing the scan does not display an automatic price and does not guarantee acceptance or a final quotation. Vareya reviews the submission and explains by email what is sufficiently clear, what remains open and what the next step should be.",
        ],
      },
      {
        heading: "Sources",
        sources: [
          {
            label:
              "Shopify — Setting up shipping and order fulfilment, retrieved 17 August 2026",
            url: "https://help.shopify.com/en/manual/fulfillment/setup",
          },
          {
            label:
              "WooCommerce / Automattic — Setting up Shipping Zones, retrieved 17 August 2026",
            url: "https://woocommerce.com/document/setting-up-shipping-zones/",
          },
          {
            label:
              "European Commission — VAT One Stop Shop, retrieved 17 August 2026",
            url: "https://vat-one-stop-shop.ec.europa.eu/index_en",
          },
          {
            label:
              "UK Warehousing Association — The Voice of Warehousing, retrieved 17 August 2026",
            url: "https://www.ukwa.org.uk/",
          },
          {
            label:
              "FedEx — What is Dimensional Weight?, retrieved 17 August 2026",
            url: "https://www.fedex.com/en-us/shipping/packaging/what-is-dimensional-weight.html",
          },
          {
            label:
              "UPS — Package Dimensions, Size Limits and Weight Guide, retrieved 17 August 2026",
            url: "https://www.ups.com/us/en/support/shipping-support/shipping-dimensions-weight",
          },
        ],
      },
      {
        heading: "Human contribution and review",
        paragraphs: [
          "This review draft combines approved Vareya claims, source research and operational input supplied by Raymond and Jos on 17 August 2026. The examples are composite and anonymised. Identifiable lead information is not included.",
        ],
        reviewNote:
          "Human review pending. Publication requires a named reviewer, review date, rendered Agent 4 audit and explicit release approval.",
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
];

export type KnowledgeSlug = (typeof KNOWLEDGE_ARTICLES)[number]["slug"];

export function getKnowledgeArticle(slug: string): KnowledgeArticle | undefined {
  return KNOWLEDGE_ARTICLES.find((article) => article.slug === slug);
}

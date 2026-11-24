import type { KnowledgeArticle } from "./knowledge";
export const PIPELINE_ARTICLE: KnowledgeArticle = {
  "slug": "shopify-fulfillment-hold-investigation",
  "title": "Why is a paid Shopify order on fulfilment hold?",
  "description": "Investigate a paid Shopify order on fulfilment hold: identify affected fulfilments, record hold reasons and gather evidence before considering release.",
  "summary": "Payment does not resolve a fulfilment hold. Check each affected fulfilment, identify every hold and its source, and establish what must be resolved before any release. App or service holds need particular care: Shopify advises reviewing the relevant agreement or contacting the service before overriding them.",
  "topic": "Shopify fulfilment holds",
  "publishedAt": "2026-11-03",
  "publishedLabel": "3 November 2026",
  "indexable": true,
  "reviewer": "Claude (AI content review; not human approval)",
  "reviewedAt": "2026-11-03",
  "primaryCta": {
    "label": "Check your EU fulfilment fit",
    "route": "/free-rate-scan/?lang=en"
  },
  "sections": [
    {
      "heading": "A paid order is not automatically ready to fulfil",
      "paragraphs": [
        "A Shopify order can be paid while its fulfilment remains on hold. Payment status alone does not explain why the hold exists or show that the underlying issue has been resolved.",
        "Shopify documents holds for suspected fraud, unavailable inventory, and order cost or quantity exceeding a specified value. Holds can be placed manually, automated through Shopify Flow, or applied automatically by an app or service. Shopify also provides a Flow template for paid orders using a specified fulfilment service that includes a hold action.",
        "Start by investigating the hold, not by releasing it. Inventory can be reserved while fulfilment is still blocked."
      ]
    },
    {
      "heading": "Find the affected fulfilment, not just the order status",
      "paragraphs": [
        "Open the order in Shopify admin and inspect its fulfilment sections and displayed hold details. Each fulfilment has its own fulfilment ID. Record that ID, the affected items and the location where available.",
        "Orders marked On hold are excluded from the Unfulfilled orders list. However, the order-level status does not necessarily reveal every held fulfilment. Shopify gives the example of an order containing one held fulfilment and one unfulfilled fulfilment: the order displays Unfulfilled.",
        "Do not use a list filter or the order's headline status as the only evidence that no holds remain."
      ],
      "checklist": [
        "Confirm the order reference and the payment status currently shown.",
        "Inspect each fulfilment rather than only the first section.",
        "Record the affected fulfilment IDs, items and locations where available.",
        "Capture the displayed hold details before making changes."
      ]
    },
    {
      "heading": "Identify every hold and its source",
      "paragraphs": [
        "A fulfilment can have several holds at the same time. For example, a manual inventory hold and an app-applied system hold can affect the same fulfilment. Shopify permits up to 10 manual holds per fulfilment.",
        "Record each displayed reason and identify whether a person, Flow workflow, app or service placed it where that information is available. Mark missing details as unknown rather than guessing.",
        "Fraud concerns, stock availability and order thresholds are possible explanations, not a diagnosis of your order. Releasing one hold does not establish that the others are resolved."
      ]
    },
    {
      "heading": "Match a system hold to the right investigation",
      "paragraphs": [
        "Shopify's timing descriptions are specific to particular hold types, not a universal release deadline. Elapsed time alone is not evidence that an issue is resolved or permission to override a hold."
      ],
      "bullets": [
        "Marketplace authorisation pending: a sales channel can hold an order for fraud analysis and payment authorisation. Identify the channel responsible and check the outstanding review.",
        "Managed Markets authorisation pending: Managed Markets can perform fraud analysis, check customer information and confirm that accurate duties and import taxes were collected where applicable. Establish which checks remain unresolved.",
        "Awaiting return items: exchange items created as part of a return receive a hold. Shopify describes manual release after the returned items have been received and inspected, when the exchange items are ready to fulfil.",
        "Pending upsell offer: a post-purchase upsell app can place the order on hold while the customer considers an offer. Check the relevant app and offer status.",
        "Unknown delivery date: a selling plan requiring future fulfilment at an unscheduled date can trigger a hold, usually for pre-orders. Check the selling plan and the unresolved fulfilment date."
      ]
    },
    {
      "heading": "Prepare an evidence handoff before changing anything",
      "paragraphs": [
        "The following checklist is practical investigation guidance, not a Shopify-mandated procedure or a Vareya troubleshooting commitment. It helps the responsible person or service assess the hold without relying on assumptions."
      ],
      "checklist": [
        "Order reference and observed payment status, with the time checked.",
        "Affected fulfilment IDs, items and locations where available.",
        "Every displayed hold reason and its known source.",
        "Relevant workflow, app or service name, or an explicit note that the source is unknown.",
        "Relevant timestamps and screenshots, keeping customer information to the minimum necessary.",
        "What remains unresolved and who should investigate it.",
        "The evidence required to demonstrate resolution of each issue.",
        "Any changes already made and the resulting status."
      ]
    },
    {
      "heading": "Consider selective release only after resolution",
      "paragraphs": [
        "For a manual hold, establish that the issue preventing fulfilment has been resolved before considering release. Match the evidence to the particular reason: payment confirmation alone does not resolve a stock issue or establish the outcome of a fraud review.",
        "For a system hold, Shopify warns that overriding it might breach your agreement with the app or service that placed it. Review that agreement or contact the responsible app or service before any override. Do not disable a workflow or bypass a hold simply to make the order move.",
        "When multiple holds exist, Shopify allows you to select which holds to release. Limit any authorised change to the holds whose release is justified.",
        "After a change, inspect the affected fulfilment again. Record remaining holds and the resulting status. Releasing a hold is not evidence that an order has been dispatched or delivered."
      ]
    },
    {
      "heading": "Keep fulfilment qualification separate from incident resolution",
      "paragraphs": [
        "If you are assessing a future EU fulfilment setup, Shopify integration is available at Vareya. Vareya is generally best suited to brands shipping 500 or more orders per month.",
        "Use Check your EU fulfilment fit to discuss your proposed operation. Submitting the scan does not release a Shopify hold or provide immediate technical incident resolution."
      ]
    },
    {
      "heading": "Source",
      "paragraphs": [
        "Platform explanations are based on the Shopify Help Center page on marking orders as on hold retrieved on 3 November 2026. It explains hold behaviour but cannot establish the cause of a particular order's hold. The investigation checklist and handoff recommendations are editorial guidance."
      ],
      "sources": [
        {
          "label": "Shopify Help Center: Marking your order as on hold",
          "url": "https://help.shopify.com/en/manual/fulfillment/fulfilling-orders/holding-fulfillments"
        }
      ]
    }
  ]
};

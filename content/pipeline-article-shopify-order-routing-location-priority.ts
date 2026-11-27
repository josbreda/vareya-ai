import type { KnowledgeArticle } from "./knowledge";
export const PIPELINE_ARTICLE: KnowledgeArticle = {
  "slug": "shopify-order-routing-location-priority",
  "title": "Why did Shopify route this order to a different location?",
  "description": "Check Shopify’s routing rules, their sequence and custom location priorities before treating an unexpected fulfilment assignment as a stock discrepancy.",
  "summary": "Shopify assigns orders to fulfilment locations using configured rules applied in sequence. An unexpected location assignment is not, on its own, evidence of incorrect warehouse stock. Review the active locations and routing configuration before changing inventory records.",
  "topic": "Shopify order routing",
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
      "heading": "Why Shopify can select a different fulfilment location",
      "paragraphs": [
        "Shopify order routing automatically assigns orders to fulfilment locations based on configured rules. Those rules apply in sequence to prioritise locations and determine where an order should be fulfilled. Your preferred warehouse is therefore not necessarily the location selected by the configuration.",
        "An unexpected assignment does not, by itself, show that stock records are wrong. Start by checking the routing setup rather than changing inventory quantities to influence which warehouse receives the order.",
        "The general routing rules cannot establish why a particular order went to a particular location. That needs the relevant order details and your store’s configuration."
      ]
    },
    {
      "heading": "Check active locations and the rule sequence",
      "paragraphs": [
        "Shopify order routing requires two or more active locations. Review which locations are active, then inspect the rules your store actually uses. Do not assume the default configuration is still in place.",
        "The sequence matters because Shopify applies the rules in order. Looking at a single location preference without the surrounding rules may not explain the assignment."
      ],
      "checklist": [
        "Identify the assigned location and the location you expected.",
        "Check which fulfilment locations are active.",
        "Record the configured routing rules in their current sequence.",
        "Check whether the setup uses default rules, custom priorities or both.",
        "Compare the order’s items and destination with those routing priorities before deciding what needs correcting."
      ]
    },
    {
      "heading": "Review the default routing considerations",
      "paragraphs": [
        "These considerations explain why routing is about more than choosing a familiar warehouse. However, the default strategy is not proof of your current configuration, and proximity alone does not establish why an order was assigned."
      ],
      "bullets": [
        "Minimise split fulfilments: can a location fulfil all the items in the order?",
        "Stay within the destination market when possible: does a location meet that preference?",
        "Ship from the closest location: how does proximity relate to the locations being considered?"
      ]
    },
    {
      "heading": "Check custom priorities and location metafields",
      "paragraphs": [
        "Merchants can customise routing rules to prioritise particular warehouses, balance inventory across locations or support fulfilment cost objectives. Check whether any such priorities explain the difference between your expectation and the assigned location.",
        "Shopify also describes advanced prioritisation using location metafields, such as warehouse capacity or fulfilment speed. If your rules use these fields, review the values and how they relate to the configured priorities.",
        "The presence of a metafield does not establish that its value is automatically measured or current. Custom routing objectives also do not guarantee lower costs or shorter delivery times."
      ]
    },
    {
      "heading": "Separate location assignment from stock accuracy",
      "paragraphs": [
        "Keep two questions separate: why did Shopify select this location, and are the inventory quantities correct? A routing choice can be unexpected without proving a stock discrepancy.",
        "Do not adjust stock solely to force a preferred location assignment. If there is independent evidence that quantities are wrong, investigate that as a stock-reconciliation issue rather than assuming a routing-rule change will repair the records.",
        "Changing or deactivating locations and reviewing how split shipping appears at checkout are separate tasks. Neither should replace checking the routing configuration when the immediate question is where an order was assigned."
      ]
    },
    {
      "heading": "Check whether an EU fulfilment setup fits your operation",
      "paragraphs": [
        "Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify. Vareya is generally best suited to brands shipping 500 or more orders per month.",
        "Use the fulfilment scan to describe your products, destinations and Shopify setup. Have customs, tax or specialist handling requirements? Include them in the fulfilment scan so Vareya can confirm which parts of the proposed setup can be supported.",
        "Vareya will review your answers and send an initial fit response by email. The scan is not an automatic diagnosis of a Shopify routing decision."
      ]
    },
    {
      "heading": "Source",
      "paragraphs": [
        "This article uses the Shopify Help Center page on order routing retrieved on 2 November 2026. It explains general routing behaviour, not the cause of an individual order assignment."
      ],
      "sources": [
        {
          "label": "Shopify Help Center: Order routing",
          "url": "https://help.shopify.com/en/manual/fulfillment/setup/order-routing"
        }
      ]
    }
  ]
};

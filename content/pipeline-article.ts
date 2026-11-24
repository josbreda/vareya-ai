import type { KnowledgeArticle } from "./knowledge";
export const PIPELINE_ARTICLE: KnowledgeArticle = {
  "slug": "shopify-stock-mismatch-3pl-reconciliation",
  "title": "Shopify stock does not match your 3PL: what to compare before changing quantities",
  "description": "A practical stock-reconciliation checklist: compare the same variant, location, inventory state and timestamp before changing Shopify quantities.",
  "summary": "A different stock number is a reason to investigate, not a reason to overwrite it. Build a like-for-like comparison before asking either system to change.",
  "publishedAt": "2026-11-02",
  "publishedLabel": "2 November 2026",
  "indexable": true,
  "reviewer": "Claude (AI content review; not human approval)",
  "reviewedAt": "2026-11-02",
  "topic": "Shopify stock reconciliation",
  "primaryCta": {
    "label": "Check your EU fulfilment fit",
    "route": "/free-rate-scan/"
  },
  "sections": [
    {
      "heading": "Start with the comparison, not a stock correction",
      "paragraphs": [
        "If Shopify and your warehouse show different quantities, we suggest opening an investigation before making a manual correction. First record the variant, location, inventory state and time behind each number. A comparison between two different fields cannot tell you whether stock is missing.",
        "This checklist is for a brand investigating an existing discrepancy. It is not an onboarding guide or a promise about how a particular warehouse integration works. Use it to prepare a clear question for the person responsible for your connection."
      ]
    },
    {
      "heading": "Give each number its proper name",
      "paragraphs": [
        "Shopify distinguishes stock at a location from stock available to sell. On hand combines Available, Committed and Unavailable. Committed includes unfulfilled orders, reservations for draft orders and transfers marked ready to ship. Unavailable covers stock set aside, for example by an app or for quality control. Incoming is not yet sellable stock.",
        "After receiving incoming inventory, an app may place it in a state other than Available, such as Unavailable safety stock. On a variant's inventory card, On hand with a dash for Available means the variant is inactive at that location. That is different from a dash in adjustment history, which means that change did not affect the column.",
        "Editing On hand changes Available by the same amount. Editing Available also changes On hand by the same amount. These are linked quantities, not two independent corrections.",
        "Ask your warehouse which field is comparable. Do not assume its total stock figure means Shopify Available. Also ask how the connection handles stock set aside and incoming receipts. These are questions to confirm, not statements about Vareya's configuration."
      ],
      "sources": [
        {
          "label": "Shopify Help Center: inventory states",
          "url": "https://help.shopify.com/en/manual/inventory-and-locations/fundamentals/inventory-states"
        }
      ]
    },
    {
      "heading": "Create one reconciliation row per affected variant and location",
      "paragraphs": [
        "Use a small working sheet rather than a screenshot of a grand total. Keep customer details out of it. Our suggested columns below are a working method, not a required Shopify import format."
      ],
      "table": {
        "headers": [
          "Record",
          "Why include it?"
        ],
        "rows": [
          [
            "Variant reference and SKU",
            "Make sure both sides refer to the same item, not merely a similar product name."
          ],
          [
            "Shopify location and warehouse location reference",
            "Ask the integration owner to confirm the mapping."
          ],
          [
            "Inventory state on each side",
            "State exactly which two fields you are comparing."
          ],
          [
            "Quantity and capture time, with time zone",
            "Make it possible to check what changed between the two observations."
          ],
          [
            "Last relevant adjustment or receipt reference",
            "Give the investigator a starting point without copying customer information."
          ],
          [
            "Owner, next check and resolution note",
            "Keep a clear record of who will investigate and what evidence closes the issue."
          ]
        ]
      }
    },
    {
      "heading": "Read the sequence of changes before editing",
      "paragraphs": [
        "Shopify's adjustment history identifies when a change happened, its activity and who or what created it. For a tracked variant, use this history to inspect the relevant changes. The columns distinguish the adjustment from the resulting quantity; a dash means that column was not affected.",
        "Open the product or variant details page, check that Inventory tracked is enabled in the Inventory section, and select View adjustment history. This view covers the last 180 days. For older changes, Shopify points to the Inventory adjustment changes report.",
        "Our suggested investigation method is to request the corresponding warehouse events for the same period and lay the two sequences next to each other. Ask whether an order, receipt, stock hold or manual change explains the difference. If the evidence is incomplete, leave the cause open rather than labelling it a sync failure.",
        "Our recommendation before anyone edits stock: agree which system owns the correction and how the other system should receive it. Record the intended action, the responsible person and the observation that will show it worked. Avoid making changes in both places just to make the numbers look equal."
      ],
      "sources": [
        {
          "label": "Shopify Help Center: inventory adjustment history",
          "url": "https://help.shopify.com/en/manual/inventory-and-locations/adjusting-inventory/adjustment-history"
        }
      ]
    },
    {
      "heading": "Send an investigation brief, not a guess",
      "checklist": [
        "Describe the customer-facing symptom without including customer names or addresses.",
        "Attach the affected variant and location references.",
        "Name the exact stock fields and capture times.",
        "Include relevant adjustment references and a short event sequence.",
        "List any recent manual changes you already know about.",
        "Ask who owns the next action and when you should check again.",
        "Close the issue only after recording the explanation and the follow-up observation."
      ]
    },
    {
      "heading": "What we will not promise",
      "reviewNote": "AI content review against the cited Shopify documentation and Vareya claims register. No human article approval is claimed.",
      "paragraphs": [
        "This process does not guarantee that every mismatch has the same cause or can be corrected automatically. Shopify documentation describes Shopify, not the behaviour of every warehouse connection. Confirm the field mapping, exception handling and responsibilities for your own setup.",
        "Vareya is generally best suited to brands shipping 500 or more orders per month.",
        "That is a general fit guideline, not a claim that volume alone determines suitability. Product fit is confirmed during qualification. If you are reviewing a new fulfilment setup, include your inventory questions in the fit scan."
      ],
      "internalLinks": [
        {
          "label": "Preparing Shopify product and SKU data",
          "href": "/knowledge/shopify-product-sku-data-preparation/"
        },
        {
          "label": "Comparing Shopify fulfilment providers",
          "href": "/knowledge/shopify-3pl-europe-how-to-compare/"
        }
      ]
    }
  ]
};

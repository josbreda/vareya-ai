import type { KnowledgeArticle } from "./knowledge";
export const PIPELINE_ARTICLE: KnowledgeArticle = {
  "slug": "shopify-location-deactivation-stock-check",
  "title": "Before deactivating an old Shopify fulfilment location: stock and order checks",
  "description": "Check Shopify location restrictions, stock, assigned orders and transfers before deactivation, and understand what remains afterwards.",
  "summary": "Deactivating a Shopify location stops it fulfilling orders, but does not itself clear its inventory quantities. Check the location type, default status, POS plan and outstanding work before confirming the change.",
  "topic": "Shopify location deactivation",
  "publishedAt": "2026-11-02",
  "publishedLabel": "2 November 2026",
  "indexable": true,
  "reviewer": "Claude (AI content review; not human approval)",
  "reviewedAt": "2026-11-02",
  "primaryCta": {
    "label": "Check your EU fulfilment fit",
    "route": "/free-rate-scan/?lang=en"
  },
  "sections": [
    {
      "heading": "Check the location before you deactivate it",
      "paragraphs": [
        "Before deactivating an old Shopify fulfilment location, check whether it is your default location, whether it belongs to an app, and whether it has stock, assigned orders or transfers. Also check its Shopify POS subscription and make sure another location will remain active.",
        "Deactivation stops the location fulfilling orders. It does not itself change the inventory quantities recorded there, prove that warehouse stock has moved, or end your agreement with a fulfilment provider."
      ],
      "sources": [
        {
          "label": "Shopify Help Center: setting up and managing locations",
          "url": "https://help.shopify.com/en/manual/inventory-and-locations/locations/setup"
        }
      ]
    },
    {
      "heading": "Confirm which deactivation route applies",
      "checklist": [
        "Keep at least one active location: Shopify requires this.",
        "If the old location is the default, change the default to another location first.",
        "If the location uses Shopify POS Pro, downgrade it to POS Lite before deactivation.",
        "Check whether the location is an ordinary store location or a private or third-party app location."
      ],
      "paragraphs": [
        "Shopify says private or third-party app locations cannot be deactivated through the ordinary location action. Its documented alternative is to remove the app.",
        "Do not treat app removal as a routine warehouse close-out step. Our recommendation is to ask the integration owner what removing the app will affect, including outstanding work and the connection to the warehouse, before making that change. The consequences depend on your setup."
      ],
      "sources": [
        {
          "label": "Shopify Help Center: setting up and managing locations",
          "url": "https://help.shopify.com/en/manual/inventory-and-locations/locations/setup"
        }
      ]
    },
    {
      "heading": "Check stock, assigned orders and transfers",
      "paragraphs": [
        "Review the inventory, orders and transfers assigned to the old location. Shopify describes prompts to fulfil assigned orders and reassign inventory quantities during deactivation. Pending orders or transfers that need completion or reassignment can also prevent deactivation.",
        "Review each prompt rather than assuming that selecting another location resolves every outstanding task. An inventory reassignment in Shopify is not evidence that goods have physically reached another warehouse.",
        "As a practical close-out check, record the intended receiving location, who owns each outstanding action, and how physical receipt will be confirmed. If quantities disagree, investigate the discrepancy before making corrections simply to proceed."
      ],
      "sources": [
        {
          "label": "Shopify Help Center: setting up and managing locations",
          "url": "https://help.shopify.com/en/manual/inventory-and-locations/locations/setup"
        }
      ],
      "internalLinks": [
        {
          "label": "Investigate a Shopify and 3PL stock mismatch",
          "href": "/knowledge/shopify-stock-mismatch-3pl-reconciliation/"
        }
      ]
    },
    {
      "heading": "Deactivate the location in Shopify",
      "paragraphs": [
        "For an ordinary location, use the following desktop steps after resolving the relevant prerequisites."
      ],
      "checklist": [
        "In Shopify admin, open Settings > Locations.",
        "Under All locations, select the old location.",
        "Click Deactivate location.",
        "If inventory, orders or transfers are assigned, select another location to move the inventory to where prompted. Review the proposed handling and resolve any outstanding requirements.",
        "Click Deactivate location to confirm."
      ],
      "sources": [
        {
          "label": "Shopify Help Center: deactivation steps and prerequisites",
          "url": "https://help.shopify.com/en/manual/inventory-and-locations/locations/setup"
        }
      ]
    },
    {
      "heading": "If Shopify will not let you deactivate it",
      "paragraphs": [
        "Check the reason shown by Shopify before changing the location configuration."
      ],
      "bullets": [
        "Default location: choose another default location first.",
        "Pending orders or transfers: complete or reassign the outstanding work as required.",
        "POS Pro subscription: downgrade the location to POS Lite.",
        "Permissions: in a Shopify Plus organisation, ask the account owner or administrator whether you have permission to deactivate locations.",
        "Inventory migration: when inventory is being migrated to the location, Shopify advises waiting 24–48 hours for that migration to complete. This guidance is specific to inventory migration; it is not a general deactivation timeline or a promise about the duration of a warehouse move."
      ],
      "sources": [
        {
          "label": "Shopify Help Center: setting up and managing locations",
          "url": "https://help.shopify.com/en/manual/inventory-and-locations/locations/setup"
        }
      ]
    },
    {
      "heading": "Know what remains after deactivation",
      "paragraphs": [
        "An inactive location cannot fulfil orders or act as the default location. Shopify says it is omitted from filters and menus and from inventory cards on product or variant pages.",
        "Inventory-management operations remain possible: you can view and adjust quantities, transfer inventory to and from the inactive location, and accept returns that restock inventory. These are Shopify functions, not confirmation that an old warehouse is contractually required to receive or process goods.",
        "You can reactivate a deactivated location. Deletion is different: it is permanent and requires prior deactivation. Shopify says historical order, inventory-movement and sales data remain available in reports and analytics after deletion.",
        "After the action, we recommend checking that the intended location is inactive and that stock and outstanding orders have been handled as agreed. Keep physical migration and provider close-out checks separate from the Shopify status change."
      ],
      "sources": [
        {
          "label": "Shopify Help Center: inactive locations, reactivation and deletion",
          "url": "https://help.shopify.com/en/manual/inventory-and-locations/locations/setup"
        }
      ],
      "internalLinks": [
        {
          "label": "Plan the wider fulfilment-provider switch",
          "href": "/knowledge/switching-fulfilment-providers-europe/"
        }
      ]
    },
    {
      "heading": "Assess your next fulfilment setup",
      "paragraphs": [
        "Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify.",
        "Vareya is generally best suited to brands shipping 500 or more orders per month.",
        "Product fit is confirmed during qualification. Use the fulfilment scan to describe your products, destinations and current Shopify setup, including any location or integration questions that need resolving."
      ]
    }
  ]
};

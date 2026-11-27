import type { KnowledgeArticle } from "./knowledge";
export const PIPELINE_ARTICLE: KnowledgeArticle = {
  "slug": "shopify-inventory-transfer-receiving-discrepancy",
  "title": "Shopify inventory transfer receiving discrepancies: what to check",
  "description": "Check transfer details, individual shipments, processing actions and receiving records before changing stock to resolve a Shopify receiving discrepancy.",
  "summary": "Investigate the identified transfer shipment by shipment. Match product variants, destinations and recorded quantities to physical receiving evidence, then check which processing actions were used. A difference alone does not establish missing stock or its cause.",
  "topic": "Shopify",
  "publishedAt": "2026-11-04",
  "publishedLabel": "4 November 2026",
  "indexable": true,
  "reviewer": "Claude (AI content review; not human approval)",
  "reviewedAt": "2026-11-04",
  "primaryCta": {
    "label": "Check your EU fulfilment fit",
    "route": "/free-rate-scan/?lang=en"
  },
  "sections": [
    {
      "heading": "Start with the transfer and its individual shipments",
      "paragraphs": [
        "Before changing stock, identify the transfer reference, affected product variants and destination. Compare the transfer with the receiving records for that specific movement, rather than starting with the overall inventory balance.",
        "Shopify transfers can contain multiple shipments. Additional shipments can be added while a transfer is Ready to ship or In progress. Each shipment has its own ID, status and tracking details, and can be received separately.",
        "A difference between the whole transfer quantity and one shipment's receipt is not proof of missing stock. First check whether the comparison covers the same shipments and whether further shipments are outstanding.",
        "The checklist below is a suggested investigation method, not a Shopify-prescribed discrepancy resolution procedure."
      ]
    },
    {
      "heading": "Check what the processing action recorded",
      "paragraphs": [
        "The action used to process a transfer affects how Shopify records inventory. Compare that action with dispatch records and physical receiving evidence."
      ],
      "bullets": [
        "Draft: inventory is not committed. Locations, products and quantities can still be edited.",
        "Mark as ready to ship: inventory is committed at the origin location.",
        "Move to in transit: the transfer changes to In progress, inventory is marked as incoming at the destination, and a shipment is automatically created.",
        "Mark as transferred: a shipment is automatically created and received, and inventory is made available at the destination.",
        "Transferred status: Shopify records the transfer as complete, with all items received and available at the destination."
      ]
    },
    {
      "heading": "Do not treat completion as a physical count",
      "paragraphs": [
        "Shopify describes Mark as transferred as the action to use when items have already been physically moved. Because this action automatically receives inventory, a completed transfer record is not independent evidence that someone counted the goods.",
        "If the recorded receipt differs from the warehouse count, retain both records and establish which action was taken. Do not mark a transfer complete or adjust inventory simply to make the totals agree."
      ]
    },
    {
      "heading": "Compare quantities at the same level",
      "paragraphs": [
        "Create a comparison worksheet with one row per affected variant and shipment. Keep the transfer total separate so it is not counted again for each shipment.",
        "Check whether a transfer CSV was imported. When an import into an existing transfer includes variants already on that transfer, Shopify overwrites those variants' existing quantities with the imported quantities. This does not mean every quantity on the transfer is overwritten."
      ],
      "checklist": [
        "Record the transfer reference, origin and destination.",
        "Identify the exact product variant and its SKU or other identifying reference.",
        "Record the shipment ID and shipment quantity where available.",
        "Record the quantity shown as received for the same shipment and variant.",
        "Add the physical count, count date and receiving record reference.",
        "List outstanding shipments separately, with tracking details and expected arrival dates where available.",
        "Retain any relevant transfer CSV and compare its quantities with the current transfer.",
        "Describe the remaining difference without assigning a cause before the evidence supports it."
      ]
    },
    {
      "heading": "Confirm destination and product activation",
      "paragraphs": [
        "Check that the receiving evidence refers to the destination recorded on the transfer. After a transfer has been processed, Shopify does not allow its origin or destination to be changed, although other details can be edited. If a location is wrong, seek guidance on the appropriate correction rather than assuming it can be edited.",
        "Transferring inventory to a location records quantity there but does not itself activate the product at that location. Products can be stocked as the transfer is received or activated separately.",
        "Keep an availability question separate from a quantity question. Goods being physically present but not sellable or fulfilable at the destination is a different issue from a physical count that does not match the receipt."
      ]
    },
    {
      "heading": "Document the unresolved difference before requesting a correction",
      "paragraphs": [
        "Ask the sending and receiving teams to compare their records against the same shipment IDs and product variants. Give them a concise evidence pack rather than an unexplained inventory total.",
        "Include the transfer reference, affected variants, shipment IDs, tracking details, dispatch records, receiving evidence and the quantities still in dispute. State what is known and what still needs checking.",
        "The Shopify source below explains transfer creation and processing. It does not establish the cause of a particular discrepancy or provide detailed procedures for receiving corrections, over-receipts, rejected goods or damaged quantities. Consult the relevant Shopify receiving documentation or support before making those corrections."
      ]
    },
    {
      "heading": "Source and further reading",
      "sources": [
        {
          "label": "Shopify Help Center: Creating and processing inventory transfers",
          "url": "https://help.shopify.com/en/manual/inventory-and-locations/inventory-transfers/creating-and-processing-transfers"
        }
      ]
    },
    {
      "heading": "Planning EU fulfilment",
      "paragraphs": [
        "If you are assessing a wider EU fulfilment setup, use the fulfilment scan to describe your products, sales channels and operational requirements. Keep any transfer discrepancy evidence with the teams investigating that shipment."
      ]
    }
  ]
};

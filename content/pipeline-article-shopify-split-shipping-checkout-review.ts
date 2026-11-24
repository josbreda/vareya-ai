import type { KnowledgeArticle } from "./knowledge";
export const PIPELINE_ARTICLE: KnowledgeArticle = {
  "slug": "shopify-split-shipping-checkout-review",
  "title": "Shopify separate shipping charges: review split shipping at checkout",
  "description": "Why a Shopify basket can show separate shipping charges, and how to check location groups, shipping profiles and shipping options by market.",
  "summary": "Different fulfilment locations can explain separate shipments, but they do not always mean separate shipping charges. Check the store's shipping setup, rate types and selected methods before treating the total as an error.",
  "topic": "Shopify split shipping at checkout",
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
      "heading": "Separate shipments do not always mean separate charges",
      "paragraphs": [
        "A Shopify basket can split into multiple shipments when its items cannot be fulfilled in one shipment. Separate products held at different locations are one reason. Different shipping profiles, preorders, subscriptions and Buy with Prime products can also cause a split.",
        "The shipping charge depends on more than the number of shipments. Location groups, shipping profiles, rate types and the customer's selected shipping options can affect the total. Two shipments do not automatically mean two additive charges.",
        "Start by recording what checkout shows, then compare it with the applicable settings. An unexpected total is a reason to investigate, not proof that Shopify has charged incorrectly."
      ],
      "sources": [
        {
          "label": "Shopify Help Center: split shipping in Shopify Checkout",
          "url": "https://help.shopify.com/en/manual/checkout-settings/split-shipping"
        }
      ]
    },
    {
      "heading": "First identify which shipping setup the store uses",
      "paragraphs": [
        "Before changing anything, establish whether your store uses shipping options by market. Shopify documents different charge behaviour for this setup.",
        "For stores upgraded to shipping options by market, split shipping is activated and the setting to activate or deactivate it no longer applies. Do not look for the older control as a universal solution.",
        "Where the setting still applies, Shopify places it under Settings > Shipping and delivery. The entry point below the shipping profile list is split shipping or Manage, depending on whether fulfillable inventory settings are present. Check the setup before deciding whether a display change is relevant."
      ]
    },
    {
      "heading": "Compare the three documented charge patterns",
      "bullets": [
        "Different locations within the same location group: in Shopify's flat-rate example, a single flat-rate charge covers the split order. This is not a rule for every rate type. Check that the locations belong to the same group and that the example matches your rate setup.",
        "Different location groups or shipping profiles: Shopify's example adds the shipping charges together. Customers can use More shipping options to select different available methods for individual shipments. Check each product's profile and the relevant location groups.",
        "Shipping options by market: when multiple shipments use flat rates or order-amount rates under the same shipping option, the customer pays once at the highest matching rate. Other shipments covered by that option are labelled Included."
      ],
      "paragraphs": [
        "Under shipping options by market, rates are added when customers choose different shipping options for different shipments, when shipments use app-provided rates, or when the order combines preorders with items shipping immediately. The preorder exception applies even when the rates belong to the same shipping option.",
        "A method available for only some shipments can remain available through More shipping options. Selecting it can add its price to the charges for other shipments. Compare the selected methods, not just their names in the store settings."
      ],
      "sources": [
        {
          "label": "Shopify: charge patterns and shipping options by market",
          "url": "https://help.shopify.com/en/manual/checkout-settings/split-shipping"
        }
      ]
    },
    {
      "heading": "Build a checkout investigation record",
      "paragraphs": [
        "Use a controlled test basket to make the result repeatable. The checklist below is a suggested investigation method, not a Shopify-required procedure. Keep customer names, contact details and full addresses out of shared notes."
      ],
      "checklist": [
        "Record the affected product variants and quantities.",
        "Record the stock locations and relevant location fulfilment settings.",
        "Identify each product's shipping profile and location group.",
        "Record the test destination country or market and any non-identifying destination detail needed to reproduce the rate.",
        "Note whether shipping options by market applies.",
        "Identify the rate types, including any app-provided rates.",
        "Note whether the basket contains preorders, subscriptions or Buy with Prime products.",
        "Record the displayed shipment groups, selected shipping methods, Included labels and total shipping charge.",
        "Capture the test time and relevant settings so another person can repeat the check."
      ]
    },
    {
      "heading": "Check grouping, limitations and app compatibility",
      "paragraphs": [
        "Customers can choose available shipping methods where checkout offers them, but they cannot choose how products are divided into shipments. If products that could ship together are being split, review shipping profiles and location fulfilment settings before making an authorised change.",
        "Split shipping does not support dividing multiples of the same line item across locations to meet the requested quantity. Do not assume that enough stock across several locations means checkout can split that quantity between them.",
        "Shopify also lists limitations for draft-order checkouts with an existing shipping line and B2B checkouts that require orders to be placed as drafts. With local delivery activated, checkout does not display multiple shipments.",
        "Some third-party fulfilment apps might not be compatible. Test eligible items in storefront checkout and ask the app developer where compatibility is uncertain. Shopify's documentation does not establish compatibility for every warehouse connection, including a particular Vareya or ShipHero configuration."
      ],
      "sources": [
        {
          "label": "Shopify: split-shipping limitations and third-party app compatibility",
          "url": "https://help.shopify.com/en/manual/checkout-settings/split-shipping"
        }
      ]
    },
    {
      "heading": "Retest the charge rather than promise a fix",
      "paragraphs": [
        "Before changing settings, write down the expected result and who owns the change. Retest the same basket, destination and selected methods afterwards. Record both the shipment grouping and the total charge.",
        "Check whether the observed total follows the applicable charge pattern. If it remains unexplained, send the investigation record to the store administrator or relevant app developer rather than making several unrelated changes at once.",
        "Do not treat hiding the split-shipping display as proof that physical shipments have been combined or shipping costs removed. A display setting, checkout charge and warehouse shipping plan are separate things to verify."
      ]
    },
    {
      "heading": "Review fulfilment fit separately from checkout configuration",
      "paragraphs": [
        "A checkout-charge investigation and a fulfilment-provider assessment answer different questions. A fit enquiry should explain the intended stock locations, product mix, destination markets and shipping requirements; it should not assume that changing provider will resolve the checkout behaviour.",
        "Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify. That integration fact is not a guarantee about split-shipping compatibility or a promise to repair checkout settings.",
        "Vareya is generally best suited to brands shipping 500 or more orders per month.",
        "This is a general suitability indication, not a hard minimum or a guarantee of fit. Product fit is confirmed during qualification. Use the fulfilment scan to describe your proposed operation and include any checkout or integration questions that need confirmation."
      ]
    }
  ]
};

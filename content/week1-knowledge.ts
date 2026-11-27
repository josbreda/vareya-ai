import type { KnowledgeArticle } from "./knowledge";

export const WEEK1_ARTICLES: KnowledgeArticle[] = [
  {
    "slug": "shiphero-3pl-order-inventory-workflow",
    "title": "ShipHero for Shopify fulfilment: agree the data flow before go-live",
    "description": "A practical onboarding guide to SKU mapping, stock ownership, order changes and test orders when Shopify connects to a 3PL using ShipHero.",
    "topic": "Shopify & warehouse operations",
    "imageAlt": "Conceptual illustration of warehouse stock, an order system and a parcel connected by a green data flow",
    "sections": [
      {
        "heading": "Start with responsibilities, not a connection button",
        "paragraphs": [
          "VareYa uses ShipHero as its warehouse management system, with Shopify integration available as part of the agreed setup. Connecting a store is one step in onboarding. The team must also agree which system controls each field, which stock is available to sell, and when an order can still be changed.",
          "A useful starting document has one row for each SKU and one column for its barcode, product description, packing unit and bundle relationship. A product name is not a reliable identifier: two variants can share a title while requiring different stock and packing instructions. Resolve duplicate or missing SKUs before test orders."
        ]
      },
      {
        "heading": "Define which system owns each change",
        "paragraphs": [
          "ShipHero separates inventory/product settings, order settings and field-level data syncing. Its documentation warns that enabling the same sync in both directions can create an overwrite loop. Review the intended direction before enabling settings; the existence of a software option does not mean it is part of every customer setup."
        ],
        "table": {
          "headers": [
            "Data",
            "Decision to document",
            "Test to run"
          ],
          "rows": [
            [
              "SKU and barcode",
              "Who creates and corrects the item master?",
              "Import two similar variants and verify the pick identity."
            ],
            [
              "Available stock",
              "Which location and stock status can Shopify sell?",
              "Receive a small test quantity and reconcile both systems."
            ],
            [
              "Order edits",
              "When does a change require warehouse intervention?",
              "Change an address before release, then test the agreed cut-off."
            ],
            [
              "Shipment status",
              "Which event updates the store and customer?",
              "Complete a test shipment and inspect the returned status."
            ]
          ]
        },
        "sources": [
          {
            "label": "ShipHero: Shopify integration settings",
            "url": "https://software-help.shiphero.com/hc/en-us/articles/4419345212685-Overview-Shopify-Integration-Settings"
          }
        ]
      },
      {
        "heading": "Use a small test set that can fail visibly",
        "paragraphs": [
          "Choose orders that expose the edges of your actual operation: a single item, two different variants, a bundle, and an unavailable item. Add a cancellation or held-order scenario if your business uses it. Record the expected stock movement and order state before running each test.",
          "If a result differs, keep the order reference, timestamps and both system states together. Repeating the same order without recording the mismatch makes troubleshooting harder. Decide whether the issue concerns master data, receiving, location assignment or order release before changing stock manually."
        ],
        "checklist": [
          "Confirm the Shopify store and warehouse location being connected.",
          "Confirm SKU and barcode mapping for every launch item.",
          "Agree stock availability and order-change responsibilities.",
          "Approve packing, inserts and return instructions.",
          "Complete and reconcile test orders before go-live."
        ]
      },
      {
        "heading": "What to send with your onboarding request",
        "paragraphs": [
          "Share your store platform, active SKU count, normal monthly volume, target markets and any bundles or subscription patterns. Include a sample product export and your expected order-change process. VareYa can then confirm the service scope and the onboarding steps for your account."
        ],
        "internalLinks": [
          {
            "label": "Shopify fulfilment in Europe",
            "href": "/shopify-fulfilment-europe/"
          },
          {
            "label": "Investigate a Shopify stock mismatch",
            "href": "/knowledge/shopify-stock-mismatch-3pl-reconciliation/"
          },
          {
            "label": "How onboarding works at VareYa",
            "href": "/knowledge/how-onboarding-works-at-vareya/"
          }
        ]
      }
    ],
    "summary": "A practical onboarding guide to SKU mapping, stock ownership, order changes and test orders when Shopify connects to a 3PL using ShipHero.",
    "publishedAt": "2026-11-06",
    "publishedLabel": "6 November 2026",
    "indexable": true,
    "primaryCta": {
      "label": "Check your fulfilment fit",
      "route": "/free-rate-scan/"
    },
    "secondaryCta": {
      "label": "Request a fulfilment quote",
      "route": "/request-fulfilment-quote/"
    }
  },
  {
    "slug": "direct-entry-uk-royal-mail-handover",
    "title": "Direct Entry UK and Royal Mail: separate the journey into stages",
    "description": "Understand the line-haul, customs preparation and local carrier handover before setting a delivery promise for orders shipped from Europe to the UK.",
    "topic": "Shipping & carrier handover",
    "imageAlt": "Conceptual illustration of grouped parcel transport followed by local delivery handover",
    "sections": [
      {
        "heading": "One customer order, more than one transport stage",
        "paragraphs": [
          "A UK customer sees one checkout promise. Operationally, an order dispatched from a European warehouse can pass through packing, grouped transport, customs processing and a UK delivery network. Direct Entry describes a route into that local network; it does not remove the preceding stages.",
          "VareYa’s documented UK flow uses grouped transport and a Royal Mail handover. The actual service, collection schedule, destination coverage and commercial terms must be confirmed for the brand. Build the customer promise around the complete route, including the time before the local carrier accepts the parcel."
        ]
      },
      {
        "heading": "Keep the handover events separate",
        "table": {
          "headers": [
            "Stage",
            "Information to confirm",
            "Evidence to keep"
          ],
          "rows": [
            [
              "Warehouse release",
              "Stock, address and order ready for dispatch",
              "Order release and packing record"
            ],
            [
              "Grouped transport",
              "Collection schedule and consolidation point",
              "Dispatch manifest and transport reference"
            ],
            [
              "Customs preparation",
              "Responsible party and required shipment data",
              "Agreed document set and exception contact"
            ],
            [
              "UK carrier handover",
              "Exact Royal Mail service and acceptance event",
              "Carrier acceptance or first tracking event"
            ],
            [
              "Delivery or exception",
              "Customer communication and escalation owner",
              "Tracking status and action taken"
            ]
          ]
        },
        "paragraphs": [
          "A shipping label alone does not establish that the local delivery stage has started. When a customer asks where an order is, first identify the latest confirmed event. This makes it possible to distinguish a warehouse exception from an in-transit or carrier-delivery exception."
        ]
      },
      {
        "heading": "A service name is not an end-to-end guarantee",
        "paragraphs": [
          "Royal Mail describes 24 and 48 business services using delivery aims and service-specific limits. Those aims concern the selected Royal Mail service; they are not a promise for the entire journey from Breda. Confirm the actual service before using its name in checkout copy.",
          "Do not apply one carrier format across every destination. VareYa’s Boxable classification helps assess the packed order, while the chosen carrier still has its own size, weight and product rules. A parcel can fit a warehouse profile but need a different delivery service."
        ],
        "sources": [
          {
            "label": "Royal Mail: 24 and 48 business services",
            "url": "https://www.royalmail.com/business/shipping/uk-services/royal-mail-24-48"
          }
        ],
        "internalLinks": [
          {
            "label": "Boxable Shipping and route selection",
            "href": "/boxable-shipping/"
          },
          {
            "label": "Letterbox parcel fulfilment",
            "href": "/letterbox-parcel-fulfilment/"
          }
        ]
      },
      {
        "heading": "Prepare a route review with real order data",
        "checklist": [
          "Share UK order volume and dispatch patterns.",
          "Measure and weigh representative complete packed orders.",
          "List products, destinations and handling restrictions.",
          "Agree who supplies and checks the customs information.",
          "Confirm the service, tracking events and exception contact.",
          "Test the full flow before publishing a delivery promise."
        ],
        "paragraphs": [
          "Use a sample covering your common and awkward orders. A one-item envelope and a multi-item carton may need different handling even when both contain the same product range. Ask for the route and service assumptions alongside the quotation so that a rate can be interpreted correctly."
        ]
      }
    ],
    "summary": "Understand the line-haul, customs preparation and local carrier handover before setting a delivery promise for orders shipped from Europe to the UK.",
    "publishedAt": "2026-11-06",
    "publishedLabel": "6 November 2026",
    "indexable": true,
    "primaryCta": {
      "label": "Check your fulfilment fit",
      "route": "/free-rate-scan/"
    },
    "secondaryCta": {
      "label": "Request a fulfilment quote",
      "route": "/request-fulfilment-quote/"
    }
  },
  {
    "slug": "packaging-materials-packed-order-check",
    "title": "Packaging materials: test the complete packed order",
    "description": "A warehouse checklist for choosing mailers, cartons, protection and inserts with attention to damage risk, packed dimensions and repeatable packing.",
    "topic": "Packing & practical warehouse knowledge",
    "imageAlt": "Conceptual illustration of a protective mailer, carton and packing materials on a workbench",
    "sections": [
      {
        "heading": "The product dimensions are only the starting point",
        "paragraphs": [
          "A product that looks letterbox-sized on a product page may become a parcel after protection, inserts and a second item are added. Assess the closed, ready-to-ship package. Measure its longest, widest and thickest points and weigh it with every component included.",
          "Start with your most common order combinations, then add those most likely to fail: two rigid products, a bundle with an insert, or a fragile item beside a heavier one. A packaging choice should work repeatedly at a packing station, rather than only in a carefully arranged sample."
        ]
      },
      {
        "heading": "Match the material to the job",
        "table": {
          "headers": [
            "Material",
            "Useful question",
            "Packing check"
          ],
          "rows": [
            [
              "Protective mailer",
              "Can the contents tolerate the mailer’s flexibility?",
              "Check corners, seals and movement after closing."
            ],
            [
              "Corrugated carton",
              "Does the order need rigid protection or separation?",
              "Confirm fit and prevent movement inside the carton."
            ],
            [
              "Paper or other void fill",
              "What movement must the protection stop?",
              "Use an agreed quantity and placement."
            ],
            [
              "Divider or insert",
              "Must items be separated or presented in a fixed order?",
              "Check the fit for each product variant."
            ],
            [
              "Tape and closure",
              "Will the parcel remain secure in handling?",
              "Check closure and label placement."
            ]
          ]
        },
        "paragraphs": [
          "Choosing less material can reduce package size, but an unsupported protection change can increase damage. Agree the pack specification before changing materials and record what the packer should do when the preferred packaging does not fit."
        ]
      },
      {
        "heading": "Check the profile and the carrier separately",
        "paragraphs": [
          "VareYa’s Boxable A profile assesses a complete packed order up to 38 × 26.5 × 3.2 cm and 2 kg. Classification within that profile is not automatic acceptance by every carrier or for every product. Product suitability, destination and the selected service still need review.",
          "For an order outside A, record the actual dimensions and weight. Do not assume every larger order is accepted under another profile. Confirm the applicable shipping route and packaging requirement before using the result in your quotation assumptions."
        ],
        "internalLinks": [
          {
            "label": "Boxable product framework",
            "href": "/boxable-product-framework/"
          },
          {
            "label": "Small parcel fulfilment",
            "href": "/small-parcel-fulfilment-europe/"
          },
          {
            "label": "A documented BeLean letterbox example",
            "href": "/knowledge/norwegian-lab-belean-letterbox-example/"
          }
        ]
      },
      {
        "heading": "Make the packing brief usable at the bench",
        "checklist": [
          "Name the packaging and the order combinations it covers.",
          "Show item arrangement and protection with a sample or photograph.",
          "Include inserts, labels and closure instructions.",
          "Record complete packed dimensions and weight.",
          "Define the fallback when the specified pack does not fit.",
          "Agree how changes are approved and communicated."
        ],
        "paragraphs": [
          "Bring representative products and order combinations into the fulfilment discussion. VareYa can review packing work, storage needs and shipping fit together. The final material choice and charges belong in the agreed service setup; a smaller package alone does not establish a lower total cost."
        ]
      }
    ],
    "summary": "A warehouse checklist for choosing mailers, cartons, protection and inserts with attention to damage risk, packed dimensions and repeatable packing.",
    "publishedAt": "2026-11-06",
    "publishedLabel": "6 November 2026",
    "indexable": true,
    "primaryCta": {
      "label": "Check your fulfilment fit",
      "route": "/free-rate-scan/"
    },
    "secondaryCta": {
      "label": "Request a fulfilment quote",
      "route": "/request-fulfilment-quote/"
    }
  },
  {
    "slug": "supplements-fulfilment-batch-expiry",
    "title": "Supplements fulfilment: batch, expiry and packing decisions",
    "description": "Prepare supplement stock for a fulfilment discussion with checks for product identification, batch records, expiry handling, packing and returns.",
    "topic": "Sector fulfilment",
    "imageAlt": "Conceptual illustration of supplement packs separated into warehouse trays for batch handling",
    "sections": [
      {
        "heading": "Qualify the actual product range",
        "paragraphs": [
          "Supplements can arrive as strips, sachets, tubs, bottles or bundled packs. These formats create different receiving, storage and packing needs. Start with the actual items and required handling conditions, rather than treating the category name as sufficient evidence of fit.",
          "Share the SKU list, packaging format, barcode structure and supplier handling instructions. Identify whether a batch number and expiry date are printed on each saleable unit, an outer carton, or both. Confirm the required recording process before the first inbound delivery."
        ]
      },
      {
        "heading": "Define what must remain traceable",
        "table": {
          "headers": [
            "Question",
            "Why it matters"
          ],
          "rows": [
            [
              "Which identifier distinguishes the product variant?",
              "Similar labels must not lead to the wrong item being picked."
            ],
            [
              "Where are batch and expiry details recorded?",
              "Receiving needs a consistent source for each record."
            ],
            [
              "Which stock-selection rule is agreed?",
              "The team needs instructions for eligible stock and exceptions."
            ],
            [
              "What happens to short-dated or unclear stock?",
              "Hold and escalation decisions should be explicit."
            ],
            [
              "How is a returned unit identified?",
              "The return needs a link to its original product and order."
            ]
          ]
        },
        "paragraphs": [
          "Do not assume a software capability guarantees a particular operational rule. Agree who maintains the records, who checks an exception and when the brand must decide what happens next. The documented BeLean example records batch and expiry in ShipHero; another brand’s requirements still need their own review."
        ]
      },
      {
        "heading": "Test the real order combinations",
        "paragraphs": [
          "A flat strip order may fit a protective envelope, while bottles or multi-pack orders may need a carton and separation. Check the entire packed order, including inserts and protection. Subscription orders need a clear definition of the contents and what to do when a component is unavailable.",
          "Keep an approved packing example with the instructions. If a product or bundle changes, review the pack again instead of assuming the old dimensions and carrier choice still apply."
        ],
        "internalLinks": [
          {
            "label": "Norwegian Lab / BeLean: one documented packing profile",
            "href": "/knowledge/norwegian-lab-belean-letterbox-example/"
          },
          {
            "label": "Packaging materials and the packed-order check",
            "href": "/knowledge/packaging-materials-packed-order-check/"
          },
          {
            "label": "Cosmetics and supplements fulfilment",
            "href": "/cosmetics-supplements-fulfilment-europe/"
          }
        ]
      },
      {
        "heading": "Agree returns before the first return arrives",
        "paragraphs": [
          "Distinguish an unopened returned unit from an opened, damaged or unidentifiable unit. Record the inspection and escalation process, and define who can authorize further handling. A return arriving at the warehouse is not, by itself, a decision that it can be sold again.",
          "For a useful assessment, send product formats, SKU count, normal volume, destinations, shelf-life requirements and the planned return policy. VareYa confirms the product and service fit during qualification."
        ],
        "checklist": [
          "Product and barcode list supplied.",
          "Batch and expiry recording requirements agreed.",
          "Storage and handling instructions reviewed.",
          "Representative packs checked and measured.",
          "Exception and return decisions assigned."
        ]
      }
    ],
    "summary": "Prepare supplement stock for a fulfilment discussion with checks for product identification, batch records, expiry handling, packing and returns.",
    "publishedAt": "2026-11-06",
    "publishedLabel": "6 November 2026",
    "indexable": true,
    "primaryCta": {
      "label": "Check your fulfilment fit",
      "route": "/free-rate-scan/"
    },
    "secondaryCta": {
      "label": "Request a fulfilment quote",
      "route": "/request-fulfilment-quote/"
    }
  },
  {
    "slug": "cosmetics-skincare-fulfilment-packing",
    "title": "Cosmetics and skincare fulfilment: protect the product and the order",
    "description": "A practical guide to product qualification, leak protection, variant identification, bundles and return decisions for cosmetics and skincare brands.",
    "topic": "Sector fulfilment",
    "imageAlt": "Conceptual illustration of skincare bottles protected by paper dividers inside a parcel",
    "sections": [
      {
        "heading": "Review formats and handling needs separately",
        "paragraphs": [
          "A sealed cream jar, a glass serum bottle and an aerosol can should not be treated as the same fulfilment task. Share product formats, packaging and handling information at qualification. Flag liquids, glass, pressurised products and special storage or transport requirements so the appropriate service can be checked.",
          "Do not infer acceptance from a product being small enough for a parcel. Physical dimensions are one part of the review; the product, route and handling requirements also matter. VareYa confirms these points before the service is agreed."
        ]
      },
      {
        "heading": "Build a packing test around realistic failures",
        "table": {
          "headers": [
            "Order characteristic",
            "Test or instruction to agree"
          ],
          "rows": [
            [
              "Liquid or cream",
              "Check the closure and the response to a leaking unit."
            ],
            [
              "Glass container",
              "Check protection and separation from other items."
            ],
            [
              "Multiple similar variants",
              "Use clear SKU and barcode identification."
            ],
            [
              "Gift set or bundle",
              "Define components, arrangement and missing-item handling."
            ],
            [
              "Presentation-sensitive packaging",
              "Agree acceptable condition and extra protection."
            ]
          ]
        },
        "paragraphs": [
          "Use the real saleable pack for the test, including any sleeve, seal and presentation box. Protection should remain workable for the warehouse team and fit the order combinations you sell. A single-item sample is not enough if most orders contain two or three products."
        ]
      },
      {
        "heading": "Keep stock identity and pack instructions together",
        "paragraphs": [
          "Send a product list that distinguishes sizes, shades, fragrances and bundle components. Where batch or expiry information is relevant, agree what must be recorded and checked. Keep product changes connected to the packing brief: a new bottle shape or closure can affect the protection and final package size.",
          "If a pack does not fit the selected material, the team needs a defined fallback. Record who approves that change and whether the carrier service or price assumptions need review."
        ],
        "internalLinks": [
          {"label": "NonBoxable packed-order profiles: dimensions do not establish product or carrier acceptance", "href": "/nonboxable/"},
          {
            "label": "Packaging materials: test the packed order",
            "href": "/knowledge/packaging-materials-packed-order-check/"
          },
          {
            "label": "Cosmetics and supplements fulfilment in Europe",
            "href": "/cosmetics-supplements-fulfilment-europe/"
          },
          {
            "label": "Small parcel fulfilment",
            "href": "/small-parcel-fulfilment-europe/"
          }
        ]
      },
      {
        "heading": "Separate a return from a resale decision",
        "paragraphs": [
          "Set instructions for unopened, opened, leaking and damaged returns. Record what the warehouse inspects and reports to the brand. Any decision about restocking or other handling must follow the agreed product-specific process.",
          "For a first review, share product formats, normal order combinations, monthly volume, sales channels, destinations and presentation requirements. Add handling documents where relevant. This gives VareYa context to assess fit and identify questions before preparing the commercial setup."
        ],
        "checklist": [
          "Formats and special handling requirements disclosed.",
          "Similar variants have distinct identifiers.",
          "Representative multi-item packs tested.",
          "Packaging fallback and approval owner agreed.",
          "Return inspection and further handling defined."
        ]
      }
    ],
    "summary": "A practical guide to product qualification, leak protection, variant identification, bundles and return decisions for cosmetics and skincare brands.",
    "publishedAt": "2026-11-06",
    "publishedLabel": "6 November 2026",
    "indexable": true,
    "primaryCta": {
      "label": "Check your fulfilment fit",
      "route": "/free-rate-scan/"
    },
    "secondaryCta": {
      "label": "Request a fulfilment quote",
      "route": "/request-fulfilment-quote/"
    }
  },
  {
    "slug": "norwegian-lab-belean-letterbox-example",
    "title": "Norwegian Lab / BeLean: a documented letterbox packing example",
    "description": "How one BeLean supplement-strip order fits a compact packing profile: two strips, protective packaging, recorded dimensions and a defined carrier service.",
    "topic": "Customer packing example",
    "imageAlt": "Supplied BeLean promotional illustration showing a letterbox delivery concept; actual packing photographs are shown separately",
    "sections": [
      {
        "heading": "The order that was assessed",
        "paragraphs": [
          "This example concerns the documented BE-01 order profile for Norwegian Lab / BeLean. It contains two supplement or vitamin strips packed in a white protective bubble envelope. The complete package measures 15 × 10 × 3 cm and weighs 30 g.",
          "The photograph shows BeLean product packaging supplied for this example. It is not a photograph of the complete measured two-strip shipment. The measurements and process details below refer specifically to the documented BE-01 profile."
        ],
        "table": {
          "headers": [
            "Part of the profile",
            "Documented detail"
          ],
          "rows": [
            [
              "Contents",
              "Two supplement / vitamin strips"
            ],
            [
              "Packaging",
              "White protective bubble envelope"
            ],
            [
              "Complete packed dimensions",
              "15 × 10 × 3 cm"
            ],
            [
              "Complete packed weight",
              "30 g"
            ],
            [
              "Carrier service",
              "PostNL letterbox parcel with Track & Trace"
            ],
            [
              "Warehouse records",
              "Batch and expiry recorded in ShipHero"
            ]
          ]
        }
      },
      {
        "heading": "Why the complete pack matters",
        "paragraphs": [
          "VareYa’s Boxable A profile uses maximum complete packed dimensions of 38 × 26.5 × 3.2 cm and a maximum weight of 2 kg. The documented BE-01 order is within each of those limits. The check includes the protective envelope, rather than only the loose strips.",
          "This is a finding about one packed order profile. A different number of strips, an added product or a different protective pack would need a new measurement. It does not establish that every Norwegian Lab product or every supplement order fits the same carrier service."
        ],
        "internalLinks": [
          {
            "label": "Boxable A and the product framework",
            "href": "/boxable-product-framework/"
          },
          {
            "label": "Letterbox parcel fulfilment",
            "href": "/letterbox-parcel-fulfilment/"
          }
        ]
      },
      {
        "heading": "Stock records and returned units",
        "paragraphs": [
          "For this documented setup, batch and expiry are recorded in ShipHero. An unopened return is inspected and registered through an RMA in ShipHero. Further handling depends on the agreed instructions for the product and return.",
          "The useful lesson is to keep product identity, packed-order specification and return instructions connected. Dimensions alone do not decide stock handling or what can happen to a returned unit."
        ]
      },
      {
        "heading": "Apply the same checks to your own products",
        "checklist": [
          "Select a representative order combination.",
          "Include the actual protective packaging and inserts.",
          "Measure and weigh the closed, complete package.",
          "Confirm the carrier service and destination.",
          "Agree batch, expiry and return requirements."
        ],
        "paragraphs": [
          "Share your product and packed-order details in the fulfilment scan. VareYa will review the operational fit and the information needed for the next step. This example describes the packing setup; it does not claim a measured saving, delivery improvement or customer testimonial."
        ],
        "internalLinks": [
          {
            "label": "Supplement fulfilment preparation",
            "href": "/knowledge/supplements-fulfilment-batch-expiry/"
          },
          {
            "label": "Packaging materials checklist",
            "href": "/knowledge/packaging-materials-packed-order-check/"
          }
        ]
      }
    ],
    "summary": "How one BeLean supplement-strip order fits a compact packing profile: two strips, protective packaging, recorded dimensions and a defined carrier service.",
    "publishedAt": "2026-11-06",
    "publishedLabel": "6 November 2026",
    "indexable": true,
    "primaryCta": {
      "label": "Check your fulfilment fit",
      "route": "/free-rate-scan/"
    },
    "secondaryCta": {
      "label": "Request a fulfilment quote",
      "route": "/request-fulfilment-quote/"
    }
  }
];


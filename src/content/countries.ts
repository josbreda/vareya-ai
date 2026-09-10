/**
 * Country data for the geo content cluster (non-EU markets).
 * Claims ceiling: content/claims-register.md v1.6 — every capability sentence
 * on the pages is rendered from @/content/facts (verbatim). The paragraphs
 * below are general, non-advisory operational context; customs/VAT statements
 * reference official sources and explicitly stay outside Vareya's scope.
 * consultedAt = date the official sources were checked (2026-09-09).
 */

export interface OfficialSource {
  label: string;
  href: string;
}

export interface CountryData {
  slug: string;
  name: string;
  adjective: string; // e.g. "Canadian" — used in titles and copy
  distanceNote: string; // corridor/distance context, one or two sentences
  market: string[]; // 2-3 paragraphs: why brands from this market assess EU stock
  customs: string[]; // 2-3 paragraphs: border/customs/VAT context (general, sourced)
  returnsContext: string[]; // 1-2 paragraphs: returns angle for this market
  shopifyContext: string[]; // 1-2 paragraphs specific to the Shopify page
  sources: OfficialSource[];
  consultedAt: string;
}

export const EU_SOURCES: OfficialSource[] = [
  {
    label: "Customs formalities for low value consignments — European Commission",
    href: "https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-operations/customs-formalities-low-value-consignments_en",
  },
  {
    label: "Temporary flat fee on low-value imports (until 1 July 2028) — European Commission",
    href: "https://taxation-customs.ec.europa.eu/news/guidance-and-legal-text-temporary-flat-fee-low-value-imports-which-will-apply-until-1-july-2028-2026-06-08_en",
  },
  {
    label: "Importing non-EU products: a checklist — Business.gov.nl",
    href: "https://business.gov.nl/international/import/importing-products-from-a-non-eu-country/",
  },
];

export const COUNTRIES: Record<string, CountryData> = {
  "united-kingdom": {
    slug: "united-kingdom",
    name: "the United Kingdom",
    adjective: "UK",
    distanceNote:
      "The UK sits directly across the Channel from the Netherlands, so goods held in Breda can reach British and European customers through established road, air and parcel networks.",
    market: [
      "Since the UK left the EU customs union, UK brands selling to European customers face customs formalities on every parcel sent across the Channel. Holding stock inside the EU moves that border crossing to the inbound freight stage: goods enter the EU once as a consolidated shipment, and customer orders are then fulfilled from inside the EU.",
      "UK brands with meaningful European order volume often compare two setups: fulfilling EU orders from their UK operation, or positioning stock in the EU and letting a fulfilment partner run the European side. Vareya operates a warehouse in Breda, the Netherlands, and fulfils orders from there.",
      "Shipments to the United Kingdom may be entered directly into the Royal Mail domestic network. Exact delivery timing depends on the agreed shipping method and is confirmed during qualification.",
    ],
    customs: [
      "For goods entering the EU from the UK, an import declaration is required and duties and VAT may apply depending on the product, its origin and its value. The import declaration is prepared by the brand or its customs representative; Vareya's role starts when the goods arrive at the warehouse in Breda.",
      "In the other direction, UK VAT rules on overseas goods sold directly to UK customers are set out by HMRC; where goods are held inside the UK, separate UK VAT registration obligations can apply. Confirm the current position for your setup with HMRC guidance and your own advisers.",
    ],
    returnsContext: [
      "Returns from European customers are a key driver for UK brands to position stock in the EU: a returned parcel that lands at a warehouse inside the EU does not have to cross the UK border again before it can be processed.",
      "Returns handling is available. Contact Vareya to discuss the required returns process. The return flow — where parcels arrive, what is inspected, and what happens to restocked or unsellable items — is agreed per operation during qualification.",
    ],
    shopifyContext: [
      "Many UK Shopify stores sell into the EU with their store, currency and product catalogue already set up. The fulfilment question is usually operational: where stock sits and how orders flow from Shopify to the warehouse.",
      "Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify. Orders sync from the store, are picked and packed in Breda, and are handed to the carrier network.",
    ],
    sources: [
      {
        label: "VAT and overseas goods sold directly to customers in the UK — GOV.UK",
        href: "https://www.gov.uk/guidance/vat-and-overseas-goods-sold-directly-to-customers-in-the-uk",
      },
      {
        label: "VAT and overseas goods sold to customers in the UK using online marketplaces — GOV.UK",
        href: "https://www.gov.uk/guidance/vat-and-overseas-goods-sold-to-customers-in-the-uk-using-online-marketplaces",
      },
    ],
    consultedAt: "2026-09-09",
  },

  "united-states": {
    slug: "united-states",
    name: "the United States",
    adjective: "US",
    distanceNote:
      "The US is a long-haul distance from European customers, which makes the choice between shipping every order individually across the Atlantic and holding stock in the EU a meaningful operational decision.",
    market: [
      "US brands often start serving European customers by shipping each order individually from the US. When European volume grows, that means every parcel crosses the EU border on its own, with customs formalities, duties and VAT potentially applying per parcel depending on value and classification.",
      "Holding stock in a warehouse inside the EU changes the pattern: goods cross the EU border once as a consolidated inbound shipment, and European orders are fulfilled from that stock. Whether the move makes sense depends on order volumes, products and destination mix.",
      "Vareya operates one warehouse, in Breda in the Netherlands, and fulfils orders from there to European customers and other approved international destinations.",
    ],
    customs: [
      "Goods entering the EU from the US require an import declaration, and duties and VAT may apply. The EU's €22 VAT exemption for low-value imports ended in July 2021; for goods with an intrinsic value up to €150, the IOSS scheme can simplify VAT collection at checkout, and since July 2026 a temporary flat fee applies to relevant low-value imports until July 2028.",
      "The import declaration, EORI registration and VAT route are the responsibility of the brand or its customs and tax advisers. Customs clearance support is available for shipments into and out of Europe. Contact Vareya to discuss specific requirements.",
    ],
    returnsContext: [
      "Returns are usually the decisive argument for US brands to evaluate EU stock: a return that lands inside the EU can be processed without crossing the Atlantic again. Returns handling is available. Contact Vareya to discuss the required returns process.",
    ],
    shopifyContext: [
      "A US Shopify store can continue to run exactly as it does today; the change is where stock is held and where orders are fulfilled from. Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify, so orders placed on the store flow to the Breda warehouse without a separate upload process.",
    ],
    sources: [
      {
        label: "European Retail eCommerce — International Trade Administration (trade.gov)",
        href: "https://www.trade.gov/european-retail-ecommerce",
      },
      {
        label: "eCommerce — International Trade Administration (trade.gov)",
        href: "https://www.trade.gov/ecommerce",
      },
    ],
    consultedAt: "2026-09-09",
  },

  canada: {
    slug: "canada",
    name: "Canada",
    adjective: "Canadian",
    distanceNote:
      "Canada is a long-haul distance from European customers, so consolidating stock in the EU removes a cross-Atlantic crossing from every individual customer order.",
    market: [
      "Canadian brands that sell into Europe face the same core choice as US brands: ship every order across the Atlantic, or position stock inside the EU and fulfil European orders from there.",
      "The EU and Canada have a trade agreement that can affect duty treatment for qualifying goods, depending on origin and documentation. Whether a reduced rate applies to your products is a customs question for your advisers — it does not change the operational pattern of holding stock in the EU.",
      "Vareya operates a warehouse in Breda, the Netherlands, and fulfils orders from there to European customers and other approved international destinations.",
    ],
    customs: [
      "Goods entering the EU from Canada require an import declaration; duties and VAT may apply, and proof of origin documentation matters where a preferential rate is claimed. The import declaration is handled by the brand or its customs representative.",
      "In the other direction, the Canada Border Services Agency publishes the rules for goods imported into Canada, including online purchases. Confirm the current thresholds for your products with the CBSA before shipping into Canada.",
    ],
    returnsContext: [
      "Returns from European customers land inside the EU when stock is held there, which avoids a return journey across the Atlantic. Returns handling is available. Contact Vareya to discuss the required returns process, including inspection and restocking rules.",
    ],
    shopifyContext: [
      "Canadian Shopify stores connect to the Breda warehouse through the existing integration: Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify. Orders sync from the store and are picked, packed and shipped from the Netherlands.",
    ],
    sources: [
      {
        label: "Importing commercial goods into Canada — Canada Border Services Agency",
        href: "https://www.cbsa-asfc.gc.ca/import/menu-eng.html",
      },
    ],
    consultedAt: "2026-09-09",
  },

  australia: {
    slug: "australia",
    name: "Australia",
    adjective: "Australian",
    distanceNote:
      "Australia is among the longest-haul corridors to Europe, which makes the comparison between consolidated EU stock and per-order shipping from Australia especially relevant as European volume grows.",
    market: [
      "Australian brands serving European customers compare two setups: shipping every order individually from Australia, or holding stock in the EU so goods cross the EU border once and customer orders travel within the EU.",
      "Vareya operates a warehouse in Breda, the Netherlands, and fulfils orders from there. The full corridor overview — who owns the Australia-side readiness, freight, import, storage and fulfilment steps — is covered on the European fulfilment guide for Australian brands.",
    ],
    customs: [
      "Goods entering the EU from Australia require an import declaration; duties and VAT may apply. In the other direction, goods with a customs value up to AUD 1,000 generally do not attract duty, GST or import charges at the Australian border (alcohol and tobacco excepted), while the ATO's low-value imported goods rules apply GST on the sale for goods up to AUD 1,000 sold by non-resident businesses. Confirm current thresholds with the official sources.",
    ],
    returnsContext: [
      "A return that lands at a warehouse inside the EU does not travel back to Australia unless the brand chooses that route. Returns handling is available. Contact Vareya to discuss the required returns process.",
    ],
    shopifyContext: [
      "Australian Shopify stores keep their store and catalogue unchanged while orders flow to the Breda warehouse through the existing integration: Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify.",
    ],
    sources: [
      {
        label: "Import declarations — Australian Border Force",
        href: "https://www.abf.gov.au/importing-exporting-and-manufacturing/importing/how-to-import/import-declaration",
      },
      {
        label: "GST on low value imported goods — Australian Taxation Office",
        href: "https://www.ato.gov.au/businesses-and-organisations/international-tax-for-business/gst-for-non-resident-businesses/gst-on-low-value-imported-goods",
      },
    ],
    consultedAt: "2026-09-09",
  },

  "new-zealand": {
    slug: "new-zealand",
    name: "New Zealand",
    adjective: "New Zealand",
    distanceNote:
      "New Zealand is one of the longest-haul corridors to Europe; consolidating stock in the EU removes an individual border crossing from every European customer order.",
    market: [
      "New Zealand brands selling into Europe weigh shipping each order individually against positioning stock in the EU. With stock in the EU, goods cross the EU border once as a consolidated inbound shipment and customer orders travel within the EU.",
      "Vareya operates a warehouse in Breda, the Netherlands, and fulfils orders from there. The full corridor overview for New Zealand brands is covered on the European fulfilment guide for New Zealand brands.",
    ],
    customs: [
      "Goods entering the EU from New Zealand require an import declaration; duties and VAT may apply. In the other direction, New Zealand Customs generally charges nothing on items with a customs value of NZ$1,000 or less, with alcohol and tobacco as exceptions; the low-value imported goods GST rules apply to sales by non-resident businesses. Biosecurity rules can also apply to incoming goods. Confirm the current rules with New Zealand Customs before shipping.",
    ],
    returnsContext: [
      "Returns from European customers can land at the Breda warehouse instead of travelling back to New Zealand. Returns handling is available. Contact Vareya to discuss the required returns process.",
    ],
    shopifyContext: [
      "New Zealand Shopify stores connect to the Breda warehouse through the existing integration: Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify, so orders placed on the store flow to the warehouse automatically.",
    ],
    sources: [
      {
        label: "Online shopping — New Zealand Customs Service",
        href: "https://www.customs.govt.nz/sending-and-receiving/online-shopping",
      },
    ],
    consultedAt: "2026-09-09",
  },

  norway: {
    slug: "norway",
    name: "Norway",
    adjective: "Norwegian",
    distanceNote:
      "Norway is close to the Netherlands, but it is outside the EU customs union, so goods moving between Norway and the EU cross a customs border in both directions.",
    market: [
      "Norwegian brands selling to European customers cross an EU customs border on every order unless stock is positioned inside the EU. Holding stock in the EU moves that crossing to the inbound freight stage: goods enter the EU once, and customer orders travel within the EU.",
      "Because the distance is short, Norwegian brands can also assess the reverse corridor — fulfilling Norwegian orders from EU stock — with Norwegian customs and VAT rules applying on entry into Norway.",
      "Vareya operates a warehouse in Breda, the Netherlands, and fulfils orders from there.",
    ],
    customs: [
      "Goods entering the EU from Norway require an import declaration; duties and VAT may apply. In the other direction, Norwegian Customs applies de minimis and simplified low-value rules that have changed several times in recent years — confirm the current thresholds with Norwegian Customs before shipping into Norway.",
    ],
    returnsContext: [
      "Returns from European customers land inside the EU when stock is held there, avoiding a second border crossing back into Norway. Returns handling is available. Contact Vareya to discuss the required returns process.",
    ],
    shopifyContext: [
      "Norwegian Shopify stores connect to the Breda warehouse through the existing integration: Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify. Orders sync from the store and are picked, packed and shipped from the Netherlands.",
    ],
    sources: [
      {
        label: "Online shopping — Norwegian Customs (Toll)",
        href: "https://www.toll.no/en/online-shopping/",
      },
    ],
    consultedAt: "2026-09-09",
  },

  switzerland: {
    slug: "switzerland",
    name: "Switzerland",
    adjective: "Swiss",
    distanceNote:
      "Switzerland borders the EU but is not part of the EU customs union, so goods moving between Switzerland and the EU cross a customs border in both directions.",
    market: [
      "Swiss brands selling into the EU face EU customs formalities on every order shipped from Switzerland. Holding stock in the EU moves that crossing to the inbound freight stage: goods enter the EU once as a consolidated shipment, and customer orders travel within the EU.",
      "Because the distance is short, the reverse corridor matters too: fulfilling Swiss customers from EU stock means Swiss import formalities and import VAT apply on entry into Switzerland.",
      "Vareya operates a warehouse in Breda, the Netherlands, and fulfils orders from there.",
    ],
    customs: [
      "Goods entering the EU from Switzerland require an import declaration; duties and VAT may apply. In the other direction, Switzerland levies import VAT on imported goods regardless of value in most cases; the Federal Office for Customs and Border Security publishes the current rules for businesses. Confirm the current position for your products with the official sources.",
    ],
    returnsContext: [
      "Returns from European customers land inside the EU when stock is held there, avoiding a second border crossing. Returns handling is available. Contact Vareya to discuss the required returns process.",
    ],
    shopifyContext: [
      "Swiss Shopify stores connect to the Breda warehouse through the existing integration: Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify, so orders placed on the store flow to the warehouse automatically.",
    ],
    sources: [
      {
        label: "Import into Switzerland for companies — Federal Office for Customs and Border Security (BAZG)",
        href: "https://www.bazg.admin.ch/de/informationen-fuer-firmen-einfuhr-in-die-schweiz",
      },
    ],
    consultedAt: "2026-09-09",
  },

  japan: {
    slug: "japan",
    name: "Japan",
    adjective: "Japanese",
    distanceNote:
      "Japan is a long-haul distance from European customers, so consolidating stock in the EU removes an individual border crossing and a long transit from every European order.",
    market: [
      "Japanese brands expanding into Europe commonly compare shipping each order from Japan against holding stock in the EU. With stock in the EU, goods cross the EU border once as a consolidated inbound shipment and customer orders travel within the EU.",
      "Japanese cosmetics and lifestyle brands in particular face product-compliance steps in the EU — labelling, responsible-person requirements and ingredient rules can apply. Compliance is prepared by the brand; the warehouse receives compliant, sale-ready stock.",
      "Vareya operates a warehouse in Breda, the Netherlands, and fulfils orders from there.",
    ],
    customs: [
      "Goods entering the EU from Japan require an import declaration; duties and VAT may apply, and the EU-Japan trade agreement can reduce duty for qualifying goods with correct origin documentation. In the other direction, Japan Customs publishes the rules for goods entering Japan. Confirm the current rules with the official sources and your advisers.",
    ],
    returnsContext: [
      "Returns from European customers land inside the EU when stock is held there, instead of travelling back to Japan. Returns handling is available. Contact Vareya to discuss the required returns process.",
    ],
    shopifyContext: [
      "Japanese Shopify stores connect to the Breda warehouse through the existing integration: Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify, so orders sync from the store and are fulfilled from the Netherlands.",
    ],
    sources: [
      {
        label: "Japan Customs (English portal)",
        href: "https://www.customs.go.jp/english/index.htm",
      },
    ],
    consultedAt: "2026-09-09",
  },

  china: {
    slug: "china",
    name: "China",
    adjective: "Chinese",
    distanceNote:
      "China is a long-haul distance from European customers; holding stock in the EU moves the border crossing and the long transit to the consolidated inbound stage.",
    market: [
      "Chinese brands selling to European customers often ship orders individually from China or through marketplace logistics. When order volume grows, holding stock in the EU changes the pattern: goods enter the EU once, and customer orders are fulfilled from inside the EU.",
      "Product compliance in the EU — including labelling, responsible-person requirements for cosmetics and CE-related rules for relevant product categories — is prepared by the brand before stock ships. Vareya receives compliant, sale-ready stock at the warehouse in Breda.",
    ],
    customs: [
      "Goods entering the EU from China require an import declaration; duties and VAT may apply depending on product, value and classification. The import declaration is handled by the brand or its customs representative. In the other direction, China's customs administration publishes the rules for goods entering China. Confirm the current requirements with the official sources.",
    ],
    returnsContext: [
      "Returns from European customers land inside the EU when stock is held there, avoiding a return journey to China. Returns handling is available. Contact Vareya to discuss the required returns process.",
    ],
    shopifyContext: [
      "Chinese Shopify stores connect to the Breda warehouse through the existing integration: Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify. Orders sync from the store and are picked, packed and shipped from the Netherlands.",
    ],
    sources: [
      {
        label: "General Administration of Customs of China (English portal)",
        href: "http://english.customs.gov.cn/",
      },
    ],
    consultedAt: "2026-09-09",
  },

  "hong-kong": {
    slug: "hong-kong",
    name: "Hong Kong",
    adjective: "Hong Kong",
    distanceNote:
      "Hong Kong is a long-haul distance from European customers, and goods leaving Hong Kong for the EU cross an EU customs border on the way in.",
    market: [
      "Hong Kong brands and trading companies serving European customers compare shipping each order from Hong Kong with holding stock in the EU. With stock in the EU, goods enter the EU once as a consolidated shipment and customer orders travel within the EU.",
      "Vareya operates a warehouse in Breda, the Netherlands, and fulfils orders from there. Product fit is confirmed during qualification.",
    ],
    customs: [
      "Goods entering the EU from Hong Kong require an import declaration; duties and VAT may apply depending on product, value and classification. The import declaration is handled by the brand or its customs representative. In the other direction, Hong Kong Customs publishes the rules for goods entering Hong Kong. Confirm the current requirements with the official sources.",
    ],
    returnsContext: [
      "Returns from European customers land inside the EU when stock is held there, instead of travelling back to Hong Kong. Returns handling is available. Contact Vareya to discuss the required returns process.",
    ],
    shopifyContext: [
      "Hong Kong Shopify stores connect to the Breda warehouse through the existing integration: Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify. Orders sync from the store and are fulfilled from the Netherlands.",
    ],
    sources: [
      {
        label: "Hong Kong Customs and Excise Department",
        href: "https://www.customs.gov.hk/en/home/index.html",
      },
    ],
    consultedAt: "2026-09-09",
  },

  brazil: {
    slug: "brazil",
    name: "Brazil",
    adjective: "Brazilian",
    distanceNote:
      "Brazil is a long-haul distance from European customers, so the consolidation effect of holding stock in the EU is large: one inbound crossing instead of one per customer order.",
    market: [
      "Brazilian brands selling into Europe compare shipping each order from Brazil with positioning stock in the EU. With stock in the EU, goods cross the EU border once and customer orders travel within the EU.",
      "Export formalities on the Brazil side are prepared by the brand or its export partner; Vareya receives the stock once it arrives in Breda. Vareya operates a warehouse in Breda, the Netherlands, and fulfils orders from there.",
    ],
    customs: [
      "Goods entering the EU from Brazil require an import declaration; duties and VAT may apply. In the other direction, Brazilian import rules for online purchases have changed repeatedly in recent years; the Receita Federal publishes the current framework. Confirm the current rules with the official sources and your advisers before shipping.",
    ],
    returnsContext: [
      "Returns from European customers land inside the EU when stock is held there, avoiding a return journey to Brazil. Returns handling is available. Contact Vareya to discuss the required returns process.",
    ],
    shopifyContext: [
      "Brazilian Shopify stores connect to the Breda warehouse through the existing integration: Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify, so orders sync from the store and are fulfilled from the Netherlands.",
    ],
    sources: [
      {
        label: "Receita Federal — Brazil (English portal)",
        href: "https://www.gov.br/receitafederal/en",
      },
    ],
    consultedAt: "2026-09-09",
  },

  "south-korea": {
    slug: "south-korea",
    name: "South Korea",
    adjective: "South Korean",
    distanceNote:
      "South Korea is a long-haul distance from European customers; holding stock in the EU removes an individual border crossing and long transit from every European order.",
    market: [
      "South Korean beauty and lifestyle brands expanding in Europe compare shipping each order from Korea with holding stock in the EU. With stock in the EU, goods cross the EU border once as a consolidated shipment and customer orders travel within the EU.",
      "EU product compliance — labelling, responsible-person requirements for cosmetics, and ingredient rules — is prepared by the brand before stock ships. Vareya receives compliant, sale-ready stock at the warehouse in Breda.",
    ],
    customs: [
      "Customs processing is handled through the selected carrier, based on complete and accurate shipment documentation. Duties, taxes and importer obligations may apply. In the other direction, Korea Customs publishes the rules for goods entering Korea. Confirm the current requirements with the official sources.",
    ],
    returnsContext: [
      "Returns handling is available by agreement. Returns from European customers land inside the EU when stock is held there, instead of travelling back to Korea.",
    ],
    shopifyContext: [
      "South Korean Shopify stores connect to the Breda warehouse through the existing integration: Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify. Orders sync from the store and are fulfilled from the Netherlands.",
    ],
    sources: [
      {
        label: "Korea Customs Service (English portal)",
        href: "https://www.customs.go.kr/english/main.do",
      },
    ],
    consultedAt: "2026-09-09",
  },

  "saudi-arabia": {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    adjective: "Saudi Arabian",
    distanceNote:
      "Saudi Arabia is a long-haul distance from European customers; consolidating stock in the EU moves the border crossing to the inbound stage.",
    market: [
      "Saudi Arabian brands selling into Europe compare shipping each order from Saudi Arabia with holding stock in the EU. With stock in the EU, goods cross the EU border once and customer orders travel within the EU.",
      "Vareya operates a warehouse in Breda, the Netherlands, and fulfils orders from there. No additional Vareya-specific volume restrictions have been confirmed. Shipments remain subject to product qualification, carrier acceptance and destination customs requirements.",
    ],
    customs: [
      "Customs processing is handled through the selected carrier, based on complete and accurate shipment documentation. Duties, taxes and importer obligations may apply. In the other direction, ZATCA publishes the rules for goods entering Saudi Arabia. Confirm the current requirements with the official sources.",
    ],
    returnsContext: [
      "Returns handling is available by agreement. Returns from European customers land inside the EU when stock is held there, instead of travelling back to Saudi Arabia.",
    ],
    shopifyContext: [
      "Saudi Arabian Shopify stores connect to the Breda warehouse through the existing integration: Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify. Orders sync from the store and are fulfilled from the Netherlands.",
    ],
    sources: [
      {
        label: "Zakat, Tax and Customs Authority — Saudi Arabia",
        href: "https://zatca.gov.sa/en/Pages/default.aspx",
      },
    ],
    consultedAt: "2026-09-09",
  },

  turkey: {
    slug: "turkey",
    name: "Turkey",
    adjective: "Turkish",
    distanceNote:
      "Turkey borders the EU but is outside the EU customs union for most goods, so goods moving between Turkey and the EU cross a customs border in both directions.",
    market: [
      "Turkish brands selling to European customers cross an EU customs border on every order unless stock is positioned inside the EU. Holding stock in the EU moves that crossing to the inbound freight stage: goods enter the EU once, and customer orders travel within the EU.",
      "Vareya operates a warehouse in Breda, the Netherlands, and fulfils orders from there. No additional Vareya-specific volume restrictions have been confirmed. Shipments remain subject to product qualification, carrier acceptance and destination customs requirements.",
    ],
    customs: [
      "Customs processing is handled through the selected carrier, based on complete and accurate shipment documentation. Duties, taxes and importer obligations may apply. In the other direction, the Turkish Ministry of Trade publishes the rules for goods entering Turkey. Confirm the current requirements with the official sources.",
    ],
    returnsContext: [
      "Returns handling is available by agreement. Returns from European customers land inside the EU when stock is held there, avoiding a second border crossing.",
    ],
    shopifyContext: [
      "Turkish Shopify stores connect to the Breda warehouse through the existing integration: Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify. Orders sync from the store and are fulfilled from the Netherlands.",
    ],
    sources: [
      {
        label: "Ministry of Trade — Republic of Türkiye (English portal)",
        href: "https://ticaret.gov.tr/en",
      },
    ],
    consultedAt: "2026-09-09",
  },

  "united-arab-emirates": {
    slug: "united-arab-emirates",
    name: "the United Arab Emirates",
    adjective: "UAE",
    distanceNote:
      "The UAE is a long-haul distance from European customers; holding stock in the EU removes an individual border crossing and long transit from every European order.",
    market: [
      "UAE-based brands selling into Europe compare shipping each order from the UAE with holding stock in the EU. With stock in the EU, goods cross the EU border once and customer orders travel within the EU.",
      "Vareya operates a warehouse in Breda, the Netherlands, and fulfils orders from there. No additional Vareya-specific volume restrictions have been confirmed. Shipments remain subject to product qualification, carrier acceptance and destination customs requirements.",
    ],
    customs: [
      "Customs processing is handled through the selected carrier, based on complete and accurate shipment documentation. Duties, taxes and importer obligations may apply. In the other direction, the UAE Federal Customs Authority publishes the rules for goods entering the UAE. Confirm the current requirements with the official sources.",
    ],
    returnsContext: [
      "Returns handling is available by agreement. Returns from European customers land inside the EU when stock is held there, instead of travelling back to the UAE.",
    ],
    shopifyContext: [
      "UAE Shopify stores connect to the Breda warehouse through the existing integration: Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify. Orders sync from the store and are fulfilled from the Netherlands.",
    ],
    sources: [
      {
        label: "Federal Customs Authority — United Arab Emirates",
        href: "https://fcsa.gov.ae/en-us/Pages/default.aspx",
      },
    ],
    consultedAt: "2026-09-09",
  },
};

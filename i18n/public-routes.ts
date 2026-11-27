/** Public source-language routes. Translation availability is tracked separately. */
export const ENGLISH_SERVICE_ROUTES = [
  "/digistore24-fulfilment-europe/",
  "/nonboxable/", "/product-fit-check/",
  "/returns-fulfilment-europe/", "/boxable-shipping/", "/boxable-fulfilment/",
  "/boxable-product-framework/", "/cherry-picking-shipping/", "/amazon-fbm-fulfilment/",
  "/eu-fulfilment-us-brands/", "/eu-fulfilment-uk-brands/", "/eu-fulfilment-south-korean-brands/",
  "/shipbob-alternative-europe/", "/shopify-fulfilment-europe/",
  "/small-parcel-fulfilment-europe/", "/letterbox-parcel-fulfilment/",
  "/cosmetics-supplements-fulfilment-europe/", "/shipping-from-europe-to-australia-new-zealand/",
  "/european-fulfilment-for-australian-brands/", "/european-fulfilment-for-new-zealand-brands/",
];
export const REGIONAL_ROUTES = [
  "/nl/fulfilmentcentrum-kiezen/", "/nl/wat-kost-fulfilment-brabant/",
  "/nl/fulfilment-noord-brabant/", "/nl/fulfilment-uitbesteden-breda/",
];
const COUNTRIES = [
  "china", "japan", "turkey", "canada", "brazil", "norway", "hong-kong",
  "new-zealand", "switzerland", "saudi-arabia", "united-arab-emirates",
];
const ALL_COUNTRIES = [...COUNTRIES, "australia", "south-korea", "united-states", "united-kingdom"];
export const COUNTRY_ROUTES = [
  ...COUNTRIES.map(country => `/european-fulfilment-for-${country}-brands/`),
  ...ALL_COUNTRIES.map(country => `/shopify-fulfilment-europe-for-${country}-stores/`),
  ...ALL_COUNTRIES.map(country => `/european-returns-handling-for-${country}-brands/`),
];
export const SOURCE_ROUTES = new Set([
  ...ENGLISH_SERVICE_ROUTES, ...REGIONAL_ROUTES, ...COUNTRY_ROUTES, "/knowledge/",
]);

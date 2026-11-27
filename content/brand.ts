/**
 * Vareya brand positioning source — owner mandate 14 October 2026.
 *
 * Central constants for the homepage positioning layer. Rules applied:
 * - H1, pay-off and hero paragraph are the exact owner-supplied wording and
 *   are never reworded in components.
 * - Aspirations (mission, ambition, hero mission) are explicit future aims and
 *   enablement framing: no guaranteed saving, growth or delivery outcome is
 *   presented as a result. The hero mission text is owner wording of 16 October
 *   2026 and replaces the earlier boundary sentence (claims-register addendum
 *   16-10).
 * - Parcel rule: combined dimensions ≤900 mm with a maximum length of
 *   600 mm. This is not a "90 x 60 cm" rectangle and not a letterbox limit;
 *   letterbox eligibility is confirmed per product during qualification.
 *   No unsupported "< 2 kg" claim is used anywhere.
 *
 * Deliberately dependency-free (no imports): this module is imported directly
 * by the node test runner, which does not resolve the "@/" alias. The two
 * register sentences below mirror content/claims-register.md verbatim.
 */

const POSTNL_WORDING =
  "PostNL is Vareya's main carrier for shipments within the Netherlands. DHL, Asendia, Deutsche Post, Royal Mail, DPD and DHL Express are part of the carrier network for other routes.";

const SHOPIFY_WORDING =
  "Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify.";

export const BRAND = {
  name: "Vareya",
  /** Exact owner wording — do not reword. */
  h1: "Europe’s Boxable Fulfilment Specialist™",
  /** Exact owner wording — do not reword. */
  payoff: "Ship smaller. Spend less. Grow faster.",
  /** Exact owner wording — do not reword. */
  heroParagraph:
    "At Vareya, we help ecommerce brands generate more profit from every order by optimizing fulfilment specifically for small and lightweight products.",
  /** Owner wording — supplied 16 Oct 2026; replaces the earlier no-guarantee
   *  boundary sentence in the hero (owner instruction; register addendum 16-10). */
  heroMission:
    "We believe fulfilment should be a growth engine, not a cost centre — and we exist to become Europe's most trusted fulfilment partner for small and lightweight ecommerce products. We are not simply building a warehouse. We are building a fulfilment ecosystem that enables modern ecommerce brands to scale faster, operate more efficiently, and grow more profitably. We provide reliable, cost-efficient, and scalable fulfilment solutions designed for modern ecommerce businesses.",
  mission:
    "Our mission is simple: fulfilment should help an ecommerce brand grow, not sit on the books as a cost centre. We run stock, packing, shipping and returns as one connected fulfilment environment for small, light and boxable products — so brands can serve more customers across Europe without building that operation themselves.",
  ambition:
    "Our ambition is for the future: to become the most trusted fulfilment environment in Europe for small, light and boxable products.",
  heroImage: {
    photoId: "brand-lockup",
    status: "owner-supplied",
    note: "Owner-supplied VareYa brand artwork (cube in green hexagon) on the homepage hero since 15 October 2026; replaces the temporary picking photo (photo-32 stays in the warehouse grid).",
  },
} as const;

/** The eight focus points presented on the homepage. */
export const FOCUS_ITEMS = [
  {
    id: "small",
    title: "Small products",
    body: "Compact units and short parcels, picked and packed on a flow built for smaller items.",
  },
  {
    id: "light",
    title: "Light products",
    body: "Lightweight products, with packed weight and dimensions checked as part of your fulfilment fit.",
  },
  {
    id: "boxable",
    title: "Boxable",
    body: "Products packed for parcel delivery. Packaging and handling requirements are agreed before go-live.",
  },
  {
    id: "letterbox",
    title: "Letterbox eligibility",
    body: "Whether a product is letterbox-eligible is checked per product during qualification — it is not the size limit for a Vareya parcel.",
  },
  {
    id: "postnl",
    title: "PostNL expertise",
    body: POSTNL_WORDING,
  },
  {
    id: "shopify",
    title: "Shopify",
    body: SHOPIFY_WORDING,
  },
  {
    id: "dtc",
    title: "International DTC",
    body: "Direct-to-consumer orders shipped into multiple European and international markets from one base in Breda.",
  },
  {
    id: "distribution",
    title: "Confirmed distribution",
    body: "Distribution routes are confirmed during qualification; no route is promised before that.",
  },
] as const;

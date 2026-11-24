/**
 * Shared Boxable content and link registry.
 *
 * The three Boxable routes are static English pages outside the localized
 * route allow-list. Keeping their names and related links in one place avoids
 * three slightly different link sets drifting apart.
 */

export type BoxablePageKey = "fulfilment" | "shipping" | "framework";

export interface BoxablePageLink {
  key: BoxablePageKey;
  href: string;
  label: string;
  description: string;
}

export const BOXABLE_PAGES: Record<BoxablePageKey, BoxablePageLink> = {
  fulfilment: {
    key: "fulfilment",
    href: "/boxable-fulfilment/",
    label: "Boxable Fulfilment",
    description:
      "The wider operation: stock, storage, pick and pack, shipping and the agreed return flow.",
  },
  shipping: {
    key: "shipping",
    href: "/boxable-shipping/",
    label: "Boxable Shipping",
    description:
      "How a complete packed order is matched to an accepted carrier service for its destination.",
  },
  framework: {
    key: "framework",
    href: "/boxable-product-framework/",
    label: "Boxable Product Framework",
    description:
      "The working method behind the assessment: ten factors, acceptance gates and evidence status.",
  },
};

export const BOXABLE_SERVICE_LINKS = [
  {
    href: "/small-parcel-fulfilment-europe/",
    label: "Small parcel fulfilment in Europe",
  },
  {
    href: "/letterbox-parcel-fulfilment/",
    label: "Letterbox parcel fulfilment",
  },
  {
    href: "/cherry-picking-shipping/",
    label: "Cherry Picking Shipping",
  },
  {
    href: "/shopify-fulfilment-europe/",
    label: "Shopify fulfilment in Europe",
  },
  {
    href: "/eu-fulfilment/",
    label: "EU fulfilment from the Netherlands",
  },
] as const;

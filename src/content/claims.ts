/**
 * Vareya — Approved marketing claims.
 * Claims NOT listed here MUST NOT appear in copy.
 * This is the gate between what we want to say and what we can say.
 */

import { CAPABILITIES, COMPANY } from "./facts";

export const APPROVED_HEADLINES = {
  primary: "European fulfilment for growing e-commerce brands",
  secondary: "Fast, reliable order fulfilment from Breda, the Netherlands",
  scan: "Check your EU fulfilment fit",
  quote: "Request a fulfilment quote",
} as const;

export const APPROVED_VALUE_PROPS = [
  {
    title: "Shopify-ready fulfilment",
    body: `${CAPABILITIES.shopify}. Orders flow directly from your store to our warehouse.`,
  },
  {
    title: "Multi-carrier delivery",
    body: `We work with ${CAPABILITIES.carriers.slice(0, -1).join(", ")} and ${CAPABILITIES.carriers[CAPABILITIES.carriers.length - 1]} to get your products to customers across Europe.`,
  },
  {
    title: "Returns included",
    body: "Returns handling is part of our standard fulfilment service. No hidden fees.",
  },
  {
    title: "Flexible cut-off times",
    body: `Cut-off times ${CAPABILITIES.cutOffTime} — giving your operations team more time to process daily orders.`,
  },
  {
    title: "Product-fit review",
    body: "Every brand goes through qualification. We make sure your products are a good match for our fulfilment process.",
  },
] as const;

export const APPROVED_PROCESS_STEPS = [
  {
    step: 1,
    title: "You send us your products",
    body: "Ship your inventory to our Breda warehouse. We handle receiving and storage.",
  },
  {
    step: 2,
    title: "Orders sync automatically",
    body: "Your Shopify or Amazon orders flow directly to our fulfilment system.",
  },
  {
    step: 3,
    title: "We pick, pack, and ship",
    body: `Your orders are picked, packed, and shipped — with cut-off times ${CAPABILITIES.cutOffTime}.`,
  },
  {
    step: 4,
    title: "We handle returns",
    body: "Customer returns come back to us. We inspect, restock, and update your inventory.",
  },
] as const;

export const FORBIDDEN_CLAIMS = [
  "customs handling",
  "VAT services",
  "IOSS",
  "EORI",
  "DDP",
  "certified",
  "ISO",
  "AutoStore",
  "robots",
  "automation",
  "multi-warehouse",
  "same-day dispatch guaranteed",
  "next-day delivery guaranteed",
] as const;

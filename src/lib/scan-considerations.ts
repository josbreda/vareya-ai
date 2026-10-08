/**
 * Builds the post-submission explanation shown on the Free Rate Scan
 * thank-you page: soft, hedged considerations derived only from the
 * answers already given (no new data collection) and the approved facts
 * in src/content/facts.ts. Never a pass/fail verdict — Vareya reviews
 * every submission individually, so this must not imply acceptance,
 * rejection or a quote. PII-free by construction: only takes the
 * non-contact fields.
 */
import { CAPABILITIES } from "@/content/facts";
import { CLAIM_POST_SUBMISSION } from "@/content/claims";

export interface ScanConsiderationsInput {
  monthly_order_volume: string;
  product_category: string;
  target_markets: string[];
  ecommerce_platform: string;
  services_needed: string[];
}

export interface ScanConsiderations {
  considerations: string[];
  missingForReview: string[];
  nextStep: string;
}

const FIT_CATEGORIES = new Set([
  "cosmetics",
  "supplements",
  "phone-cases",
  "accessories",
]);

const INTEGRATED_PLATFORMS = new Set(["shopify", "amazon-fbm"]);

export function buildScanConsiderations(
  data: ScanConsiderationsInput,
): ScanConsiderations {
  const considerations: string[] = [];
  const missingForReview: string[] = [];

  // Volume
  if (data.monthly_order_volume === "500-1000" || data.monthly_order_volume === "1000-5000" || data.monthly_order_volume === "5000+") {
    considerations.push(CAPABILITIES.volume);
  } else if (data.monthly_order_volume === "200-500") {
    considerations.push(
      `Your volume is close to the range Vareya is generally best suited to (${CAPABILITIES.minMonthlyOrders}+ orders per month) — worth sharing your growth trajectory during review.`,
    );
  } else if (data.monthly_order_volume === "0-200") {
    considerations.push(
      `${CAPABILITIES.volume} Your current volume is below that range — Vareya will confirm during review whether your operation is still a fit, for example if volume is growing quickly.`,
    );
  }

  // Product category
  if (FIT_CATEGORIES.has(data.product_category)) {
    considerations.push(
      `${data.product_category.replace("-", " ")} is one of the categories Vareya specialises in.`,
    );
  } else if (data.product_category === "other-large") {
    considerations.push(
      `Suitable smaller parcels have combined dimensions below ${CAPABILITIES.parcelLimits.combinedDimensionsMm} mm and a maximum length of ${CAPABILITIES.parcelLimits.maxLengthMm} mm — larger items may fall outside this range. Vareya will confirm product fit directly.`,
    );
    missingForReview.push("Actual parcel dimensions and weight for your larger items");
  } else {
    considerations.push(
      "Product fit is confirmed during qualification, based on your actual parcel dimensions and handling requirements.",
    );
  }

  // Platform
  if (INTEGRATED_PLATFORMS.has(data.ecommerce_platform)) {
    considerations.push(
      data.ecommerce_platform === "shopify" ? CAPABILITIES.shopify : CAPABILITIES.amazonFbm,
    );
  } else if (data.ecommerce_platform) {
    considerations.push(
      "Integration specifics for your platform are confirmed directly with Vareya.",
    );
  }

  // What the scan doesn't ask, and is genuinely still needed
  missingForReview.push(
    "Typical parcel dimensions and weight",
    "Current or expected returns rate",
  );
  if (data.services_needed.includes("returns")) {
    missingForReview.push("The returns process you'd want agreed (inspection, restocking, refund ownership)");
  }

  return {
    considerations,
    missingForReview: [...new Set(missingForReview)],
    nextStep: `${CLAIM_POST_SUBMISSION} This is an initial assessment, not a confirmed acceptance or a quotation — both are confirmed once the points above are clear.`,
  };
}

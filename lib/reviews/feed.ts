import { cache } from "react";
import { unstable_cache } from "next/cache";
import snapshot from "@/content/3plhub-reviews-snapshot.json";
import { fetchThreePLHubReviews } from "./fetch-3plhub";
import type { ReviewFeed } from "./parse-3plhub";

export const REVIEW_REVALIDATE_SECONDS = 3600;
let pending: Promise<ReviewFeed> | undefined;
let retryAfter = 0;
async function refresh(): Promise<ReviewFeed> {
  if (pending) return pending;
  // Respect the source's five-second crawl delay even after a failed cold fetch.
  if (Date.now() < retryAfter) throw new Error("Review refresh cooling down");
  retryAfter = Date.now() + 5000;
  pending = fetchThreePLHubReviews().finally(() => { pending = undefined; });
  return pending;
}
// Cache only successfully validated data; a failed revalidation keeps the stale value.
const cachedReviews = unstable_cache(refresh, ["vareya-3plhub-reviews-v1"], {
  revalidate: REVIEW_REVALIDATE_SECONDS, tags: ["vareya-3plhub-reviews"],
});
export const getCustomerReviews = cache(async (): Promise<{ feed: ReviewFeed; origin: "3plhub" | "snapshot" }> => {
  try { return { feed: await cachedReviews(), origin: "3plhub" }; }
  catch {
    console.warn("[reviews] 3PL Hub unavailable or changed; using the verified saved reviews.");
    return { feed: snapshot, origin: "snapshot" };
  }
});

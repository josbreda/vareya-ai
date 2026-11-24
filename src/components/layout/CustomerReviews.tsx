import { getCustomerReviews } from "@/lib/reviews/feed";
import { CustomerReviewStrip } from "./CustomerReviewStrip";

export async function CustomerReviews({ innerPagesOnly = false }: { innerPagesOnly?: boolean }) {
  const { feed, origin } = await getCustomerReviews();
  return <CustomerReviewStrip feed={feed} origin={origin} innerPagesOnly={innerPagesOnly} />;
}

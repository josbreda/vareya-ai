import { parseThreePLHubReviews, PROFILE_URL, type ReviewFeed } from "./parse-3plhub.ts";

export async function fetchThreePLHubReviews(fetcher: typeof fetch = fetch): Promise<ReviewFeed> {
  const response = await fetcher(PROFILE_URL, {
    method: "GET", cache: "no-store", redirect: "error", signal: AbortSignal.timeout(6000),
    headers: { Accept: "text/html", "User-Agent": "VareyaReviewSync/1.0 (+https://vareya.ai; read-only review display)" },
  });
  if (!response.ok || !/^text\/html(?:;|$)/i.test(response.headers.get("content-type") ?? "") || !response.body) throw new Error("3PL Hub unavailable");
  const reader = response.body.getReader(), decoder = new TextDecoder();
  let bytes = 0, html = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 3_000_000) { await reader.cancel(); throw new Error("3PL Hub response too large"); }
      html += decoder.decode(value, { stream: true });
    }
    html += decoder.decode();
  } finally { reader.releaseLock(); }
  return parseThreePLHubReviews(html);
}

export const PROFILE_URL = "https://www.3plhub.co/netherlands/noord-brabant/breda/vareya";
export type Review = { id: string; author: string; date: string; title: string; text: string; rating: number; sourceUrl: string };
export type ReviewFeed = { sourceUrl: string; fetchedAt: string; reviewCount: number; reviews: Review[] };
type RecordValue = Record<string, unknown>;
function record(value: unknown): RecordValue {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid review object");
  return value as RecordValue;
}
function string(value: unknown, max = 12000): string {
  if (typeof value !== "string" || !value.trim() || value.length > max) throw new Error("Invalid review text");
  return value;
}
function decode(value: string): string {
  const entities: Record<string, string> = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: "\u00a0", rsquo: "’", lsquo: "‘", ldquo: "“", rdquo: "”" };
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (whole, key: string) => {
    if (!key.startsWith("#")) return entities[key.toLowerCase()] ?? whole;
    const n = key[1].toLowerCase() === "x" ? parseInt(key.slice(2), 16) : parseInt(key.slice(1), 10);
    return n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : whole;
  });
}
const text = (value: string) => decode(value.replace(/<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>/gi, " ").replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
const comparable = (value: string) => value.replace(/\s+/g, "");

export function parseThreePLHubReviews(html: string, fetchedAt = new Date().toISOString()): ReviewFeed {
  const match = html.match(/<script\b[^>]*\bid=["']gp-profile-schema["'][^>]*>([\s\S]*?)<\/script>/i);
  if (!match) throw new Error("3PL Hub review schema missing");
  const schema = record(JSON.parse(match[1]));
  const graph = Array.isArray(schema["@graph"]) ? schema["@graph"] : [schema];
  const businesses = graph.map(record).filter(node => node["@type"] === "LocalBusiness" && node.url === PROFILE_URL);
  if (businesses.length !== 1) throw new Error("3PL Hub company identity changed");
  const business = businesses[0], aggregate = record(business.aggregateRating);
  const count = Number(aggregate.reviewCount), ratingCount = Number(aggregate.ratingCount);
  const shown = html.match(/★\s*[\d.]+\s*·\s*(\d+)\s+reviews?\b/);
  if (!Number.isInteger(count) || count < 1 || count > 250 || ratingCount !== count || !shown || Number(shown[1]) !== count || !Array.isArray(business.review) || business.review.length !== count) throw new Error("3PL Hub review totals disagree");
  const cards = html.split(/<div\s+class=["']well["']\s*>/i).slice(1).flatMap(part => {
    const who = part.match(/Submitted\s+by\s+([\s\S]*?)\s+on\s+(\d{4})\/(\d{2})\/(\d{2})/);
    if (!who) return [];
    const heading = part.match(/<h3\b[^>]*>[\s\S]*?<a\b[^>]*href=(["'])(.*?)\1[^>]*>([\s\S]*?)<\/a>/i);
    const rating = part.match(/<summary>\s*([\d.]+)\s+overall/);
    if (!heading || !rating) throw new Error("3PL Hub review card changed");
    const url = new URL(decode(heading[2]), PROFILE_URL);
    if (url.origin !== new URL(PROFILE_URL).origin || !/^\/netherlands\/noord-brabant\/breda\/vareya\/reviews\/\d+$/.test(url.pathname) || url.search || url.hash) throw new Error("Invalid review source URL");
    return [{ author: text(who[1]), date: `${who[2]}-${who[3]}-${who[4]}`, title: text(heading[3]), rating: Number(rating[1]), sourceUrl: url.href, visible: comparable(text(part)) }];
  });
  const seen = new Set<string>();
  const reviews = business.review.map(value => {
    const item = record(value), author = string(record(item.author).name, 300), date = string(item.datePublished, 10);
    const title = string(item.name, 500), body = string(item.reviewBody), rating = Number(record(item.reviewRating).ratingValue);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date || !Number.isFinite(rating) || rating < 1 || rating > 5) throw new Error("Invalid review date or rating");
    const matches = cards.filter(card => card.date === date && card.author.toLowerCase() === author.toLowerCase() && card.title === title && card.rating === rating && card.visible.includes(comparable(body)));
    if (matches.length !== 1) throw new Error("Review schema does not match one visible card");
    const card = matches[0], id = card.sourceUrl.split("/").at(-1)!;
    if (seen.has(id)) throw new Error("Duplicate review identity");
    seen.add(id);
    return { id, author: card.author, date, title, text: body, rating, sourceUrl: card.sourceUrl };
  }).sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id, "en", { numeric: true }));
  return { sourceUrl: PROFILE_URL, fetchedAt, reviewCount: count, reviews };
}

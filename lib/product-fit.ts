/** Preliminary Vareya profiles, approved P1 brief 2026-11-09. Never carrier acceptance. */
export const FIT_VERSION = "p1-20261109-v1";
export const FIT_STORAGE_KEY = "vareya_product_fit_v1";
export const FIT_FIELDS = ["fit_length_mm", "fit_width_mm", "fit_height_mm", "fit_weight_g", "fit_measurement", "fit_handling"] as const;
export type FitAnswers = {
  product_category: string;
  ecommerce_platform: string;
  target_markets: string[];
  fit_length_mm: string;
  fit_width_mm: string;
  fit_height_mm: string;
  fit_weight_g: string;
  fit_measurement: string;
  fit_handling: string;
};
export type FitResult = { outcome: "likely_fit" | "review_required" | "outside_current_focus"; profile: "A" | "B" | "unknown" | "outside"; reasons: string[]; version: string };
export const EMPTY_FIT: FitAnswers = { product_category: "", ecommerce_platform: "", target_markets: [], fit_length_mm: "", fit_width_mm: "", fit_height_mm: "", fit_weight_g: "", fit_measurement: "unknown", fit_handling: "unknown" };
export function normaliseFit(raw: Record<string, unknown>): FitAnswers {
  const text = (key: string) => typeof raw[key] === "string" ? raw[key].trim().slice(0, 100) : "";
  return { product_category: text("product_category"), ecommerce_platform: text("ecommerce_platform"), target_markets: Array.isArray(raw.target_markets) ? [...new Set(raw.target_markets.filter((v): v is string => typeof v === "string").map(v => v.slice(0, 60)))].slice(0, 20) : [], ...Object.fromEntries(FIT_FIELDS.map(k => [k, text(k)])) } as FitAnswers;
}
const positive = (s: string): number | null => /^\d+(?:[.,]\d+)?$/.test(s) && Number(s.replace(",", ".")) > 0 && Number.isFinite(Number(s.replace(",", "."))) ? Number(s.replace(",", ".")) : null;
export function classifyFit(input: FitAnswers): FitResult {
  const dims = [input.fit_length_mm, input.fit_width_mm, input.fit_height_mm].map(positive);
  const weight = positive(input.fit_weight_g);
  const reasons: string[] = [];
  if (weight !== null && weight > 2000) reasons.push("The stated packed weight exceeds the current 2 kg limit.");
  if (dims.some(v => v !== null && v > 600)) reasons.push("The longest stated packed side exceeds the current 600 mm limit.");
  if (dims.reduce<number>((sum, v) => sum + (v ?? 0), 0) > 900) reasons.push("The stated packed length, width and height together exceed the current 900 mm limit.");
  if (reasons.length) return { outcome: "outside_current_focus", profile: "outside", reasons, version: FIT_VERSION };
  let profile: FitResult["profile"] = "unknown";
  if (dims.every((v): v is number => v !== null) && weight !== null) {
    const sorted = [...dims].sort((a,b) => b-a);
    profile = sorted[0] <= 380 && sorted[1] <= 265 && sorted[2] <= 32 ? "A" : "B";
  } else reasons.push("Add the complete packed dimensions and weight; missing or invalid measurements cannot establish fit.");
  if (input.fit_measurement !== "measured") reasons.push("Confirm the measurements of the complete closed parcel, including protection and inserts.");
  if (!input.product_category || input.product_category === "unknown") reasons.push("Confirm the product category.");
  if (!input.ecommerce_platform || input.ecommerce_platform === "unknown") reasons.push("Confirm the webshop platform and integration needs.");
  if (!input.target_markets.length || input.target_markets.includes("unknown")) reasons.push("Confirm the main destinations so carrier and service eligibility can be reviewed.");
  if (input.fit_handling !== "standard" || ["cosmetics", "supplements"].includes(input.product_category)) reasons.push("Operations must review the product, storage and handling requirements.");
  return { outcome: reasons.length ? "review_required" : "likely_fit", profile, reasons, version: FIT_VERSION };
}
export function fitSummary(input: FitAnswers): string {
  const r = classifyFit(input);
  return `Preliminary Product Fit (${FIT_VERSION}): ${r.outcome}; profile ${r.profile}. Packed dimensions mm: ${input.fit_length_mm || "unknown"} x ${input.fit_width_mm || "unknown"} x ${input.fit_height_mm || "unknown"}; weight g: ${input.fit_weight_g || "unknown"}; measurement: ${input.fit_measurement}; handling: ${input.fit_handling}. ${r.reasons.join(" ")} Not operational or carrier acceptance.`;
}
export function readFitHandoff(value: string | null, now = Date.now()): FitAnswers | null {
  try {
    if (!value || value.length > 8000) return null;
    const data = JSON.parse(value);
    if (data.version !== FIT_VERSION || !Number.isFinite(data.savedAt) || now < data.savedAt || now-data.savedAt > 86400000 || !data.answers || typeof data.answers !== "object") return null;
    return normaliseFit(data.answers);
  } catch { return null; }
}

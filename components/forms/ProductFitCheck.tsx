"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useT } from "@/i18n/client";
import { localizedPath } from "@/i18n/core";
import { classifyFit, EMPTY_FIT, FIT_STORAGE_KEY, FIT_VERSION, readFitHandoff, type FitAnswers } from "@/lib/product-fit";

import { trackEvent } from "@/lib/analytics/events";

const categories = [["accessories","Accessories"],["phone-cases","Phone cases"],["fashion","Fashion & apparel"],["cosmetics","Cosmetics"],["supplements","Supplements"],["other-small","Other small parcel"],["other-large","Larger items"],["unknown","I don't know yet"]];
const platforms = [["shopify","Shopify"],["digistore24","Digistore24"],["woocommerce","WooCommerce"],["amazon-fbm","Amazon FBM"],["magento","Magento"],["other","Other"],["unknown","I don't know yet"]];
const markets = [["nl","Netherlands"],["be","Belgium"],["de","Germany"],["fr","France"],["uk","United Kingdom"],["es","Spain"],["it","Italy"],["other-eu","Other EU"],["us","United States"],["other","Other destination"],["unknown","I don't know yet"]];
const outcomes = { likely_fit: "Likely Fit", review_required: "Review Required", outside_current_focus: "Outside Current Focus" };
export function ProductFitCheck() {
 const t=useT(), locale=useLocale(), router=useRouter();
 const [answers,setAnswers]=useState<FitAnswers>(EMPTY_FIT), [show,setShow]=useState(false), [error,setError]=useState("");
 useEffect(() => { try { const saved=readFitHandoff(sessionStorage.getItem(FIT_STORAGE_KEY)); if(saved) { // eslint-disable-next-line react-hooks/set-state-in-effect
 setAnswers(saved); } } catch { /* Keep the empty editable form. */ } }, []);
 const started=useRef(false);
 const result=classifyFit(answers);
 function markStarted() { if(!started.current) { started.current=true; trackEvent("product_fit_start"); } }
 function update(key:keyof FitAnswers,value:string|string[]) {markStarted();setAnswers(a=>({...a,[key]:value}));setShow(false);setError("");}
 const fieldClass="mt-2 block w-full rounded-lg border border-slate-300 bg-white p-3 text-ink";
 function select(key:keyof FitAnswers,label:string,options:string[][]) {return <label className="block font-medium">{t(label)}<select className={fieldClass} value={answers[key] as string} onChange={e=>update(key,e.target.value)}><option value="">{t("Select...")}</option>{options.map(([v,l])=><option key={v} value={v}>{t(l)}</option>)}</select></label>;}
 function proceed() {
  try { const value=JSON.stringify({version:FIT_VERSION,savedAt:Date.now(),answers});sessionStorage.setItem(FIT_STORAGE_KEY,value);if(sessionStorage.getItem(FIT_STORAGE_KEY)!==value)throw Error();trackEvent("product_fit_handoff");router.push(localizedPath("/free-rate-scan/?from=product-fit",locale)); }
  catch {setError(t("Your browser could not retain these answers. Enable session storage and try again; your answers remain here."));}
 }
 return <form className="space-y-7" onSubmit={e=>{e.preventDefault();markStarted();if(!show)trackEvent("product_fit_result");setShow(true);}}>
  <p className="text-muted">{t("No contact details are needed for this preliminary check. Leave measurements blank if unknown; we will show what needs review.")}</p>
  <div className="grid gap-6 sm:grid-cols-2">{select("product_category","Product category",categories)}{select("ecommerce_platform","Your platform",platforms)}</div>
  <fieldset><legend className="font-semibold">{t("Complete packed order")}</legend><p className="mt-2 text-sm text-muted">{t("Measure the closed parcel: product, protection, inserts and packaging together. Dimensions in millimetres; weight in grams.")}</p>
   <div className="mt-4 grid grid-cols-2 gap-4">{([["fit_length_mm","Length (mm)"],["fit_width_mm","Width (mm)"],["fit_height_mm","Height (mm)"],["fit_weight_g","Packed weight (g)"]] as const).map(([key,label])=><label key={key} className="block font-medium">{t(label)}<input className={fieldClass} inputMode="decimal" type="text" maxLength={12} value={answers[key]} onChange={e=>update(key,e.target.value)} placeholder={t("Unknown")} /></label>)}</div>
  </fieldset>
  <div className="grid gap-6 sm:grid-cols-2">{select("fit_measurement","Measurement basis",[["measured","Measured complete parcel"],["estimate","Best-known estimate"],["unknown","I don't know yet"]])}{select("fit_handling","Product and handling needs",[["standard","Standard dry goods; no special requirements known"],["fragile","Fragile or breakable"],["liquid","Liquids, creams or aerosols"],["batch","Batch, expiry or food-related requirements"],["battery","Batteries or restricted goods"],["temperature","Temperature-controlled storage"],["other","Other special requirements"],["unknown","I don't know yet"]])}</div>
  <fieldset><legend className="font-semibold">{t("Main destinations")}</legend><div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">{markets.map(([value,label])=><label key={value} className="flex items-center gap-2"><input type="checkbox" checked={answers.target_markets.includes(value)} onChange={()=>update("target_markets",answers.target_markets.includes(value)?answers.target_markets.filter(v=>v!==value):[...answers.target_markets,value])}/>{t(label)}</label>)}</div></fieldset>
  <button type="submit" data-cta-id="p1-fit-result" data-topic-id="F05" className="rounded-lg bg-primary px-6 py-3 font-semibold text-white">{t("Show my preliminary fit")}</button>
  {show&&<section aria-live="polite" className="rounded-2xl border border-primary/20 bg-emerald-50 p-6"><h2 className="text-2xl font-bold text-primary">{t(outcomes[result.outcome])}</h2><p className="mt-2 font-medium">{t(result.profile==="A"?"Profile A — letterbox profile":result.profile==="B"?"Profile B — compact Non-Boxable parcel":result.profile==="outside"?"Outside the current compact profile":"Profile not yet established")}</p>
   <ul className="mt-3 list-disc space-y-2 pl-5">{result.reasons.map(reason=><li key={reason}>{t(reason)}</li>)}</ul><p className="mt-4 text-sm">{t("This is preliminary product fit, not a quote or approval. Product handling, carrier, service, destination and capacity still need confirmation.")}</p>
   <button type="button" onClick={proceed} data-cta-id="p1-fit-to-scan" data-topic-id="F05" className="mt-5 rounded-lg bg-primary px-6 py-3 font-semibold text-white">{t("Continue to the fulfilment scan with these answers")}</button>{error&&<p role="alert" className="mt-3 text-red-800">{error}</p>}
  </section>}
 </form>;
}

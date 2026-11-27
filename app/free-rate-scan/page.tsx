"use client";

import { useState, useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import {
  trackRateScanBack,
  trackRateScanComplete,
  trackRateScanStart,
  trackRateScanStep,
  trackRateScanSubmitError,
  trackRateScanValidationError,
  trackRateScanView,
} from "@/lib/scan-analytics";
import { readAttribution } from "@/lib/analytics";
import { readCtaHandoff } from "@/lib/analytics/cta-handoff";
import { readAttributionContext } from "@/lib/attribution.js";
import { CAPABILITIES } from "@/content/facts";
import { TurnstileWidget, type TurnstileState } from "@/components/forms/TurnstileWidget";
import {
  createSubmissionId,
  submitLead,
  SubmissionLock,
} from "@/lib/leads/submission";
import { useLocale, useT } from "@/i18n/client";
import { localizedPath } from "@/i18n/core";
import { FIT_FIELDS, FIT_STORAGE_KEY, readFitHandoff, type FitAnswers } from "@/lib/product-fit";
import { RichText } from "@/i18n/RichText";

/* ── Step definitions ── */
const STEPS = [
  {
    id: "volume",
    title: "Your volume",
    question: "How many orders do you ship per month?",
    field: "monthly_order_volume" as const,
    type: "select",
    options: [
      { value: "", label: "Select..." },
      { value: "0-200", label: "0 – 200" },
      { value: "200-500", label: "200 – 500" },
      { value: "500-1000", label: "500 – 1,000" },
      { value: "1000-5000", label: "1,000 – 5,000" },
      { value: "5000+", label: "5,000+" },
    ],
  },
  {
    id: "category",
    title: "Product category",
    question: "What do you sell?",
    field: "product_category" as const,
    type: "select",
    options: [
      { value: "", label: "Select..." },
      { value: "cosmetics", label: "Cosmetics" },
      { value: "supplements", label: "Supplements" },
      { value: "phone-cases", label: "Phone cases" },
      { value: "accessories", label: "Accessories" },
      { value: "fashion", label: "Fashion & apparel" },
      { value: "other-small", label: "Other small parcel" },
      { value: "other-large", label: "Larger items" },
      { value: "unknown", label: "I don't know yet" },
    ],
  },
  {
    id: "markets",
    title: "Target markets",
    question: "Where are your customers?",
    field: "target_markets" as const,
    type: "multiselect",
    options: [
      { value: "nl", label: "Netherlands" },
      { value: "de", label: "Germany" },
      { value: "be", label: "Belgium" },
      { value: "fr", label: "France" },
      { value: "uk", label: "United Kingdom" },
      { value: "es", label: "Spain" },
      { value: "it", label: "Italy" },
      { value: "other-eu", label: "Other EU" },
      { value: "us", label: "United States" },
      { value: "other", label: "Other destination" },
      { value: "unknown", label: "I don't know yet" },
    ],
  },
  {
    id: "platform",
    title: "Your platform",
    question: "Which e-commerce platform do you use?",
    field: "ecommerce_platform" as const,
    type: "select",
    options: [
      { value: "", label: "Select..." },
      { value: "shopify", label: "Shopify" },
      { value: "digistore24", label: "Digistore24" },
      { value: "amazon-fbm", label: "Amazon FBM" },
      { value: "woocommerce", label: "WooCommerce" },
      { value: "magento", label: "Magento" },
      { value: "other", label: "Other" },
      { value: "unknown", label: "I don't know yet" },
    ],
  },
  {
    id: "needs",
    title: "Your needs",
    question: "What services do you need?",
    field: "services_needed" as const,
    type: "multiselect",
    options: [
      { value: "pick-pack", label: "Pick & pack" },
      { value: "storage", label: "Storage" },
      { value: "returns", label: "Returns handling" },
      { value: "amazon-fbm", label: "Amazon FBM" },
    ],
  },
  {
    id: "contact",
    title: "Your details",
    question: "Where should we send your fit response?",
    field: null,
    type: "contact",
    options: [],
  },
];

const TOTAL_STEPS = STEPS.length;

/* ── Form data shape ── */
interface ScanFormData {
  monthly_order_volume: string;
  product_category: string;
  target_markets: string[];
  ecommerce_platform: string;
  services_needed: string[];
  name: string;
  company: string;
  work_email: string;
  phone: string;
}

const INITIAL: ScanFormData = {
  monthly_order_volume: "",
  product_category: "",
  target_markets: [],
  ecommerce_platform: "",
  services_needed: [],
  name: "",
  company: "",
  work_email: "",
  phone: "",
};

/* ── Component ── */
export default function FulfilmentScanPage() {
  const t = useT();
  return (
    <>
      <section className="photo-green bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-12 sm:py-16">
        <div className="container-site max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t("Check your EU fulfilment fit")}</h1>
          <p className="text-lg text-white mb-5">{t(CAPABILITIES.volume)}</p>
          <dl className="space-y-4 text-white/90">
            <div>
              <dt className="font-semibold text-white">{t("What you need")}</dt>
              <dd>{t("Your monthly order volume, product category, customer markets, sales platform and services needed. At the end, add your name, company and work email. Phone is optional.")}</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">{t("What happens next")}</dt>
              <dd>{t("Vareya reviews your answers personally and emails an initial fit response. If more details are needed, we will ask before discussing a proposal.")}</dd>
            </div>
          </dl>
          <p className="mt-5 text-sm text-white">{t("This is a fit check, not an automatic rate, quote or acceptance.")}</p>
        </div>
      </section>
      <section className="py-8 sm:py-12">
        <div className="container-site max-w-2xl"><ScanForm /></div>
      </section>
    </>
  );
}

const STORAGE_UNCONFIRMED = "We could not confirm that your answers were saved. They are still on this page. Complete the security check again and retry here. We will use the same submission reference. Please do not reload the page.";
const SUBMISSION_REJECTED = "We could not accept your submission. Check your answers and complete the security check again, then retry.";
const SECURITY_PENDING = "Complete the security check below, then submit again. If it does not load, use Retry security check. Your answers will stay on this page.";
const SECURITY_EXPIRED = "The security check expired. Complete it again, then submit. Your answers are still here.";
const SECURITY_ERROR = "The security check could not complete. Use Retry security check below. Your answers will stay on this page.";

/** One shared acknowledgement parser and deadline for scan and quote. */
async function submitScan(payload: Record<string, unknown>) {
  return submitLead(payload);
}

// No native submit or editable personal data before hydration.
const subscribeHydration = () => () => {};
const clientHydrated = () => true;
const serverHydrated = () => false;

/* ── Multi-step form ── */
function ScanForm() {
  const hydrated = useSyncExternalStore(subscribeHydration, clientHydrated, serverHydrated);
  const router = useRouter();
  const t = useT();
  const locale = useLocale();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ScanFormData>(INITIAL);
  const [fitAnswers, setFitAnswers] = useState<FitAnswers | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [serverError, setServerError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [securityState, setSecurityState] = useState<TurnstileState>("waiting");
  const [privacyAck, setPrivacyAck] = useState(false);
  const attemptIdRef = useRef<string | null>(null);
  const lockRef = useRef<SubmissionLock | null>(null);
  const acceptedRef = useRef(false);
  const viewedRef = useRef(false);
  const startedRef = useRef(false);
  const reachedStepsRef = useRef(new Set<number>());
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const serverErrorRef = useRef<HTMLDivElement>(null);
  const focusStepRef = useRef(false);

  const getAttemptId = () => {
    if (attemptIdRef.current === null) attemptIdRef.current = createSubmissionId();
    return attemptIdRef.current;
  };
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("from") !== "product-fit") return;
    try {
      const saved = readFitHandoff(sessionStorage.getItem(FIT_STORAGE_KEY));
      if (saved) {
        // Restore the visitor's explicit handoff once; subsequent edits remain authoritative.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFitAnswers(saved);
        setData(prev => ({ ...prev, product_category: saved.product_category, ecommerce_platform: saved.ecommerce_platform, target_markets: saved.target_markets }));
      }
    } catch { /* The scan remains usable when storage is unavailable. */ }
  }, []);
  const current = STEPS[step];
  const isLast = step === TOTAL_STEPS - 1;
  const busy = submitting || accepted;

  useEffect(() => {
    if (!viewedRef.current) {
      viewedRef.current = true;
      trackRateScanView();
    }
  }, []);

  useEffect(() => {
    if (!reachedStepsRef.current.has(step)) {
      reachedStepsRef.current.add(step);
      trackRateScanStep(step + 1, current.id);
    }
    if (focusStepRef.current) {
      focusStepRef.current = false;
      stepHeadingRef.current?.focus();
    }
  }, [step, current.id]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) errorSummaryRef.current?.focus();
  }, [errors]);

  useEffect(() => {
    if (serverError) serverErrorRef.current?.focus();
  }, [serverError]);

  const markStarted = useCallback(() => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackRateScanStart();
    }
  }, []);

  const update = useCallback((field: keyof ScanFormData, value: string | string[]) => {
    if ((typeof value === "string" ? value.trim().length : value.length) > 0) markStarted();
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev }; delete next[field]; return next;
    });
  }, [markStarted]);

  const toggleMulti = (field: keyof ScanFormData, value: string) => {
    markStarted();
    const arr = data[field] as string[];
    update(field, arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]);
  };

  const validateStep = (): boolean => {
    const errs: Record<string, string> = {};
    if (current.type === "contact") {
      if (!data.name.trim()) errs.name = "Name is required";
      if (!data.company.trim()) errs.company = "Company name is required";
      if (!data.work_email.trim()) errs.work_email = "Work email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.work_email.trim())) errs.work_email = "Enter a valid email address";
      if (!privacyAck) errs.privacy_acknowledged = "Please confirm the privacy acknowledgement";
    } else if (current.type === "select" && current.field) {
      if (!data[current.field]) errs[current.field] = "Please select an option";
    } else if (current.type === "multiselect" && current.field) {
      if ((data[current.field] as string[]).length === 0) errs[current.field] = "Select at least one";
    }
    setErrors(errs);
    if (Object.keys(errs).length > 0) trackRateScanValidationError(current.id);
    return Object.keys(errs).length === 0;
  };

  const next = () => {
    if (lockRef.current?.isLocked || acceptedRef.current || !validateStep()) return;
    focusStepRef.current = true;
    setServerError("");
    setStep(Math.min(step + 1, TOTAL_STEPS - 1));
  };
  const prev = () => {
    if (step === 0 || lockRef.current?.isLocked || acceptedRef.current) return;
    trackRateScanBack(step + 1);
    focusStepRef.current = true;
    setErrors({});
    setServerError("");
    setTurnstileToken("");
    setSecurityState("waiting");
    setStep(Math.max(step - 1, 0));
  };

  const submit = async () => {
    if (lockRef.current?.isLocked || acceptedRef.current || !validateStep()) return;
    if (!turnstileToken) {
      const expired = securityState === "expired";
      const failed = securityState === "error";
      trackRateScanSubmitError(expired ? "turnstile_expired" : failed ? "turnstile_error" : "turnstile_missing");
      setServerError(expired ? SECURITY_EXPIRED : failed ? SECURITY_ERROR : SECURITY_PENDING);
      serverErrorRef.current?.focus();
      return;
    }
    const lock = (lockRef.current ??= new SubmissionLock());
    if (!lock.tryAcquire()) return;
    setSubmitting(true);
    setServerError("");
    try {
      const params = new URLSearchParams(window.location.search);
      const attribution = readAttribution(params);
      const payload = {
        ...data,
        ...(fitAnswers ? Object.fromEntries(FIT_FIELDS.map(key => [key, fitAnswers[key]])) : {}),
        work_email: data.work_email.trim(),
        submission_id: getAttemptId(),
        privacy_acknowledged: privacyAck,
        bot_field: honeypot,
        form_type: "scan",
        form_locale: locale,
        landing_page: window.location.pathname,
        referrer: document.referrer || "",
        ...attribution,
        ...readAttributionContext(),
        ...readCtaHandoff(),
        device: /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop",
        turnstile_token: turnstileToken,
      };
      const result = await submitScan(payload);
      if (result.status === "accepted") {
        try { sessionStorage.removeItem(FIT_STORAGE_KEY); } catch { /* Submission already saved. */ }
        acceptedRef.current = true;
        setAccepted(true);
        trackRateScanComplete(attribution);
        router.push(localizedPath("/thank-you/scan/", locale));
        return;
      }
      setTurnstileToken("");
      setSecurityState("waiting");
      setTurnstileKey((k) => k + 1);
      trackRateScanSubmitError(result.status === "unconfirmed" ? "storage_unavailable" : "rejected");
      setServerError(result.status === "unconfirmed" ? STORAGE_UNCONFIRMED : SUBMISSION_REJECTED);
    } catch {
      // Defensive fallback (e.g. browser API failure). Never display raw errors.
      if (!acceptedRef.current) {
        setTurnstileToken("");
        setSecurityState("waiting");
        setTurnstileKey((k) => k + 1);
        trackRateScanSubmitError("storage_unavailable");
        setServerError(STORAGE_UNCONFIRMED);
      }
    } finally {
      // A successful push is asynchronous: keep the lock and disabled form
      // until unmount, including if the confirmation navigation fails.
      if (!acceptedRef.current) {
        lock.release();
        setSubmitting(false);
      }
    }
  };

  return (
    <form noValidate method="post" aria-labelledby="scan-question" aria-busy={busy} onSubmit={(event) => {
      event.preventDefault();
      if (isLast) void submit(); else next();
    }}>
      {fitAnswers && <aside className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <p className="font-semibold">{t("Your Product Fit answers are included")}</p>
        <p className="mt-2 text-sm">{t("Packed dimensions (mm) / weight (g)")}: {[fitAnswers.fit_length_mm, fitAnswers.fit_width_mm, fitAnswers.fit_height_mm].map(v => v || t("Unknown")).join(" × ")} / {fitAnswers.fit_weight_g || t("Unknown")}</p>
        <p className="mt-2 text-sm">{t("Category, platform and destinations are prefilled below. You can change them before sending.")}</p>
        <a className="mt-2 inline-block font-semibold underline" href={localizedPath("/product-fit-check/", locale)}>{t("Change packed-order answers")}</a>
      </aside>}
      <div className="mb-6">
        <div className="flex flex-wrap justify-between gap-2 text-sm text-slate-600 mb-2" aria-live="polite">
          <span>{t("Step {current} of {total}", { current: step + 1, total: TOTAL_STEPS })}</span>
          <span>{t(current.title)}</span>
        </div>
        <div role="progressbar" aria-label={t("Scan progress")} aria-valuemin={1} aria-valuemax={TOTAL_STEPS} aria-valuenow={step + 1} className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all motion-reduce:transition-none duration-300" style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }} />
        </div>
        <p className="mt-3 text-sm text-slate-600">{t("You can go back without losing your answers. Fields marked * are required.")}</p>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-8">
        <h2 ref={stepHeadingRef} id="scan-question" tabIndex={-1} className="text-xl font-semibold text-slate-900 mb-5 focus:outline-2 focus:outline-primary focus:outline-offset-4">{t(current.question)}</h2>
        {Object.keys(errors).length > 0 && (
          <div ref={errorSummaryRef} id="scan-error-summary" role="alert" tabIndex={-1} className="mb-5 rounded-lg border border-red-400 bg-red-50 p-4 text-red-800 focus:outline-2 focus:outline-red-700">
            <p className="font-semibold">{t("Please check the highlighted fields.")}</p>
            <ul className="mt-2 list-disc pl-5">
              {Object.entries(errors).map(([field, message]) => (
                <li key={field}><a className="underline inline-block py-1 focus:outline-2" href={`#scan-${field}`} onClick={(event) => {
                  event.preventDefault(); document.getElementById(`scan-${field}`)?.focus();
                }}>{t(message)}</a></li>
              ))}
            </ul>
          </div>
        )}
        <fieldset disabled={!hydrated || busy} className="min-w-0">
          <legend className="sr-only">{t(current.title)}</legend>
          {current.type === "select" && current.field && (
            <SelectField name={current.field} label={t(current.question)} value={data[current.field] as string} options={current.options.map((option) => ({ ...option, label: t(option.label) }))} error={errors[current.field] ? t(errors[current.field]) : undefined} onChange={(v) => update(current.field!, v)} />
          )}
          {current.type === "multiselect" && current.field && (
            <MultiSelectField name={current.field} label={t(current.question)} hint={t("Select all that apply.")} selected={data[current.field] as string[]} options={current.options.map((option) => ({ ...option, label: t(option.label) }))} error={errors[current.field] ? t(errors[current.field]) : undefined} onToggle={(v) => toggleMulti(current.field!, v)} />
          )}
          {current.type === "contact" && (
            <div className="flex flex-col gap-4">
              <InputField label={t("Your name")} name="name" autoComplete="name" value={data.name} error={errors.name ? t(errors.name) : undefined} onChange={(v) => update("name", v)} required />
              <InputField label={t("Company name")} name="company" autoComplete="organization" value={data.company} error={errors.company ? t(errors.company) : undefined} onChange={(v) => update("company", v)} required />
              <InputField label={t("Work email")} name="work_email" type="email" autoComplete="email" value={data.work_email} error={errors.work_email ? t(errors.work_email) : undefined} onChange={(v) => update("work_email", v)} required />
              <InputField label={t("Phone (optional)")} name="phone" type="tel" autoComplete="tel" value={data.phone} onChange={(v) => update("phone", v)} />
              <div>
                <label className="flex items-start gap-3 cursor-pointer py-2 min-h-11">
                  <input id="scan-privacy_acknowledged" name="privacy_acknowledged" type="checkbox" required checked={privacyAck} aria-invalid={!!errors.privacy_acknowledged} aria-describedby={errors.privacy_acknowledged ? "scan-privacy_acknowledged-error" : undefined} onChange={(e) => {
                    markStarted(); setPrivacyAck(e.target.checked);
                    setErrors((prev) => { const next = { ...prev }; delete next.privacy_acknowledged; return next; });
                  }} className="w-5 h-5 shrink-0 mt-0.5 rounded border-slate-300 text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" />
                  <span className="text-sm text-slate-700"><RichText message={t("By submitting this form, you agree that Vareya may use your answers to assess fulfilment fit and contact you about your enquiry. See our {privacyPolicy} for details.")} values={{ privacyPolicy: <a href={localizedPath("/privacy/", locale)} target="_blank" rel="noopener noreferrer" className="text-primary underline">{t("Privacy Policy")} ({t("opens in a new tab")})</a> }} /> <span aria-hidden="true">*</span></span>
                </label>
                {errors.privacy_acknowledged && <p id="scan-privacy_acknowledged-error" className="mt-1 text-sm text-red-700">{t(errors.privacy_acknowledged)}</p>}
              </div>
              <TurnstileWidget key={turnstileKey} onToken={setTurnstileToken} onStateChange={setSecurityState} />
            </div>
          )}
          <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
            <input type="text" name="bot_field" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
          </div>
        </fieldset>
        {serverError && <div ref={serverErrorRef} id="scan-server-error" role="alert" tabIndex={-1} className="mt-5 text-sm text-red-800 border border-red-400 bg-red-50 px-4 py-3 rounded-lg focus:outline-2 focus:outline-red-700">{t(serverError)}</div>}
        {accepted && <div role="status" className="mt-5 rounded-lg bg-primary/10 p-4 text-slate-900">
          <p>{t("Your answers have been saved. Opening the next steps…")}</p>
          <a href={localizedPath("/thank-you/scan/", locale)} className="mt-2 inline-block underline min-h-11 py-2 focus-visible:outline-2">{t("Open the confirmation page")}</a>
        </div>}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6">
          <button type="button" onClick={prev} disabled={step === 0 || busy} className="min-h-11 px-3 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2">{t("← Back")}</button>
          <button type="submit" disabled={!hydrated || busy} className={`min-h-11 px-5 py-3 text-base font-semibold text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${isLast ? "bg-accent hover:bg-accent-light" : "bg-primary hover:bg-primary-dark"}`}>
            {accepted ? t("Saved") : submitting ? t("Submitting...") : isLast ? t("Submit") : t("Continue →")}
          </button>
        </div>
      </div>
    </form>
  );
}

function SelectField({ name, label, value, options, error, onChange }: {
  name: string; label: string; value: string; options: { value: string; label: string }[]; error?: string; onChange: (v: string) => void;
}) {
  const id = `scan-${name}`;
  return <div>
    <label htmlFor={id} className="sr-only">{label}</label>
    <select id={id} name={name} required value={value} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} onChange={(e) => onChange(e.target.value)} className={`w-full min-h-11 px-3 py-3 rounded-lg border text-base text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary ${error ? "border-red-500" : "border-slate-400"}`}>
      {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
    {error && <p id={`${id}-error`} className="mt-2 text-sm text-red-700">{error}</p>}
  </div>;
}

function MultiSelectField({ name, label, hint, selected, options, error, onToggle }: {
  name: string; label: string; hint: string; selected: string[]; options: { value: string; label: string }[]; error?: string; onToggle: (v: string) => void;
}) {
  const id = `scan-${name}`;
  return <fieldset aria-describedby={`${id}-hint${error ? ` ${id}-error` : ""}`} aria-invalid={!!error}>
    <legend className="sr-only">{label}</legend>
    <p id={`${id}-hint`} className="mb-3 text-sm text-slate-600">{hint}</p>
    <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-2">
      {options.map((o, i) => <label key={o.value} className={`min-h-11 flex items-center gap-3 px-3 py-3 rounded-lg border text-left text-sm font-medium cursor-pointer ${selected.includes(o.value) ? "border-primary bg-primary/10 text-primary" : "border-slate-400 text-slate-700"}`}>
        <input id={i === 0 ? id : `${id}-${o.value}`} name={name} type="checkbox" value={o.value} checked={selected.includes(o.value)} aria-describedby={`${id}-hint${error ? ` ${id}-error` : ""}`} aria-invalid={!!error} onChange={() => onToggle(o.value)} className="w-5 h-5 shrink-0 accent-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2" />
        <span>{o.label}</span>
      </label>)}
    </div>
    {error && <p id={`${id}-error`} className="mt-2 text-sm text-red-700">{error}</p>}
  </fieldset>;
}

function InputField({ label, name, type = "text", autoComplete, value, error, onChange, required }: {
  label: string; name: string; type?: string; autoComplete: string; value: string; error?: string; onChange: (v: string) => void; required?: boolean;
}) {
  const id = `scan-${name}`;
  return <div>
    <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">{label}{required && <span aria-hidden="true" className="text-red-700 ml-1">*</span>}</label>
    <input id={id} name={name} type={type} autoComplete={autoComplete} required={required} value={value} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} onChange={(e) => onChange(e.target.value)} className={`w-full min-h-11 px-3 py-3 rounded-lg border text-base text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary ${error ? "border-red-500" : "border-slate-400"}`} />
    {error && <p id={`${id}-error`} className="mt-2 text-sm text-red-700">{error}</p>}
  </div>;
}

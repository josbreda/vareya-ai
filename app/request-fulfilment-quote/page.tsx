"use client";

import { useState, useRef, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { TurnstileWidget } from "@/components/forms/TurnstileWidget";
import { ContentPhoto } from "@/components/marketing/ContentPhoto";
import { PRICING, RAYMOND_PHOTOS } from "@/content/raymond";
import {
  createSubmissionId,
  submitLead,
  SubmissionLock,
} from "@/lib/leads/submission";
import {
  readAttribution,
  trackQuoteFormStart,
  trackQuoteFormSubmit,
  trackQuoteFormSubmitError,
} from "@/lib/analytics";
import {
  createInteractionOnce,
  type InteractionOnce,
} from "@/lib/analytics/interaction-once";
import { useLocale, useT } from "@/i18n/client";
import { localizeLeadError, localizedPath } from "@/i18n/core";
import { RichText } from "@/i18n/RichText";
import { readAttributionContext } from "@/lib/attribution.js";
import { readCtaHandoff } from "@/lib/analytics/cta-handoff";

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  children?: ReactNode;
}

function Field({ label, name, type = "text", required, value, onChange, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children || (
        <input
          id={name}
          name={name}
          type={type}
          value={String(value ?? "")}
          onChange={(e) => onChange?.(e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            error ? "border-red-400" : "border-slate-300"
          }`}
        />
      )}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

interface QuoteFormData {
  name: string;
  company: string;
  work_email: string;
  phone: string;
  website: string;
  company_country: string;
  monthly_order_volume: string;
  sku_count: string;
  product_category: string;
  target_markets: string[];
  ecommerce_platform: string;
  amazon_fbm: boolean;
  returns_required: boolean;
  desired_start_date: string;
  comments: string;
}

const INITIAL: QuoteFormData = {
  name: "",
  company: "",
  work_email: "",
  phone: "",
  website: "",
  company_country: "",
  monthly_order_volume: "",
  sku_count: "",
  product_category: "",
  target_markets: [],
  ecommerce_platform: "",
  amazon_fbm: false,
  returns_required: false,
  desired_start_date: "",
  comments: "",
};

export default function QuoteFormPage() {
  const t = useT();
  return (
    <>
      <section className="photo-green bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16">
        <div className="container-site">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("Request a fulfilment quote")}
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            {t("Share a few details about your ecommerce operation and Vareya will follow up with next steps. This is a request for a quote, not an instant calculation.")}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-site max-w-2xl">
          <QuoteForm />
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16" aria-labelledby="how-quotes-work">
        <div className="container-site max-w-4xl">
          <h2 id="how-quotes-work" className="mb-6 text-2xl font-bold text-slate-900">
            {t(PRICING.title)}
          </h2>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-4 leading-7 text-muted">
              <p>{t(PRICING.split)}</p>
              <p>{t(PRICING.inputs)}</p>
              <p>{t(PRICING.model)}</p>
            </div>
            <ContentPhoto photo={RAYMOND_PHOTOS["photo-25"]} alt={t(RAYMOND_PHOTOS["photo-25"].alt)} />
          </div>
        </div>
      </section>
    </>
  );
}

function QuoteForm() {
  const router = useRouter();
  const t = useT();
  const locale = useLocale();
  const [data, setData] = useState<QuoteFormData>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [privacyAck, setPrivacyAck] = useState(false);
  const attemptIdRef = useRef<string | null>(null);
  const lockRef = useRef<SubmissionLock | null>(null);
  const quoteStartRef = useRef<InteractionOnce | null>(null);

  // One stable submission ID per form attempt: reused on every retry so the
  // dashboard can deduplicate a retried delivery instead of double-writing.
  const getAttemptId = () => {
    if (attemptIdRef.current === null) {
      attemptIdRef.current = createSubmissionId();
    }
    return attemptIdRef.current;
  };

  // Analytics: form start, only on the first real field interaction.
  const noteQuoteStart = () => {
    quoteStartRef.current ??= createInteractionOnce(trackQuoteFormStart);
    quoteStartRef.current.mark();
  };

  const update = (field: keyof QuoteFormData, value: string | boolean | string[]) => {
    noteQuoteStart();
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const toggleMulti = (field: "target_markets", value: string) => {
    noteQuoteStart();
    setData((prev) => {
      const arr = prev[field];
      return {
        ...prev,
        [field]: arr.includes(value)
          ? arr.filter((v) => v !== value)
          : [...arr, value],
      };
    });
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!data.name.trim()) errs.name = "Name is required";
    if (!data.company.trim()) errs.company = "Company name is required";
    if (!data.work_email.trim()) errs.work_email = "Work email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.work_email))
      errs.work_email = "Enter a valid email address";
    if (!data.monthly_order_volume) errs.monthly_order_volume = "Select your order volume";
    if (!privacyAck)
      errs.privacy_acknowledged = "Please confirm the privacy acknowledgement";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!validate()) return;

    // Security check must have produced a token before we submit
    if (!turnstileToken) {
      setServerError(
        "The security check has not completed yet. Wait a moment for it to finish, then try again. If it does not appear, check whether a browser extension is blocking it.",
      );
      return;
    }

    // Double-submit guard: one in-flight submission per form instance.
    const lock = (lockRef.current ??= new SubmissionLock());
    if (!lock.tryAcquire()) return;

    setSubmitting(true);
    setServerError("");

    try {
      const params = new URLSearchParams(window.location.search);
      const attribution = readAttribution(params);
      const payload = {
        ...data,
        submission_id: getAttemptId(),
        privacy_acknowledged: privacyAck,
        bot_field: honeypot,
        form_type: "quote",
        form_locale: locale,
        landing_page: window.location.pathname,
        referrer: document.referrer || "",
        ...attribution,
        ...readAttributionContext(),
        ...readCtaHandoff(),
        device: /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop",
        turnstile_token: turnstileToken,
      };

      const result = await submitLead(payload);

      if (result.status === "accepted") {
        trackQuoteFormSubmit(attribution);
        router.push(localizedPath("/thank-you/quote/", locale));
        return;
      }

      // Not accepted: the next attempt needs a fresh Turnstile token, but the
      // submission ID stays the same, so a retry can never duplicate a lead.
      setTurnstileToken("");
      setTurnstileKey((k) => k + 1);
      trackQuoteFormSubmitError();
      setServerError(result.message || "Something went wrong. Please try again.");
    } finally {
      lock.release();
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
      <div className="flex flex-col gap-5">
        <fieldset>
          <legend className="text-lg font-semibold text-slate-900 mb-4">
            {t("About you")}
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label={t("Your name")} name="name" required value={data.name} onChange={(v) => update("name", v)} error={errors.name ? t(errors.name) : undefined} />
            <Field label={t("Company name")} name="company" required value={data.company} onChange={(v) => update("company", v)} error={errors.company ? t(errors.company) : undefined} />
            <Field label={t("Work email")} name="work_email" type="email" required value={data.work_email} onChange={(v) => update("work_email", v)} error={errors.work_email ? t(errors.work_email) : undefined} />
            <Field label={t("Phone (optional)")} name="phone" type="tel" value={data.phone} onChange={(v) => update("phone", v)} error={errors.phone ? t(errors.phone) : undefined} />
            <Field label={t("Website (optional)")} name="website" type="url" value={data.website} onChange={(v) => update("website", v)} error={errors.website ? t(errors.website) : undefined} />
            <Field label={t("Company country")} name="company_country" value={data.company_country} onChange={(v) => update("company_country", v)} error={errors.company_country ? t(errors.company_country) : undefined} />
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-lg font-semibold text-slate-900 mb-4">
            {t("Your fulfilment needs")}
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label={t("Monthly order volume")} name="monthly_order_volume" required value={data.monthly_order_volume} onChange={(v) => update("monthly_order_volume", v)} error={errors.monthly_order_volume ? t(errors.monthly_order_volume) : undefined}>
              <select
                id="monthly_order_volume"
                value={data.monthly_order_volume}
                onChange={(e) => update("monthly_order_volume", e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  errors.monthly_order_volume ? "border-red-400" : "border-slate-300"
                }`}
              >
                <option value="">{t("Select...")}</option>
                <option value="0-200">{t("0 – 200")}</option>
                <option value="200-500">{t("200 – 500")}</option>
                <option value="500-1000">{t("500 – 1,000")}</option>
                <option value="1000-5000">{t("1,000 – 5,000")}</option>
                <option value="5000+">{t("5,000+")}</option>
              </select>
            </Field>
            <Field label={t("Number of SKUs")} name="sku_count" value={data.sku_count} onChange={(v) => update("sku_count", v)} error={errors.sku_count ? t(errors.sku_count) : undefined} />
            <Field label={t("Product category")} name="product_category" error={errors.product_category ? t(errors.product_category) : undefined}>
              <select
                id="product_category"
                value={data.product_category}
                onChange={(e) => update("product_category", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">{t("Select...")}</option>
                <option value="cosmetics">{t("Cosmetics")}</option>
                <option value="supplements">{t("Supplements")}</option>
                <option value="phone-cases">{t("Phone cases")}</option>
                <option value="accessories">{t("Accessories")}</option>
                <option value="fashion">{t("Fashion & apparel")}</option>
                <option value="other">{t("Other")}</option>
              </select>
            </Field>
            <Field label={t("E-commerce platform")} name="ecommerce_platform" error={errors.ecommerce_platform ? t(errors.ecommerce_platform) : undefined}>
              <select
                id="ecommerce_platform"
                value={data.ecommerce_platform}
                onChange={(e) => update("ecommerce_platform", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">{t("Select...")}</option>
                <option value="shopify">{t("Shopify")}</option>
                <option value="amazon-fbm">{t("Amazon FBM")}</option>
                <option value="digistore24">Digistore24</option>
                <option value="woocommerce">{t("WooCommerce")}</option>
                <option value="magento">{t("Magento")}</option>
                <option value="other">{t("Other")}</option>
              </select>
            </Field>
          </div>

          {/* Target markets */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              {t("Target markets")}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { value: "nl", label: "Netherlands" },
                { value: "de", label: "Germany" },
                { value: "be", label: "Belgium" },
                { value: "fr", label: "France" },
                { value: "uk", label: "United Kingdom" },
                { value: "es", label: "Spain" },
                { value: "it", label: "Italy" },
                { value: "other-eu", label: "Other EU" },
                { value: "us", label: "United States" },
              ].map((opt) => {
                const active = data.target_markets.includes(opt.value);
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => toggleMulti("target_markets", opt.value)}
                    className={`px-3 py-2 rounded-lg border text-left text-sm font-medium transition-colors ${
                      active
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-slate-300 text-slate-700 hover:border-slate-400"
                    }`}
                  >
                    {t(opt.label)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-3 mt-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={data.amazon_fbm}
                onChange={(e) => update("amazon_fbm", e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-slate-700">
                {t("I need Amazon FBM fulfilment")}
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={data.returns_required}
                onChange={(e) => update("returns_required", e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-slate-700">
                {t("I need returns handling")}
              </span>
            </label>
          </div>

          <div className="mt-4">
            <Field label={t("Desired start date")} name="desired_start_date" type="date" value={data.desired_start_date} onChange={(v) => update("desired_start_date", v)} error={errors.desired_start_date ? t(errors.desired_start_date) : undefined} />
          </div>

          <div className="mt-4">
            <Field label={t("Additional comments")} name="comments" error={errors.comments ? t(errors.comments) : undefined}>
              <textarea
                id="comments"
                rows={4}
                value={data.comments}
                onChange={(e) => update("comments", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y"
                placeholder={t("Anything else we should know about your fulfilment needs...")}
              />
            </Field>
          </div>
        </fieldset>

        {/* Privacy */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={privacyAck}
              onChange={(e) => {
                noteQuoteStart();
                setPrivacyAck(e.target.checked);
                setErrors((prev) => ({ ...prev, privacy_acknowledged: "" }));
              }}
              className="w-4 h-4 mt-0.5 rounded border-slate-300 text-primary focus:ring-primary"
            />
            <span className="text-sm text-muted">
              <RichText
                message={t("By submitting this form, you agree that Vareya may use your details to prepare and follow up on your quote request. See our {privacyPolicy} for details.")}
                values={{
                  privacyPolicy: (
                    <a href={localizedPath("/privacy/", locale)} className="text-primary hover:underline">
                      {t("Privacy Policy")}
                    </a>
                  ),
                }}
              />
            </span>
          </label>
          {errors.privacy_acknowledged && (
            <p className="mt-1 text-sm text-red-600">
              {t(errors.privacy_acknowledged)}
            </p>
          )}
        </div>

        {/* Honeypot */}
        <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
          <input
            type="text"
            name="bot_field"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        {/* Server error */}
        {serverError && (
          <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg">
            {localizeLeadError(t, serverError)}
          </p>
        )}

        {/* Security check */}
        <TurnstileWidget key={turnstileKey} onToken={setTurnstileToken} />

        {/* Submit — type="button": klikken vóór hydratatie kan nooit een
            native GET-submit met formulierwaarden (PII) in de URL starten */}
        <button
          type="button"
          onClick={() => submit()}
          disabled={submitting}
          className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-accent rounded-lg hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {submitting ? t("Submitting...") : t("Submit quote request")}
        </button>
      </div>
    </form>
  );
}

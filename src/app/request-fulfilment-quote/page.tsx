"use client";

import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { TurnstileWidget } from "@/components/forms/TurnstileWidget";

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
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16">
        <div className="container-site">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Request a fulfilment quote
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            Tell us about your brand and fulfilment needs. We will prepare a
            tailored quote and get back to you within one working day.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-site max-w-2xl">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

function QuoteForm() {
  const router = useRouter();
  const [data, setData] = useState<QuoteFormData>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);

  const update = (field: keyof QuoteFormData, value: string | boolean | string[]) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const toggleMulti = (field: "target_markets", value: string) => {
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

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (honeypot) return;

    // Security check must have produced a token before we submit
    if (!turnstileToken) {
      setServerError(
        "The security check has not completed yet. Wait a moment for it to finish, then try again. If it does not appear, check whether a browser extension is blocking it.",
      );
      return;
    }

    setSubmitting(true);
    setServerError("");

    try {
      const params = new URLSearchParams(window.location.search);
      const payload = {
        ...data,
        form_type: "quote",
        landing_page: window.location.pathname,
        referrer: document.referrer || "",
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
        utm_content: params.get("utm_content") || "",
        device: /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop",
        turnstile_token: turnstileToken,
      };

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        // Remount the widget so the next attempt gets a fresh token
        setTurnstileToken("");
        setTurnstileKey((k) => k + 1);
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      router.push("/thank-you/quote/");
    } catch (err: unknown) {
      setServerError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
      <div className="flex flex-col gap-5">
        <fieldset>
          <legend className="text-lg font-semibold text-slate-900 mb-4">
            About you
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Your name" name="name" required value={data.name} onChange={(v) => update("name", v)} error={errors.name} />
            <Field label="Company name" name="company" required value={data.company} onChange={(v) => update("company", v)} error={errors.company} />
            <Field label="Work email" name="work_email" type="email" required value={data.work_email} onChange={(v) => update("work_email", v)} error={errors.work_email} />
            <Field label="Phone (optional)" name="phone" type="tel" value={data.phone} onChange={(v) => update("phone", v)} error={errors.phone} />
            <Field label="Website (optional)" name="website" type="url" value={data.website} onChange={(v) => update("website", v)} error={errors.website} />
            <Field label="Company country" name="company_country" value={data.company_country} onChange={(v) => update("company_country", v)} error={errors.company_country} />
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-lg font-semibold text-slate-900 mb-4">
            Your fulfilment needs
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Monthly order volume" name="monthly_order_volume" required value={data.monthly_order_volume} onChange={(v) => update("monthly_order_volume", v)} error={errors.monthly_order_volume}>
              <select
                id="monthly_order_volume"
                value={data.monthly_order_volume}
                onChange={(e) => update("monthly_order_volume", e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  errors.monthly_order_volume ? "border-red-400" : "border-slate-300"
                }`}
              >
                <option value="">Select...</option>
                <option value="0-200">0 – 200</option>
                <option value="200-500">200 – 500</option>
                <option value="500-1000">500 – 1,000</option>
                <option value="1000-5000">1,000 – 5,000</option>
                <option value="5000+">5,000+</option>
              </select>
            </Field>
            <Field label="Number of SKUs" name="sku_count" value={data.sku_count} onChange={(v) => update("sku_count", v)} error={errors.sku_count} />
            <Field label="Product category" name="product_category" error={errors.product_category}>
              <select
                id="product_category"
                value={data.product_category}
                onChange={(e) => update("product_category", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select...</option>
                <option value="cosmetics">Cosmetics</option>
                <option value="supplements">Supplements</option>
                <option value="phone-cases">Phone cases</option>
                <option value="accessories">Accessories</option>
                <option value="fashion">Fashion & apparel</option>
                <option value="other">Other</option>
              </select>
            </Field>
            <Field label="E-commerce platform" name="ecommerce_platform" error={errors.ecommerce_platform}>
              <select
                id="ecommerce_platform"
                value={data.ecommerce_platform}
                onChange={(e) => update("ecommerce_platform", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select...</option>
                <option value="shopify">Shopify</option>
                <option value="amazon-fbm">Amazon FBM</option>
                <option value="woocommerce">WooCommerce</option>
                <option value="magento">Magento</option>
                <option value="other">Other</option>
              </select>
            </Field>
          </div>

          {/* Target markets */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Target markets
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
                    {opt.label}
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
                I need Amazon FBM fulfilment
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
                I need returns handling
              </span>
            </label>
          </div>

          <div className="mt-4">
            <Field label="Desired start date" name="desired_start_date" type="date" value={data.desired_start_date} onChange={(v) => update("desired_start_date", v)} error={errors.desired_start_date} />
          </div>

          <div className="mt-4">
            <Field label="Additional comments" name="comments" error={errors.comments}>
              <textarea
                id="comments"
                rows={4}
                value={data.comments}
                onChange={(e) => update("comments", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y"
                placeholder="Anything else we should know about your fulfilment needs..."
              />
            </Field>
          </div>
        </fieldset>

        {/* Privacy */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            className="w-4 h-4 mt-0.5 rounded border-slate-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-muted">
            I agree that Vareya may store and process my data to respond to my
            enquiry, in accordance with the{" "}
            <a href="/privacy/" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>

        {/* Honeypot */}
        <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        {/* Server error */}
        {serverError && (
          <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg">
            {serverError}
          </p>
        )}

        {/* Security check */}
        <TurnstileWidget key={turnstileKey} onToken={setTurnstileToken} />

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-accent rounded-lg hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {submitting ? "Submitting..." : "Request quote"}
        </button>
      </div>
    </form>
  );
}

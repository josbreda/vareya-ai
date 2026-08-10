"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
      { value: "other", label: "Rest of world" },
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
      { value: "amazon-fbm", label: "Amazon FBM" },
      { value: "woocommerce", label: "WooCommerce" },
      { value: "magento", label: "Magento" },
      { value: "other", label: "Other" },
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
    question: "Where should we send your results?",
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
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16">
        <div className="container-site">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Check your EU fulfilment fit
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            Answer a few quick questions to see if Vareya is right for your
            e-commerce brand. Takes under 3 minutes.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-site max-w-2xl">
          <ScanForm />
        </div>
      </section>
    </>
  );
}

/* ── Multi-step form ── */
function ScanForm() {
  const router = useRouter();
  const turnstileRef = useRef<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState(0);
  const [data, setData] = useState<ScanFormData>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const current = STEPS[step];
  const isLast = step === TOTAL_STEPS - 1;

  // Render Turnstile widget on contact step
  useEffect(() => {
    if (current.type === "contact" && turnstileContainerRef.current && !turnstileRef.current) {
      const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
      if (siteKey && (window as any).turnstile) {
        turnstileRef.current = (window as any).turnstile.render(turnstileContainerRef.current, {
          sitekey: siteKey,
          theme: "light",
          size: "normal",
        });
      }
    }
    return () => {
      if (turnstileRef.current && (window as any).turnstile) {
        (window as any).turnstile.remove(turnstileRef.current);
        turnstileRef.current = null;
      }
    };
  }, [current.type]);

  const update = useCallback(
    (field: keyof ScanFormData, value: string | string[]) => {
      setData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: "" }));
    },
    []
  );

  const toggleMulti = (field: keyof ScanFormData, value: string) => {
    setData((prev) => {
      const arr = prev[field] as string[];
      return {
        ...prev,
        [field]: arr.includes(value)
          ? arr.filter((v) => v !== value)
          : [...arr, value],
      };
    });
  };

  const validateStep = (): boolean => {
    const errs: Record<string, string> = {};

    if (current.type === "contact") {
      if (!data.name.trim()) errs.name = "Name is required";
      if (!data.company.trim()) errs.company = "Company name is required";
      if (!data.work_email.trim()) errs.work_email = "Work email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.work_email))
        errs.work_email = "Enter a valid email address";
    } else if (current.type === "select" && current.field) {
      if (!data[current.field]) errs[current.field] = "Please select an option";
    } else if (current.type === "multiselect" && current.field) {
      const arr = data[current.field] as string[];
      if (arr.length === 0) errs[current.field] = "Select at least one";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  };

  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    if (!validateStep()) return;
    if (honeypot) return; // bot detected, silently "succeed"

    setSubmitting(true);
    setServerError("");

    try {
      // Gather attribution
      const params = new URLSearchParams(window.location.search);
      const payload = {
        ...data,
        form_type: "scan",
        landing_page: window.location.pathname,
        referrer: document.referrer || "",
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
        utm_content: params.get("utm_content") || "",
        device: /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop",
        turnstile_token: (window as any).turnstile?.getResponse?.(turnstileRef.current) || "",
      };

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      router.push("/thank-you/scan/");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setServerError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-muted mb-2">
          <span>
            Step {step + 1} of {TOTAL_STEPS}
          </span>
          <span>{current.title}</span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">
          {current.question}
        </h2>

        {/* Select */}
        {current.type === "select" && current.field && (
          <SelectField
            value={data[current.field] as string}
            options={current.options}
            error={errors[current.field]}
            onChange={(v) => update(current.field!, v)}
          />
        )}

        {/* Multiselect */}
        {current.type === "multiselect" && current.field && (
          <MultiSelectField
            selected={data[current.field] as string[]}
            options={current.options}
            error={errors[current.field]}
            onToggle={(v) => toggleMulti(current.field!, v)}
          />
        )}

        {/* Contact form */}
        {current.type === "contact" && (
          <div className="flex flex-col gap-4">
            <InputField
              label="Your name"
              name="name"
              value={data.name}
              error={errors.name}
              onChange={(v) => update("name", v)}
              required
            />
            <InputField
              label="Company name"
              name="company"
              value={data.company}
              error={errors.company}
              onChange={(v) => update("company", v)}
              required
            />
            <InputField
              label="Work email"
              name="work_email"
              type="email"
              value={data.work_email}
              error={errors.work_email}
              onChange={(v) => update("work_email", v)}
              required
            />
            <InputField
              label="Phone (optional)"
              name="phone"
              type="tel"
              value={data.phone}
              onChange={(v) => update("phone", v)}
            />
            <div ref={turnstileContainerRef} className="mt-3 flex justify-center" />
          </div>
        )}

        {/* Honeypot — invisible to users */}
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
          <p className="mt-4 text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg">
            {serverError}
          </p>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            type="button"
            onClick={prev}
            disabled={step === 0}
            className="text-sm font-medium text-muted hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            ← Back
          </button>

          {isLast ? (
            <button
              type="button"
              onClick={submit}
              disabled={submitting}
              className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-accent rounded-lg hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {submitting ? "Submitting..." : "See my results"}
            </button>
          ) : (
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
            >
              Continue →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Field components ── */

function SelectField({
  value,
  options,
  error,
  onChange,
}: {
  value: string;
  options: { value: string; label: string }[];
  error?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 rounded-lg border text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 ${
          error ? "border-red-400" : "border-slate-300"
        }`}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function MultiSelectField({
  selected,
  options,
  error,
  onToggle,
}: {
  selected: string[];
  options: { value: string; label: string }[];
  error?: string;
  onToggle: (v: string) => void;
}) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        {options.map((o) => {
          const active = selected.includes(o.value);
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onToggle(o.value)}
              className={`px-4 py-3 rounded-lg border text-left text-sm font-medium transition-colors ${
                active
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-slate-300 text-slate-700 hover:border-slate-400"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function InputField({
  label,
  name,
  type = "text",
  value,
  error,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 rounded-lg border text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 ${
          error ? "border-red-400" : "border-slate-300"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

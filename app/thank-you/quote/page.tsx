import { Metadata } from "next";
import Link from "@/i18n/Link";
import { getRequestI18n } from "@/i18n/server";
import { buildLocalizedMetadata } from "@/i18n/page-meta";

export function generateMetadata(): Promise<Metadata> {
  return buildLocalizedMetadata("/thank-you/quote/");
}

export default async function QuoteThankYou() {
  const { t } = await getRequestI18n();
  return (
    <div className="py-20 sm:py-28">
      <div className="container-site max-w-xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          {t("Thanks, your quote request has been received")}
        </h1>
        <p className="text-lg text-muted mb-8">
          {t("Vareya will review your details and follow up by email with next steps.")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
          >
            {t("Back to home")}
          </Link>
          <Link
            href="/free-rate-scan/"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-primary hover:text-primary-dark transition-colors"
          >
            {t("Take the fulfilment scan")}
          </Link>
        </div>
      </div>
    </div>
  );
}

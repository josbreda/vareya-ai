import { Metadata } from "next";
import Link from "@/i18n/Link";
import { getRequestI18n } from "@/i18n/server";
import { buildLocalizedMetadata } from "@/i18n/page-meta";
import { localizedPath } from "@/i18n/core";

export function generateMetadata(): Promise<Metadata> {
  return buildLocalizedMetadata("/thank-you/scan/");
}

export default async function ScanThankYou() {
  const { t, locale } = await getRequestI18n();
  return (
    <div className="py-16 sm:py-24">
      <div className="container-site max-w-xl text-center">
        <div aria-hidden="true" className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t("Thanks, your fulfilment scan has been received")}</h1>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">{t("What happens next")}</h2>
        <p className="text-lg text-slate-600 mb-4">{t("Vareya will review your answers and email a personal fit response. If more details are needed, we will ask before discussing a proposal.")}</p>
        <p className="text-slate-600 mb-8">{t("This confirms receipt of your answers. It is not an automatic rate, quote or acceptance.")}</p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <Link href={localizedPath("/", locale)} className="inline-flex items-center min-h-11 px-6 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2">{t("Back to home")}</Link>
          <Link href={localizedPath("/request-fulfilment-quote/", locale)} className="inline-flex items-center min-h-11 px-4 py-3 text-base font-medium text-primary underline focus-visible:outline-2">{t("Request a fulfilment quote")}</Link>
          <Link href={localizedPath("/eu-fulfilment/", locale)} className="inline-flex items-center min-h-11 px-4 py-3 text-base font-medium text-primary underline focus-visible:outline-2">{t("Learn more about EU fulfilment")}</Link>
        </div>
      </div>
    </div>
  );
}

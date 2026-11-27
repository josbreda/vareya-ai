import { localizeNode } from "@/i18n/localize-node";
import { getT as getTForContent } from "@/i18n/server";
import Link from "@/i18n/Link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export async function CTABanner({
  title = "Ready to check your fulfilment fit?",
  subtitle = "Take our quick fulfilment scan to see if Vareya is right for your brand. It takes a few minutes.",
  primaryHref = "/free-rate-scan/?lang=en",
  primaryLabel = "Check your EU fulfilment fit",
  secondaryHref = "/request-fulfilment-quote/?lang=en",
  secondaryLabel = "Request a quote",
}: CTABannerProps) {
  const __pageT = await getTForContent();
  return localizeNode((
    <section className="cta-banner py-16 sm:py-20">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-primary-light text-lg max-w-2xl mx-auto lg:mx-0 mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              href={primaryHref}
              className="inline-flex items-center px-6 py-3 text-base font-semibold text-primary bg-white rounded-lg hover:bg-slate-100 transition-colors shadow-sm"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
        {/* Owner-supplied cube logo (12 Nov 2026 18:32); deliberately not the footer photograph. */}
        <div className="mx-auto w-full max-w-[230px] lg:mx-0 lg:ml-auto">
          <div className="rounded-2xl border border-white/15 bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
            {/* eslint-disable-next-line @next/next/no-img-element -- byte-identical owner-supplied JPEG, no optimizer dependency */}
            <img
              src="/images/p1/vareya-cube-logo_894x916_photo86.jpg"
              alt="VareYa"
              width={894}
              height={916}
              loading="lazy"
              decoding="async"
              className="mx-auto h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  ), __pageT);
}

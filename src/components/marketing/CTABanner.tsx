import Link from "next/link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function CTABanner({
  title = "Ready to check your fulfilment fit?",
  subtitle = "Take our quick fulfilment scan to see if Vareya is right for your brand. It takes under 3 minutes.",
  primaryHref = "/fulfilment-scan/",
  primaryLabel = "Check your fit",
  secondaryHref = "/request-fulfilment-quote/",
  secondaryLabel = "Request a quote",
}: CTABannerProps) {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="container-site text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-primary-light text-lg max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
    </section>
  );
}

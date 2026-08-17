import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Vareya",
  robots: { index: false, follow: false },
};

export default function QuoteThankYou() {
  return (
    <div className="py-20 sm:py-28">
      <div className="container-site max-w-xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Quote request received
        </h1>
        <p className="text-lg text-muted mb-8">
          Thank you for requesting a fulfilment quote. We will prepare a
          tailored quote based on your requirements and get back to you within
          one working day.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/free-rate-scan/"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-primary hover:text-primary-dark transition-colors"
          >
            Take the fulfilment scan
          </Link>
        </div>
      </div>
    </div>
  );
}

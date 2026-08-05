import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-28">
      <div className="container-site max-w-xl text-center">
        <p className="text-6xl font-bold text-primary mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Page not found
        </h1>
        <p className="text-muted mb-8">
          The page you are looking for does not exist. It may have been moved or
          the address may be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/contact/"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-primary hover:text-primary-dark transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

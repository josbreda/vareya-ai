import Link from "next/link";
import { COMPANY } from "@/content/facts";

const FOOTER_LINKS = {
  Services: [
    { label: "EU Fulfilment", href: "/eu-fulfilment/" },
    { label: "Fulfilmentcentrum Brabant", href: "/nl/fulfilment-noord-brabant/" },
    { label: "Shopify Fulfilment", href: "/shopify-fulfilment-europe/" },
    { label: "US Brands", href: "/eu-fulfilment-us-brands/" },
    { label: "UK Brands", href: "/eu-fulfilment-uk-brands/" },
    { label: "Cosmetics & Supplements", href: "/cosmetics-supplements-fulfilment-europe/" },
  ],
  Company: [
    { label: "Contact", href: "/contact/" },
    { label: "Fulfilment Scan", href: "/free-rate-scan/" },
    { label: "Request Quote", href: "/request-fulfilment-quote/" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Cookie Policy", href: "/cookies/" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              Vareya
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              European fulfilment for growing e-commerce brands. Based in Breda, the Netherlands.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <p>
            {COMPANY.street}, {COMPANY.postcode} {COMPANY.city}, {COMPANY.country}
          </p>
        </div>
      </div>
    </footer>
  );
}

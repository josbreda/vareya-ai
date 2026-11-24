/* eslint-disable @next/next/no-img-element -- Publisher-provided external directory badge. */

import Link from "@/i18n/Link";
import { COMPANY } from "@/content/facts";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { getRequestI18n } from "@/i18n/server";

const FOOTER_LINKS = {
  Services: [
    { label: "Digistore24 Fulfilment", href: "/digistore24-fulfilment-europe/" },
    { label: "EU Fulfilment", href: "/eu-fulfilment/" },
    { label: "Shopify Fulfilment", href: "/shopify-fulfilment-europe/" },
    { label: "Boxable", href: "/boxable-fulfilment/" },
    { label: "Amazon FBM Fulfilment", href: "/amazon-fbm-fulfilment/" },
    { label: "ShipBob Alternative in Europe", href: "/shipbob-alternative-europe/" },
    { label: "Cosmetics & Supplements", href: "/cosmetics-supplements-fulfilment-europe/" },
    { label: "US Brands", href: "/eu-fulfilment-us-brands/" },
    { label: "UK Brands", href: "/eu-fulfilment-uk-brands/" },
    { label: "Canadian Brands", href: "/european-fulfilment-for-canada-brands/" },
    { label: "Australian Brands", href: "/european-fulfilment-for-australian-brands/" },
    { label: "New Zealand Brands", href: "/european-fulfilment-for-new-zealand-brands/" },
    { label: "Norwegian Brands", href: "/european-fulfilment-for-norway-brands/" },
    { label: "Swiss Brands", href: "/european-fulfilment-for-switzerland-brands/" },
    { label: "Japanese Brands", href: "/european-fulfilment-for-japan-brands/" },
    { label: "Chinese Brands", href: "/european-fulfilment-for-china-brands/" },
    { label: "Hong Kong Brands", href: "/european-fulfilment-for-hong-kong-brands/" },
    { label: "Brazilian Brands", href: "/european-fulfilment-for-brazil-brands/" },
    { label: "South Korean Brands", href: "/eu-fulfilment-south-korean-brands/" },
    { label: "Saudi Arabian Brands", href: "/european-fulfilment-for-saudi-arabia-brands/" },
    { label: "Turkish Brands", href: "/european-fulfilment-for-turkey-brands/" },
    { label: "UAE Brands", href: "/european-fulfilment-for-united-arab-emirates-brands/" },
  ],
  Nederlands: [
    { label: "Fulfilmentcentrum Brabant", href: "/nl/fulfilment-noord-brabant/" },
    { label: "Fulfilment uitbesteden in Breda", href: "/nl/fulfilment-uitbesteden-breda/" },
    { label: "Fulfilmentcentrum kiezen", href: "/nl/fulfilmentcentrum-kiezen/" },
    { label: "Wat kost fulfilment in Brabant?", href: "/nl/wat-kost-fulfilment-brabant/" },
  ],
  Company: [
    { label: "PRIMAL FX", href: "/knowledge/primal-fx-supplements-fulfilment-evidence/" },
    { label: "ShipHero case study", href: "/knowledge/shiphero-vareya-growth-case-study/" },
    { label: "People behind parcels", href: "/knowledge/vareya-postnl-people-behind-parcels/" },
    { label: "VegaMelts", href: "/case-studies/vegamelts/" },
    { label: "About Vareya", href: "/about/" },
    { label: "Contact", href: "/contact/" },
    { label: "Knowledge Centre", href: "/knowledge/" },
    { label: "Norwegian Lab / BeLean", href: "/knowledge/norwegian-lab-belean-letterbox-example/" },
    { label: "Fulfilment Scan", href: "/free-rate-scan/" },
    { label: "Request Quote", href: "/request-fulfilment-quote/" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Cookie Policy", href: "/cookies/" },
  ],
};

export async function Footer() {
  const { t, inScope } = await getRequestI18n();

  return (
    <footer className="photo-footer bg-slate-900 text-slate-300 mt-auto" style={inScope ? { overflowWrap: "anywhere" } : undefined}>

      <div className="container-site py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              VareYa
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {t("European fulfilment for growing e-commerce brands. Based in Breda, the Netherlands.")}
            </p>
            <SocialLinks className="mt-5 text-slate-300" />
            <a className="mt-6 block" href="https://www.3plhub.co/netherlands/noord-brabant/breda/vareya" target="_blank" rel="noopener noreferrer"><img src="https://www.3plhub.co/images/verified-3pl-badge/3plhub-verified-3pl-badge-horizontal.webp?v=20261030-transparency" alt="VareYa — 3PL Hub Verified 3PL" width="320" loading="lazy" style={{maxWidth:"100%",height:"auto",border:0}} /></a>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {t(heading)}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>
            {t("© {year} {company}. All rights reserved.", {
              year: new Date().getFullYear(),
              company: COMPANY.legalName,
            })}
          </p>
          <p>
            {COMPANY.street}, {COMPANY.postcode} {t(COMPANY.city)}, {t(COMPANY.country)}
          </p>
        </div>
      </div>
    </footer>
  );
}

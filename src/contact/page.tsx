import { Metadata } from "next";
import { englishConversionHref } from "@/i18n/conversion-links";
import { COMPANY, WAREHOUSE } from "@/content/facts";
import { TrackedContactLink } from "@/components/marketing/TrackedContactLink";
import { getRequestI18n } from "@/i18n/server";
import { buildLocalizedMetadata } from "@/i18n/page-meta";

export function generateMetadata(): Promise<Metadata> {
  return buildLocalizedMetadata("/contact/");
}

export default async function ContactPage() {
  const { t, locale } = await getRequestI18n();
  return (
    <>
      <section className="photo-green bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16">
        <div className="container-site">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t("Contact us")}</h1>
          <p className="text-lg text-white/80 max-w-xl">
            {t("Get in touch with Vareya. Bagven Park 6, 4838 EH Breda, the Netherlands. Call +31 6 19 12 34 72 or email info@vareya.ai.")}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact details */}
            <div>
              <h2 className="text-xl font-semibold mb-6">{t("Get in touch")}</h2>

              <div className="flex flex-col gap-6">
                <ContactItem label={t("Phone")}>
                  <TrackedContactLink kind="phone" value={COMPANY.phone} href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} />
                </ContactItem>
                <ContactItem label={t("Email")}>
                  <TrackedContactLink kind="email" value={COMPANY.email} href={`mailto:${COMPANY.email}`} />
                </ContactItem>
                <ContactItem label={t("Address")} value={null}>
                  <address className="not-italic text-muted leading-relaxed">
                    {t(WAREHOUSE.label)}
                    <br />
                    {COMPANY.street}
                    <br />
                    {COMPANY.postcode} {t(COMPANY.city)}
                    <br />
                    {t(COMPANY.country)}
                  </address>
                </ContactItem>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h2 className="text-xl font-semibold mb-6">{t("Quick actions")}</h2>
              <div className="flex flex-col gap-3">
                <QuickLink
                  href={englishConversionHref("/free-rate-scan/", locale)}
                  title={t("Fulfilment scan")}
                  desc={t("Check if Vareya is right for your brand in a few minutes.")}
                />
                <QuickLink
                  href={englishConversionHref("/request-fulfilment-quote/", locale)}
                  title={t("Request a quote")}
                  desc={t("Tell us about your brand and we will prepare a tailored quote.")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  label,
  value,
  href,
  children,
}: {
  label: string;
  value?: string | null;
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
        {label}
      </p>
      {children || (
        <a
          href={href}
          className="text-slate-900 hover:text-primary transition-colors font-medium"
        >
          {value}
        </a>
      )}
    </div>
  );
}

function QuickLink({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <a
      href={href}
      className="block p-4 rounded-lg border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all"
    >
      <p className="font-semibold text-slate-900 mb-1">{title}</p>
      <p className="text-sm text-muted">{desc}</p>
    </a>
  );
}

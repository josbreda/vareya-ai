import { Metadata } from "next";
import Link from "@/i18n/Link";
import { COMPANY } from "@/content/facts";
import { getRequestI18n } from "@/i18n/server";
import { buildLocalizedMetadata } from "@/i18n/page-meta";
import { RichText } from "@/i18n/RichText";

const CAMPAIGN_RECORD =
  "If you accept analytics, we also keep a short-lived campaign record in this browser tab (vareya_campaign_session_v1) to retain the source of an enquiry. It expires 30 minutes after the latest new campaign or when the tab session ends, and it is cleared when you withdraw consent.";

export function generateMetadata(): Promise<Metadata> {
  return buildLocalizedMetadata("/privacy/");
}

export default async function PrivacyPage() {
  const { t } = await getRequestI18n();
  return (
    <div className="py-16 sm:py-20">
      <div className="container-site max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">{t("Privacy Policy")}</h1>
        <p className="text-muted mb-8">
          {t("Last updated: August 2026")}
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          <Section title={t("1. Who we are")}>
            <p>
              {t("{legalName} (\"Vareya\", \"we\", \"us\", or \"our\") operates the website vareya.ai (the \"Site\"). We are registered in the Netherlands at {street}, {postcode} {city}.", {
                legalName: COMPANY.legalName,
                street: COMPANY.street,
                postcode: COMPANY.postcode,
                city: t(COMPANY.city),
              })}
            </p>
            <p>
              {t("This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our Site or use our fulfilment scan and quote request forms.")}
            </p>
          </Section>

          <Section title={t("2. Information we collect")}>
            <h3 className="font-semibold text-slate-900 mt-6 mb-2">
              {t("Information you provide")}
            </h3>
            <p>
              {t("When you complete our fulfilment scan or request a quote, we collect:")}
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t("Name")}</li>
              <li>{t("Company name")}</li>
              <li>{t("Work email address")}</li>
              <li>{t("Phone number (optional)")}</li>
              <li>{t("Website (optional)")}</li>
              <li>{t("Information about your e-commerce business, including order volumes, product categories, and target markets")}</li>
            </ul>

            <h3 className="font-semibold text-slate-900 mt-6 mb-2">
              {t("Information collected automatically")}
            </h3>
            <p>
              {t("When you visit our Site, we may automatically collect certain information about your device, including your IP address, browser type, referring URLs, and pages viewed. We use Google Analytics for this purpose, subject to your cookie preferences.")}
            </p>
          </Section>

          <Section title={t("3. How we use your information")}>
            <p>{t("We use the information we collect to:")}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t("Respond to your fulfilment scan or quote request")}</li>
              <li>{t("Assess whether Vareya is a good fit for your brand")}</li>
              <li>{t("Communicate with you about our services")}</li>
              <li>{t("Improve our Site and services")}</li>
              <li>{t("Comply with legal obligations")}</li>
            </ul>
          </Section>

          <Section title={t("4. Legal basis for processing")}>
            <p>
              {t("We process your personal data on the following legal bases:")}
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t("Your consent (for analytics cookies)")}</li>
              <li>{t("Our legitimate interest in responding to your business enquiry")}</li>
              <li>{t("Compliance with legal obligations")}</li>
            </ul>
          </Section>

          <Section title={t("5. Data sharing")}>
            <p>
              {t("We use third-party service providers to operate our Site:")}
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>{t("Vareya lead dashboard")}</strong> — {t("Lead storage and database hosting (own infrastructure, EU-hosted VPS in the Netherlands)")}
              </li>
              <li>
                <strong>{t("Resend")}</strong> — {t("Transactional email delivery")}
              </li>
              <li>
                <strong>{t("Vercel")}</strong> — {t("Website hosting and content delivery")}
              </li>
              <li>
                <strong>{t("Google Analytics")}</strong> — {t("Website analytics (subject to consent)")}
              </li>
              <li>
                <strong>{t("Zapier")}</strong> — {t("Workflow automation (forwards your enquiry to our quotation tooling)")}
              </li>
            </ul>
            <p>
              {t("We do not sell your personal data to third parties.")}
            </p>
          </Section>

          <Section title={t("6. Data retention")}>
            <p>
              {t("We retain your enquiry data for as long as necessary to respond to your request and maintain a record of our business communications. Analytics data is retained in accordance with Google Analytics' data retention settings.")}
            </p>
          </Section>

          <Section title={t("7. Your rights")}>
            <p>{t("Under the GDPR, you have the right to:")}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t("Access your personal data")}</li>
              <li>{t("Rectify inaccurate data")}</li>
              <li>{t("Erase your data (\"right to be forgotten\")")}</li>
              <li>{t("Restrict processing")}</li>
              <li>{t("Data portability")}</li>
              <li>{t("Object to processing")}</li>
              <li>{t("Withdraw consent")}</li>
            </ul>
            <p>
              <RichText
                message={t("To exercise any of these rights, contact us at {email}.")}
                values={{
                  email: (
                    <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">
                      {COMPANY.email}
                    </a>
                  ),
                }}
              />
            </p>
          </Section>

          <Section title={t("8. Cookies")}>
            <p>
              <RichText
                message={t("We use cookies and similar technologies to analyse Site traffic. You can manage your cookie preferences through our cookie banner. For full details, see our {cookiePolicy}.")}
                values={{
                  cookiePolicy: (
                    <Link href="/cookies/" className="text-primary hover:underline">
                      {t("Cookie Policy")}
                    </Link>
                  ),
                }}
              />
            </p>
            <p>{t(CAMPAIGN_RECORD)}</p>
          </Section>

          <Section title={t("9. Contact")}>
            <p>
              {t("For questions about this privacy policy or to exercise your data rights, contact us at:")}
            </p>
            <address className="not-italic mt-3 text-muted">
              {COMPANY.legalName}
              <br />
              {COMPANY.street}
              <br />
              {COMPANY.postcode} {t(COMPANY.city)}
              <br />
              {t(COMPANY.country)}
              <br />
              <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">
                {COMPANY.email}
              </a>
            </address>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-slate-900 mb-4">{title}</h2>
      <div className="text-sm text-muted leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

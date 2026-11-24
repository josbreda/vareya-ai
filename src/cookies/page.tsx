import { CookiePreferences } from "@/components/layout/CookiePreferences";
import { Metadata } from "next";
import { COMPANY } from "@/content/facts";
import { getRequestI18n } from "@/i18n/server";
import { buildLocalizedMetadata } from "@/i18n/page-meta";
import { RichText } from "@/i18n/RichText";

const CAMPAIGN_POLICY =
  "Campaign attribution (vareya_campaign_session_v1): after you accept analytics, we keep the first and latest relevant campaign in this tab. This helps us retain the source of an enquiry when you move between pages. The record expires 30 minutes after the latest new campaign, or when the tab session ends. We do not send these campaign values through our analytics event helpers. If you decline, we do not save this record. Campaign details already in the form page URL may still accompany the enquiry you choose to send.";
const CTA_POLICY = "Topic and CTA attribution (vareya_cta_handoff_v1): after you accept analytics, we retain known topic and button identifiers in this tab for at most 30 minutes from the first eligible click. We remove the record when you decline analytics. It contains no contact details and is not sent to analytics.";

export function generateMetadata(): Promise<Metadata> {
  return buildLocalizedMetadata("/cookies/");
}

export default async function CookiesPage() {
  const { t } = await getRequestI18n();
  return (
    <div className="py-16 sm:py-20">
      <div className="container-site max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">{t("Cookie Policy")}</h1>
        <p className="text-muted mb-8">{t("Last updated: October 2026")}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <Section title={t("1. What are cookies?")}>
            <p>
              {t("Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners.")}
            </p>
          </Section>

          <Section title={t("2. How we use cookies")}>
            <p>{t("We use cookies for the following purposes:")}</p>
            <h3 className="font-semibold text-slate-900 mt-4 mb-2">
              {t("Essential cookies")}
            </h3>
            <p>
              {t("These cookies are necessary for the Site to function properly. They enable core functionality such as security and form submission. The Site cannot function properly without these cookies.")}
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                <strong>{t("Consent cookie")}</strong> — {t("Stores your cookie preferences (duration: 12 months)")}
              </li>
              <li>
                <strong>vareya_locale</strong> - {t("Remembers your chosen language for 12 months. This cookie is not used for tracking.")}
              </li>
              <li>
                <strong>{t("Turnstile cookie")}</strong> — {t("Cloudflare Turnstile sets a cookie to verify you are not a bot when submitting forms (session)")}
              </li>
            </ul>

            <h3 className="font-semibold text-slate-900 mt-6 mb-2">
              {t("Analytics cookies")}
            </h3>
            <p>
              {t("We use Google Analytics to understand how visitors interact with our Site. This helps us improve the Site experience. These cookies are only set if you accept them in our cookie banner.")}
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                <strong>_ga</strong> — {t("Google Analytics, used to distinguish users (duration: 2 years)")}
              </li>
              <li>
                <strong>_ga_*</strong> — {t("Google Analytics, used to persist session state (duration: 2 years)")}
              </li>
            </ul>

            <h3 className="font-semibold text-slate-900 mt-6 mb-2">
              {t("Campaign attribution")}
            </h3>
            <p>{t(CAMPAIGN_POLICY)}</p>
            <p>{t(CTA_POLICY)}</p>
          </Section>

          <Section title={t("3. Third-party cookies")}>
            <p>
              {t("Our Site uses Cloudflare Turnstile for bot protection on forms. Cloudflare may set a cookie (__cf_bm) to distinguish between humans and bots. This is an essential security cookie.")}
            </p>
          </Section>

          <Section title={t("4. Managing cookies")}>
            <CookiePreferences />
            <p>
              {t("You can manage your cookie preferences at any time:")}
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>{t("Cookie banner")}</strong> — {t("You can accept or decline analytics cookies using the controls above. Withdrawing consent reloads this page to stop analytics.")}
              </li>
              <li>
                <strong>{t("Browser settings")}</strong> — {t("Most browsers allow you to block or delete cookies through their settings. Note that blocking essential cookies may affect Site functionality.")}
              </li>
            </ul>
          </Section>

          <Section title={t("5. Changes to this policy")}>
            <p>
              {t("We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated date.")}
            </p>
          </Section>

          <Section title={t("6. Contact")}>
            <p>
              <RichText
                message={t("For questions about our use of cookies, contact us at {email}.")}
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

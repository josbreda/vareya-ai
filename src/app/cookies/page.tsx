import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Vareya",
  description: "How Vareya uses cookies and similar technologies on our website.",
  alternates: {
    canonical: "https://vareya.ai/cookies/",
  },
};

export default function CookiesPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="container-site max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Cookie Policy</h1>
        <p className="text-muted mb-8">Last updated: August 2026</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <Section title="1. What are cookies?">
            <p>
              Cookies are small text files placed on your device when you visit a
              website. They are widely used to make websites work more efficiently
              and to provide information to the site owners.
            </p>
          </Section>

          <Section title="2. How we use cookies">
            <p>We use cookies for the following purposes:</p>
            <h3 className="font-semibold text-slate-900 mt-4 mb-2">
              Essential cookies
            </h3>
            <p>
              These cookies are necessary for the Site to function properly. They
              enable core functionality such as security and form submission. The
              Site cannot function properly without these cookies.
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                <strong>Consent cookie</strong> — Stores your cookie preferences
                (duration: 12 months)
              </li>
              <li>
                <strong>Turnstile cookie</strong> — Cloudflare Turnstile sets a
                cookie to verify you are not a bot when submitting forms
                (session)
              </li>
            </ul>

            <h3 className="font-semibold text-slate-900 mt-6 mb-2">
              Analytics cookies
            </h3>
            <p>
              We use Google Analytics to understand how visitors interact with our
              Site. This helps us improve the Site experience. These cookies are
              only set if you accept them in our cookie banner.
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                <strong>_ga</strong> — Google Analytics, used to distinguish
                users (duration: 2 years)
              </li>
              <li>
                <strong>_ga_*</strong> — Google Analytics, used to persist session
                state (duration: 2 years)
              </li>
            </ul>
          </Section>

          <Section title="3. Third-party cookies">
            <p>
              Our Site uses Cloudflare Turnstile for bot protection on forms.
              Cloudflare may set a cookie (__cf_bm) to distinguish between humans
              and bots. This is an essential security cookie.
            </p>
          </Section>

          <Section title="4. Managing cookies">
            <p>
              You can manage your cookie preferences at any time:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Cookie banner</strong> — When you first visit our Site,
                you can accept or decline analytics cookies. To change your
                choice, clear your browser data for vareya.ai and revisit the
                Site.
              </li>
              <li>
                <strong>Browser settings</strong> — Most browsers allow you to
                block or delete cookies through their settings. Note that
                blocking essential cookies may affect Site functionality.
              </li>
            </ul>
          </Section>

          <Section title="5. Changes to this policy">
            <p>
              We may update this Cookie Policy from time to time. Changes will be
              posted on this page with an updated date.
            </p>
          </Section>

          <Section title="6. Contact">
            <p>
              For questions about our use of cookies, contact us at{" "}
              <a href="mailto:info@vareya.ai" className="text-primary hover:underline">
                info@vareya.ai
              </a>
              .
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

import { Metadata } from "next";
import { COMPANY } from "@/content/facts";

export const metadata: Metadata = {
  title: "Privacy Policy | Vareya",
  description: "How Vareya collects, uses, and protects your personal data.",
  alternates: {
    canonical: "https://vareya.ai/privacy/",
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="container-site max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted mb-8">
          Last updated: August 2026
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          <Section title="1. Who we are">
            <p>
              {COMPANY.legalName} ("Vareya", "we", "us", or "our") operates the
              website vareya.ai (the "Site"). We are registered in the Netherlands
              at {COMPANY.street}, {COMPANY.postcode} {COMPANY.city}.
            </p>
            <p>
              This privacy policy explains how we collect, use, disclose, and
              safeguard your information when you visit our Site or use our
              fulfilment scan and quote request forms.
            </p>
          </Section>

          <Section title="2. Information we collect">
            <h3 className="font-semibold text-slate-900 mt-6 mb-2">
              Information you provide
            </h3>
            <p>
              When you complete our fulfilment scan or request a quote, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name</li>
              <li>Company name</li>
              <li>Work email address</li>
              <li>Phone number (optional)</li>
              <li>Website (optional)</li>
              <li>Information about your e-commerce business, including order volumes,
              product categories, and target markets</li>
            </ul>

            <h3 className="font-semibold text-slate-900 mt-6 mb-2">
              Information collected automatically
            </h3>
            <p>
              When you visit our Site, we may automatically collect certain
              information about your device, including your IP address, browser
              type, referring URLs, and pages viewed. We use Google Analytics for
              this purpose, subject to your cookie preferences.
            </p>
          </Section>

          <Section title="3. How we use your information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to your fulfilment scan or quote request</li>
              <li>Assess whether Vareya is a good fit for your brand</li>
              <li>Communicate with you about our services</li>
              <li>Improve our Site and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="4. Legal basis for processing">
            <p>
              We process your personal data on the following legal bases:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your consent (for analytics cookies)</li>
              <li>Our legitimate interest in responding to your business enquiry</li>
              <li>Compliance with legal obligations</li>
            </ul>
          </Section>

          <Section title="5. Data sharing">
            <p>
              We use third-party service providers to operate our Site:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Supabase</strong> — Lead storage and database hosting
                (EU-hosted)
              </li>
              <li>
                <strong>Resend</strong> — Transactional email delivery
              </li>
              <li>
                <strong>Vercel</strong> — Website hosting and content delivery
              </li>
              <li>
                <strong>Google Analytics</strong> — Website analytics (subject to
                consent)
              </li>
            </ul>
            <p>
              We do not sell your personal data to third parties.
            </p>
          </Section>

          <Section title="6. Data retention">
            <p>
              We retain your enquiry data for as long as necessary to respond to
              your request and maintain a record of our business communications.
              Analytics data is retained in accordance with Google Analytics'
              data retention settings.
            </p>
          </Section>

          <Section title="7. Your rights">
            <p>Under the GDPR, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Erase your data ("right to be forgotten")</li>
              <li>Restrict processing</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">
                {COMPANY.email}
              </a>
              .
            </p>
          </Section>

          <Section title="8. Cookies">
            <p>
              We use cookies and similar technologies to analyse Site traffic.
              You can manage your cookie preferences through our cookie banner.
              For full details, see our{" "}
              <a href="/cookies/" className="text-primary hover:underline">
                Cookie Policy
              </a>
              .
            </p>
          </Section>

          <Section title="9. Contact">
            <p>
              For questions about this privacy policy or to exercise your data
              rights, contact us at:
            </p>
            <address className="not-italic mt-3 text-muted">
              {COMPANY.legalName}
              <br />
              {COMPANY.street}
              <br />
              {COMPANY.postcode} {COMPANY.city}
              <br />
              {COMPANY.country}
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

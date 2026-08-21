import { Metadata } from "next";
import { COMPANY, WAREHOUSE } from "@/content/facts";

export const metadata: Metadata = {
  title: "Contact Vareya | European Fulfilment",
  description:
    "Get in touch with Vareya. Bagven Park 6, 4838 EH Breda, the Netherlands. Call +31 6 19 12 34 72 or email info@vareya.ai.",
  alternates: {
    canonical: "https://vareya.ai/contact/",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16">
        <div className="container-site">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact us</h1>
          <p className="text-lg text-white/80 max-w-xl">
            We are based in Breda, the Netherlands. Reach out and we will get back to you within one working day.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact details */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Get in touch</h2>

              <div className="flex flex-col gap-6">
                <ContactItem
                  label="Phone"
                  value={COMPANY.phone}
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                />
                <ContactItem
                  label="Email"
                  value={COMPANY.email}
                  href={`mailto:${COMPANY.email}`}
                />
                <ContactItem label="Address" value={null}>
                  <address className="not-italic text-muted leading-relaxed">
                    {WAREHOUSE.label}
                    <br />
                    {COMPANY.street}
                    <br />
                    {COMPANY.postcode} {COMPANY.city}
                    <br />
                    {COMPANY.country}
                  </address>
                </ContactItem>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Quick actions</h2>
              <div className="flex flex-col gap-3">
                <QuickLink
                  href="/free-rate-scan/"
                  title="Fulfilment scan"
                  desc="Check if Vareya is right for your brand in under 3 minutes."
                />
                <QuickLink
                  href="/request-fulfilment-quote/"
                  title="Request a quote"
                  desc="Tell us about your brand and we will prepare a tailored quote."
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

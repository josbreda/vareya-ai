interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  heading?: string;
  subheading?: string;
}

export function FAQ({
  items,
  heading = "Frequently asked questions",
  subheading,
}: FAQProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            {heading}
          </h2>
          {subheading && (
            <p className="text-muted text-center mb-12">{subheading}</p>
          )}

          <div className="flex flex-col gap-4">
            {items.map((item, idx) => (
              <details key={idx} className="group bg-white rounded-lg border border-slate-200">
                <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer font-medium text-slate-900 select-none marker:content-none">
                  {item.question}
                  <svg
                    className="w-5 h-5 text-muted group-open:rotate-180 transition-transform shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 -mt-1">
                  <p className="text-sm text-muted leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

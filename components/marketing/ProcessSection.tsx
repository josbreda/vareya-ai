import { APPROVED_PROCESS_STEPS } from "@/content/claims";

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-site">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          How fulfilment works with Vareya
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-12">
          Simple, transparent process from inventory to delivery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {APPROVED_PROCESS_STEPS.map((step) => (
            <div key={step.step} className="relative text-center md:text-left">
              {/* Step number */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
                {step.step}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

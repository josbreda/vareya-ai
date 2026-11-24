import { CAPABILITIES, CARRIER_LOGOS } from "@/content/facts";

export function CapabilityStrip() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="container-site">
        <p className="text-xs font-semibold text-muted uppercase tracking-wider text-center mb-6">
          Fulfilment capabilities
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <CapabilityItem
            icon={ShopifyIcon}
            title="Shopify-ready"
            desc="Direct integration"
          />
          <CapabilityItem
            icon={TruckIcon}
            title="Multi-carrier"
            desc={`${CARRIER_LOGOS.length} delivery partners`}
          />
          <CapabilityItem
            icon={ClockIcon}
            title="Late cut-off"
            desc={CAPABILITIES.cutOffTime}
          />
          <CapabilityItem
            icon={ReturnsIcon}
            title="Returns handling"
            desc="Included as standard"
          />
        </div>
      </div>
    </section>
  );
}

function CapabilityItem({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon className="w-8 h-8 text-primary" />
      <p className="font-semibold text-sm text-slate-900">{title}</p>
      <p className="text-xs text-muted">{desc}</p>
    </div>
  );
}

/* Simple SVG icons */
function ShopifyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0h3m0 0l3-6m0 0h-4V5" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ReturnsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}

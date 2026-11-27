/** Canonical landing-page paths for the two supported lead forms. */
export declare const FORM_PATHS: {
  readonly quote: "/request-fulfilment-quote";
  readonly scan: "/free-rate-scan";
};

export type ResolvedFormType = keyof typeof FORM_PATHS | "unknown";

export declare function resolveFormType(
  declared: string | undefined,
  landingPage: string | undefined,
): ResolvedFormType;

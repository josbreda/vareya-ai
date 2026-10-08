"use client";

import { trackEmailClick, trackPhoneClick } from "@/lib/analytics";

/**
 * tel:/mailto: link that fires a distinct click event before navigating.
 * Kept as its own small client component so the rest of /contact/ stays a
 * server component — only this leaf needs interactivity.
 */
export function TrackedContactLink({
  kind,
  href,
  value,
}: {
  kind: "phone" | "email";
  href: string;
  value: string;
}) {
  return (
    <a
      href={href}
      onClick={() => (kind === "phone" ? trackPhoneClick() : trackEmailClick())}
      className="text-slate-900 hover:text-primary transition-colors font-medium"
    >
      {value}
    </a>
  );
}

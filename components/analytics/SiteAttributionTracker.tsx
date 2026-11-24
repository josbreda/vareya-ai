"use client";
import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { createSiteTracker } from "@/lib/analytics/site-tracker";

/** Mount once in root layout under <Suspense fallback={null}>.
 * No DOM or storage reads during render. Query-only navigations still capture
 * a new campaign, but don't create another route view for the same pathname.
 */
export function SiteAttributionTracker() {
  const pathname = usePathname();
  const search = useSearchParams();
  const controller = useRef<ReturnType<typeof createSiteTracker> | null>(null);
  useEffect(() => {
    if (!controller.current) controller.current = createSiteTracker();
    return controller.current.mount();
  }, []);
  useEffect(() => { controller.current?.navigate(); }, [pathname, search]);
  return null;
}

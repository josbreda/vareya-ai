"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useI18n } from "./client";
import { isPublicLocaleRoute, preserveLocaleHref } from "./core";

/** Do not prefetch an English static root layout into a localized document. */
export default function LocaleLink(props: ComponentProps<typeof NextLink>) {
  const { inScope, locale } = useI18n();
  const href = typeof props.href === "string"
    ? preserveLocaleHref(props.href, locale)
    : !props.href.host && !props.href.protocol && props.href.pathname && isPublicLocaleRoute(props.href.pathname)
      ? { ...props.href, query: { ...(typeof props.href.query === "object" ? props.href.query : Object.fromEntries(new URLSearchParams(props.href.query ?? ""))), lang: locale } }
      : props.href;
  return <NextLink {...props} href={href} prefetch={inScope ? false : props.prefetch} />;
}

import { NextResponse, type NextRequest } from "next/server";

import {
  LOCALE_COOKIE_MAX_AGE,
  LOCALE_COOKIE_NAME,
  LOCALE_HEADER,
  LOCALE_QUERY_PARAM,
  LOCALE_SCOPE_HEADER,
  isPublicLocaleRoute,
  parseLocale,
  resolveLocalePreference,
} from "./i18n/core";

/**
 * Locale preference resolution for public pages, independent of translation coverage.
 *
 * Precedence: explicit query → remembered cookie → route source language.
 * Browser locale is intentionally ignored. Incomplete content keeps its source
 * language and an explicit notice; it is never advertised as translated.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Isolated review builds must never write a real lead, even if a visitor
  // explores the forms. No effect when the environment flag is unset.
  if (
    pathname.replace(/\/+$/, "") === "/api/leads" &&
    request.method === "POST" &&
    process.env.VAREYA_REVIEW_ONLY === "1"
  ) {
    return NextResponse.json(
      { error: "This review environment does not accept real submissions." },
      { status: 503 },
    );
  }

  if (!isPublicLocaleRoute(pathname)) {
    return NextResponse.next();
  }

  const queryLocale = request.nextUrl.searchParams.get(LOCALE_QUERY_PARAM);
  const cookieLocale = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  const locale = resolveLocalePreference({ queryLang: queryLocale, cookieLocale, pathname });

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, locale);
  requestHeaders.set(LOCALE_SCOPE_HEADER, "1");
  requestHeaders.set("x-vareya-path", pathname);
  requestHeaders.set("x-vareya-search", request.nextUrl.search);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  // An explicit URL choice is also remembered for future navigations.
  if (parseLocale(queryLocale)) {
    response.cookies.set({
      name: LOCALE_COOKIE_NAME,
      value: locale,
      path: "/",
      maxAge: LOCALE_COOKIE_MAX_AGE,
      sameSite: "lax",
    });
  }

  if (process.env.VAREYA_REVIEW_ONLY === "1") {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  // Public HTML requests, additionally checked against the route manifest above.
  // Explicit API entries retain the isolated review submission guard.
  matcher: [
    "/((?!api|_next|images|og|.*\\.).*)",
    "/",
    "/about",
    "/about/",
    "/why-vareya-ai",
    "/why-vareya-ai/",
    "/eu-fulfilment",
    "/eu-fulfilment/",
    "/contact",
    "/contact/",
    "/free-rate-scan",
    "/free-rate-scan/",
    "/request-fulfilment-quote",
    "/request-fulfilment-quote/",
    "/privacy",
    "/privacy/",
    "/cookies",
    "/cookies/",
    "/thank-you/quote",
    "/thank-you/quote/",
    "/thank-you/scan",
    "/thank-you/scan/",
    "/api/leads",
    "/api/leads/",
  ],
};

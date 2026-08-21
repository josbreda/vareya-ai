import { test, expect } from "@playwright/test";

const ARTICLE = "/knowledge/fulfilment-quotation-requirements/";

test.describe("Content Sprint 01 — article preview", () => {
  test("legacy scan route redirects permanently and preserves query/UTM", async ({
    page,
  }) => {
    const res = await page.request.get(
      "/fulfilment-scan/?utm_source=sprint01&utm_medium=qa&utm_campaign=preview",
      { maxRedirects: 0 },
    );
    expect(res.status()).toBe(308);
    const location = res.headers()["location"] ?? "";
    expect(location).toContain("free-rate-scan");
    expect(location).toContain("utm_source=sprint01");
    expect(location).toContain("utm_medium=qa");
    expect(location).toContain("utm_campaign=preview");

    await page.goto(
      "/fulfilment-scan/?utm_source=sprint01&utm_medium=qa&utm_campaign=preview",
    );
    await page.waitForURL(/\/free-rate-scan\/?(\?|$)/);
    const url = new URL(page.url());
    expect(url.pathname).toBe("/free-rate-scan/");
    expect(url.searchParams.get("utm_source")).toBe("sprint01");
    expect(url.searchParams.get("utm_medium")).toBe("qa");
    expect(url.searchParams.get("utm_campaign")).toBe("preview");
  });

  test("article renders all required components", async ({ page }) => {
    await page.goto(ARTICLE);
    await expect(page).toHaveTitle(
      "What information does a 3PL need to prepare a fulfilment quotation? | Vareya",
    );
    await expect(
      page.locator("h1", {
        hasText: "What information does a 3PL need to prepare a fulfilment quotation?",
      }),
    ).toBeVisible();

    // Direct answer
    await expect(page.getByText("To prepare a meaningful fulfilment quotation")).toBeVisible();

    // Quotation-input table (5 columns, 9 data rows)
    const table = page.locator("table");
    await expect(table).toBeVisible();
    await expect(table.locator("th")).toHaveCount(5);
    await expect(table.locator("tbody tr")).toHaveCount(9);

    // Checklist items
    await expect(page.getByRole("list", { name: "Quotation-readiness checklist" })).toBeVisible();

    // FAQ visible
    await expect(page.getByText("Can a pre-launch webshop request an assessment?")).toBeVisible();

    // Sources with links
    const sources = page.locator("ol a");
    await expect(sources.filter({ hasText: "Shopify" })).toBeVisible();

    // Review block — named reviewer + date, no literal placeholders
    await expect(
      page.getByText("Reviewed by Jos on 2026-08-17", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText(/Claims audited against the Claims Register/),
    ).toBeVisible();
    await expect(page.getByText("[REVIEWER NAME]")).toHaveCount(0);

    // CTAs
    const primary = page.locator("a", { hasText: "Start your Free Rate Scan" }).first();
    await expect(primary).toHaveAttribute("href", "/free-rate-scan/");
    const secondary = page.locator("a", { hasText: "Request a fulfilment quote" }).first();
    await expect(secondary).toHaveAttribute("href", "/request-fulfilment-quote/");
  });

  test("article is indexable after publication", async ({ page }) => {
    await page.goto(ARTICLE);
    const robotsMeta = await page.locator('meta[name="robots"]').count();
    if (robotsMeta > 0) {
      const content = await page.locator('meta[name="robots"]').first().getAttribute("content");
      expect(content).not.toMatch(/noindex/);
    }
    // no Review draft badge anymore
    await expect(page.getByText("Review draft")).toHaveCount(0);
    // published date visible
    await expect(page.locator("time", { hasText: "17 August 2026" }).first()).toBeVisible();
    // sitemap includes the article
    const sitemapResponse = await page.request.get("/sitemap.xml");
    expect(sitemapResponse.status()).toBe(200);
    const sitemap = await sitemapResponse.text();
    expect(sitemap).toContain(
      "https://vareya.ai/knowledge/fulfilment-quotation-requirements/",
    );
  });

  test("PII-free analytics events fire", async ({ page }) => {
    await page.goto(ARTICLE);
    await page.waitForTimeout(500);
    const events = await page.evaluate(() =>
      (window as unknown as { dataLayer?: Record<string, unknown>[] }).dataLayer ?? [],
    );
    const names = events.map((e) => e.event);
    expect(names).toContain("knowledge_article_view");

    await page.locator("a", { hasText: "Start your Free Rate Scan" }).first().click();
    await page.waitForURL(/\/free-rate-scan\//);
    const afterClick = await page.evaluate(() =>
      (window as unknown as { dataLayer?: Record<string, unknown>[] }).dataLayer ?? [],
    );
    const ctaEvent = afterClick.find((e) => e.event === "free_rate_scan_cta_click");
    expect(ctaEvent).toBeTruthy();
    expect(JSON.stringify(afterClick)).not.toMatch(/@|\.com|user|company|email/i);
  });

  test("no prohibited claims or source-ID leakage", async ({ page }) => {
    await page.goto(ARTICLE);
    const body = await page.locator("body").innerText();
    const prohibited = [
      "sharpest",
      "up to 30%",
      "always a match",
      "guaranteed quotation",
      "guaranteed acceptance",
      "RAYMOND-2026-08-17",
      "JOS-2026-08-17",
      "instant quote",
    ];
    for (const phrase of prohibited) {
      expect(body.toLowerCase()).not.toContain(phrase.toLowerCase());
    }
  });
});

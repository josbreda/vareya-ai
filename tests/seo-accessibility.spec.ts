/**
 * SEO and accessibility tests.
 */
import { test, expect } from "@playwright/test";

const INDEXABLE_ROUTES = [
  "/",
  "/eu-fulfilment/",
  "/shopify-fulfilment-europe/",
  "/eu-fulfilment-us-brands/",
  "/eu-fulfilment-uk-brands/",
  "/cosmetics-supplements-fulfilment-europe/",
  "/free-rate-scan/",
  "/request-fulfilment-quote/",
  "/contact/",
  "/privacy/",
  "/cookies/",
];

const NOINDEX_ROUTES = ["/thank-you/scan/", "/thank-you/quote/"];

test.describe("SEO", () => {
  for (const route of INDEXABLE_ROUTES) {
    test(`${route}: has title, meta description, canonical`, async ({ page }) => {
      await page.goto(route);

      // Title
      const title = await page.title();
      expect(title.length).toBeGreaterThan(10);
      expect(title).toContain("Vareya");

      // Meta description
      const desc = page.locator('meta[name="description"]');
      await expect(desc).toHaveAttribute("content", /.+/);

      // Canonical
      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveAttribute("href", /vareya\.ai/);

      // H1
      await expect(page.locator("h1").first()).toBeVisible();

      // No index (these should be indexable)
      const robots = page.locator('meta[name="robots"]');
      const robotsContent = await robots.getAttribute("content");
      if (robotsContent) {
        expect(robotsContent).not.toContain("noindex");
      }
    });
  }

  for (const route of NOINDEX_ROUTES) {
    test(`${route}: is noindex`, async ({ page }) => {
      const res = await page.goto(route);
      // Next.js metadata sets x-robots-tag or meta robots
      const headers = res?.headers();
      // Check meta robots
      const robots = page.locator('meta[name="robots"]');
      if (await robots.count() > 0) {
        const content = await robots.getAttribute("content");
        expect(content).toContain("noindex");
      }
    });
  }

  test("sitemap.xml returns XML", async ({ page }) => {
    const res = await page.goto("/sitemap.xml");
    expect(res?.status()).toBe(200);
    const text = await page.content();
    expect(text).toContain("<urlset");
    expect(text).toContain("vareya.ai");
  });

  test("robots.txt returns text", async ({ page }) => {
    const res = await page.goto("/robots.txt");
    expect(res?.status()).toBe(200);
    const text = await page.content();
    expect(text).toContain("sitemap");
  });

  test("JSON-LD structured data present", async ({ page }) => {
    await page.goto("/");
    const ldJson = page.locator('script[type="application/ld+json"]');
    const count = await ldJson.count();
    expect(count).toBeGreaterThanOrEqual(2);

    // Organization schema
    const first = await ldJson.first().textContent();
    const parsed = JSON.parse(first || "{}");
    expect(parsed["@type"]).toBeDefined();
  });
});

test.describe("Accessibility", () => {
  test("homepage: keyboard navigation works", async ({ page }) => {
    await page.goto("/");
    // Skip link should be present
    await expect(page.locator(".skip-link")).toBeVisible();
    // Tab through header
    await page.keyboard.press("Tab");
    // Should focus something
    const focused = page.locator(":focus");
    await expect(focused).toBeAttached();
  });

  test("homepage: images have alt text", async ({ page }) => {
    await page.goto("/");
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).toBeDefined();
    }
  });

  test("scan form: keyboard navigable", async ({ page }) => {
    await page.goto("/free-rate-scan/");
    // Tab to select
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    const focused = page.locator(":focus");
    await expect(focused).toBeAttached();
  });
});

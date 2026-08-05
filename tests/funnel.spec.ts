/**
 * Funnel tests: scan form, quote form, thank-you pages.
 */
import { test, expect } from "@playwright/test";

test.describe("Fulfilment Scan", () => {
  test("desktop: complete scan flow", async ({ page }) => {
    await page.goto("/fulfilment-scan/");

    // Step 1: Volume
    await expect(page.locator("h1")).toContainText("Check your EU fulfilment fit");
    await page.selectOption("select", "500-1000");
    await page.click("text=Continue");

    // Step 2: Category
    await expect(page.locator("h2")).toContainText("What do you sell?");
    await page.selectOption("select", "cosmetics");
    await page.click("text=Continue");

    // Step 3: Markets (multiselect)
    await expect(page.locator("h2")).toContainText("Where are your customers?");
    await page.click("text=Netherlands");
    await page.click("text=Germany");
    await page.click("text=Continue");

    // Step 4: Platform
    await page.selectOption("select", "shopify");
    await page.click("text=Continue");

    // Step 5: Services (multiselect)
    await page.click("text=Pick & pack");
    await page.click("text=Returns handling");
    await page.click("text=Continue");

    // Step 6: Contact
    await page.fill("input[name='name']", "Test User");
    await page.fill("input[name='company']", "Test Company");
    await page.fill("input[name='work_email']", "test@example.com");
    // Submit — will fail gracefully if API not configured
    await page.click("text=See my results");
  });

  test("mobile: scan form visible at 360px", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto("/fulfilment-scan/");
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("select").first()).toBeVisible();
  });

  test("scan: validation shows errors", async ({ page }) => {
    await page.goto("/fulfilment-scan/");
    // Click Continue without selecting — should show error
    await page.click("text=Continue");
    await expect(page.locator("text=Please select an option")).toBeVisible();
  });
});

test.describe("Quote Form", () => {
  test("desktop: quote form renders all fields", async ({ page }) => {
    await page.goto("/request-fulfilment-quote/");
    await expect(page.locator("h1")).toContainText("Request a fulfilment quote");

    // Required fields present
    await expect(page.locator("input[name='name']")).toBeVisible();
    await expect(page.locator("input[name='company']")).toBeVisible();
    await expect(page.locator("input[name='work_email']")).toBeVisible();

    // Privacy checkbox
    await expect(page.locator("input[type='checkbox']").first()).toBeVisible();
  });

  test("mobile: quote form at 360px", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto("/request-fulfilment-quote/");
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("input[name='name']")).toBeVisible();
  });

  test("quote: validation rejects empty required fields", async ({ page }) => {
    await page.goto("/request-fulfilment-quote/");
    // Check the privacy checkbox (the last one, required for form submission)
    const checkboxes = page.locator("input[type='checkbox']");
    const count = await checkboxes.count();
    await checkboxes.nth(count - 1).check();
    await page.click("text=Request quote");
    // Validation should show error for empty name
    await expect(page.getByText("Name is required", { exact: true })).toBeVisible();
  });
});

test.describe("Thank You Pages", () => {
  test("scan thank-you renders", async ({ page }) => {
    await page.goto("/thank-you/scan/");
    await expect(page.locator("h1")).toContainText("Thank you");
  });

  test("quote thank-you renders", async ({ page }) => {
    await page.goto("/thank-you/quote/");
    await expect(page.locator("h1")).toContainText("Quote request received");
  });
});

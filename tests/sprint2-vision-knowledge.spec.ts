import { test, expect } from "@playwright/test";

const KNOWLEDGE_ARTICLES = [
  {
    slug: "what-is-cooperative-fulfilment",
    title: "What is cooperative fulfilment?",
  },
  {
    slug: "ecommerce-fulfilment-netherlands-guide",
    title: "E-commerce fulfilment from the Netherlands: a practical guide",
  },
  {
    slug: "shopify-fulfilment-europe-what-to-look-for",
    title: "Shopify fulfilment in Europe: what to look for",
  },
] as const;

test.describe("Sprint 2 vision and knowledge pages", () => {
  test("the vision page presents Raymond's vision as a developing model", async ({ page }) => {
    const response = await page.goto("/why-vareya-ai/");

    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "A different kind of fulfilment company",
    );
    await expect(page.getByText("Raymond's vision", { exact: true })).toBeVisible();
    await expect(page.getByText(/democratic member ownership/i)).toBeVisible();
    await expect(page.getByText(/surplus.*members/i)).toBeVisible();
    await expect(page.getByText(/being developed/i)).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Check your EU fulfilment fit" }).first(),
    ).toHaveAttribute("href", "/free-rate-scan/");
  });

  test("the knowledge hub only links to published, working articles", async ({ page }) => {
    const response = await page.goto("/knowledge/");

    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Practical fulfilment knowledge",
    );

    for (const article of KNOWLEDGE_ARTICLES) {
      const link = page.getByRole("link", { name: new RegExp(article.title, "i") });
      await expect(link).toHaveAttribute("href", `/knowledge/${article.slug}/`);

      const articleResponse = await page.request.get(`/knowledge/${article.slug}/`);
      expect(articleResponse.status()).toBe(200);
    }
  });

  for (const article of KNOWLEDGE_ARTICLES) {
    test(`${article.slug} renders a complete, indexable article`, async ({ page }) => {
      const response = await page.goto(`/knowledge/${article.slug}/`);

      expect(response?.status()).toBe(200);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(article.title);
      await expect(page.locator("article h2")).toHaveCount(3);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `https://vareya.ai/knowledge/${article.slug}/`,
      );

      const articleSchema = page.locator(
        'script[type="application/ld+json"][data-schema="article"]',
      );
      await expect(articleSchema).toHaveCount(1);
      const parsed = JSON.parse((await articleSchema.textContent()) || "{}");
      expect(parsed["@type"]).toBe("Article");
      expect(parsed.headline).toBe(article.title);

      await expect(page.locator("article")).not.toContainText("**");
    });
  }

  test("unknown knowledge slugs return the shared 404", async ({ page }) => {
    const response = await page.goto("/knowledge/not-a-real-article/");

    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("not found");
  });

  test("desktop navigation exposes the vision and knowledge hubs", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.locator('nav[aria-label="Main navigation"]').getByRole("link", { name: "Why Vareya" }),
    ).toHaveAttribute("href", "/why-vareya-ai/");
    await expect(
      page.locator('nav[aria-label="Main navigation"]').getByRole("link", { name: "Knowledge" }),
    ).toHaveAttribute("href", "/knowledge/");
  });
});

import { test, expect } from "@playwright/test";

const pages = [
  { name: "Services", slug: "services", path: "/#/services" },
  { name: "Research", slug: "research", path: "/#/research" },
  { name: "Media", slug: "media", path: "/#/media" },
  { name: "Company", slug: "company", path: "/#/company" },
  { name: "Contact", slug: "contact", path: "/#/contact" },
  { name: "Mandate", slug: "mandate", path: "/#/mandate" },
  { name: "Proptech", slug: "proptech", path: "/#/proptech" },
  { name: "Fintech", slug: "fintech", path: "/#/fintech" },
  { name: "Careers", slug: "careers", path: "/#/careers" },
];

for (const pageInfo of pages) {
  test(`Capture ${pageInfo.name} page screenshot`, async ({ page }, testInfo) => {
    await page.goto(pageInfo.path);
    await expect(page.locator(".site")).toBeVisible();

    await page.screenshot({
      path: testInfo.outputPath(`${pageInfo.slug}-viewport.png`),
      fullPage: false,
      animations: "disabled",
    });
  });
}
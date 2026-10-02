import { test, expect } from "@playwright/test";

const pages = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/#/services" },
  { name: "Research", path: "/#/research" },
  { name: "Media", path: "/#/media" },
  { name: "Company", path: "/#/company" },
  { name: "Contact", path: "/#/contact" },
  { name: "Mandate", path: "/#/mandate" },
  { name: "Proptech", path: "/#/proptech" },
  { name: "Fintech", path: "/#/fintech" },
  { name: "Careers", path: "/#/careers" },
];

test.describe("Responsive layout", () => {
  for (const pageInfo of pages) {
    test(`${pageInfo.name} page has no horizontal overflow`, async ({ page }) => {
      await page.goto(pageInfo.path);
      await page.waitForLoadState("networkidle");

      const dimensions = await page.evaluate(() => ({
        viewportWidth: document.documentElement.clientWidth,
        pageWidth: document.documentElement.scrollWidth,
      }));

      expect(
        dimensions.pageWidth,
        `${pageInfo.name} page overflow: page width ${dimensions.pageWidth}px, viewport width ${dimensions.viewportWidth}px`
      ).toBeLessThanOrEqual(dimensions.viewportWidth);
    });
  }
});
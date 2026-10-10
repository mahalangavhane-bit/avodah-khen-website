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
  test(`Visual regression - ${pageInfo.name}`, async ({ page }) => {
    await page.goto(pageInfo.path);

    await expect(page.locator(".site")).toBeVisible();

    await page.evaluate(async () => {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      const images = Array.from(document.images);

      await Promise.all(
        images.map((img) => {
          if (img.complete) return Promise.resolve();

          return new Promise((resolve) => {
            img.addEventListener("load", resolve, { once: true });
            img.addEventListener("error", resolve, { once: true });
          });
        })
      );
    });

    await page.evaluate(() => {
      const style = document.createElement("style");

      style.id = "playwright-visual-stability";

      style.textContent = `
        *,
        *::before,
        *::after {
          animation: none !important;
          transition: none !important;
          caret-color: transparent !important;
        }

        .reveal,
        .reveal-stagger,
        .hero-enter {
          opacity: 1 !important;
          transform: none !important;
          filter: none !important;
          visibility: visible !important;
        }
      `;

      document.head.appendChild(style);
    });

   await expect(page).toHaveScreenshot(
  `${pageInfo.slug}-viewport.png`,
  {
    animations: "disabled",
    caret: "hide",
    scale: "css",
    maxDiffPixels: 300,
  }
);
  });
}
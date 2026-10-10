import { test, expect } from "@playwright/test";

test.describe("Functional navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Services navigation works", async ({ page }) => {
    await page.getByRole("link", {
      name: "Services",
      exact: true,
    }).click();

    await expect(page).toHaveURL(/#\/services/);
  });

  test("Research navigation works", async ({ page }) => {
    await page.getByRole("link", {
      name: "Research",
      exact: true,
    }).click();

    await expect(page).toHaveURL(/#\/research/);
  });

  test("Media navigation works", async ({ page }) => {
    await page.getByRole("link", {
      name: "Media",
      exact: true,
    }).click();

    await expect(page).toHaveURL(/#\/media/);
  });

  test("Company navigation works", async ({ page }) => {
    await page.getByRole("link", {
      name: "Company",
      exact: true,
    }).click();

    await expect(page).toHaveURL(/#\/company/);
  });

  test("Contact navigation works", async ({ page }) => {
    await page.getByRole("link", {
      name: "Contact",
      exact: true,
    }).click();

    await expect(page).toHaveURL(/#\/contact/);
  });

  test("Services submenu navigation works", async ({ page }) => {
    await page.getByRole("link", {
      name: "Services",
      exact: true,
    }).click();

    await page.getByRole("link", {
      name: "Mandate",
      exact: true,
    }).click();

    await expect(page).toHaveURL(/#\/mandate/);
  });

  test("Proptech navigation works", async ({ page }) => {
    await page.getByRole("link", {
      name: "Services",
      exact: true,
    }).click();

    await page.getByRole("link", {
      name: "Proptech",
      exact: true,
    }).click();

    await expect(page).toHaveURL(/#\/proptech/);
  });

  test("Fintech navigation works", async ({ page }) => {
    await page.getByRole("link", {
      name: "Services",
      exact: true,
    }).click();

    await page.getByRole("link", {
      name: "Fintech",
      exact: true,
    }).click();

    await expect(page).toHaveURL(/#\/fintech/);
  });

  test("Back and forward navigation works", async ({ page }) => {
    await page.getByRole("link", {
      name: "Research",
      exact: true,
    }).click();

    await expect(page).toHaveURL(/#\/research/);

    await page.goBack();

    await expect(page).toHaveURL(/#\/$/);

    await page.goForward();

    await expect(page).toHaveURL(/#\/research/);
  });
});
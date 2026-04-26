import { expect, test } from "@playwright/test";

test("renders the kinetic landing page and theme wipe controls", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Zero to Operations" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Launch Project/i })).toBeVisible();
  await expect(page.locator(".hero-sphere")).toBeVisible();

  await page.getByRole("button", { name: "Ops", exact: true }).click();
  await expect(page.locator(".site-shell")).toHaveAttribute("data-theme", "light");

  await page.getByRole("button", { name: "Dev", exact: true }).click();
  await expect(page.locator(".site-shell")).toHaveAttribute("data-theme", "dark");
});

test("exposes services, product panels, and support layers", async ({ page }) => {
  await page.goto("/");

  await page.locator("#services").scrollIntoViewIfNeeded();
  await expect(page.getByRole("heading", { name: /Everything between/i })).toBeVisible();
  await expect(page.locator(".service-card")).toHaveCount(6);

  await page.locator("#products").scrollIntoViewIfNeeded();
  await expect(page.getByRole("heading", { name: "Zyro HR" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Cipher POS" })).toBeAttached();

  await page.locator("#support").scrollIntoViewIfNeeded();
  await expect(page.getByRole("heading", { name: /Agents read signals/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /When judgment matters/i })).toBeVisible();
});

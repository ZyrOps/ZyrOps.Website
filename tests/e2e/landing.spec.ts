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
  await expect(page.getByRole("heading", { name: "ZyroHR" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "ZyroCRM" })).toBeAttached();
  await expect(page.getByRole("heading", { name: "ZyroPoS" })).toBeAttached();
  await expect(page.getByRole("heading", { name: "ZyroSupport" })).toBeAttached();
  await expect(page.getByRole("heading", { name: "ZyroBooks" })).toBeAttached();
  await expect(page.getByRole("heading", { name: "CipherTrak" })).toBeAttached();

  await page.locator("#support").scrollIntoViewIfNeeded();
  await expect(page.getByRole("heading", { name: /Agents read signals/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /When judgment matters/i })).toBeVisible();
});

test("opens the contact intake page with usable fields", async ({ page }) => {
  await page.goto("/contact");

  await expect(page.getByRole("heading", { name: "Tell us what needs to ship." })).toBeVisible();
  await expect(page.getByRole("link", { name: /Launch by Email/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Call \+91/i })).toBeVisible();
  await expect(page.getByText(/^Locations: Calicut \/ Kozhikode and Wayanad/i)).toBeVisible();
  await expect(page.getByRole("heading", { name: "Project brief" })).toBeVisible();

  await page.getByPlaceholder("Your name").fill("ZyrOps Client");
  await page.getByPlaceholder("you@company.com").fill("client@example.com");
  await page.getByLabel("Project type").selectOption("Rust / GoLang / Python Backend");
  await page
    .getByPlaceholder("Share the goal, timeline, users, tech stack, and blockers.")
    .fill("We need an agentic support workflow for a production platform.");

  await expect(page.getByRole("button", { name: /Send Brief/i })).toBeVisible();
});

test("opens the dedicated products page with suite and services", async ({ page }) => {
  await page.goto("/products");

  await expect(page.getByRole("heading", { name: "Products built for operating businesses." })).toBeVisible();
  for (const product of ["ZyroHR", "ZyroCRM", "ZyroPoS", "ZyroSupport", "ZyroBooks", "CipherTrak"]) {
    await expect(page.getByRole("heading", { name: product })).toBeVisible();
  }

  await expect(page.getByRole("heading", { name: "Custom WebApp Development" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Mobile App Development" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Desktop App Development" })).toBeVisible();
});

test("keeps landing product cards inside the mobile viewport", async ({ page }) => {
  const viewport = page.viewportSize();
  test.skip(!viewport || viewport.width > 920, "Mobile-only responsive assertion");

  await page.goto("/");
  await page.locator("#products").scrollIntoViewIfNeeded();

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(1);

  for (const panel of await page.locator(".product-panel").all()) {
    const box = await panel.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual(viewport!.width + 1);
  }
});

import { expect, test } from "@playwright/test";

test("manages an invoice from list through create", async ({ page }) => {
  await page.goto("/invoices");
  await expect(page.getByText("INV-2026-001")).toBeVisible();

  await page.getByRole("link", { name: "INV-2026-001" }).click();
  await expect(page).toHaveURL(/\/invoices\/inv_001$/);
  await expect(
    page.getByRole("heading", { name: "INV-2026-001" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Edit invoice" }).click();
  await expect(page).toHaveURL(/\/invoices\/inv_001\/edit$/);

  await page.getByLabel("Customer name").fill("Acme Corporation Updated");
  await page.getByRole("button", { name: "Save changes" }).click();
  await expect(page).toHaveURL(/\/invoices\/inv_001$/);
  await expect(page.getByText("Acme Corporation Updated")).toBeVisible();

  await page.goto("/invoices/new");
  await page.getByLabel("Customer name").fill("Storybook Co");
  await page.getByLabel("Email").fill("billing@storybook.test");
  await page.getByLabel("Invoice number").fill("INV-E2E-001");
  await page.getByLabel("Amount").fill("1750");
  await page.getByLabel("Issue date").fill("2026-10-01");
  await page.getByLabel("Due date").fill("2026-10-15");
  await page.getByRole("button", { name: "Create invoice" }).click();

  await expect(page).toHaveURL(/\/invoices\/.+$/);
  await expect(
    page.getByRole("heading", { name: "INV-E2E-001" }),
  ).toBeVisible();
  await expect(page.getByText("Storybook Co")).toBeVisible();
});

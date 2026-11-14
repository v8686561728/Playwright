import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("check google title", async ({ page }) => {
  await page.goto("https://www.google.com/");
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
  // test input field
  const searchInput = page.getByRole("combobox");
  await expect(searchInput).toBeVisible();
  await searchInput.fill("Playwright");
  await searchInput.press("Enter");
});
// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

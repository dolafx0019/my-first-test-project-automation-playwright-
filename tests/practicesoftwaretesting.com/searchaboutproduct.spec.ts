import { test, expect } from '@playwright/test';  

test("test", async ({ page }) => {

await page.goto("https://practicesoftwaretesting.com/");
await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0")
const products = page.locator(".col-md-9");
await expect (products.getByRole("link")).toHaveCount(9);
expect(await products.getByRole("link").count()).toBe(9);


await page.getByTestId ("search-query").fill(" Hammer ");
await page.getByRole('button', { name: 'Search' }).click();
const productsAfterSearch = page.locator(".col-md-9");
await expect (productsAfterSearch.getByRole("link")).toHaveCount(2);
expect(await productsAfterSearch.getByRole("link").count()).toBe(2);

})

import { test, expect } from '@playwright/test';

test('Test Case 13: Verify Product quantity in Cart', async ({ page }) => {
 
  await page.goto('http://automationexercise.com');
  await expect(page).toHaveTitle(/Automation Exercise/i);
  await page.getByText('View Product').first().click();
  await expect(page.locator('div.product-information')).toBeVisible();
  const quantityInput = page.locator('input[name="quantity"]');
  await quantityInput.fill('4');
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  const quantityValue = page.getByRole('button', { name: '4' });
 await expect(quantityValue).toHaveText('4');
});

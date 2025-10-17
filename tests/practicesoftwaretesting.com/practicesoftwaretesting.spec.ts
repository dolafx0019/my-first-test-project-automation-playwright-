import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await expect(page.locator('[data-test="nav-sign-in"]')).toContainText('Sign in');
  await page.locator('[data-test="nav-sign-in"]').click();
  await expect(page.locator('[data-test="login-form"]')).toContainText('Email address *');
  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await expect(page.locator('[data-test="login-form"]')).toContainText('Password *');
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-submit"]').click();
  await expect(page.locator('[data-test="nav-menu"]')).toContainText('Jane Doe');
});
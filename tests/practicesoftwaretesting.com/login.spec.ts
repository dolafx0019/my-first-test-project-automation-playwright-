import { test } from '@playwright/test';

test('Login and save storage state', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByTestId('nav-sign-in').click();
  await page.getByPlaceholder('Email').fill('customer@practicesoftwaretesting.com');
  await page.getByPlaceholder('Password').fill('welcome01');
  await page.getByTestId('login-submit').click();

  await page.waitForURL('**/account');

  await page.context().storageState({ path: 'storageState.json' });
});

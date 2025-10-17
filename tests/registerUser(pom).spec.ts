import { test, expect } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage';
import { AccountPage } from '../pages/AccountPage';

test('Register new user end-to-end', async ({ page }) => {
  const signupPage = new SignupPage(page);
  const accountPage = new AccountPage(page);

  await page.goto('https://automationexercise.com');
  await expect(page).toHaveTitle(/Automation Exercise/);
  await signupPage.goToSignupPage();
  const uniqueEmail = `user${Date.now()}@gmail.com`;
  await signupPage.signup('dola tester', uniqueEmail);
  await accountPage.fillAccountDetails();
  await accountPage.fillAddressInfo();
  await accountPage.submitAccountCreation();
  await accountPage.verifyAndContinue();
  await accountPage.deleteAccount();
});

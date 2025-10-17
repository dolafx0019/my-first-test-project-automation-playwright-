import { Locator, Page } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly signupLoginLink: Locator;
  readonly newUserText: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly signupButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupLoginLink = page.getByRole('link', { name: 'Signup / Login' });
    this.newUserText = page.getByText('New User Signup!');
    this.nameInput = page.locator('input[data-qa="signup-name"]');
    this.emailInput = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');
  }

  async goToSignupPage() {
    await this.signupLoginLink.click();
    await this.newUserText.waitFor();
  }

  async signup(name: string, email: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();
  }
}

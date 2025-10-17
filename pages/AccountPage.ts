import { Locator, Page } from '@playwright/test';

export class AccountPage {
  readonly page: Page;

  readonly enterAccountInfoText: Locator;
  readonly titleRadio: Locator;
  readonly passwordInput: Locator;
  readonly dobDay: Locator;
  readonly dobMonth: Locator;
  readonly dobYear: Locator;
  readonly newsletterCheckbox: Locator;
  readonly offersCheckbox: Locator;

  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly company: Locator;
  readonly address1: Locator;
  readonly address2: Locator;
  readonly country: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly zipcode: Locator;
  readonly mobileNumber: Locator;

  readonly createAccountButton: Locator;
  readonly accountCreatedText: Locator;
  readonly continueButton: Locator;
  readonly loggedInText: Locator;
  readonly deleteAccountButton: Locator;
  readonly accountDeletedText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.enterAccountInfoText = page.getByText('Enter Account Information');
    this.titleRadio = page.locator('#id_gender1');
    this.passwordInput = page.locator('#password');
    this.dobDay = page.locator('#days');
    this.dobMonth = page.locator('#months');
    this.dobYear = page.locator('#years');
    this.newsletterCheckbox = page.locator('#newsletter');
    this.offersCheckbox = page.locator('#optin');

    this.firstName = page.locator('#first_name');
    this.lastName = page.locator('#last_name');
    this.company = page.locator('#company');
    this.address1 = page.locator('#address1');
    this.address2 = page.locator('#address2');
    this.country = page.locator('#country');
    this.state = page.locator('#state');
    this.city = page.locator('#city');
    this.zipcode = page.locator('#zipcode');
    this.mobileNumber = page.locator('#mobile_number');

    this.createAccountButton = page.locator('button[data-qa="create-account"]');
    this.accountCreatedText = page.getByText('Account Created!');
    this.continueButton = page.getByRole('link', { name: 'Continue' });
    this.loggedInText = page.getByText('Logged in as');
    this.deleteAccountButton = page.getByRole('link', { name: 'Delete Account' });
    this.accountDeletedText = page.getByText('Account Deleted!');
  }

  async fillAccountDetails() {
    await this.enterAccountInfoText.waitFor();
    await this.titleRadio.check();
    await this.passwordInput.fill('dolatest123');
    await this.dobDay.selectOption('20');
    await this.dobMonth.selectOption('2');
    await this.dobYear.selectOption('1995');
    await this.newsletterCheckbox.check();
    await this.offersCheckbox.check();
  }

  async fillAddressInfo() {
    await this.firstName.fill('mohamed');
    await this.lastName.fill('adel');
    await this.company.fill('first group');
    await this.address1.fill('9 street mokktam city');
    await this.address2.fill('Apt 4B');
    await this.country.selectOption('United States');
    await this.state.fill('California');
    await this.city.fill('San Francisco');
    await this.zipcode.fill('55055');
    await this.mobileNumber.fill('1234567890');
  }

  async submitAccountCreation() {
    await this.createAccountButton.click();
    await this.accountCreatedText.waitFor();
  }

  async verifyAndContinue() {
    await this.continueButton.click();
    await this.loggedInText.waitFor();
  }

  async deleteAccount() {
    await this.deleteAccountButton.click();
    await this.accountDeletedText.waitFor();
    await this.continueButton.click();
  }
}

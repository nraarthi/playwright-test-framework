import { Page, Locator, expect } from '@playwright/test';
import { config } from 'dotenv';

config();

export class LoginPage {
  readonly page: Page;
  emailField: Locator;
  passwordField: Locator;
  emailNextButton: Locator;
  passwordNextButton: Locator;
  avatarLink: Locator;
  logout: Locator;
  errorMessage: Locator;

  //Constructor: 
  constructor(page: Page) {
    this.page = page;

    //Locators:
    this.emailField = this.page.getByRole('textbox', { name: /Email or phone/i });
    this.passwordField = this.page.getByRole('textbox', { name: /Enter your password/i });
    this.emailNextButton = this.page.locator('#identifierNext');
    this.passwordNextButton = this.page.locator('#passwordNext');

    // Ideally for another page, but since this is small pack, clubbed into
    this.errorMessage = this.page.locator('div[jsname="B34EJ"]'); //I have tried several iterations and have noticed no issues so far, but could fail seeing this could become a dynamic value
    this.avatarLink = this.page.getByRole('button', { name: /@gmail\.com/ });
    this.logout = this.page.locator('a[href*="/Logout"]');
  }

  async navigateToLoginPage() {
    if (process.env.UI_URL) {
        await this.page.goto(`${process.env.UI_URL}`, {
            waitUntil: 'domcontentloaded',
        });
    }
}

  async enterEmail(email: string) {
    await this.emailField.isVisible();
    await this.emailField.fill(email);
  }

  async clickNextAfterEmail() {
    await Promise.all([
        await this.page.waitForLoadState('load'),
        this.emailNextButton.click(),
    ]);
}

async enterPassword(password: string) {
    await this.passwordField.isVisible();
    await this.passwordField.fill(password);
}

async clickNextAfterPassword() {
    await this.passwordNextButton.isVisible();
    await Promise.all([
        await this.page.waitForLoadState('load'),
        this.passwordNextButton.click(),
    ]);
}

async verifyInboxLoaded() {
    await this.avatarLink.isVisible();
}


async verifyErrorMessage(expectedMessage: string) {
    // const errorLocator = this.page.locator('div[jsname="B34EJ"]');
    await expect(this.errorMessage).toBeVisible({ timeout: 5000 });
    await expect(this.errorMessage).toContainText(expectedMessage);
} 
async signOut() {
    // Click profile/avatar button to open account menu
    await this.avatarLink.isVisible();
    await this.avatarLink.click();

    // Wait for Sign out button and click
    await this.logout.isVisible();
    await Promise.all([
        this.logout.click(),
    ]);

    await this.page.waitForURL('https://accounts.google.com/**', { timeout: 5000 });
}
}

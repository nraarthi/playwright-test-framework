import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { CustomWorld } from '../hooks/custom-world';

let loginPage: LoginPage;

Given('I navigate to the Gmail login page', async function (this: CustomWorld) {
  loginPage = new LoginPage(this.page!);
  await loginPage.navigateToLoginPage();
});

When('I enter the email {string}', async (email: string) => {
  await loginPage.enterEmail(email);
});

When('I click on Next button after email', async () => {
  await loginPage.clickNextAfterEmail();
});

When('I enter the password {string}', async (password: string) => {
  await loginPage.enterPassword(password);
});

When('I click on Next button after password', async () => {
  await loginPage.clickNextAfterPassword();
});

Then('I should see the inbox page', async () => {
  await loginPage.verifyInboxLoaded();
});

Then('I should see an error message {string}', async (expectedMessage: string) => {
  await loginPage.verifyErrorMessage(expectedMessage);
});

Then('I sign out from Gmail',{ timeout: 10000 }, async () => {
  await loginPage.signOut();
});


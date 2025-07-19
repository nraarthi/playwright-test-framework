import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from './custom-world';

const optionsBrowser = {
  headless: false,
  args: [
    '--disable-blink-features=AutomationControlled',
    '--no-sandbox',
    '--disable-web-security',
    '--disable-infobars',
    '--disable-extensions',
    '--start-maximized',
  ],
};

Before(async function (this: CustomWorld) {
  const browser = await chromium.launch(optionsBrowser);
  const context = await browser.newContext();
  this.page = await context.newPage();
});

After(async function (this: CustomWorld) {
  await this.page?.close();
});

/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });
  test('should show popover-message', async () => {
    await page.goto(baseUrl);
    const form = await page.$('.form-popovers');
    const button = await form.$('.btn');
    button.click();
    await page.waitForSelector('.popever-show');
  });
  test('should hide popever-message', async () => {
    await page.goto(baseUrl);
    const form = await page.$('.form-popovers');
    const button = await form.$('.btn');
    button.click();
    button.click();
    await page.waitForSelector('.popover-hidden');
  });
});

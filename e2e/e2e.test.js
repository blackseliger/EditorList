/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import puppetteer from 'puppeteer';
import { fork } from 'child_process';
import { formCrm } from '../src/js/app';

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
  test('should open crm-block-input by + ', async () => {
    await page.goto(baseUrl);
    const crmBlock = await page.$('.crm-block');
    const button = await crmBlock.$('.add-new');
    button.click();
    await page.waitForSelector('[data-testid="show-block-CRM-B-input"]');
  });
  test('should hide crm-block-input by button cancel', async () => {
    await page.goto(baseUrl);
    const crmBlock = await page.$('.crm-block');
    const button = await crmBlock.$('.add-new');
    button.click();
    const formInput = await page.$('form-crm');
    const cancelButton = await formInput.$('.cancel-input');
    cancelButton.click();
    await page.waitForSelector('[data-testid="hide-block-CRM-B-input"]');
  });
  test('should hide crm-block-input by button save', async () => {
    await page.goto(baseUrl);
    const crmBlock = await page.$('.crm-block');
    const button = await crmBlock.$('.add-new');
    button.click();
    const formInput = await page.$('.form-crm');
    const inputName = await formInput.$('.input-field-name')
    const inputPrice = await formInput.$('.input-price-field')
    inputName.value = Car;
    inputPrice.value = 10000;
    const saveButton = await formInput.$('.save-input');
    saveButton.click();
    await page.waitForSelector('[data-testid="hide-block-CRM-B-input"]');
  });
  test('should open crm-block-input by ✎ edit-line', async () => {
    await page.goto(baseUrl);
    const crmListGoods = await page.$('.crm-list-goods');
    const button = await crmListGoods.$('.edit-line');
    button.click();
    await page.waitForSelector('[data-testid="show-block-CRM-B-input"]');
  });
  test('should add new line in crm-list-goods', async () => {
    await page.goto(baseUrl);
    const crmBlock = await page.$('.crm-block');
    const button = await crmBlock.$('.add-new');
    button.click();
    const formInput = await page.$('.form-crm');
    const inputName = await formInput.$('.input-field-name')
    const inputPrice = await formInput.$('.input-price-field')
    inputName.value = Car;
    inputPrice.value = 10000;
    const saveButton = await formInput.$('.save-input');
    saveButton.click();
    await page.waitForSelector(`[data-testid="${inputName.value}-line"]`);
  });
  test('should show error about text-input', async () => {
    await page.goto(baseUrl);
    const crmBlock = await page.$('.crm-block');
    const button = await crmBlock.$('.add-new');
    button.click();
    const formInput = await page.$('.form-crm');
    const inputName = await formInput.$('.input-field-name')
    const inputPrice = await formInput.$('.input-price-field')
    inputName.value = "     ";
    inputPrice.value = 1000;
    const saveButton = await formInput.$('.save-input');
    saveButton.click();
    await page.waitForSelector(`[data-testid="show-block-${warning-mes-0}"]`);
  });
  test('should show error about number-input', async () => {
    await page.goto(baseUrl);
    const crmBlock = await page.$('.crm-block');
    const button = await crmBlock.$('.add-new');
    button.click();
    const formInput = await page.$('.form-crm');
    const inputName = await formInput.$('.input-field-name')
    const inputPrice = await formInput.$('.input-price-field')
    inputName.value = "Car";
    inputPrice.value = "ten";
    const saveButton = await formInput.$('.save-input');
    saveButton.click();
    await page.waitForSelector(`[data-testid="show-block-${warning-mes-1}"]`);
  });
});

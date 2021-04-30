import { Console } from 'node:console';
import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let EC = protractor.ExpectedConditions;
  let delay = 1000;

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    page = new AppPage();
  });

  it('should display calculator page', () => {
    expect(page.navigateTo());
  });

  it('should do the addition 2 + 2 = 4', async () => {
    page.selectedButton('2');
    browser.sleep(delay);
    page.selectedButton('+');
    browser.sleep(delay);
    page.selectedButton('2');
    browser.sleep(delay);
    page.selectedButton('=');
    browser.sleep(delay);

    expect(
      await page.selectElementByCss('.calculator-screen').getAttribute('value')
    ).toEqual('4');
    browser.sleep(delay);
  });

  it('should do the addition 568 + 444 = 1012', async () => {
    page.selectedButton('5');
    page.selectedButton('6');
    page.selectedButton('8');
    browser.sleep(delay);
    page.selectedButton('+');
    browser.sleep(delay);
    page.selectedButton('4');
    page.selectedButton('4');
    page.selectedButton('4');
    page.selectedButton('=');
    browser.sleep(delay);

    expect(
      await page.selectElementByCss('.calculator-screen').getAttribute('value')
    ).toEqual('1012');

    browser.sleep(delay);
  });

  it('should do the subtraction 5 - 3 = 2', async () => {
    page.selectedButton('5');
    browser.sleep(delay);
    page.selectedButton('-');
    browser.sleep(delay);
    page.selectedButton('3');
    browser.sleep(delay);
    page.selectedButton('=');
    browser.sleep(delay);

    expect(
      await page.selectElementByCss('.calculator-screen').getAttribute('value')
    ).toEqual('2');

    browser.sleep(delay);
  });

  it('should do the division 10 % 2 = 5', async () => {
    page.selectedButton('1');
    page.selectedButton('0');
    browser.sleep(delay);
    page.selectedButton('%');
    browser.sleep(delay);
    page.selectedButton('2');
    browser.sleep(delay);
    page.selectedButton('=');
    browser.sleep(delay);

    expect(
      await page.selectElementByCss('.calculator-screen').getAttribute('value')
    ).toEqual('5');

    browser.sleep(delay);
  });

  it('should do the multiplication 5 * 5 = 25', async () => {
    page.selectedButton('5');
    browser.sleep(delay);
    page.selectedButton('*');
    browser.sleep(delay);
    page.selectedButton('5');
    browser.sleep(delay);
    page.selectedButton('=');
    browser.sleep(delay);

    expect(
      await page.selectElementByCss('.calculator-screen').getAttribute('value')
    ).toEqual('25');

    browser.sleep(delay);
  });

  afterEach(() => {
    page.selectedButton('AC');
  });
});

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

  it('should do the addition 2 + 2 = 4', () => {
    page.selectedButton('2');
    browser.sleep(delay);
    page.selectedButton('+');
    browser.sleep(delay);
    page.selectedButton('2');
    browser.sleep(delay);
    page.selectedButton('=');
    browser.sleep(delay);
    expect(page.selectElementByCss('.calculator-screen'));
    browser.sleep(delay);
  });

  it('should do the subtraction 5 - 3 = 2', () => {
    page.selectedButton('5');
    browser.sleep(delay);
    page.selectedButton('-');
    browser.sleep(delay);
    page.selectedButton('3');
    browser.sleep(delay);
    page.selectedButton('=');
    browser.sleep(delay);
    expect(page.selectElementByCss('.calculator-screen'));
    browser.sleep(delay);
  });

  it('should do the division 10 % 2 = 5', () => {
    page.selectedButton('1');
    page.selectedButton('0');
    browser.sleep(delay);
    page.selectedButton('%');
    browser.sleep(delay);
    page.selectedButton('2');
    browser.sleep(delay);
    page.selectedButton('=');
    browser.sleep(delay);
    expect(page.selectElementByCss('.calculator-screen'));
    browser.sleep(delay);
  });

  it('should do the multiplication 5 * 5 = 25', () => {
    page.selectedButton('5');
    browser.sleep(delay);
    page.selectedButton('*');
    browser.sleep(delay);
    page.selectedButton('5');
    browser.sleep(delay);
    page.selectedButton('=');
    browser.sleep(delay);
    expect(page.selectElementByCss('.calculator-screen'));
    browser.sleep(delay);
  });

  afterEach(() => {
    page.selectedButton('AC');
  });
});

import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    browser.get('/');
    return browser.sleep(5000);
  }

  navigateToURL() {
    return browser.getCurrentUrl();
  }

  selectedFormField(idField: string, value: string | number) {
    element(by.css(idField)).sendKeys(value);
    return browser.sleep(3000);
  }

  selectedButton(text: string) {
    element(by.buttonText(text)).click();
    return browser.sleep(3000);
  }

  selectElementByCss(className: string) {
    return element(by.css(className));
  }
}

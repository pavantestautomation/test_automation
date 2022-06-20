import CommonPage from '../CommonPage';

export default class SportsPage extends CommonPage {
  async navigateTo() {
    await this._page.click('div.page-header li.sport');
    await this._page.waitForLoadState();
  }

  fbShareButton() {
    return this._page.locator('div.gamma li.facebook');
  }

  async clickFirstLink() {
    await this._page.click('.gamma .linkro-darkred');
    await this._page.waitForLoadState();
  }

  async maximizeButton() {
    await this._page.click('div[class*=fullscreen]');
  }

  async minimizeButton() {
    await this._page.click('text=Non-Fullscreen');
  }
}

import { Page } from 'playwright';

export default class CommonPage {
  constructor(protected _page: Page) {}

  async goTo(path: string) {
    await this._page.goto(path);
    await this.acceptCookie();
  }

  private async acceptCookie() {
    await this._page.click('text=Got it');
  }
}

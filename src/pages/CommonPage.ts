import { Page } from 'playwright';
export default class CommonPage {
  constructor(protected page: Page) {
    console.log('Page initialization');
  }

  async goTo(path: string) {
    await this.page.goto(path);
    await this.acceptCookie();
  }

  private async acceptCookie() {
    await this.page.click('text=Got it');
  }
}

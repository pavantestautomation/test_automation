import { Page, chromium } from 'playwright';
import Environment from '@utils/Environment';

export default class UiClient {
  private _page: Page;

  async init(browserName: string) {
    const browser = await chromium.launch({
      headless: false,
      channel: browserName,
    });
    const context = await browser.newContext({
      baseURL: Environment.getUiConfig.baseUrl,
      viewport: { height: 1060, width: 1920 },
    });
    context.setDefaultTimeout(Environment.getUiConfig.timeout);
    this._page = await context.newPage();
  }

  async close() {
    await this.page.context().browser().close();
  }

  get page(): Page {
    return this._page;
  }

  async screenshot() {
    const screenshot = await this._page.screenshot({ fullPage: false });
    return screenshot.toString('base64');
  }
}

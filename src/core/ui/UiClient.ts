import { chromium, Page } from "playwright";
import Environment from "../../utils/Environment";

export default class UiClient {
    private _page: Page;

    async init(browserName: string) {
        const Browser = await chromium.launch({ headless: false, args: ['--start-maximized'], channel: browserName });
        this._page = await Browser.newPage({ baseURL: Environment.getUiConfig.baseUrl, viewport: null });
        this._page.setDefaultTimeout(Environment.getUiConfig.timeout);
    }

    async close() {
        this.page.context().browser().close();
    }

    get page(): Page {
        return this._page;
    }

    async screenshot() {
        const screenshot = await this._page.screenshot({ fullPage: true })
        return screenshot.toString("base64");
    }
}
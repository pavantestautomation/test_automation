import { Page } from "playwright";

export default class CommonPage {
    private _page: Page;

    constructor(page: Page) {
        this._page = page;
    }

    async goTo(path: string) {
        await this._page.goto(path, { waitUntil: "networkidle" });
        await this.acceptCookie();
    }

    async acceptCookie() {
        await this._page.click('text=Got it');
    }

    get page() {
        return this._page;
    }
}
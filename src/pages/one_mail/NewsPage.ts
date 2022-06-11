import CommonPage from "../CommonPage";

export default class NewsPage extends CommonPage {

    async navigateTo() {
        await this._page.click('div.page-header li.news');
        await this._page.waitForLoadState();
    }

    fbShareButton() {
        return this._page.locator('div.gamma li.facebook');
    }
}
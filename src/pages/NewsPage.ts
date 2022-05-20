import CommonPage from "./CommonPage";

export default class NewsPage extends CommonPage {

    async navigateTo() {
        await this.page.click('div.page-header li.news');
    }

    fbShareButton() {
        return this.page.locator('div.gamma li.facebook');
    }
}
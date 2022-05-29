import CommonPage from "./CommonPage";

export default class SportsPage extends CommonPage {

    async navigateTo() {
        await this.page.click('div.page-header li.sport');
        await this.page.waitForLoadState();
    }

    fbShareButton() {
        return this.page.locator('div.gamma li.facebook');
    }
}
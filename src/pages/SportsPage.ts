import CommonPage from "./CommonPage";

export default class SportsPage extends CommonPage {

    async navigateTo() {
        await this.page.click('div.page-header li.sport');
        await this.page.waitForLoadState();
    }

    fbShareButton() {
        return this.page.locator('div.gamma li.facebook');
    }

    async clickFirstLink() {
        await this.page.click('.gamma .linkro-darkred');
        await this.page.waitForLoadState();
    }

    async maximizeButton() {
        await this.page.click('div[class*=fullscreen]');
    }

    async minimizeButton() {
        await this.page.click("text=Non-Fullscreen");
    }
}
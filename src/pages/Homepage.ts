import CommonPage from "./CommonPage";

export default class Homepage extends CommonPage {

    async navigateTo() {
        await this.goTo('/home/index.html')
    }

}
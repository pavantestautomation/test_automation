import { Before, After, setDefaultTimeout, AfterStep } from '@cucumber/cucumber';
import Environment from '../../utils/Environment';
import TestContext from '../../context/TestContext';

setDefaultTimeout(180000);


Before('@ui', async function (this: TestContext, scenario) {
    await this.UiClient.init('chrome', scenario.pickle.name);
});

Before('@api', async function (this: TestContext) {
    await this.restClient.initRestClient(Environment.getApiConfig);
});

AfterStep('@ui', async function (this: TestContext, scenario) {
    if (scenario.result.status === 'FAILED') {
        this.attach(await this.UiClient.screenshot(), 'base64:image/png');
        await this.UiClient.close();
    }
});
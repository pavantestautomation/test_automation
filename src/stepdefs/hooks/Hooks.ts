import { Before, After, setDefaultTimeout, AfterStep } from '@cucumber/cucumber';
import Environment from '../../utils/Environment';
import TestContext from '../../context/TestContext';

setDefaultTimeout(60000);


Before('@ui', async function (this: TestContext) {
    await this.UiClient.init('chrome');
});

Before('@api', async function (this: TestContext) {
    await this.restClient.initRestClient(Environment.getApiConfig);
});

After('@ui', async function (this: TestContext) {
    await this.UiClient.close();
});

AfterStep('@ui', async function (this: TestContext, scenario) {
    if (scenario.result.status === 'FAILED') {
        this.attach(await this.UiClient.screenshot(), 'base64:image/png');
    }
});
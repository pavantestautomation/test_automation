import { AfterStep, Before, setDefaultTimeout } from '@cucumber/cucumber';
import Environment from '@utils/Environment';
import TestContext from 'testContext';

setDefaultTimeout(180000);

Before('@ui', async function (this: TestContext) {
  await this.UiClient.init('chrome');
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

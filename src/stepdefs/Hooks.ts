import { AfterStep, Before, setDefaultTimeout } from '@cucumber/cucumber';
import Environment from '@utils/Environment';
import TestContext from 'testContext';

setDefaultTimeout(180000);

Before(function (this: TestContext) {
  global.testContext = this as TestContext;
});

Before('@ui', async function (this: TestContext) {
  await this.UiClient.init('chrome');
  global.oneMail = this.oneMail;
});

Before('@api', async function (this: TestContext) {
  await this.restClient.initRestClient(Environment.getApiConfig);
  global.restClient = this.restClient;
});

AfterStep('@ui', async function (this: TestContext, scenario) {
  if (scenario.result.status === 'FAILED') {
    this.attach(await this.UiClient.screenshot(), 'base64:image/png');
    await this.UiClient.close();
  }
});

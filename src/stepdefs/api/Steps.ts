import { Given, Then, When } from '@cucumber/cucumber';
import TestContext from 'testContext';
import { expect } from '@playwright/test';

Given('the rest api', function (this: TestContext, doc: string) {
  console.log('Doc' + doc);
});

When('client send GET request: {string}', async function (this: TestContext, endPoint: string) {
  await this.restClient.get(endPoint);
});

Then('response status should be successfull', async function (this: TestContext) {
  await expect(this.restClient.lastResponse).toBeOK();
});

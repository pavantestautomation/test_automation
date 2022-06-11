
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import TestContext from 'testContext';

Given('the rest api', async function (this: TestContext, doc: string) {
    console.log('Doc' + doc);
});

When('client send GET request: {string}', async function (this: TestContext, endPoint: string) {
    await this.restClient.get(endPoint);
});

Then('response status should be successfull', async function (this: TestContext) {
    await expect(this.restClient.lastResponse).toBeOK();
});
import { Given, Then, When } from '@cucumber/cucumber';
import TestContext from 'testContext';
import { expect } from '@playwright/test';

Given('the homepage', async function (this: TestContext) {
  await this.oneMail.homepage.navigateTo();
});

When('user navigate to news page', async function (this: TestContext) {
  await this.oneMail.newsPage.navigateTo();
});

Then('maximize and minimizing first video', async function (this: TestContext) {
  await this.oneMail.sportsPage.clickFirstLink();
  await this.oneMail.sportsPage.maximizeButton();
  await this.oneMail.sportsPage.minimizeButton();
});

When('user navigate to sports page', async function (this: TestContext) {
  await this.oneMail.sportsPage.navigateTo();
});

Then('news details are displayed', async function (this: TestContext) {
  await expect(this.oneMail.newsPage.fbShareButton()).toBeVisible();
});

Then('sports details are displayed', async function (this: TestContext) {
  await expect(this.oneMail.sportsPage.fbShareButton()).not.toBeVisible();
});

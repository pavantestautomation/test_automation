
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import TestContext from '../../context/TestContext';

Given('the homepage', async function (this: TestContext) {
    await this.oneMail.homepage.navigateTo();
});

When('user navigate to news page', async function (this: TestContext) {
    await this.oneMail.newsPage.navigateTo();
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
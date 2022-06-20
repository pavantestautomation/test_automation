import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('the homepage', async function () {
  await oneMail.homepage.navigateTo();
});

When('user navigate to news page', async function () {
  await oneMail.newsPage.navigateTo();
});

Then('maximize and minimizing first video', async function () {
  await oneMail.sportsPage.clickFirstLink();
  await oneMail.sportsPage.maximizeButton();
  await oneMail.sportsPage.minimizeButton();
});

When('user navigate to sports page', async function () {
  await oneMail.sportsPage.navigateTo();
});

Then('news details are displayed', async function () {
  await expect(oneMail.newsPage.fbShareButton()).toBeVisible();
});

Then('sports details are displayed', async function () {
  await expect(oneMail.sportsPage.fbShareButton()).not.toBeVisible();
});

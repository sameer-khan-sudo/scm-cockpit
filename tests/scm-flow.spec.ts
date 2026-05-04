// import { test, expect, Page } from '@playwright/test';
// import { AuthManager } from '../utils/AuthManager';
// import { ScmDashboardPage } from '../pages/ScmDashboardPage';
// import { BasePage } from '../pages/BasePage';

// test.describe.serial('SCM Flow', () => {

//   let page: Page;
//   let base: BasePage;
//   let scm: ScmDashboardPage;

//   test.beforeAll(async ({ browser }) => {
//     page = await browser.newPage();
//     await AuthManager.ensureLogin(page);

//     base = new BasePage(page);
//     scm = new ScmDashboardPage(page);
//   });

//   test.afterAll(async () => {
//     await page.close();
//   });

//   test('TESTCASE : 1 - Launch SCM Cockpit.', async () => {
//     await expect(page).toHaveURL(/scmcockpit/);
//     await expect(scm.scmCockpitCard).toBeVisible();
//   });

//   test('TESTCASE : 2 - Click on SCM Cockpit card.', async () => {
//     await base.click(scm.scmCockpitCard);
//     await expect(page).toHaveURL(/scmcockpit/);
//   });

//   test('TESTCASE : 3 - Click on DPPLP card.', async () => {
//     await expect(scm.dpplpCard).toBeVisible();
//     await base.click(scm.dpplpCard);

//     await base.verifyUIElements([
//       {locator: scm.scmCockpitHeader, expected: 'SCM COCKPIT'},
//       {locator: scm.homeTitle, expected: 'Home'},
//       {locator: scm.portfolioViewLabel, expected: 'Procurement Portfolio View'}
//     ]);
//   });

// });
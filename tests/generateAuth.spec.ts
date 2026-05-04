import { test } from '@playwright/test';

test('Generate Auth Session', async ({ page }) => {
  await page.goto('https://test7.akira.hitachienergy.com/scm');
  await page.pause();

  await page.context().storageState({
    path: 'playwright/.auth/test-user.json'
  });
});
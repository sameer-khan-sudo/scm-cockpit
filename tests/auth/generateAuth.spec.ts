import { test } from '@playwright/test';
import fs from 'fs';

test('Generate Auth Session', async ({ page }) => {

  await page.goto('https://test7.akira.hitachienergy.com/scm');

  console.log('🔐 Please login manually...');
  await page.pause();

  const dir = 'playwright/.auth';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  await page.context().storageState({
    path: 'playwright/.auth/test-user.json'
  });

  console.log('✅ Session saved successfully');
});
import { test } from '@playwright/test';

test('Sample Test', async ({ page }) => {
    await page.goto('https://google.com');
})

test('Another Sample Test', async ({ page }) => {
    await page.goto('https://bing.com');
})

test('Yet Another Sample Test', async ({ page }) => {
    await page.goto('https://duckduckgo.com');
})
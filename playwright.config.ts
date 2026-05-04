import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const edgePath =
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

// const selectedEnv = process.env.ENV || 'test';
const authFile = 'playwright/.auth/test-user.json';

export default defineConfig({
  timeout: 60000,
  fullyParallel: true,
  workers: 4,

  reporter: [
    ['html', { 
      outputFolder: 'playwright-report',
      open: 'never'   // 'always' | 'never' | 'on-failure'
    }]
  ],

  use: {
    baseURL: process.env.BASE_URL,
    storageState: fs.existsSync(authFile) ? authFile : undefined,

    browserName: 'chromium',
    launchOptions: {
      executablePath: edgePath,
      headless: false,
      args: ['--start-maximized']
    },

    viewport: null,
  }
});
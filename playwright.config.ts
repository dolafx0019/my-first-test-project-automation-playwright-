import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    testIdAttribute: "data-test",
    baseURL: process.env.BASE_URL, // set BASE_URL env if needed
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
     
  },
  reporter: [['html', { open: 'never' }], ['list']],
});

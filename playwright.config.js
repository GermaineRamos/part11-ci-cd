const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  fullyParallel: false,
  workers: 1,
  use: {
    baseURL: 'http://localhost:5000',
  },
  webServer: {
    command: 'npm run start-prod',
    url: 'http://localhost:5000',
    reuseExistingServer: !process.env.CI,
  },
})

const { test, expect } = require('@playwright/test');

test('Browser Test', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000');
  const title = page.locator('h1');
  await expect(title).toHaveText('Test Web Server');
});

import { test, expect } from '@playwright/test';

test('selecting an option from the dropdown', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/dropdown');
  await page.locator('#dropdown').selectOption('2');
  await expect(page.locator('#dropdown')).toHaveValue('2');
});
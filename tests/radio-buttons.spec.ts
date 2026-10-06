import { test, expect } from '@playwright/test';

test('selecting color and sport radio buttons', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/radio-buttons');
  await page.getByRole('radio', { name: 'Black' }).check();
  await page.getByRole('radio', { name: 'Basketball' }).check();
  await expect(page.getByRole('radio', { name: 'Black' })).toBeChecked();
  await expect(page.getByRole('radio', { name: 'Basketball' })).toBeChecked();
});
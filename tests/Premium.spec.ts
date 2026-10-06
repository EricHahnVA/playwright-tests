import { test, expect } from '@playwright/test';

test('clicking About us navigates to the about page', async ({ page }) => {
  await page.goto('https://www.hugedomains.com/domain_profile.cfm?d=your-app.com');
  await page.getByRole('link', { name: 'About us' }).click();
  await expect(page.getByRole('heading', { name: 'Premium domains, excellent' })).toBeVisible();
});
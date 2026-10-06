import {test, expect} from '@playwright/test';

test.describe('Login functionality', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/login');
  });

test('login with valid credentials', async ({ page }) => {
 

  await page.getByLabel('Username').fill('practice');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', {name: 'Login'}).click();

  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});
test('wrong password shows error', async ({ page }) => {
    
    await page.getByLabel('Username').fill('practice');
    await page.getByLabel('Password').fill('wrongpassword');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Your password is invalid!')).toBeVisible();
  });
});
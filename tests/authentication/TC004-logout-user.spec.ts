import { test, expect } from '@playwright/test'

test('Logout the user', async ({ page }) => {
    // Navigate & check the title of URL
    await page.goto("https://automationexercise.com/");
    await expect(page).toHaveTitle('Automation Exercise');

    //Click on Signup/Login & check the 'Login to your account' is visible
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page.getByText('Login to your account')).toBeVisible();
    await page.locator("xpath=(//input[@type='email'])[1]").fill("yogeshpotdar2293@gmail.com");
    await page.getByPlaceholder('Password').fill("Yogesh22@");
    await page.locator("xpath=(//button[@type='submit'])[1]").click();
    await expect(page.getByText(" Logged in as ")).toBeVisible();
    await page.getByRole('link', { name: ' Logout' }).click();
    await expect(page.getByText('Login to your account')).toBeVisible();
})
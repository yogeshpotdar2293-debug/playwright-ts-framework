import { test, expect } from '@playwright/test'

test('Register user with exsiting email', async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await expect(page).toHaveTitle('Automation Exercise');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page.getByText('New User Signup!')).toBeVisible();
    await page.getByPlaceholder('Name').fill("Yogesh Potdar");
    await page.locator("xpath=(//input[@type='email'])[2]").fill("yogeshpotdar2293@gmail.com");
    await page.locator("xpath=(//button[@class='btn btn-default'])[2]").click();
    await expect(page.getByText('Email Address already exist!')).toBeVisible();
})
import { test, expect } from '@playwright/test'

test('Contact US form', async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await expect(page).toHaveTitle('Automation Exercise');
    await page.getByRole('link', { name: ' Contact us' }).click();
    await expect(page.getByText('Get In Touch')).toBeVisible();
    await page.getByPlaceholder('Name').fill("Yogi");
    await page.locator("xpath=(//input[@type='email'])[1]").fill("yogesh22@gmail.com");
    await page.getByPlaceholder('Subject').fill("Regarding Signup issue");
    await page.getByPlaceholder('Your Message Here').fill("I have issue while creating new user");
    await page.locator("xpath=(//input[@type='file'])[1]").setInputFiles("test-data//file.pdf");
    const dialogPromise = page.waitForEvent('dialog');
    await page.getByRole('button', { name: 'submit' }).click();
    const dialog = await dialogPromise;

    expect(dialog.message()).toContain('Press OK to proceed!');

    await dialog.accept();

    await expect(
        page.getByText('Success! Your details have been submitted successfully.')
    ).toBeVisible();
})
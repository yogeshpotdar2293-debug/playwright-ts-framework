import { test, expect } from '@playwright/test'

test('Register new user to Automation Practice application', async ({ page }) => {
    //Navigate & check the Title of url
    await page.goto("https://automationexercise.com/");
    await expect(page).toHaveTitle('Automation Exercise');

    //Click on Signup/Login & check the 'New User Signup!' is visible
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page.getByText('New User Signup!')).toBeVisible();

    //Enter the Name, Email & click on submit button & check 'Enter Account Information' is visible 
    await page.getByPlaceholder('Name').fill("Yogesh Potdar");
    await page.locator("xpath=(//input[@type='email'])[2]").fill("potyogesh22@gmail.com");
    await page.locator("xpath=(//button[@class='btn btn-default'])[2]").click();
    await expect(page.getByText("Enter Account Information")).toBeVisible();

    //Fill the details
    await page.locator("#id_gender1").click();
    await page.locator("#name").fill("Yogesh Eknath Potdar")
    await expect(page.locator("#email")).toHaveValue("potyogesh22@gmail.com");
    await page.getByRole('textbox', { name: 'password' }).fill("Yogesh22@");
    await page.locator("#days").selectOption('22');
    await page.locator('#months').selectOption({ label: 'March' });
    await page.locator('#years').selectOption('1993');
    await page.getByText("Sign up for our newsletter!").click();
    await page.getByText("Receive special offers from our partners!").click();
    await page.locator("#first_name").fill("Yogesh");
    await page.locator("#last_name").fill("Potdar");
    await page.locator("#company").fill("ABC.Pvt.Ltd");
    await page.locator("#address1").fill("Ganeshnagar, Wadgaonsheri, Pune");
    await page.locator("#country").selectOption("India");
    await page.locator("#state").fill("Maharashtra");
    await page.locator("#city").fill("Pune");
    await page.locator("#zipcode").fill("411014");
    await page.locator("#mobile_number").fill("8899001122");
    await page.getByText("Create Account").click();
    await expect(page.getByText("Account Created!")).toBeVisible();
    await page.getByText('Continue').click();
    await expect(page.getByText(" Logged in as ")).toBeVisible();
    await page.getByText(" Delete Account").click();
    await expect(page.getByText('Account Deleted!')).toBeVisible();
    await page.getByText('Continue').click();
})

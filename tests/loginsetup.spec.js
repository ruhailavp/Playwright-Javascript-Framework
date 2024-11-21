import { test, expect } from '@playwright/test';
import 'dotenv/config';
import path from "path";
import { LoginPage } from '../pages/loginPage';


test('@setup Perform login action', async ({ page, browserName }) => {
    const loginPage = new LoginPage(page);

    const STORAGE_STATE = path.join(__dirname, '..', 'storageState', `storageState_${browserName}.json`);
    console.log("Storage name: ", STORAGE_STATE);

    await loginPage.navigateToLoginPage();
    await loginPage.enterEmail(process.env.LOGIN_EMAIL);
    await loginPage.enterPassword(process.env.LOGIN_PASSWORD);
    const welcomePage = await loginPage.clickOnSigninButton();
    const title = await welcomePage.getPageTitle();
    await welcomePage.wait(2000);
    expect(title).toBe("Learn Automation Courses");
    await page.context().storageState({path: STORAGE_STATE});    
})



/////////////////////////////////////


// setup('@setup Perform login action', async ({ page, browserName }) => {

//     const STORAGE_STATE = path.join(__dirname, '..', 'storageState', `storageState_${browserName}.json`);

//     console.log("Storage name: ", STORAGE_STATE);
    
//     await page.goto("https://freelance-learn-automation.vercel.app/");

//     expect.soft(page).toHaveTitle('Learn Automation Courses');

//     await page.locator("//div[@class='navbar-menu-links']").click();
//     await page.locator("//button[@class='nav-menu-item']").click();

//     await page.waitForTimeout(1000);
    
//     await page.getByPlaceholder("Enter Email").fill(process.env.LOGIN_EMAIL);
//     await page.getByPlaceholder("Enter Password").fill(process.env.LOGIN_PASSWORD);
//     await page.locator("button[type='submit']").click();

//     await page.waitForTimeout(2000);

//     expect(page).toHaveTitle("Learn Automation Courses");

//     await page.context().storageState({path: STORAGE_STATE});
// })



////////////////////////////////////////////////////////////////
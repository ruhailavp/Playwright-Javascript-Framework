import { test as setup, expect } from '@playwright/test';
import 'dotenv/config';
import path from "path";



setup('@setup Perform login action', async ({ page, browserName }) => {

    const STORAGE_STATE = path.join(__dirname, '..', 'storageState', `storageState_${browserName}.json`);

    console.log("Storage name: ", STORAGE_STATE);
    
    await page.goto("https://freelance-learn-automation.vercel.app/");

    expect.soft(page).toHaveTitle('Learn Automation Courses');

    await page.locator("//div[@class='navbar-menu-links']").click();
    await page.locator("//button[@class='nav-menu-item']").click();

    await page.waitForTimeout(1000);
    
    await page.getByPlaceholder("Enter Email").fill(process.env.EMAIL);
    await page.getByPlaceholder("Enter Password").fill(process.env.PASSWORD);
    await page.locator("button[type='submit']").click();

    await page.waitForTimeout(2000);

    expect(page).toHaveTitle("Learn Automation Courses");

    await page.context().storageState({path: STORAGE_STATE});
})

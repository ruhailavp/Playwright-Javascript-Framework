import { test, expect } from '@playwright/test';
import { WelcomePage } from '../pages/welcomePage';


test('Perform logout action', async ({ page }) => {
    const welcomePage = new WelcomePage(page);

    await welcomePage.openWelcomePage();
    await welcomePage.clickOnHamburgermenu();
    await welcomePage.clickOnSignoutLink();
    const url = await welcomePage.getCurrentURL();
    expect(url).toBe("https://freelance-learn-automation.vercel.app/login");   
})

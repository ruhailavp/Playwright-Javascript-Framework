import { test, expect } from "../fixtures/pomFixture";

// import { test, expect } from '@playwright/test';
// import { WelcomePage } from '../pages/welcomePage';


test('Perform logout action', async ({ welcomePage }) => {
    // const welcomePage = new WelcomePage(page);

    await welcomePage.openWelcomePage();
    await welcomePage.clickOnHamburgermenu();
    await welcomePage.clickOnSignoutLink();
    const url = await welcomePage.getCurrentURL();
    expect(url).toBe("https://freelance-learn-automation.vercel.app/login");   
})

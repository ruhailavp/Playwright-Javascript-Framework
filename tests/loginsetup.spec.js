import { test, expect } from "../fixtures/pomFixture";
import 'dotenv/config';
import path from "path";


test('@setup Perform login action', async ({ loginPage, browserName }) => {
    const STORAGE_STATE = path.join(__dirname, '..', 'storageState', `storageState_${browserName}.json`);
    console.log("Storage name: ", STORAGE_STATE);

    await loginPage.navigateToLoginPage();
    await loginPage.enterEmail(process.env.LOGIN_EMAIL);
    await loginPage.enterPassword(process.env.LOGIN_PASSWORD);
    const welcomePage = await loginPage.clickOnSigninButton();
    const title = await welcomePage.getPageTitle();
    await welcomePage.wait(2000);
    expect(title).toBe("Learn Automation Courses");
    await welcomePage.storeSession(STORAGE_STATE);
})



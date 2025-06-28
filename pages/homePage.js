import { BasePage } from './basePage';
import { LoginPage } from './loginPage';
import selector from "../locators/homePage.json";

/**
 * HomePage class represents the home page of the application.
 * It extends the BasePage class to inherit common page functionalities.
 * 
 * @class HomePage
 * @extends BasePage
 */

export class HomePage extends BasePage {

    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */

    constructor(page) {
        super(page);
    }

    async openApplication() {
        await this.page.goto("/");
    }


    async clickOnHamburgerMenu() {
        await this.clickOnElement(`${selector.hamburgerMenu}`);
    }

    async clickOnLoginLink() {
        await this.clickOnElement(`${selector.loginLink}`);
        return new LoginPage(this.page);
    }

    async getCoursesCount() {
        const coursesCount = (await this.getAllElements(`${selector.courseCards}`)).length;
        return coursesCount;
    }
}
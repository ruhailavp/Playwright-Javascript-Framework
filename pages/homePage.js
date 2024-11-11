import { BasePage } from './basePage';
import { LoginPage } from './loginPage';

import selector from "../pageObjects/homePage.json";
import 'dotenv/config';


export class HomePage extends BasePage {

    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */

    constructor(page) {
        super(page);
    }

    async openApplication() {
        await this.page.goto('https://freelance-learn-automation.vercel.app/');
    }


    async clickOnHamburgerMenu() {
        await this.clickOnElement(`${selector.menu.hamburgerMenu}`);
    }

    async clickOnLoginLink() {
        await this.clickOnElement(`${selector.menu.loginLink}`);
        return new LoginPage(this.page);
    }

    async getCoursesCount() {
        const coursesCount = (await this.getAllElements(`${selector.homeComponents.courseCards}`)).length;
        return coursesCount;
    }
}
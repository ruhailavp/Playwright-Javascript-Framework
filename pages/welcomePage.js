import { BasePage } from "./basePage";
import { ManageCoursePage } from "./manageCoursePage";

import selector from '../pageObjects/homePage.json';
import { ManageCategoryPage } from "./manageCategoryPage";
// const selector = require('../pageObjects/homePage.json');


export class WelcomePage extends BasePage {

    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
    
    constructor(page) {
        super(page);
    }

    async openWelcomePage() {
        await this.page.goto("/");
       
    }

    async hoverOnManageMenu() {
        await this.hoverOnElement(`${selector.menu.manageMenu}`);
    }

    async clickOnManageCourseLink() {
        await this.clickOnElement(`${selector.menu.manageCourse}`);
        return new ManageCoursePage(this.page)
    }

    async clickOnManageCategoryLink() {
        const newWindow = await this.handleNewWindow(`${selector.menu.manageCategory}`);     
        await this.wait();
        return new ManageCategoryPage(newWindow);
    }

    async clickOnHamburgermenu() {
        await this.clickOnElement(selector.menu.hamburgerMenu);
    }

    async clickOnSignoutLink() {
        await this.clickOnElement(selector.menu.signOut);
        await this.wait();
    }


    
}
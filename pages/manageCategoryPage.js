import { BasePage } from "./basePage";
import selector from '../pageObjects/manageCategoryPage.json';



export class ManageCategoryPage extends BasePage {

    /**
     * 
     * @param {import('@playwright/test').Page} page ;
     */

    constructor(page) {
        super(page);
    }

    async navigateMnaageCategoryPage() {
        await this.page.goto("/category/manage");
    }
    
    async clickOnAddCategoryButton() {
        await this.clickOnElement(`${selector.manageCategory.addNewCategoryButton}`);
    }

    async getCategoryNameFromList(categoryName) {
        const table = await this.getElement(`${selector.webTable.table}`);
        const rows = await table.locator(`${selector.webTable.rows}`);
        const rowData = await rows.filter({
            has: this.page.locator('td'),
            hasText: `${categoryName}`
        })
        const createdCategoryName = await rowData.locator("//td[1]").textContent();
        console.log("Category name: ", createdCategoryName);
        return createdCategoryName;
    }

    async clickOnUpdateButton(categoryName) {
        await this.page.getByRole('row', {name: `${categoryName}`}).getByRole('button', {name: 'Update'}).click();
        await this.page.waitForTimeout(8000);
    }

    async deleteCategory(categoryName) {
        await this.page.getByRole('row', {name: `${categoryName}`}).getByRole('button', {name: 'Delete'}).click();
        await this.wait();
    }


    async getPopupMessage() {
        const popup = await this.getElement(`${selector.popup.popupWindow}`);
        const popupMessage = await popup.locator(`${selector.popup.popupMessage}`).textContent();
        return popupMessage;
    }

    async clickOnDeleteOnPopup() {
        const popup = await this.getElement(`${selector.popup.popupWindow}`);
        await popup.locator(`${selector.popup.deleteButton}`).click();
        await this.wait();
    }



 }
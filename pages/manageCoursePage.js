import { BasePage } from "./basePage";

import selector from '../pageObjects/manageCoursePage.json';
// const selector = require('../pageObjects/manageCoursePage.json');


export class ManageCoursePage extends BasePage {

    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */

    constructor(page) {
        super(page);
    }

    async navigateCourseManagePage() {
        await this.page.goto('/course/manage');

    }

    async clickOnAddNewCourseButton() {
        await this.clickOnElement(`${selector.manageCourse.addCourse}`);
    }

    async clickOnChooseFile() {
        await this.clickOnElement(`${selector.newCourse.chooseFile}`);
    }

    async uploadImageFile(filePath) { 
        const element = await this.getElement(`${selector.newCourse.chooseFile}`);
        await element.setInputFiles(filePath);    
    }

    async enterCoursename(courseName) {
        await this.fillText(`${selector.newCourse.courseName}`, courseName);
    }

    async enterDescription(description) {
        await this.fillText(`${selector.newCourse.description}`, description);
    }

    async enterInstructor(instructorName) {
        await this.fillText(`${selector.newCourse.instructor}`, instructorName);
    }

    async enterPrice(priceValue) {
        await this.fillText(`${selector.newCourse.price}`, priceValue);
    }

    async clickOnStartDate() {
        await this.clickOnElement(`${selector.newCourse.startDate}`);
    }

    async clickOnEndDate() {
        await this.clickOnElement(`${selector.newCourse.endDate}`);
    }

    async datePicker(expectedMonth, expectedDay) {
        while(true) {
            const actualMonthYear = await this.getElementText(`${selector.newCourse.currentMonth}`);
            const [actualMonth, actualYear] = actualMonthYear.split(' ');
        
            const actualMonthObject = await this.getMonthObject(actualMonth);
            const expectedMonthObject = await this.getMonthObject(expectedMonth);

            if(actualMonthObject < expectedMonthObject){
                await this.clickOnElement(`${selector.newCourse.nextMonth}`);

            } else if(actualMonthObject > expectedMonthObject) {
                await this.clickOnElement(`${selector.newCourse.previousMonth}`);
                            
            } else {
                break;
            }
        }  
        
        const days = await this.getElement(`${selector.newCourse.days}`);
        await days.filter({
            hasText: expectedDay
        }).click();
    }   
    
    
    async getPermanentCheckboxStatus() {
        const status = await this.checkboxStatus(`${selector.newCourse.permanentCheckbox}`);
        return status;
    }

    async clickOnSaveButton(locator) {
        await this.clickOnElement(`${selector.newCourse.saveButton}`);
        await this.wait();
    }


    async checkboxStatus() {
        const checkbox = await this.getElement(`${selector.newCourse.permanentCheckbox}`);
        return checkbox;
    }

    async selectCategory() {
        await this.clickOnElement(`${selector.newCourse.selectCategory}`);
        const categories = await this.getAllElements(`${selector.newCourse.categories}`);
        const randomIndex = Math.floor(Math.random() * categories.length);
        await this.wait();
        await categories[randomIndex].click();
    }


    async rowsCount() {
        const table = await this.getElement(`${selector.webTable.table}`);
        const rows = await table.locator(`${selector.webTable.rows}`);
        return rows.count();
    }


    async getCourseNameFromList(courseName) {
        const table = await this.getElement(`${selector.webTable.table}`);
        const rows = await table.locator(`${selector.webTable.rows}`);
        const rowData = await rows.filter({
            has: this.page.locator('td'),
            hasText: `${courseName}`
        })
        const createdCourseName = await rowData.locator("//td[2]").textContent();
        return createdCourseName;
    }

    async getCreatedCourseElement(courseName) {
        const table = await this.getElement(`${selector.webTable.table}`);
        const rows = await table.locator(`${selector.webTable.rows}`);
        const rowData = await rows.filter({
            has: this.page.locator('td'),
            hasText: `${courseName}`
        })
        const rowElement = await rowData.locator("//td[2]")
        return rowElement;

    }


    async deleteCourse(courseName) {
        await this.page.getByRole('row', {name: `${courseName}`}).getByRole('button', {name: 'Delete'}).click();
        // const table = await this.getElement(`${selector.webTable.table}`);
        // const rows = await table.locator(`${selector.webTable.rows}`);
        // const rowData = await rows.filter({
        //     has: this.page.locator('td'),
        //     hasText: `${courseName}`
        // })
        // await rowData.locator("//button[contains(text(), 'Delete')]").click();
        await this.wait();        
    }


}
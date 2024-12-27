import { test, expect } from "@playwright/test";
import { readExcelFile } from "../utils/csvUtil";
import path from 'path';

test.describe('Data driven testing', () => {

    const dataFilePath = path.join(__dirname, "../testData/excelFiles/sample.xlsx");

    test('Read data from excel file from sheet1', async ({ page }) => {
        const sheetName = 'Sheet2'; 

        try {
            const sheetData = await readExcelFile(dataFilePath, sheetName);
            console.log(`Data from ${sheetName}:`, sheetData);

            const data = sheetData[1];
            const cellData0  = data[0];
            const cellData1  = data[1];
            const cellData2  = data[2];
            const cellData3  = data[3];
            console.log(`Data from ${sheetName}: `, data);
            console.log(`Data from ${sheetName}: `, cellData0);
            console.log(`Data from ${sheetName}: `, cellData1);
            console.log(`Data from ${sheetName}: `, cellData2);
            console.log(`Data from ${sheetName}: `, cellData3);

            // Add assertions to validate the data
            expect(sheetData).toBeDefined();
            expect(sheetData.length).toBeGreaterThan(0);
        } catch (error) {
            console.error(`Failed to read data from ${sheetName}:`, error);
        }
    });
});
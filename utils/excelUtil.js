import ExcelJS from 'exceljs';

export async function readExcelFile(filePath, sheetName) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const sheet = workbook.getWorksheet(sheetName);

    if (!sheet) {
        throw new Error(`Sheet "${sheetName}" not found in the Excel file.`);
    }

    // Extract rows as an array of objects
    const sheetData = [];
    sheet.eachRow((row, rowIndex) => {
        const rowData = row.values.slice(1); // Remove the index from the row values
        sheetData.push(rowData);
    });

    return sheetData;
}

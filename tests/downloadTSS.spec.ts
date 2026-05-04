// import test, { BrowserContext, expect, Page } from "playwright/test";
// import { BasePage } from "../pages/BasePage"
// import { ScmDashboardPage } from "../pages/ScmDashboardPage"
// import { TSSList } from "../pages/tssListPage"
// import { DPPLP } from "../pages/dpplp.Page";
// import path from 'path';
// import fs from 'fs';
// import * as XLSX from 'xlsx';


// test.describe.serial("Download TSS Data", () => {

//     let context: BrowserContext;
//     let page: Page;
//     let base: BasePage;
//     let scm: ScmDashboardPage;
//     let tssListPage: TSSList;
//     let dpplpPage: DPPLP;


//     test.beforeAll(async ({ browser }) => {

//         context = await browser.newContext({
//             storageState: "playwright/.auth/test-user.json",
//             acceptDownloads: true

//         })

//         page = await context.newPage();

//         base = new BasePage(page);
//         scm = new ScmDashboardPage(page);
//         tssListPage = new TSSList(page)
//         dpplpPage = new DPPLP(page);

//     })

//     test.afterAll(async () => {
//         await context.close()
//     })

//     test("TESTCASE 1 - Launch SCM Cockpit.", async () => {
//         await page.goto("scmcockpit");
//         await expect(page).toHaveURL(/scmcockpit/);
//         await base.click(scm.scmCockpitCard);
//     });

//     test('TESTCASE 2 - Click TSS Card.', async () => {
//         await base.click(tssListPage.tssCard);
//         await expect(page.locator('div').filter({ hasText: /^HomeTender Sourcing Strategy$/ })).toBeVisible();
//     });



//     // test('TESTCASE 3 : Download TSS File', async () => {

//     //     const downloadPromise = page.waitForEvent('download');

//     //     await page.getByRole('button', { name: 'download-grid-data' }).click();

//     //     await tssListPage.verifySuccessToast();

//     //     const download = await downloadPromise;

//     //     const fileName = download.suggestedFilename();

//     //     expect(fileName).toContain('tss-list-tss');

//     //     const filePath = path.join('downloads', fileName);

//     //     await download.saveAs(filePath);

//     //     expect(fs.existsSync(filePath)).toBeTruthy();

//     // });
//     test('TESTCASE 3 : Download TSS File and Validate Excel Data', async () => {
//         // Wait for download and click button
//         const [download] = await Promise.all([
//             page.waitForEvent('download'),
//             page.getByRole('button', { name: 'download-grid-data' }).click()
//         ]);

//         // Get downloaded file name
//         const fileName = download.suggestedFilename();

//         // Create file path
//         const filePath = path.join('downloads', fileName);

//         // Save downloaded file
//         await download.saveAs(filePath);

//         console.log("Downloaded File:", fileName);

//         // Verify file exists
//         expect(fs.existsSync(filePath)).toBeTruthy();

//         // Read Excel file
//         const workbook = XLSX.readFile(filePath);

//         // Get first sheet
//         const sheetName = workbook.SheetNames[0];

//         const sheet = workbook.Sheets[sheetName];

//         // Convert Excel to raw array
//         const rawData: any[] = XLSX.utils.sheet_to_json(sheet, { header: 1 });

//         console.log("Total Rows in Excel:", rawData.length);

//         // Get first row (header)
//         const firstRow = rawData[0];

//         console.log("Excel Headers:", firstRow);

//         // Expected headers
//         const expectedHeaders = [
//             'LPG',
//             'Project Name',
//             'TSS ID',
//             'Salesforce ID',
//             'Project Status'
//         ];

//         // Validate only first 5 columns
//         expect(firstRow.slice(0, 5)).toEqual(expectedHeaders);
//     })
// })
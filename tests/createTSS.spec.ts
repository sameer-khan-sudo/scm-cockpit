// import { test, expect, Page, BrowserContext } from "@playwright/test";
// import { BasePage } from "../pages/BasePage";
// import {ScmDashboardPage} from '../pages/ScmDashboardPage'
// import { CreateTSS } from "../pages/createTSSPage";
// import { customerRequirementsFormData, expectedSectionCardsData, expectedSectionsData, generalInformationFormData } from '../testData/tssSectionData';
// test.describe.serial("Create TSS Flow", () => {

//     let context: BrowserContext;
//     let page: Page;
//     let base: BasePage;
//     let scm: ScmDashboardPage;
//     let createTSS: CreateTSS;

//     test.beforeAll(async ({ browser }) => {

//         // ✅ Create context with saved session
//         context = await browser.newContext({
//             storageState: 'playwright/.auth/test-user.json'
//         });

//         // ✅ Open single tab
//         page = await context.newPage();

//         base = new BasePage(page);
//         scm = new ScmDashboardPage(page);
//         createTSS = new CreateTSS(page);

//         await page.goto('scmcockpit');
//     });

//     test.afterAll(async () => {
//         await context.close();   // ✅ Proper cleanup
//     });

//     test('TESTCASE 1 - Launch SCM Cockpit.', async () => {
//         await expect(page).toHaveURL(/scmcockpit/);
//     });

//     test('TESTCASE 2 - Click SCM Card.', async () => {
//         await base.click(scm.scmCockpitCard);
//     });

//     test('TESTCASE 3 - Click TSS Card.', async () => {
//         await base.click(createTSS.tssCard);
//     });

//     test('TESTCASE 4 - Click Create TSS.', async () => {
//         await base.click(createTSS.createTSSButton);
//         await expect(createTSS.saveAsDraftButton).toBeDisabled();
//         await expect(createTSS.publishButton).toBeDisabled();
//     });

//     test('TESTCASE 5 - Verify elements on the page.', async () => {

//         await base.verifyElements([
//             { locator: createTSS.createTSSLabel, expectedText: 'Create TSS' },
//             { locator: createTSS.draftChip, expectedText: 'Draft' },
//         ]);

//         const actualSections = await createTSS.extractSectionList(createTSS.sectionListLocator);
//         expect(actualSections).toEqual(expectedSectionsData);

//         const actualSectionCards = await createTSS.extractSectionList(createTSS.sectionListCards);
//         expect(actualSectionCards).toEqual(expectedSectionCardsData);
//     });


//     test('TESTCASE 6 (Negative) - Fill only Plant Type data.', async () => {

//         await base.click(createTSS.generalInformationButton);
//         await expect(createTSS.generalInformationLabel).toBeVisible()
//         await createTSS.validateMandatoryScenario({
//             plantType: "Hydro Plant"
//         });

//         await expect(createTSS.clientCustomerError).toBeVisible();
//         await expect(createTSS.plantTypeError).not.toBeVisible();
//     });

//     test('TESTCASE 7 - Fill General Information Form.', async () => {

//         await expect(createTSS.generalInformationLabel).toBeVisible();

//         await expect(page.locator('div').filter({ hasText: /^Plant Type\*$/ }).nth(1)).toBeVisible();
//         await expect(page.locator('div').filter({ hasText: /^Plant Location$/ }).nth(1)).toBeVisible();
//         await expect(page.locator('div').filter({ hasText: /^Salesforce ID$/ }).nth(1)).toBeVisible();
//         await expect(page.locator('div').filter({ hasText: /^Project Name$/ }).nth(1)).toBeVisible();

//         await expect(page.getByText('Client / Customer*')).toBeVisible();
//         await expect(page.getByText('Client / Customer CountryCountry of origin or delivery')).toBeVisible();
//         await expect(page.getByText('HE Local Unit CountryCountry')).toBeVisible();
//         await expect(page.getByText('Final Destination Country (Site)Final destination for the delivery of goods')).toBeVisible();
//         await expect(page.getByText('Final Destination City (Site)Final destination for the delivery of goods')).toBeVisible();

//         await createTSS.fillGeneralInformationForm(generalInformationFormData);
//         await expect(createTSS.publishButton).toBeEnabled()
//     });

//     test('TESTCASE 7 - Fill Customer Requirements Form.', async () => {
//         await base.click(createTSS.customerRequirementCardButton);
//         await createTSS.fillCustomerRequirementsForm(customerRequirementsFormData);
//     });

//     test('TESTCASE : 9 - Click on Save as Draft button', async () => {
//         await base.click(createTSS.draftButton)
//         await createTSS.verifySuccessToast()
//         await page.waitForTimeout(4000)
//     })

//     test('TESTCASE : 10 - Verify created TSS showing on grid view.', async () => {
//         console.log(generalInformationFormData.projectName)
//         await expect(
//             page.getByText(generalInformationFormData.projectName, { exact: true }).first()
//         ).toBeVisible();
//     })
// })


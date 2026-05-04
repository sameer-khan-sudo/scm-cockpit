import { test, expect, Page, BrowserContext } from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import { ScmDashboardPage } from "../pages/ScmDashboardPage";
import { ItemDetailsPage } from "../pages/ItemDetails.page";
import { DPPLP } from "../pages/dpplp.Page";
import { dpplpData } from "../testData/dpplpData";
import { iteamDetailtooltipMessage, itemDetailData, poNumberSubitemsTooltipMessage, rfrfqSubitemsTooltipMessage } from "../testData/itemsDetailsData";

test.describe.serial("Validate tooltips for Item Details, RFQ-ID, PO items..", () => {

  let context: BrowserContext;
  let page: Page;
  let base: BasePage;
  let scm: ScmDashboardPage;
  let itemDetail: ItemDetailsPage;
  let dpplpPage: DPPLP;

  test.beforeAll(async ({ browser }) => {

    context = await browser.newContext({
      storageState: "playwright/.auth/test-user.json"
    });

    page = await context.newPage();
    base = new BasePage(page);
    scm = new ScmDashboardPage(page);
    itemDetail = new ItemDetailsPage(page);
    dpplpPage = new DPPLP(page);

    await page.goto('scm');
  });

  test.afterAll(async () => {
    await context.close();
  });

  test.skip("TESTCASE 1 - Launch SCM Cockpit.", async () => {

    await expect(page).toHaveURL(/scmcockpit/);

  });

  test("TESTCASE 2 - Select DPPLP card.", async () => {

    await base.click(scm.scmCockpitCard);
    await base.click(scm.dpplpCard);

    // await expect(
    //   page.locator("div").filter({ hasText: /^HomeDPPLP$/ })
    // ).toBeVisible();

    // await base.verifyElements([
    //   {
    //     locator: dpplpPage.procurementPortfolioViewHeader,
    //     expectedText: "Procurement Portfolio View"
    //   }
    // ]);
  });

  test("TESTCASE 3 - Select project.", async () => {

    await dpplpPage.selectProject(dpplpData.projectName);

    await expect(
      page.locator('[class="MuiBreadcrumbs-ol css-1uwp4ue-MuiBreadcrumbs-ol"]')
    ).toContainText(dpplpData.projectName);
    // await 
    // await page.pause()
  //     await expect(page.getByRole('navigation', { name: 'breadcrumb' })).toBeVisible();

  // await page.locator('span > svg > rect').first().click();
    await base.click(itemDetail.selectAllCheckbox)
    await base.click(itemDetail.crossButton)
    await page.waitForTimeout(1000)
  });

  test("TESTCASE 4 - Verify iteam detail section tooltip messages.", async () => {

    for (const [headerText, tooltipText] of Object.entries(iteamDetailtooltipMessage)) {

      if (!tooltipText) continue;
      await dpplpPage.verifyHoverTooltip(
        headerText,
        tooltipText as string
      );
    }
  });

  test("TESTCASE 5 - Verify RFRFQ section tooltip messages.", async () => {
    await page.getByText(`${itemDetailData.rfrfqID}`).click()

    const rfrfqHeaderTitle = page.locator('[class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom css-1ul1f83-MuiTypography-root"]');

    const expectedHeader = `${dpplpData.projectName} RFRFQ-${itemDetailData.rfrfqID}`;
    await expect(rfrfqHeaderTitle).toHaveText(expectedHeader)
    console.log("RFRFQ-ID Header :", expectedHeader);

    for (const [headerText, tooltipText] of Object.entries(rfrfqSubitemsTooltipMessage)) {
      if (!tooltipText) continue;
      await dpplpPage.verifyHoverTooltip(
        headerText,
        tooltipText as string
      )
    }
    await base.click(itemDetail.sidepanelCrossButton)
  });

  test("TESTCASE 6 - Verify po Number section tooltip messages.", async () => {
    await page.getByText(`${itemDetailData.poNumber}`).click()

    const poNumberHeaderTitle = page.locator('[class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom css-1ul1f83-MuiTypography-root"]');

    const expectedHeader = `${dpplpData.projectName} PO-${itemDetailData.poNumber}`;
    await expect(poNumberHeaderTitle).toHaveText(expectedHeader)
    console.log("Po Number Header :", expectedHeader);

    for (const [headerText, tooltipText] of Object.entries(poNumberSubitemsTooltipMessage)) {
      if (!tooltipText) continue;
      await dpplpPage.verifyHoverTooltip(
        headerText,
        tooltipText as string
      )
    }
    await base.click(itemDetail.sidepanelCrossButton)
  });
});
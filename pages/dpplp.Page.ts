import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DPPLP extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    // Header Locator
    get procurementPortfolioViewHeader(): Locator {
        return this.page.getByRole('heading', {
            name: 'Procurement Portfolio View'
        });
    }

    // Dynamic Project Name Locator
    projectName(projectName: string): Locator {
        return this.page.getByRole('link', {
            name: projectName
        });
    }

    async selectProject(projectName: string): Promise<void> {
        await this.projectName(projectName).click();
    }


//     async verifyHoverTooltip(headerText: string, expectedTooltip: string): Promise<void> {

//         const header = this.page.locator(`text=${headerText}`).first();

//         await header.waitFor({ state: "visible" });
//         await header.hover();

//         // Wait for any tooltip to appear
//         const tooltip = this.page.locator('[role="tooltip"]').last();

//         await tooltip.waitFor({ state: "visible", timeout: 5000 });

//         const actualTooltip = (await tooltip.innerText()).trim();

//         if (actualTooltip !== expectedTooltip.trim()) {
//             throw new Error(`
// ❌ Tooltip Mismatch for Header: "${headerText}"

// Expected: "${expectedTooltip}"
// Actual  : "${actualTooltip}"
//         `);
//         }

//         console.log(`✅ Tooltip matched for: ${headerText}`);
//     }

async verifyHoverTooltip(headerText: string, expectedTooltip: string): Promise<void> {

    const header = this.page.getByText(headerText, { exact: true });

    await header.waitFor({ state: "visible" });
    await header.hover();

    // Wait for at least one tooltip to appear
    await this.page.waitForSelector('[role="tooltip"]', { state: "visible" });

    // Pick ONLY visible tooltips
    const tooltips = this.page.locator('[role="tooltip"]:visible');

    // Take the latest visible one
    const tooltip = tooltips.nth(0);

    await expect(tooltip).toHaveText(expectedTooltip, { timeout: 5000 });

    console.log(`✅ Tooltip matched exactly for: ${headerText}`);
}
}
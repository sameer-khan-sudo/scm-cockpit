import { Locator, Page } from "@playwright/test";


/* ===========================
   PAGE OBJECT
=========================== */

export class ItemDetailsPage {

    constructor(private readonly page: Page) { }

    get hamburgerButton(): Locator {
        return this.page.locator('[class="MuiBox-root css-79elbk"]');
    }

    get selectAllCheckbox(): Locator {
        return this.page.getByText('Select All');
    }

    get crossButton(): Locator {
        return this.page.locator('[style="position: absolute; right: 20px; cursor: pointer;"]');
    }
    get sidepanelCrossButton(): Locator {
        return this.page.getByRole('button').nth(5);
    }

    
}
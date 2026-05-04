import { test, Page, expect, Locator } from "@playwright/test"

export class TSSList {
    constructor(private readonly page: Page) { }

    get downloadButton(): Locator {
        return this.page.getByRole('button', { name: 'download-grid-data' })
    }

    get favouritesTab(): Locator {
        return this.page.getByRole('button', { name: 'Favourites' })
    }
    get TSSTab(): Locator {
        return this.page.getByRole('button', { name: 'TSS', exact: true })
    }

    get tssCard(): Locator {
        return this.page.getByText('Tender Sourcing Strategy (TSS)');
    }


    async verifySuccessToast() {
        await this.page.waitForTimeout(1000)
        const isVisible = await this.page
            .getByText('TSS list downloaded successfully.')
            .isVisible();

        if (isVisible) {
            console.log('Message appeared : TSS list downloaded successfully.');
        } else {
            console.log('Message did NOT appear ❌');
        }
    }
}

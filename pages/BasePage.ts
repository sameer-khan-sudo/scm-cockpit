import { Page, Locator, expect } from '@playwright/test';

export interface TextValidationItem {
    locator: Locator;
    expected: string;
}

export class BasePage {

    constructor(protected page: Page) { }

    // Reusable click method
    async click(locator: Locator, elementName = 'Element'): Promise<void> {
        try {
            await locator.scrollIntoViewIfNeeded();
            await locator.click();
        } catch (error: any) {
            throw new Error(
                `Click failed on "${elementName}".\nOriginal error: ${error.message}`
            );
        }
    }

    // Reusable multiple elements verification
    async verifyElements(
        elements: { locator: Locator; expectedText?: string }[]
    ): Promise<void> {

        for (const element of elements) {
            await expect(element.locator).toBeVisible();

            if (element.expectedText !== undefined) {
                await expect(element.locator).toHaveText(element.expectedText);
            }
        }
    }
}
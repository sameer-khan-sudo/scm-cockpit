import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ScmDashboardPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    get scmCockpitCard() {
        return this.page.getByRole('heading', { name: 'Supply Chain Cockpit' });
    }
    get dpplpCard() {
        return this.page.getByRole('heading', { name: 'Digital PPP' });
    }

    get scmCockpitHeader() {
        return this.page.getByText("Supply Chain Cockpit")
    }
    get homeTitle() {
        return this.page.getByText("Home")
    }

    get portfolioViewLabel(){
        return this.page.getByText('Procurement Portfolio View')
    }


    get applyButton() {
        return this.page.getByRole('button', { name: 'Apply' });
    }

}
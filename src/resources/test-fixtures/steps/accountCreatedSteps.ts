import test, { Page } from '@playwright/test';
import { AccountCreatedPage } from '../../pages/accountCreatedPage';

export default class AccountCreatedSteps {
    readonly accountCreatedPage: AccountCreatedPage;

    constructor(page: Page) {
        this.accountCreatedPage = new AccountCreatedPage(page);
    }

    async verifyAccountCreatedHeaderIsVisible() {
        await test.step('Verify that "ACCOUNT CREATED!" is visible', async () => {
            await this.accountCreatedPage.isAccountCreatedHeaderVisible();
        });
    }

    async clickContinueButton() {
        await test.step('Click "Continue" button', async () => {
            await this.accountCreatedPage.clickContinue();
        });
    }   
}

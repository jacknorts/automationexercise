import test, { Page } from '@playwright/test';
import { AccountDeletedPage } from '../../pages/accountDeletedPage';

export default class AccountDeletedSteps {
    readonly accountDeletedPage: AccountDeletedPage;

    constructor(page: Page) {
        this.accountDeletedPage = new AccountDeletedPage(page);
    }

    async verifyAccountDeletedHeaderIsVisibleAndClickContinue() {
        await test.step('Verify that "ACCOUNT DELETED!" is visible and click "Continue" button', async () => {
            await this.accountDeletedPage.isAccountDeletedHeaderVisible();
            await this.accountDeletedPage.clickContinue();
        });
    } 
}

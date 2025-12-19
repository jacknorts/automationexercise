import { Page, Locator, expect } from '@playwright/test';

export class AccountDeletedPage {
    readonly page: Page;

    readonly accountDeletedHeader: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // Locators
        this.accountDeletedHeader = page.locator('b', { hasText: 'Account Deleted!' });
        this.continueButton = page.getByRole('link', { name: 'Continue' });
    }

    // Actions
    async clickContinue() {
        await this.continueButton.click();
    }

    // Verifications
    async isAccountDeletedHeaderVisible(): Promise<boolean> {
        return await this.accountDeletedHeader.isVisible();
    }
}

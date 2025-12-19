import { Page, Locator, expect } from '@playwright/test';

export class AccountCreatedPage {
    readonly page: Page;

    readonly accountCreatedHeader: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // Locators
        this.accountCreatedHeader = page.locator('b', { hasText: 'Account Created!' });
        this.continueButton = page.getByRole('link', { name: 'Continue' });
    }

    // Actions
    async clickContinue() {
        await this.continueButton.click();
    }

    // Verifications
    async isAccountCreatedHeaderVisible(): Promise<boolean> {
        return await this.accountCreatedHeader.isVisible();
    }
}

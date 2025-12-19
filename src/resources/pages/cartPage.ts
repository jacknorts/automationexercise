import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    readonly headerNav: Locator;
    readonly cartButton: Locator;
    readonly proceedToCheckout: Locator;

    constructor(page: Page) {
        this.page = page;

        // Locators
        this.headerNav = page.locator('ul.nav.navbar-nav');
        this.cartButton = page.getByRole('link', { name: 'Cart' });
        this.proceedToCheckout = page.locator('a.check_out', { hasText: 'Proceed To Checkout' });


    }

    // Actions
    async clickProceedToCheckout() {
        await this.proceedToCheckout.click();
    }

    // Verifications
    async isHeaderVisible(): Promise<boolean> {
        return await this.headerNav.isVisible();
    }

    async isHomePageVisible(): Promise<boolean> {
        try {
            await expect(this.cartButton).toHaveCSS('color', 'rgb(255, 165, 0)');
            return true;
        } catch {
            return false;
        }
    }
}

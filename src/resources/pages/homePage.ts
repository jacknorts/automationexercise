import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    readonly homeButton: Locator;
    readonly signUpLoginButton: Locator;
    readonly consentButton: Locator;
    readonly headerNav: Locator;
    readonly loggedInButton: Locator;
    readonly deleteAccountButton: Locator;

    readonly firstAddToCartButton: Locator;
    readonly viewCartLink: Locator;

    constructor(page: Page) {
        this.page = page;

        // Locators
        this.headerNav = page.locator('ul.nav.navbar-nav');
        this.homeButton = page.getByRole('link', { name: 'Home' });
        this.signUpLoginButton = page.getByRole('link', { name: 'Login' });
        this.consentButton = page.locator('p.fc-button-label', { hasText: 'Consent' });
        this.loggedInButton = page.locator('a:has-text("Logged in as")');
        this.deleteAccountButton = page.getByRole('link', { name: 'Delete Account' });

        this.firstAddToCartButton = page.locator('a.add-to-cart').first();
        this.viewCartLink = page.locator('text=View Cart');

    }

    // Navigation
    async goto() {
        await this.page.goto('https://automationexercise.com');
    }

    // Actions
    async clickConsent() {
        await this.consentButton.click();
    }

    async clickSignupLogin() {
        await this.signUpLoginButton.click();
    }

    async clickDeleteAccount() {
        await this.deleteAccountButton.click();
    }

    async clickFirstProductAddToCart() {
        await this.firstAddToCartButton.click();
    }

    async clickViewCart() {
        await this.viewCartLink.click();
    }

    // Verifications
    async isHeaderVisible(): Promise<boolean> {
        return await this.headerNav.isVisible();
    }

    async isHomePageVisible(): Promise<boolean> {
        try {
            await expect(this.homeButton).toHaveCSS('color', 'rgb(255, 165, 0)');
            return true;
        } catch {
            return false;
        }
    }

    async isUserLoggedIn(expectedUsername: string): Promise<boolean> {
        const usernameLocator = this.loggedInButton.locator('b');
        const username = (await usernameLocator.textContent())?.trim() || '';
        return username === expectedUsername;
    }
}

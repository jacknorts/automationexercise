import { Page, Locator, expect } from '@playwright/test';

export class PaymentPage {
    readonly page: Page;

    readonly nameOnCardInput: Locator;
    readonly cardNumberInput: Locator;
    readonly cvcInput: Locator;
    readonly expiryMonthInput: Locator;
    readonly expiryYearInput: Locator;
    readonly payAndConfirmOrderButton: Locator;
    readonly orderConfirmationMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        //Locators
        this.nameOnCardInput = page.locator('input[data-qa="name-on-card"]');
        this.cardNumberInput = page.locator('input[data-qa="card-number"]');
        this.cvcInput = page.locator('input[data-qa="cvc"]');
        this.expiryMonthInput = page.locator('input[data-qa="expiry-month"]');
        this.expiryYearInput = page.locator('input[data-qa="expiry-year"]');
        this.payAndConfirmOrderButton = page.getByRole('button', { name: 'Pay and Confirm Order' });
        this.orderConfirmationMessage = page.locator('p', { hasText: 'Congratulations! Your order has been confirmed!' });

    }
    
    // Actions
    async enterNameOnCard(name: string) {
        await this.nameOnCardInput.fill(name);
    }

    async enterCardNumber(cardNumber: string) {
        await this.cardNumberInput.fill(cardNumber);
    }

    async enterCVC(cvc: string) {
        await this.cvcInput.fill(cvc);
    }

    async enterExpiryMonth(month: string) {
        await this.expiryMonthInput.fill(month);
    }

    async enterExpiryYear(year: string) {
        await this.expiryYearInput.fill(year);
    }

    async clickPayAndConfirmOrder() {
        await this.payAndConfirmOrderButton.click();
    }

    // Verifications
    async isOrderConfirmationMessageVisible() {
        await expect(this.orderConfirmationMessage).toBeVisible();
    }
}
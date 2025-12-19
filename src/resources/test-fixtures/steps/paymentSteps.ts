import test, { Page } from "@playwright/test";
import { PaymentPage } from "../../pages/paymentPage";
import common from '../../test-data/common.json';

export default class PaymentSteps {
    readonly paymentPage: PaymentPage;

    constructor(page: Page) {
        this.paymentPage = new PaymentPage(page);
    }

    async enterPaymentDetails() {
        await test.step('Enter payment details: Name on Card, Card Number, CVC, Expiration date', async () => {
            await this.paymentPage.enterNameOnCard(common.checkoutData.paymentData.nameOnCard);
            await this.paymentPage.enterCardNumber(common.checkoutData.paymentData.cardNumber);
            await this.paymentPage.enterCVC(common.checkoutData.paymentData.cvc);
            await this.paymentPage.enterExpiryMonth(common.checkoutData.paymentData.expiryMonth);
            await this.paymentPage.enterExpiryYear(common.checkoutData.paymentData.expiryYear);
        });
    }

    async clickPayAndConfirmOrder() {
        await test.step('Click "Pay and Confirm Order" button', async () => {
            await this.paymentPage.clickPayAndConfirmOrder();
        });
    }

    async verifyOrderSuccessfullyPlaced() {
        await test.step('Verify success message "Your order has been placed successfully!"', async () => {
            await this.paymentPage.isOrderConfirmationMessageVisible();
        });
    }
}
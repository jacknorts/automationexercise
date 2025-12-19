import test, { Page } from '@playwright/test';
import common from '../../test-data/common.json';
import { CheckoutPage } from '../../pages/checkoutPage';

export default class CheckoutSteps {
    readonly checkoutPage: CheckoutPage;

    constructor(page: Page) {
        this.checkoutPage = new CheckoutPage(page);
    }

    async verifyDeliveryAndBillingAddresses() {
        await test.step('Verify Address Details and Review Your Order', async () => {
            await this.checkoutPage.verifyDeliveryAndBillingAddresses(common.signupData);
        });
    }

    async enterCommentMessageAndClickPlaceOrder() {
        await test.step('Enter description in comment text area and click "Place Order"', async () => {
            await this.checkoutPage.enterMessage(common.checkoutData.commentInput);
            await this.checkoutPage.clickPlaceOrder();
        });
    }
}
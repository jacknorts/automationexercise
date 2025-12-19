import { CartPage } from "../../pages/cartPage";
import test, { Page } from '@playwright/test';
import common from '../../test-data/common.json';

export default class CartSteps {
    readonly cartPage: CartPage;

    constructor(page: Page) {
        this.cartPage = new CartPage(page);
    }

    async verifyCartPageIsVisible() {
        await test.step('Verify that cart page is displayed', async () => {
            await this.cartPage.isHomePageVisible();
        });
    }

    async clickProceedToCheckout() {
        await test.step('Click Proceed To Checkout', async () => {
            await this.cartPage.clickProceedToCheckout();
        });
    }
}
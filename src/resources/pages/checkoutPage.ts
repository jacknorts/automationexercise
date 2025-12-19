import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;

    readonly deliveryContainer: Locator;
    readonly deliveryFullName: Locator;
    readonly deliveryCompany: Locator;
    readonly deliveryAddress1: Locator;
    readonly deliveryAddress2: Locator;
    readonly deliveryCityStateZip: Locator;
    readonly deliveryCountry: Locator;
    readonly deliveryMobileNumber: Locator;

    readonly billingContainer: Locator;
    readonly billingFullName: Locator;
    readonly billingCompany: Locator;
    readonly billingAddress1: Locator;
    readonly billingAddress2: Locator;
    readonly billingCityStateZip: Locator;
    readonly billingCountry: Locator;
    readonly billingMobileNumber: Locator;

    readonly messageInput: Locator;
    readonly placeOrderButton: Locator;

    constructor(page: Page) {
        this.page = page;

        //Locators
        this.deliveryContainer = page.locator('#address_delivery'); // delivery address fields
        this.deliveryFullName = this.deliveryContainer.locator('li').nth(1);
        this.deliveryCompany = this.deliveryContainer.locator('li').nth(2);
        this.deliveryAddress1 = this.deliveryContainer.locator('li').nth(3);
        this.deliveryAddress2= this.deliveryContainer.locator('li').nth(4);
        this.deliveryCityStateZip = this.deliveryContainer.locator('li').nth(5);
        this.deliveryCountry = this.deliveryContainer.locator('li').nth(6);
        this.deliveryMobileNumber = this.deliveryContainer.locator('li').nth(7);

        this.billingContainer = page.locator('#address_invoice'); // billing address fields
        this.billingFullName = this.billingContainer.locator('li').nth(1);
        this.billingCompany = this.billingContainer.locator('li').nth(2);
        this.billingAddress1 = this.billingContainer.locator('li').nth(3);
        this.billingAddress2= this.billingContainer.locator('li').nth(4);
        this.billingCityStateZip = this.billingContainer.locator('li').nth(5);
        this.billingCountry = this.billingContainer.locator('li').nth(6);
        this.billingMobileNumber = this.billingContainer.locator('li').nth(7);

        this.messageInput = page.locator('textarea[name="message"]');
        this.placeOrderButton = page.getByRole('link', { name: 'Place Order' });
    }
    
    // Actions
    async enterMessage(message: string) {
        await this.messageInput.fill(message);
    }

    async clickPlaceOrder() {
        await this.placeOrderButton.click();
    }

    // Verifications
    async verifyDeliveryAndBillingAddresses(commonData: any) { // Soft assertions to continue checking all fields even if one fails
        await expect.soft(this.deliveryFullName).toHaveText(`${commonData.title}. ${commonData.firstName} ${commonData.lastName}`);
        await expect.soft(this.deliveryCompany).toHaveText(commonData.company);
        await expect.soft(this.deliveryAddress1).toHaveText(commonData.address);
        await expect.soft(this.deliveryAddress2).toHaveText(commonData.address2);
        await expect.soft(this.deliveryCityStateZip).toHaveText(`${commonData.city} ${commonData.state} ${commonData.zipcode}`);
        await expect.soft(this.deliveryCountry).toHaveText(commonData.country);
        await expect.soft(this.deliveryMobileNumber).toHaveText(commonData.mobileNumber);
        await expect.soft(this.billingFullName).toHaveText(`${commonData.title}. ${commonData.firstName} ${commonData.lastName}`);
        await expect.soft(this.billingCompany).toHaveText(commonData.company);
        await expect.soft(this.billingAddress1).toHaveText(commonData.address);
        await expect.soft(this.billingAddress2).toHaveText(commonData.address2);
        await expect.soft(this.billingCityStateZip).toHaveText(`${commonData.city} ${commonData.state} ${commonData.zipcode}`);
        await expect.soft(this.billingCountry).toHaveText(commonData.country);
        await expect.soft(this.billingMobileNumber).toHaveText(commonData.mobileNumber);
    }
}
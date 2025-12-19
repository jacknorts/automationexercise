import { HomePage } from "../../pages/homePage";
import test, { Page } from '@playwright/test';
import common from '../../test-data/common.json';

export default class HomeSteps {
    readonly homePage: HomePage;

    constructor(page: Page) {
        this.homePage = new HomePage(page);
    }

    async openHomePageAndConsent() {
        await test.step('Launch "http://automationexercise.com" and click consent button', async () => {
            await this.homePage.goto();
            await this.homePage.clickConsent();
        });
    } 

    async openHomePage() {
        await test.step('Launch "http://automationexercise.com"', async () => {
            await this.homePage.goto();
        });
    } 

    async clickConsentButton() {
        await test.step('Click on consent button', async () => {
            await this.homePage.clickConsent();
        });
    }

    async verifyHomePageIsVisible() {
        await test.step('Verify that home page is visible successfully', async () => {
            await this.homePage.isHomePageVisible();
        });
    }

    async clickSignupLogin() {
        await test.step('Click on "Signup / Login" button', async () => {
            await this.homePage.clickSignupLogin();
        });
    } 

    async verifyUserIsLoggedIn() {
        await test.step('Verify that "Logged in as username" is visible', async () => {
            await this.homePage.isUserLoggedIn(common.signupData.name);
        });
    }

    async clickDeleteAccount() {
        await test.step('Click "Delete Account" button', async () => {
            await this.homePage.clickDeleteAccount();
        });
    }

    async clickFirstProductAddToCart() {
        await test.step('Add products to cart', async () => {
            await this.homePage.clickFirstProductAddToCart();
        });
    }

    async clickViewCart() {
        await test.step('Click "Cart" button', async () => {
            await this.homePage.clickViewCart();
        });
    }
}

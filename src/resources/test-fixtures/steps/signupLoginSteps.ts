import test, { Page } from '@playwright/test';
import { SignupLoginPage } from "../../pages/signupLoginPage";
import common from '../../test-data/common.json';

export default class SignupLoginSteps {
    readonly signupLoginPage: SignupLoginPage;

    constructor(page: Page) {
        this.signupLoginPage = new SignupLoginPage(page);
    }

    async verifySignupHeaderIsVisible() {
        await test.step('Verify New User "Signup!" is visible', async () => {
            await this.signupLoginPage.isSignupHeaderVisible();
        });
    }

    async enterSignupNameAndEmail() {
        await test.step('Enter name and email address', async () => {
            await this.signupLoginPage.fillName(common.signupData.name);
            await this.signupLoginPage.fillEmail(common.signupData.email);
        });
    } 

    async clickSignupButton() {
        await test.step('Click "Signup" button', async () => {
            await this.signupLoginPage.clickSignupButton();
        });
    }

    async verifyEnterAccountInfoHeaderIsVisible() {
        await test.step('Verify that "ENTER ACCOUNT INFORMATION is visible"', async () => {
            await this.signupLoginPage.isEnterAccountInfoHeaderVisible();
        });
    }

    async fillPersonalDetails() {
        await test.step('Fill details: Title, Name, Email, Password, Date of birth', async () => {
            await this.signupLoginPage.selectMrTitle();
            await this.signupLoginPage.fillPassword(common.signupData.password);
            await this.signupLoginPage.selectDay(common.signupData.dob.day);
            await this.signupLoginPage.selectMonth(common.signupData.dob.month);
            await this.signupLoginPage.selectYear(common.signupData.dob.year);
        });
    }

    async checkNewsletterBox() {
        await test.step('Select checkbox "Sign up for our newsletter!"', async () => {
            await this.signupLoginPage.checkNewsletter();
        });
    }

    async checkSpecialOffersBox() {
        await test.step('Select checkbox "Receive special offers from our partners!"', async () => {
            await this.signupLoginPage.checkSpecialOffers();
        });
    }

    async fillAddressDetails() {
        await test.step('Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number', async () => {
            await this.signupLoginPage.fillFirstName(common.signupData.firstName);
            await this.signupLoginPage.fillLastName(common.signupData.lastName);
            await this.signupLoginPage.fillCompany(common.signupData.company);
            await this.signupLoginPage.fillAddress(common.signupData.address);
            await this.signupLoginPage.fillAddress2(common.signupData.address2);
            await this.signupLoginPage.selectCountry(common.signupData.country);
            await this.signupLoginPage.fillState(common.signupData.state);
            await this.signupLoginPage.fillCity(common.signupData.city);
            await this.signupLoginPage.fillZipcode(common.signupData.zipcode);
            await this.signupLoginPage.fillMobileNumber(common.signupData.mobileNumber);
        });
    }

    async clickCreateAccountButton() {
        await test.step('Click "Create Account" button', async () => {
            await this.signupLoginPage.clickCreateAccountButton();
        });
    }

    async verifyLoginHeaderIsVisible() {
        await test.step('Verify "Login to your account" is visible', async () => {
            await this.signupLoginPage.isLoginHeaderVisible();
        });
    }

    async fillLoginEmailAndPassword() {
        await test.step('Enter correct email address and password', async () => {
            await this.signupLoginPage.fillLoginEmail(common.signupData.email);
            await this.signupLoginPage.fillLoginPassword(common.signupData.password);
        });
    }

    async clickLoginButton() {
        await test.step('Click "Login" button', async () => {
            await this.signupLoginPage.clickLoginButton();
        });
    }

    async fillIncorrectLoginEmailAndPassword() {
        await test.step('Enter incorrect email address and password', async () => {
            await this.signupLoginPage.fillLoginEmail(common.invalidLoginData.email);
            await this.signupLoginPage.fillLoginPassword(common.invalidLoginData.password);
        });
    }

    async verifyIncorrectEmailPasswordErrorIsVisible() {
        await test.step('Verify error "Your email or password is incorrect!" is visible', async () => {
            await this.signupLoginPage.isLoginErrorMessageVisible();
        });
    }

    async fillLoginEmailAndPasswordAndClickLogin() {
        await test.step('Fill email, password and click "Login" button', async () => {
            await this.signupLoginPage.fillLoginEmail(common.signupData.email);
            await this.signupLoginPage.fillLoginPassword(common.signupData.password);
            await this.signupLoginPage.clickLoginButton();
        });
    }
}

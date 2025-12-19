import { Page, Locator, expect } from '@playwright/test';

export class SignupLoginPage {
    readonly page: Page;

    readonly signupHeader: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly signupButton: Locator;
    readonly enterAccountInfoHeader: Locator;
    readonly mrTitleButton: Locator;
    readonly passwordInput: Locator;
    readonly dayDOBDropdown: Locator;
    readonly monthsDOBDropdown: Locator;
    readonly yearDOBDropdown: Locator;
    readonly newsletterCheckbox: Locator;
    readonly specialOffersCheckbox: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly addressInput: Locator;
    readonly address2Input: Locator;
    readonly countryDropdown: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly createAccountButton: Locator;

    readonly loginHeader: Locator;
    readonly emailLoginInput: Locator;
    readonly passwordLoginInput: Locator;
    readonly loginButton: Locator;

    readonly loginErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        // Locators
        this.signupHeader = page.getByRole('heading', { name: 'New User Signup!' });
        this.nameInput = page.locator('input[data-qa="signup-name"]');
        this.emailInput = page.locator('input[data-qa="signup-email"]');
        this.signupButton = page.getByRole('button', { name: 'Signup' });
        this.enterAccountInfoHeader = page.locator('text=Enter Account Information');
        this.mrTitleButton = page.getByRole('radio', { name: 'Mr.' });
        this.passwordInput = page.locator('input[data-qa="password"]');
        this.dayDOBDropdown = page.locator('select[data-qa="days"]');
        this.monthsDOBDropdown = page.locator('select[data-qa="months"]');
        this.yearDOBDropdown = page.locator('select[data-qa="years"]');
        this.newsletterCheckbox = page.locator('#newsletter');
        this.specialOffersCheckbox = page.locator('#optin');
        this.firstNameInput = page.locator('input[data-qa="first_name"]');
        this.lastNameInput = page.locator('input[data-qa="last_name"]');
        this.companyInput = page.locator('input[data-qa="company"]');
        this.addressInput = page.locator('input[data-qa="address"]');
        this.address2Input = page.locator('input[data-qa="address2"]');
        this.countryDropdown = page.locator('select[data-qa="country"]');
        this.stateInput = page.locator('input[data-qa="state"]');
        this.cityInput = page.locator('input[data-qa="city"]');
        this.zipcodeInput = page.locator('input[data-qa="zipcode"]');
        this.mobileNumberInput = page.locator('input[data-qa="mobile_number"]');
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });

        this.loginHeader = page.getByRole('heading', { name: 'Login to your account' });
        this.emailLoginInput = page.locator('input[data-qa="login-email"]');
        this.passwordLoginInput = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.getByRole('button', { name: 'Login' });

        this.loginErrorMessage = page.locator('p', {hasText: 'Your email or password is incorrect!'});
    }

    // Actions
    async fillName(name: string) {
        await this.nameInput.fill(name);
    }

    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async clickSignupButton() {
        await this.signupButton.click();
    }

    async selectMrTitle() {
        await this.mrTitleButton.check();
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async selectDay(day: string) {
        await this.dayDOBDropdown.selectOption(day);
    }

    async selectMonth(month: string) {
        await this.monthsDOBDropdown.selectOption(month);
    }

    async selectYear(year: string) {
        await this.yearDOBDropdown.selectOption(year);
    }

    async checkNewsletter() {
        await this.newsletterCheckbox.check();
    }

    async checkSpecialOffers() {
        await this.specialOffersCheckbox.check();
    }

    async fillFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
    }

    async fillLastName(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }

    async fillCompany(company: string) {
        await this.companyInput.fill(company);
    }

    async fillAddress(address: string) {
        await this.addressInput.fill(address);
    }

    async fillAddress2(address2: string) {
        await this.address2Input.fill(address2);
    }

    async selectCountry(country: string) {
        await this.countryDropdown.selectOption(country);
    }

    async fillState(state: string) {
        await this.stateInput.fill(state);
    }

    async fillCity(city: string) {
        await this.cityInput.fill(city);
    }

    async fillZipcode(zipcode: string) {
        await this.zipcodeInput.fill(zipcode);
    }

    async fillMobileNumber(mobileNumber: string) {
        await this.mobileNumberInput.fill(mobileNumber);
    }

    async clickCreateAccountButton() {
        await this.createAccountButton.click();
    }

    async fillLoginEmail(email: string) {
        await this.emailLoginInput.fill(email);
    }

    async fillLoginPassword(password: string) {
        await this.passwordLoginInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    // Verifications
    async isSignupHeaderVisible(): Promise<boolean> {
        return await this.signupHeader.isVisible();
    }

    async isEnterAccountInfoHeaderVisible(): Promise<boolean> {
        return await this.enterAccountInfoHeader.isVisible();
    }

    async isLoginHeaderVisible(): Promise<boolean> {
        return await this.loginHeader.isVisible();
    }

    async isLoginErrorMessageVisible(): Promise<boolean> {
        return await this.loginErrorMessage.isVisible();
    }
}

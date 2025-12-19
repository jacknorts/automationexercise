import { test, expect } from '@playwright/test';
import HomeSteps from '../../resources/test-fixtures/steps/homeSteps';
import SignupLoginSteps from '../../resources/test-fixtures/steps/signupLoginSteps';
import AccountCreatedSteps from '../../resources/test-fixtures/steps/accountCreatedSteps';
import AccountDeletedSteps from '../../resources/test-fixtures/steps/accountDeletedSteps';
import UserAPISteps from '../../resources/test-fixtures/apiSteps/userAPISteps';
import CartSteps from '../../resources/test-fixtures/steps/cartSteps';
import CheckoutSteps from '../../resources/test-fixtures/steps/checkoutSteps';
import PaymentSteps from '../../resources/test-fixtures/steps/paymentSteps';

test.beforeAll(async ({ request }) => { // Clean up: Delete user if already exists via API (in case a test case files midway through)
    const userAPISteps = new UserAPISteps(request);
    await userAPISteps.deleteUserIfAlreadyExists();
});

test('Test Case 1: Register User', async ({ page }) => {
    const homeSteps = new HomeSteps(page);
    const signupLoginSteps = new SignupLoginSteps(page);
    const accountCreatedSteps = new AccountCreatedSteps(page);
    const accountDeletedSteps = new AccountDeletedSteps(page);

    await homeSteps.openHomePage();
    await homeSteps.clickConsentButton();
    await homeSteps.verifyHomePageIsVisible();
    await homeSteps.clickSignupLogin();
    await signupLoginSteps.verifySignupHeaderIsVisible(); //5
    await signupLoginSteps.enterSignupNameAndEmail();
    await signupLoginSteps.clickSignupButton();
    await signupLoginSteps.verifyEnterAccountInfoHeaderIsVisible();
    await signupLoginSteps.fillPersonalDetails();
    await signupLoginSteps.checkNewsletterBox(); //10
    await signupLoginSteps.checkSpecialOffersBox();
    await signupLoginSteps.fillAddressDetails();
    await signupLoginSteps.clickCreateAccountButton();
    await accountCreatedSteps.verifyAccountCreatedHeaderIsVisible();
    await accountCreatedSteps.clickContinueButton(); //15
    await homeSteps.verifyUserIsLoggedIn();
    await homeSteps.clickDeleteAccount();
    await accountDeletedSteps.verifyAccountDeletedHeaderIsVisibleAndClickContinue();
});

test('Test Case 2: Login User with correct email and password', async ({ request, page }) => {
    const userAPISteps = new UserAPISteps(request);
    const homeSteps = new HomeSteps(page);
    const signupLoginSteps = new SignupLoginSteps(page);
    const accountDeletedSteps = new AccountDeletedSteps(page);

    await userAPISteps.createUser();
    await homeSteps.openHomePageAndConsent();
    await homeSteps.verifyHomePageIsVisible();
    await homeSteps.clickSignupLogin();
    await signupLoginSteps.verifyLoginHeaderIsVisible(); //5
    await signupLoginSteps.fillLoginEmailAndPassword();
    await signupLoginSteps.clickLoginButton();
    await homeSteps.verifyUserIsLoggedIn();
    await homeSteps.clickDeleteAccount();
    await accountDeletedSteps.verifyAccountDeletedHeaderIsVisibleAndClickContinue(); //10
});

test('Test Case 3: Login User with incorrect email and password', async ({ page }) => {
    const homeSteps = new HomeSteps(page);
    const signupLoginSteps = new SignupLoginSteps(page);

    await homeSteps.openHomePage();
    await homeSteps.clickConsentButton();
    await homeSteps.verifyHomePageIsVisible();
    await homeSteps.clickSignupLogin();
    await signupLoginSteps.verifyLoginHeaderIsVisible(); //5
    await signupLoginSteps.fillIncorrectLoginEmailAndPassword();
    await signupLoginSteps.clickLoginButton();
    await signupLoginSteps.verifyIncorrectEmailPasswordErrorIsVisible();
});

test('Test Case 16: Place Order: Login before Checkout', async ({ request, page }) => {
    const userAPISteps = new UserAPISteps(request);
    const homeSteps = new HomeSteps(page);
    const signupLoginSteps = new SignupLoginSteps(page);
    const accountDeletedSteps = new AccountDeletedSteps(page);
    const cartSteps = new CartSteps(page);
    const checkoutSteps = new CheckoutSteps(page);
    const paymentSteps = new PaymentSteps(page);
    
    await userAPISteps.createUser();
    await homeSteps.openHomePageAndConsent();
    await homeSteps.verifyHomePageIsVisible();
    await homeSteps.clickSignupLogin();
    await signupLoginSteps.verifyLoginHeaderIsVisible(); //5
    await signupLoginSteps.fillLoginEmailAndPasswordAndClickLogin();
    await homeSteps.clickFirstProductAddToCart();
    await homeSteps.clickViewCart();
    await cartSteps.verifyCartPageIsVisible();
    await cartSteps.clickProceedToCheckout(); //10
    await checkoutSteps.verifyDeliveryAndBillingAddresses();
    await checkoutSteps.enterCommentMessageAndClickPlaceOrder();
    await paymentSteps.enterPaymentDetails();
    await paymentSteps.clickPayAndConfirmOrder();
    await paymentSteps.verifyOrderSuccessfullyPlaced(); //15
    await homeSteps.clickDeleteAccount();
    await accountDeletedSteps.verifyAccountDeletedHeaderIsVisibleAndClickContinue();
});
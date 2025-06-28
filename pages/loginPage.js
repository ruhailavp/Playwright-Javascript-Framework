import { BasePage } from './basePage';
import { WelcomePage } from './welcomePage';
import { SignupPage } from './signupPage';
import selector from '../locators/loginPage.json';


/** * Represents the Login Page of the application.
 * This class provides methods to interact with the login page
 * such as entering email and password, clicking the sign-in button,
 * and navigating to the signup page.
 * * @extends BasePage
 * * @example
 * const loginPage = new LoginPage(page);
 * loginPage.navigateToLoginPage();
 * loginPage.enterEmail('standard_user');
 * loginPage.enterPassword('secret_sauce');
 * const welcomePage = await loginPage.clickOnSigninButton();
 */
export class LoginPage extends BasePage {

    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */

    constructor(page) {
        super(page);
        this.emailField = "[name='email1']";
        this.passwordField = "[name='password1']";
        this.signinButton = "[type='submit']";
    }

    async navigateToLoginPage() {
        await this.page.goto('/login');
    }

    async enterEmail(email) {
        await this.fillText(this.emailField, email);
    }

    async enterPassword(password) {
        await this.fillText(this.passwordField, password);
    }

    async clickOnSigninButton() {
        await this.clickOnElement(this.signinButton);
        return new WelcomePage(this.page);
    }

    async getNewUserLink() {
        const newUserLink = await this.getElement(`${selector.newUserLink}`);
        return newUserLink;
    }

    async clickOnNewUserLink() {
        await this.clickOnElement(`${selector.newUserLink}`);
        return new SignupPage(this.page);
    }


    async getSignupSuccessMessage() {
        const message = await this.getElementText(`${selector.successMessage}`);
        return message;
    }
}
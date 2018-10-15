const Page = require('./Page');
const Dashboard = require('./Dashboard');
let CommonActions = require('../utils/CommonActions.js');
const CookieManager = require('../cookies/CookieManager');
const SignOut = require('./SignOut');

/**
 * this class contains methods of SignIn.
 */
class SignIn extends Page {
    constructor() {
        super();
        this.userNameTextField = '#credentials_username';
        this.nextButton = '.app_signin_action_button';
        this.passwordTextField = '#credentials_password';
        this.signInButton = '.app_signin_action_button';
    }
  
    open() {
        super.open('/signin');
    }

    setUserNameTextField(username) {
        CommonActions.waitAndSetValue(this.userNameTextField,username);
    }
  
    clickNextButton() {
        CommonActions.waitAndClick(this.nextButton);
    }

    setPasswordPassField(password) {
        CommonActions.waitAndSetValue(this.passwordTextField,password);
    }

    /**
     * method which do the sign in.
     * @returns {Dashboard} return the dashboard page
     */
    clickSignInButton() {
        CommonActions.waitAndClick(this.signInButton);
        return new Dashboard();
    }

    /**
     * Smart method for login
     * @param userName to login with
     * @param password to login with
     */
    static loginAs(userName, password) {
        let signIn = new SignIn();
        signIn.open();
        signIn.setUserNameTextField(userName);
        signIn.clickNextButton();
        signIn.setPasswordPassField(password);
        return signIn.clickSignInButton();
    }

    /**
         * Smart method for login
         * @param userName to login with
         * @param password to login with
         */
    static newCredentials (userName, password){
        var currentUserSession = CookieManager.getUserCookie();
        //Check if user username is logged already.
        if (typeof userName !== currentUserSession){
            console.log('User logged was:'+' '+currentUserSession);
            CookieManager.deleteUserCookie(currentUserSession);
        }

        /*let signIn = new SignIn();
        signIn.open();
        signIn.setUserNameTextField(userName);
        signIn.clickNextButton();
        signIn.setPasswordPassField(password);*/
        //CookieManager.setUserCookie(userName, password);

        //console.log('User logged is:'+' '+CookieManager.getUserCookie());
        
        return this.loginAs(userName, password);
    }
}
module.exports = SignIn;

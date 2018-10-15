const SingIn = require('../pages/SignIn');
const CookieManager = require('../cookies/CookieManager');
let username = 'hapsneeze';
let password = 'test12345';
describe('pivotal tracker verify user cookie', () => {
    let dashboard;

    before(() => {
        dashboard = SingIn.loginAs(username, password);
    });

    it('should get user cookies using protocol command', () => {
        console.log(CookieManager.getUserCookie());
    });

    it('switch other user from cookie', () => {
        let otherusername = 'hapsneeze';
        let otherpassword = 'test12345';
        CookieManager.setUserCookie(otherusername,otherpassword);
    });

    it('delete user cookies', () => {
        let userCookie = CookieManager.getUserCookie();
        CookieManager.deleteUserCookie(userCookie);
    });
});

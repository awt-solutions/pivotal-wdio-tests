const SingIn = require('../pages/SignIn');
const CookieManager = require('../cookies/CookieManager');
let username = 'hapsneeze';
let password = 'test12345';
describe('pivotal tracker page new project', () => {
    let dashboard;

    before(() => {
        dashboard = SingIn.loginAs(username, password);
    });

    it('should get/set cookies using protocol command', () => {

        let cookieManager = new CookieManager();
        cookieManager.readCookie();

       // var cookies = browser.cookie();
         //      console.log(cookies);

        //var data = JSON.parse(cookies);
        //console.log(data);

        //console.log(Cookies.getJSON("lastuser"));
    });
});

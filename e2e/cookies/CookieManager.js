/**
 * this class handle the cookies.
 */
class CookieManager {
    constructor() {

    }
    getInstances(path) {

    }

    readCookie(){
       // get all cookies
      // var cookies = browser.cookie();
       //console.log(cookies);
       //console.log(browser.readCookie('lastuser'));

       /*if (
         cookies.split(';').filter(item => {
           return item.includes('value=')
       }).length*/

        var testCookie = browser.getCookie('lastuser')
            console.log(testCookie); // outputs: { name: 'test', value: '123' }

            var allCookies = browser.getCookie()
            //console.log(allCookies);

    }
}
module.exports = CookieManager;

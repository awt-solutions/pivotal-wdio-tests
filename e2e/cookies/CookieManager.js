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
            console.log(testCookie);

            var allCookies = browser.getCookie()
            //console.log(allCookies);

          var userCookie = browser.getCookie('lastuser').value;
                 console.log(userCookie);

    }
}
module.exports = CookieManager;

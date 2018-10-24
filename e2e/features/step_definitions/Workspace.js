var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({And, But, Given, Then, When}) {
    When(/^I switch tab to workspaces$/, function (callback) {
        callback.pending();
    });
});

var myStepDefinitionsWrapper = function () {


    this.Given(/^I log in as "([^"]*)"$/, function (arg1, callback) {
        console.log("i login as");
        callback.done();
    });


    this.When(/^I click the create project button$/, function (callback) {
        console.log("i login as");
    });


    this.When(/^I create a new project with fields:$/, function (callback) {
        callback.pending();
    });


    this.Then(/^I verify if the project is created$/, function (callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;

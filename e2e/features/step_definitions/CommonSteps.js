const SignIn = require('../../pages/SignIn');
const APIrequest = require('../../rest-api/RequestManager');
const config = require('../../../config.json');
const {Given, Then, When} = require('cucumber');

Given(/^I log in as "([^"]*)"$/, user => {
    dashboard = SignIn.loginAs(config.username, config.password);
});

When(/^I click the create project button$/, () => {
    project = dashboard.clickCreateProjectButton();
});

When(/^I create a new project with fields:$/, dataTable => {
    let rowsHash = dataTable.rowsHash();
    storyName = rowsHash.name;
    project = project.createProject(rowsHash);
});

Then(/^I verify if the project is created$/, () => {
    console.log("I verify if the project is created");
    expect(`${storyName} - Pivotal Tracker`).to.equal(project.getProjectNameFromTitle());
});
var {defineSupportCode} = require('cucumber');

const {Given, Then, When} = require('cucumber');
const SingIn = require('../../pages/SignIn');
const APIrequest = require('../../rest-api/RequestManager');
const config = require('../../../config.json');

let project;
let story;
let projectID ;

Given(/^user is on Pivotal Page$/, function () {
    let postProjectData = { name:'project created from api '+ new Date().getMilliseconds()};
    let response = browser.call(() => APIrequest.postRequest('/projects', postProjectData));
    projectID = response.data.id;
    let dashboard = SingIn.loginAs(config.username, config.password);
    project = dashboard.openProjectById(projectID);
});

When(/^He click the Add story button$/, function () {
    story = project.clickAddStoryButton();
});

When(/^He create a new story with fields:$/, function (dataTable) {
    // let hashes = dataTable.hashes()[0];
    // console.log(hashes);
    // let rows = dataTable.rows()[0];
    // console.log(rows);
    // let raw = dataTable.raw();
    // console.log(raw);
    let rowsHash = dataTable.rowsHash();
    console.log(rowsHash);
    console.log(rowsHash.name);
    console.log(rowsHash['name']);
    story.setStoryTitleField(rowsHash.name);
});

When(/^He click on save button$/, function () {
    story.clickSaveStoryButton();
});

Then(/^I verify if the Story is created$/, function () {
});

const {Given, Then, When} = require('cucumber');

Given(/^I log in as "([^"]*)"$/, arg1 => {
    console.log(`i login as${arg1}`);
});

When(/^I click the create project button$/, () => {
    console.log("i login as");
});

When(/^I create a new project with fields:$/, dataTable => {
    console.log(dataTable);
    let hashes = dataTable.hashes()[0];
    console.log(hashes);
    let rows = dataTable.rows()[0];
    console.log(rows);
    let raw = dataTable.raw();
    console.log(raw);
    let rowsHash = dataTable.rowsHash();
    console.log(rowsHash);
    console.log("i login as");
});

Then(/^I verify if the project is created$/, () => {
    console.log("i login as");
});

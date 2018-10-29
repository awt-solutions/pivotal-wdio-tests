const SignIn = require('../../pages/SignIn');
const config = require('../../../config.json');
const {Given} = require('cucumber');

Given(/^I log in as "([^"]*)"$/, user => {
    dashboard = SignIn.loginAs(config.username, config.password);
});

var {defineSupportCode} = require('cucumber');

var config = require('config.json')('./config.json');
const SingIn = require('../pages/SignIn');
let username = config.username1;
let password = config.password1;
let projectID = config.projectID;
describe('pivotal tracker project page add story', () => {
    let project;
    let dashboard;
    let story;

    before(() => {
        dashboard = SingIn.credentials(username, password);
        project = dashboard.openProjectById(projectID);
    });

    it('should create a new private project with first account', () => {
        story = project.getStoryPageOfProject();
        story.clickAddStoryButton();
        story.setStoryTitleField('story test');
        story.clickSaveStoryButton();
    });
});

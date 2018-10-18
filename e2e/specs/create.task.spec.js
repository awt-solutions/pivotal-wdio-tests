var config = require('config.json')('./config.json');
const SingIn = require('../pages/SignIn');
let username = config.username1;
let password = config.password1;
let projectID = config.projectID;
describe('pivotal tracker project page add task to story', () => {
    let project;
    let dashboard;
    let story;
    let storyTasks;

    before(() => {
        dashboard = SingIn.credentials(username, password);
        project = dashboard.openProjectById(projectID);
    });

    it('should create a new task on the of this project', () => {
        story = project.getStoryPageOfProject();
        storyTasks = story.showStoryFields('test');
        storyTasks.clickStartAddingTaskButton();
        storyTasks.setTaskTitleTextField('new task');
        storyTasks.clickSaveAndAddNewTaskButton();
    });
});

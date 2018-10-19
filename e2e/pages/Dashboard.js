const Workspaces = require('./Workspaces');
const Project = require('./Project');
const CommonActions = require('../core/ui/CommonActions.js');
const config = require('../../testconfig.json');

/**
 * this class contains methods of dashboard.
 */
class Dashboard {
    constructor() {
        this.createProjectButton = '#create-project-button';
        this.createWorkspaceButton = '#create-workspace-button';
        this.workspacesTab = 'span[class="Dashboard__Tabs__tab"]';
        this.projectNameClass = 'a[data-aid="project-name"]'
    }

    clickCreateProjectButton() {
        CommonActions.waitAndClick(this.createProjectButton);
        return new Project();
    }

    clickCreateWorkspaceButton() {
        CommonActions.waitAndClick(this.workspacesTab);
        CommonActions.waitAndClick(this.createWorkspaceButton);
        return new Workspaces();
    }

    openProjectById(projectId) {
        browser.url(config.home_page_url.concat(`/n/projects/${projectId}`));
        return new Project();
    }
/*
    findProjectByName(projectName){
        let elements = CommonActions.getElement(`a[data-aid="project-name"]`);
        /*let result = Object.values(elements).map(elem => {
            if (browser.getText(elem.element).toLowerCase() === projectName.toLowerCase()) {
                return elem;
            }
        });
    }
    */
}
module.exports = Dashboard;

const SingIn = require('../pages/SignIn');
const APIrequest = require('../rest-api/RequestManager');
const config = require('../../config.json');
describe('pivotal tracker page create new project', () => {

    let dashboard;
    let projectID1;
    let projectID2;
    let projectData1 = {
        name: 'test wdio 1 - ' + new Date().getMilliseconds(),
        account: 'test'
    };
    let projectData2 = {
        name: 'test wdio 2 - ' + new Date().getMilliseconds(),
        account: 'test',
        privacy: "public"
    };
    before(() => {
        dashboard = SingIn.loginAs(config.username, config.password);
    });

    it('should create a new private project with data 1', () => {
        let project = dashboard.clickCreateProjectButton();
        project.createProject(projectData1);
        //asserting name on tool bar of project page
        expect(projectData1.name.toLowerCase()).to.equal(project.getProjectNameRaw().toLowerCase());
        //get project ID
        let response = browser.call(() => {return APIrequest.GetRequest('/projects');});
        projectID1 = Object.values(response.data).map((project) => {
            if (projectData1.name.toLowerCase() === project.name.toLowerCase() ) {
                return project.id;
            }
        });
        //asserting name on settings page
        projectID1.toString().replace(',','');
        let settingsURL = config.home_page_url.concat(`/projects/${projectID1}/settings`);
        browser.url(settingsURL);
        expect(projectData1.name).to.equal(browser.getValue('input[name="project[name]"]').toLowerCase());
        //asserting name on dashboard page
        /*
        browser.url(config.home_page_url.concat('/dashboard'));
        let projectNameOnDashboard = browser.element('a[data-aid="project-name"]');
        let visibleText = projectNameOnDashboard.selectByVisibleText(projectData1.name)
        expect(projectData2.name).to.equal(projectNameOnDashboard.getText());*/
    });

    it('should create a new private project with data 2', () => {
        browser.url(config.home_page_url.concat('/dashboard'));
        let project = dashboard.clickCreateProjectButton();
        project.createProject(projectData2);
        //asserting name on tool bar of project page
        expect(projectData2.name.toLowerCase()).to.equal(project.getProjectNameRaw().toLowerCase());
        //get project ID
        let response = browser.call(() => {return APIrequest.GetRequest('/projects');});
        projectID2 = Object.values(response.data).map((project) => {
            if (projectData2.name.toLowerCase() === project.name.toLowerCase() ) {
                return project.id;
            }
        });
        //asserting name on settings page
        projectID2.toString().replace(',','');
        let settingsURL = config.home_page_url.concat(`/projects/${projectID2}/settings`);
        browser.url(settingsURL);
        expect(projectData2.name).to.equal(browser.getValue('input[name="project[name]"]').toLowerCase());
        //asserting name on dashboard page
        /*
        browser.url(config.home_page_url.concat('/dashboard'));
        let projectNameOnDashboard = browser.element('a[data-aid="project-name"]');
        let visibleText = projectNameOnDashboard.selectByVisibleText(projectData2.name)
        expect(projectData2.name).to.equal(projectNameOnDashboard.getText());*/

    });



    after(() =>{
        browser.call(() => { APIrequest.DelRequest(`/projects/${projectID1}`);});
        browser.call(() => { APIrequest.DelRequest(`/projects/${projectID2}`);});
    });
});

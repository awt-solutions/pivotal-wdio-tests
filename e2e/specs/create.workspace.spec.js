const SingIn = require('../pages/SignIn');
const APIrequest = require('../rest-api/RequestManager');
const config = require('../../config.json');
describe('pivotal tracker page create workspaces', () => {
    let dashboard;
    let workspaceData = {name: 'Test Workspace '+ new Date().getMilliseconds()};
    //Sign in precondition
    before(() => {
        dashboard = SingIn.loginAs(config.username, config.password);
    });

    it('should create a new workspace', () => {
        let workspace = dashboard.clickCreateWorkspaceButton();
        //create workspace
        workspace.createWorkspace(workspaceData);
        expect(workspaceData.name).to.equal(workspace.getWorkspaceName());
    });

    after(() => {
        let response = browser.call(() => {return APIrequest.GetRequest('/my/workspaces');});
        let workspaceID;
        Object.values(response.data).map((workspace) => {
            if (workspace.name === workspaceData.name) {
                return workspaceID = workspace.id;
            }
        });
        APIrequest.DelRequest(`/my/workspaces/${workspaceID}`)
    });

});

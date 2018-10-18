var config = require('config.json')('./config.json');
const SingIn = require('../pages/SignIn');
let username = config.username;
let password = config.password;
let testindex = 100;
describe('pivotal tracker page', () => {

    let dashboard;
    let workspace;
    let workspaceName = 'TestWorkspace'+Math.floor(Math.random() * testindex);
    //Sign in precondition
    before(() => {
        dashboard = SingIn.loginAs(username, password);
    });

    it('should create a new workspace named: '+workspaceName, () => {
        //create workspace
        workspace = dashboard.createWorkspace(workspaceName);
        expect(workspaceName).to.equal(workspace.getWorkspaceName());
    });
});

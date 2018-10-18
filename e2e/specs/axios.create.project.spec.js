const axiosManager = require('../rest-api/APIPivotalManager');

async function createStories() {
 let project;

 let projectData1 = {
     name: 'test1',
     account: 'TEST'
 };

  it('should create a new private project with first account', () => {
          let data = {'name':'story test 2'};
          browser.call(axiosManager.RequestPostStories('5a5b07b00dd11f44f98421b67eda7d79','2205691',data));

   })
}

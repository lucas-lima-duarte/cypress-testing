import * as GETActivities from "../requests/GETActivities.request";

describe('Name of the group', () => {
   it('should behave...', () => {
       GETActivities.GETActivities().should((response) => {
           expect(response.statusText).to.be.equal("OK");
           expect(response.status).to.be.equal(200);
           expect(response.body).not.to.be.null;
           
       })
   }); 
});
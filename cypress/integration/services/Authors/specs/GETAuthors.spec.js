import * as GETAuthors from "../requests/GETAuthors.request";

describe('Authors - GET', () => {
    it('check status code', () => {
        GETAuthors.allAuthors().should((response) => {
            expect(response.statusText).to.be.equal("OK");
            expect(response.status).to.be.equal(200);
        })
    });

    it('check body', () => {
        GETAuthors.allAuthors().should((response) => {
            cy.log(response.body)
            expect(response.body).not.to.be.null;
        })
    });
});
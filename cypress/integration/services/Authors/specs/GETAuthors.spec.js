import * as GETAuthors from "../requests/GETAuthors.request";

describe('Authors - GET', () => {
    it('check status code', () => {
        GETAuthors.GETAuthors().should((response) => {
            expect(response.statusText).to.be.equal("OK");
            expect(response.status).to.be.equal(200);
        })
    });

    it('check body', () => {
        GETAuthors.GETAuthors().should((response) => {
            expect(response.body).not.to.be.null;
        })
    });
});
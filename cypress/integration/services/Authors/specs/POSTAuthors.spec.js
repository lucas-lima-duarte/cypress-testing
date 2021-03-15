import * as POSTAuthors from '../requests/POSTAuthors.request'

describe('Authors - POST', () => {
    it('add a new Author', () => {
        POSTAuthors.addAuthor().should((response) => {
            expect(response.status).to.be.eq(200)
            expect(response.statusText).to.be.eq("OK")
            expect(response.body.firstName).to.eq("Dan");
            expect(response.body.lastName).to.eq("Brown");
        });
    });
});
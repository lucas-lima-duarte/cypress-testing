import * as DELETEAuthors from '../requests/DELETEAuthors.request'
import * as GETAuthors from '../requests/GETAuthors.request'

describe('Authors - DELETE', () => {
    it('delete e Author', () => {
        GETAuthors.allAuthors().then((resAllAuthors) => {
          DELETEAuthors.deleteAuthor(resAllAuthors.body[0].id).should((resDeleteAuthors) => {
            expect(resDeleteAuthors.status).to.eq(200);
          })
        })
    });
});
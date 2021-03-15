/// <reference types="cypress" />

function deleteAuthor(idAuthor) {

    return cy.request({
        method: 'DELETE',
        url: `Authors/${idAuthor}`,
        failOnStatusCode: false
    });

}
export { deleteAuthor }
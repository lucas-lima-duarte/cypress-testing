/// <reference types="cypress" />

function alterAuthor(idAuthor) {
    cy.request({
        method: 'PUT',
        url: `/Authors/${idAuthor}`,
        failOnStatusCode: false,
    });
}

export { alterAuthor }
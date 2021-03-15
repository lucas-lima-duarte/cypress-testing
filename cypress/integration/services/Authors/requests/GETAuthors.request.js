/// <reference types="cypress" />

function allAuthors() {
    return cy.request({
        method: 'GET',
        url: '/Authors',
        failOnStatusCode: false
    });
}

export { allAuthors }
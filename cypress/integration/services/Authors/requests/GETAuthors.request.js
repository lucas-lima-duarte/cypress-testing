/// <reference types="cypress" />

function GETAuthors() {
    return cy.request({
        method: 'GET',
        url: '/Authors',
        failOnStatusCode: false
    });
}

export { GETAuthors }
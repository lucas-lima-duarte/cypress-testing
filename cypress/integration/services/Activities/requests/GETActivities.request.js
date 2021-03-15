/// <reference types="cypress" />

function GETActivities() {
    return cy.request({
        method: 'GET',
        url: '/Activities',
        failOnStatusCode: false
    });
}

export { GETActivities }
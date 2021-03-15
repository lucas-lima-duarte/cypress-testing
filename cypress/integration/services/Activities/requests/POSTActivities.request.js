/// <reference types="cypress" />

function POSTActivities() {
    return cy.request({
        method: 'POST',
        url: '/Activities',
        failOnStatusCode: false
        
    });
}

export { GETActivities }
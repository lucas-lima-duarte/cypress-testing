/// <reference types="cypress" />

function deleteAuthot(idAuthor) {

    return cy.request({
        method: 'DELETE',
        url: `Autors/${idAuthor}`,
        headers: { 'Accept-Language': 'en-us', },
    });
    
}
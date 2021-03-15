/// <reference types="cypress" />

const payloadAddAuthor = require('../payload/add-author.json');

function addAuthor() {
    return cy.request({
        method: 'POST',
        url: '/Authors',
        failOnStatusCode: false,
        body: payloadAddAuthor
});
}

export {addAuthor}

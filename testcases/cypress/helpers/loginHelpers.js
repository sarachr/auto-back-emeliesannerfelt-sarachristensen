/// <reference types="cypress" />

const LOGIN_ENDPOINT = 'http://localhost:3000/api/login'



function loginPayload() {
    let loginPayload = {
        "username": "tester01",
        "password": "GteteqbQQgSr88SwNExUQv2ydb7xuf8c",
    }

    return loginPayload
}

function loginRequest() {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
}

function performLogout() {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/logout',
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
}
//exports
module.exports = {
    loginPayload,
    loginRequest,
    performLogout,

}
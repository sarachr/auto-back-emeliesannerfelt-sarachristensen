/// <reference types="cypress" />

const CREATE_BILL_ENDPOINT = 'http://localhost:3000/api/bill/new'

function createBillPayload() {
    let billPayload = {
        "value": "1000",
        "paid": "false"
    }

    return billPayload
}

function createBillRequest() {
    cy.request({
        method: 'POST',
        url: CREATE_BILL_ENDPOINT,
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
        body: createBillPayload()
    }).then((response => {
        expect(response.status).to.eq(200)
        Cypress.env({ lastID: response.body.id })

    }))
}

function deleteBillRequest(idToDelete) {
    cy.request({
        method: 'DELETE',
        url: 'http://localhost:3000/api/bill/' + idToDelete,
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

    createBillPayload,
    createBillRequest,
    deleteBillRequest,
    performLogout,

}
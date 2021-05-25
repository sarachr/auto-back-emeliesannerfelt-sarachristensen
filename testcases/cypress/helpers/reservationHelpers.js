/// <reference types="cypress" />

const CREATE_RESERVATION_ENDPOINT = 'http://localhost:3000/api/reservation/new'

function createReservationPayload() {
    let reservationPayload = {
        "client": "2",
        "room": "1",
        "bill": "1",
        "start": "2021-08-10",
        "end": "2021-08-15"
    }

    return reservationPayload
}

function createReservationRequest() {
    cy.request({
        method: 'POST',
        url: CREATE_RESERVATION_ENDPOINT,
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
        body: createReservationPayload()
    }).then((response => {
        expect(response.status).to.eq(200)
        Cypress.env({ lastID: response.body.id })

    }))
}

function deleteReservationRequest(idToDelete) {
    cy.request({
        method: 'DELETE',
        url: 'http://localhost:3000/api/reservation/' + idToDelete,
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
    createReservationRequest,
    deleteReservationRequest,
    createReservationPayload,
    performLogout,

}
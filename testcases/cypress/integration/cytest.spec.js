/// <reference types="cypress" />

import * as client from '../helpers/clientHelpers'
import * as bill from '../helpers/billHelpers'
import * as reservation from '../helpers/reservationHelpers'
import * as room from '../helpers/roomHelpers'
import * as login from '../helpers/loginHelpers'

//TEST 1 - CREATE A CLIENT

describe('CREATE A CLIENT', () => {
    it('Create a new client', () => {
        cy.authenticate().then((response => {
            client.createClientRequest()
            client.performLogout()
        }))
    })

    it('Delete a client', () => {
        cy.authenticate().then((response => {
            client.createClientRequest()
            client.deleteClientRequest(Cypress.env().lastID)
            client.performLogout()
        }))
    })
})

//TEST 2 CREATE A BILL

describe('CREATE A BILL', () => {
    it('Create a bill', () => {
        cy.authenticate().then((response => {
            bill.createBillRequest()
            bill.performLogout()
        }))
    })

    it('Delete a bill', () => {
        cy.authenticate().then((response => {
            bill.createBillRequest()
            bill.deleteBillRequest(Cypress.env().lastID)
            bill.performLogout()
        }))
    })
})

//TEST 3 CREATE A RESERVATION

describe('CREATE A RESERVATION', () => {
    it('Create a reservation', () => {
        cy.authenticate().then((response => {
            reservation.createReservationRequest()
            reservation.performLogout()
        }))
    })

    it('Delete a reservation', () => {
        cy.authenticate().then((response => {
            reservation.createReservationRequest()
            reservation.deleteReservationRequest(Cypress.env().lastID)
            reservation.performLogout()
        }))
    })
})

//TEST 4 CREATE ROOM

describe('CREATE ROOM', () => {
    it('Create a room', () => {
        cy.authenticate().then((response => {
            room.createRoomRequest()
            room.performLogout()
        }))
    })

    it('Delete a room', () => {
        cy.authenticate().then((response => {
            room.createRoomRequest()
            room.deleteRoomRequest(Cypress.env().lastID)
            room.performLogout()
        }))
    })
})

// TEST 5 DELETE CLIENT

describe('DELETE CLIENT', () => {
    it('Create a new client', () => {
        cy.authenticate().then((response => {
            client.createClientRequest()
            client.performLogout()
        }))
    })

    it('Delete a client', () => {
        cy.authenticate().then((response => {
            client.createClientRequest()
            client.deleteClientRequest(Cypress.env().lastID)
            client.performLogout()
        }))
    })
})

// TEST 6 DELETE BILL

describe('DELETE BILL', () => {
    it('Create a bill', () => {
        cy.authenticate().then((response => {
            bill.createBillRequest()
            bill.performLogout()
        }))
    })

    it('Delete a bill', () => {
        cy.authenticate().then((response => {
            bill.createBillRequest()
            bill.deleteBillRequest(Cypress.env().lastID)
            bill.performLogout()
        }))
    })
})

// TEST 7 DELETE RESERVATION


describe('DELETE RESERVATION', () => {
    it('Create a reservation', () => {
        cy.authenticate().then((response => {
            reservation.createReservationRequest()
            reservation.performLogout()
        }))
    })

    it('Delete a reservation', () => {
        cy.authenticate().then((response => {
            reservation.createReservationRequest()
            reservation.deleteReservationRequest(Cypress.env().lastID)
            reservation.performLogout()
        }))
    })
})

// TEST 8 DELETE ROOM


describe('DELETE ROOM', () => {
    it('Create a room', () => {
        cy.authenticate().then((response => {
            room.createRoomRequest()
            room.performLogout()
        }))
    })

    it('Delete a room', () => {
        cy.authenticate().then((response => {
            room.createRoomRequest()
            room.deleteRoomRequest(Cypress.env().lastID)
            room.performLogout()
        }))
    })
})

// TEST 9 LOGGA IN

describe('LOG IN', () => {
    it('login', () => {
        cy.authenticate().then((response => {
            login.performLogout()
        }))
    })
})


// TEST 10 LOGGA UT
describe('LOG OUT', () => {
    it('logout', () => {
        cy.authenticate().then((response => {
            login.performLogout()
        }))

    })
})


// TEST 11 ÄNDRA KLIENT
describe('EDIT CLIENT', () => {

it.only('EDIT CLIENT', () => {
    cy.authenticate().then((response => {
        client.createClientRequest()
        client.editClientRequest()
        client.performLogout()
    }))
})
})
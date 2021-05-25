/// <reference types="cypress" />

import * as client from '../helpers/clientHelpers'
import * as bill from '../helpers/clientHelpers'

//TEST 1 - CREATE A CLIENT

describe('Test suite', () => {
    it('Create a new client', () => {
        cy.authenticate().then((response =>{
            client.createClientRequest()
            client.performLogout()
        }))
    })

    it('Delete a client', () => {
        cy.authenticate().then((response =>{
            client.createClientRequest()
            client.deleteClientRequest(Cypress.env().lastID)
            client.performLogout()
        }))
    })
})

//TEST 2 CREATE A BILL

describe('Test suite', () => {
    it('Create a bill', () => {
        cy.authenticate().then((response =>{
            bill.createBillRequest()
            bill.performLogout()
        }))
    })

    it('Delete a bill', () => {
        cy.authenticate().then((response =>{
            bill.createBillRequest()
            bill.deleteBillRequest(Cypress.env().lastID)
            bill.performLogout()
        }))
    })
})
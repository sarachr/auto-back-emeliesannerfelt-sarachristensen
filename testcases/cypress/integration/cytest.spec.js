/// <reference types="cypress" />

import * as client from '../helpers/clientHelpers'

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
/// <reference types="cypress" />

//ELEMENTS
const CREATE_CLIENT_BTN = "h2 > .btn"
const CLIENT_LIST = ".client"
const THREE_DOTS_BTN = ".action > img"
const DElETE_BTN = ".menu > :nth-child(2)"

//FUNCTIONS
function viewClientNew(content) {
    cy.get(CREATE_CLIENT_BTN).click()
    cy.contains(content)
}

function verifyLastClient(name, mail, phone) {
    cy.get(CLIENT_LIST).last()
        .should("contain", name)
        .and("contain", mail)
        .and("contain", phone)
}

function deleteLastClient(content) {
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DElETE_BTN).click()
    cy.contains(content)
}

//EXPORTS
exports.default = {
    viewClientNew,
    verifyLastClient,
    deleteLastClient
}
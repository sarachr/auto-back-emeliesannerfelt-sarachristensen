/// <reference types="cypress" />

///ELEMENTS
const CREATE_RESERVATION_BTN = "h2 > .btn"
const RESERVATION_LIST = ".reservation"
const THREE_DOTS_BTN = ".action > img"
const DElETE_BTN = ".menu > :nth-child(2)"
const EDIT_BTN = ".menu > :nth-child(1)"


///FUNCTIONS
function createReservation(content) {
    cy.get(CREATE_RESERVATION_BTN).click()
    cy.contains(content)
}

function verifyLastReservation(start, end, client, room, bill) {
    cy.get(RESERVATION_LIST).last()
        .should("contain", start)
        .and("contain", end)
        .and("contain", client)
        .and("contain", room)
        .and("contain", bill)
    cy.wait(500)
}

function deleteLastReservation(content) {
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DElETE_BTN).click()
    cy.contains(content)
}

function changeLastReservation(content) {
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(EDIT_BTN).click()
    cy.contains(content)
}


///EXPORTS
exports.default = {
    createReservation,
    verifyLastReservation,
    deleteLastReservation,
    changeLastReservation
}
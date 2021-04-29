/// <reference types="cypress" />

//ELEMENTS
const LOGOUT_BTN = ".user > .btn"
const VIEW_CLIENTS_BTN = ".blocks > :nth-child(2) > .btn"
const VIEW_RESERVATION_BTN = ":nth-child(4) > .btn"


//FUNCTIONS
function logoutUser(content) {
    cy.get(LOGOUT_BTN).click()
    cy.contains(content)
}

function viewClients(content) {
    cy.get(VIEW_CLIENTS_BTN).click();
    cy.contains(content)
}

function viewReservations(content) {
    cy.get(VIEW_RESERVATION_BTN).click();
    cy.contains(content)
}


//EXPORTS
exports.default = {
    logoutUser,
    viewClients,
    viewReservations
}
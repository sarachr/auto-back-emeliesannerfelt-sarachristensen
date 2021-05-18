/// <reference types="cypress" />

//ELEMENTS
const START_FIELD = ":nth-child(1) > input"
const END_FIELD = ":nth-child(2) > input"
const CLIENT_SELECT = ":nth-child(3) > select"
const ROOM_SELECT = ":nth-child(4) > select"
const BILL_SELECT = ":nth-child(5) > select"
const SAVE_BTN = ".blue"

//FUNCTIONS
function createReservationNew(start, end, client, room, bill, content) {
    cy.get(START_FIELD).wait(500).type(start)
    cy.get(END_FIELD).type(end)
    cy.get(CLIENT_SELECT).select(client)
    cy.get(ROOM_SELECT).select(room)
    cy.get(BILL_SELECT).select(bill)
    cy.get(SAVE_BTN).click()
    cy.wait(500)
    cy.contains(content)

}


//EXPORTS
exports.default = {
    createReservationNew
}
/// <reference types="cypress" />

///ELEMENTS
const ROOM_SELECT = ":nth-child(6) > select"
const SAVE_BTN = ".blue"

///FUNCTIONS
function changeRoom(room, content) {
    cy.wait(500)
    cy.get(ROOM_SELECT).select(room)
    cy.get(SAVE_BTN).click()
    cy.contains(content)
}

///EXPORTS
exports.default = {
    changeRoom
}
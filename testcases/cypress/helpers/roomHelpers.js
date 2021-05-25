/// <reference types="cypress" />

const CREATE_ROOM_ENDPOINT = 'http://localhost:3000/api/room/new'


//ROOM
function createRoomPayload(){
    let roomPayload = {
        "features": ["balcony"],
        "category": "double",
        "number": "198",
        "floor": "1",
        "available": true,
        "price": "222222"
    }

    return roomPayload
}

function createRoomRequest(){
    cy.request({
        method: 'POST',
        url: CREATE_ROOM_ENDPOINT,
        headers: {
            'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
            'Content-Type': 'application/json'
        }, 
        body:createRoomPayload()
    }).then((response => {
        expect(response.status).to.eq(200)
        Cypress.env({lastID:response.body.id})
        
    }))
}

function deleteRoomRequest(idToDelete){
    cy.request({
        method: 'DELETE',
        url:'http://localhost:3000/api/room/'+idToDelete,
        headers: {
            'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
            'Content-Type': 'application/json'
        },                              
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
}

function performLogout(){
    cy.request({
        method: 'POST',
        url:'http://localhost:3000/api/logout',
        headers: {
            'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
            'Content-Type': 'application/json'
        },                              
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
}
//exports
module.exports = {
    createRoomRequest,
    deleteRoomRequest,
    createRoomPayload,
    performLogout,

}
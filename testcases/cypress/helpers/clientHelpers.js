const CREATE_CLIENT_ENDPOINT = 'http://localhost:3000/api/client/new'
const CREATE_BILL_ENDPOINT = 'http://localhost:3000/api/bill/new'
const CREATE_RESERVATION_ENDPOINT = 'http://localhost:3000/api/reservation/new'
const CREATE_ROOM_ENDPOINT = 'http://localhost:3000/api/room/new'

//functions
function createClientPayload(){
    let clientPayload = {
        "name": "Tester Testersson",
        "email": "testnisse01@email.com",
        "telephone": "0800000017282"
    }

    return clientPayload
}


function createClientRequest(){
    cy.request({
        method: 'POST',
        url: CREATE_CLIENT_ENDPOINT,
        headers: {
            'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
            'Content-Type': 'application/json'
        }, 
        body:createClientPayload()
    }).then((response => {
        expect(response.status).to.eq(200)
        Cypress.env({lastID:response.body.id})
        
    }))
}

function deleteClientRequest(idToDelete){
    cy.request({
        method: 'DELETE',
        url:'http://localhost:3000/api/client/'+idToDelete,
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

function createBillPayload(){
    let billPayload = {
        "value": "1000",
        "paid": "false"
    }

    return billPayload
}

function createBillRequest(){
    cy.request({
        method: 'POST',
        url: CREATE_BILL_ENDPOINT,
        headers: {
            'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
            'Content-Type': 'application/json'
        }, 
        body:createBillPayload()
    }).then((response => {
        expect(response.status).to.eq(200)
        Cypress.env({lastID:response.body.id})
        
    }))
}

function deleteBillRequest(idToDelete){
    cy.request({
        method: 'DELETE',
        url:'http://localhost:3000/api/bill/'+idToDelete,
        headers: {
            'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
            'Content-Type': 'application/json'
        },                              
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
}

function createReservationPayload(){
    let reservationPayload = {
        "client": "2",
        "room": "1",
        "bill": "1",
        "start": "2021-08-10",
        "end": "2021-08-15"
    }

    return reservationPayload
}

function createReservationRequest(){
    cy.request({
        method: 'POST',
        url: CREATE_RESERVATION_ENDPOINT,
        headers: {
            'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
            'Content-Type': 'application/json'
        }, 
        body:createReservationPayload()
    }).then((response => {
        expect(response.status).to.eq(200)
        Cypress.env({lastID:response.body.id})
        
    }))
}

function deleteReservationRequest(idToDelete){
    cy.request({
        method: 'DELETE',
        url:'http://localhost:3000/api/reservation/'+idToDelete,
        headers: {
            'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
            'Content-Type': 'application/json'
        },                              
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
}

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


//exports
module.exports = {
    createClientPayload,
    createClientRequest,
    deleteClientRequest,
    performLogout,
    createBillPayload,
    createBillRequest,
    deleteBillRequest,
    createReservationRequest,
    deleteReservationRequest,
    createReservationPayload,
    createRoomRequest,
    deleteRoomRequest,
    createRoomPayload,

}
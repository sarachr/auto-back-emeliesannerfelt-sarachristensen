const CREATE_CLIENT_ENDPOINT = 'http://localhost:3000/api/client/new'
const CREATE_BILL_ENDPOINT = 'http://localhost:3000/api/bill/new'

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

//exports
module.exports = {
    createClientPayload,
    createClientRequest,
    deleteClientRequest,
    performLogout,
    createBillPayload,
    createBillRequest,
    deleteBillRequest,
}
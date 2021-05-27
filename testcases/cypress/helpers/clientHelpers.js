const CREATE_CLIENT_ENDPOINT = 'http://localhost:3000/api/client/new'
const faker = require('faker')


//functions
function createClientPayload() {
    let clientPayload = {
        "name": faker.name.firstName(),
        "email": faker.internet.email(),
        "telephone": faker.phone.phoneNumber()
    }

    return clientPayload
}



function createClientRequest() {
    cy.request({
        method: 'POST',
        url: CREATE_CLIENT_ENDPOINT,
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
        body: createClientPayload()
    }).then((response => {
        expect(response.status).to.eq(200)
        cy.log(response.body.id)
        Cypress.env({ lastID: response.body.id })

    }))
}

function deleteClientRequest(idToDelete) {
    cy.request({
        method: 'DELETE',
        url: 'http://localhost:3000/api/client/' + idToDelete,
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
}




function editClientRequest() {
    let editClientPayload = {
        "id": 1,
        "name": faker.name.firstName(),
        "email": faker.internet.email(),
        "telephone": faker.phone.phoneNumber()
    }
    cy.request({
        method: 'PUT',
        url: 'http://localhost:3000/api/client/1',
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json',
        
        },
        body: editClientPayload
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
}

function performLogout() {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/logout',
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
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
    editClientRequest,

}
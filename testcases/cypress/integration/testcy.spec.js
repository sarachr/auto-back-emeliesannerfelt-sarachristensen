/// <reference types="cypress" />


describe('Test cases', () => {



    it('Create a client', () => {
        cy.authenticate().then((response => {


            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/client/new',
                headers: {
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
                body: {
                    "name": "Tester Testersson",
                    "email": "testnisse01@email.com",
                    "telephone": "0800000017282"
                }
            }).then((response => {
                expect(response.status).to.eq(200)
            }))

            // logout
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
        }))
    })



    it('Create a bill', () => {
        cy.authenticate().then((response => {

            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/bill/new',
                headers: {
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
                body: {
                    "value": "1000",
                    "paid": "false"
                }
            }).then((response => {
                expect(response.status).to.eq(200)
            }))

            // logout
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
        }))
    })

    it('Create a reservation', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/reservation/new',
                headers: {
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
                body: {
                    "client": "2",
                    "room": "1",
                    "bill": "1",
                    "start": "2021-08-10",
                    "end": "2021-08-15"
                }
            }).then((response => {
                expect(response.status).to.eq(200)
            }))

            // logout
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
        }))
    })


    it('Create a room', () => {
        cy.authenticate().then((response => {


            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/room/new',
                headers: {
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
                body: {
                    "features": ["balcony"],
                    "category": "double",
                    "number": "198",
                    "floor": "1",
                    "available": true,
                    "price": "222222"
                }
            }).then((response => {
                expect(response.status).to.eq(200)
            }))

            // logout
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
        }))
    })


    it('Delete bill 2', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'DELETE',
                url: 'http://localhost:3000/api/bill/2',
                headers: {
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))
    })


    it('Delete room 198', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'DELETE',
                url: 'http://localhost:3000/api/room/3',
                headers: {
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))
    })

    it('Delete reservation', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'DELETE',
                url: 'http://localhost:3000/api/reservation/2',
                headers: {
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))
    })

    it('Delete a client', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'DELETE',
                url: 'http://localhost:3000/api/client/2',
                headers: {
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))
    })

    it('Log in', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/login',
                headers: {
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
                body: {
                    "username": "tester01",
                    "password": "GteteqbQQgSr88SwNExUQv2ydb7xuf8c",


                },
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))
    })


    it('Log out', () => {
        cy.authenticate().then((response => {
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
        }))
    })
})
/// <reference types="cypress" />


describe('Test suite', () => {
    it('GET request towards /api/clients', () => {
        cy.authenticate().then((response =>{
            cy.request({
                method: 'GET', 
                url: 'http://localhost:3000/api/clients', 
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }
            })
        })).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
            cy.log(JSON.stringify(response.body[1]))
        }))
    })


    it('GET request towards /api/client/1', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'GET', 
                url: 'http://localhost:3000/api/client/1', 
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }
            }).then((response =>{
                expect(response.status).to.eq(200)
                // cy.log(JSON.stringify(response.body))
            }))
        }))
       
    })


    it('POST request towards /api/client/new', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'POST',
                url:'http://localhost:3000/api/client/new',
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }, 
                body:{
                    "name":"Client01",
                    "email":"client01@email.com",
                    "telephone":"12312423423423"
                }
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))       
    })  
    
    it('PUT request towards /api/client/1', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'PUT',
                url:'http://localhost:3000/api/client/2',
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }, 
                body:{
                    "id":2,
                    "name":"Client02",
                    "email":"client02@email.com",
                    "telephone":"12312423423423"
                }                
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))       
    })   

    it('DELETE request towards /api/client/1', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'DELETE',
                url:'http://localhost:3000/api/client/1',
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                },                              
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))       
    }) 

    it('POST request towards /api/logout', () => {
        cy.authenticate().then((response => {
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
        }))       
    }) 


    // Test case - Create a client
    // 1. Login 
    // 2. Create a client
    // 3. Logout

    it('Create a client', () => {
        cy.authenticate().then((response => {

            //Crete a client request
            cy.request({
                method: 'POST',
                url:'http://localhost:3000/api/client/new',
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }, 
                body:{
                    "name":"Client01",
                    "email":"client01@email.com",
                    "telephone":"12312423423423"
                }
            }).then((response => {
                expect(response.status).to.eq(200)
            }))

            // Perform a logout
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
        }))
    })

})
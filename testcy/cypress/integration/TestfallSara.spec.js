/// <reference types="cypress" />
/*
// (1) TESTFALL: SKAPA EN KLIENT
describe("Skapa en klient",() => {
    it("login",() => {
    cy.visit("http://localhost:3000");
    cy.get('h2').should("contain", "Login")
    cy.get(":nth-child(1) > input").type("tester01")
    cy.get(":nth-child(2) > input").type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
    cy.get(".btn").click()

    cy.get(".username").should("contain", "Welcome tester01!")

    });
    it("Create client", () => {
    cy.visit("http://localhost:3000/clients");
    cy.get("h2").should("contain", "Clients")
    cy.get("h2 > .btn").click();
    cy.get("h2").should("contain", "New Client")
    cy.get(":nth-child(1) > input").type("Erik Eriksson");
    cy.get(":nth-child(2) > input").type("ErikEriksson@abc123.com");
    cy.get(":nth-child(3) > input").type("070000000");
    cy.get(".blue").click()
    cy.get("h2").should("contain", "Clients")
    cy.contains("Erik")
    cy.get(".user > .btn").click()

    });
});

/// <reference types="cypress" />

// (2) TESTFALL: SKAPA RESERVATION
describe("Skapa reservation",() => {
    it("login",() => {
    cy.visit("http://localhost:3000");
    cy.get('h2').should("contain", "Login")
    cy.get(":nth-child(1) > input").type("tester01")
    cy.get(":nth-child(2) > input").type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
    cy.get(".btn").click()

    cy.get(".username").should("contain", "Welcome tester01!")

    });
    it("Make reservation", () => {
    cy.visit("http://localhost:3000/reservations");
    cy.get("h2").should("contain", "Reservations")
    cy.get("h2 > .btn").click();
    cy.get("h2").should("contain", "New Reservation")
    cy.get(":nth-child(1) > input").type("2021-05-20");
    cy.get(":nth-child(2) > input").type("2021-05-22");
    cy.get(":nth-child(3) > select").select("Erik Eriksson (#4)")
    cy.get(":nth-child(4) > select").select("Floor 1, Room 101")
    cy.get(":nth-child(5) > select").select("ID: 1")
    cy.get(".blue").click()
    cy.get("h2").should("contain", "Reservations")
    cy.contains("Room")
    cy.get(".user > .btn").click()






    });
});

/// <reference types="cypress" />

// (3) TESTFALL: REDIGERA RESERVATION RUM
describe("Redigera reservation rum",() => {
    it("login",() => {
    cy.visit("http://localhost:3000");
    cy.get('h2').should("contain", "Login")
    cy.get(":nth-child(1) > input").type("tester01")
    cy.get(":nth-child(2) > input").type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
    cy.get(".btn").click()

    cy.get(".username").should("contain", "Welcome tester01!")

    });
    it("Edit reservation", () => {
    cy.visit("http://localhost:3000/reservations");
    cy.get("h2").should("contain", "Reservations")
    cy.get(":nth-child(1) > .action > img").click()
    cy.get(".menu > :nth-child(1)").click()
    cy.get(":nth-child(6) > select").select("Floor 1, Room 102")
    cy.get(".blue").click()
    cy.get("h2").should("contain", "Reservations")
    cy.contains("Room")
    cy.get(".user > .btn").click()







    });
});


/// <reference types="cypress" />

// (4) TESTFALL: TA BORT EN KLIENT
describe("Ta bort en klient",() => {
    it("login",() => {
    cy.visit("http://localhost:3000");
    cy.get('h2').should("contain", "Login")
    cy.get(":nth-child(1) > input").type("tester01")
    cy.get(":nth-child(2) > input").type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
    cy.get(".btn").click()
    cy.get(".username").should("contain", "Welcome tester01!")

    });
    it("Delete client", () => {
    cy.visit("http://localhost:3000/clients");
    cy.get("h2").should("contain", "Clients")
    cy.get(":nth-child(1) > .action > img").click();
    cy.get(".menu > :nth-child(2)").click();
    cy.get("h2").should("contain", "Clients")
    cy.contains("Back")
    cy.get(".user > .btn").click()


    });
});

/// <reference types="cypress" />

// (5) TESTFALL: TA BORT EN RESERVATION
describe("Ta bort en reservation",() => {
    it("login",() => {
    cy.visit("http://localhost:3000");
    cy.get('h2').should("contain", "Login")
    cy.get(":nth-child(1) > input").type("tester01")
    cy.get(":nth-child(2) > input").type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
    cy.get(".btn").click()
    cy.get(".username").should("contain", "Welcome tester01!")

    });
    it("Delete reservation", () => {
    cy.visit("http://localhost:3000/reservations");
    cy.get("h2").should("contain", "Reservations")
    cy.get(".action").click();
    cy.get(".menu > :nth-child(2)").click();
    cy.get("h2").should("contain", "Reservations")
    cy.contains("Back")
    cy.get(".user > .btn").click()


    });
}); */
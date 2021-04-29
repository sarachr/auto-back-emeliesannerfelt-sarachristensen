/// <reference types="cypress" />

import * as loginPage from "../pages/loginPage"
import * as indexPage from "../pages/indexPage"
import * as clientsPage from "../pages/clientsPage"
import * as clientNewPage from "../pages/clientNewPage"
import * as reservationPage from "../pages/reservationPage"
import * as reservationNewPage from "../pages/reservationNewPage"
import * as reservationEditPage from "../pages/reservationEditPage"


describe("Testsuite", () => {
    beforeEach(() => {
        cy.visit("/")
        loginPage.confirmHeader("Login")
        loginPage.loginUser("tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview")
    });
    afterEach(() => {
        indexPage.logoutUser("Login")

    });


    it("Create a client and verify", () => {
        indexPage.viewClients("Clients")
        clientsPage.viewClientNew("New Client")
        clientNewPage.createClient("tester", "tester@mail.com", "012334", "Clients")
        clientsPage.verifyLastClient("tester", "tester@mail.com", "012334", "Clients")

    });

    it("Create a reservation and verify", () => {
        indexPage.viewReservations("Reservations")
        reservationPage.createReservation("New Reservation")
        reservationNewPage.createReservationNew("2021-06-10", "2021-06-16", "tester (#1)", "Floor 1, Room 101", "ID: 1", "Reservations")
    });

    it("Change room in reservation", () => {
        indexPage.viewReservations("Reservations")
        reservationPage.verifyLastReservation("2021-06-10", "2021-06-16", "tester", "Room", "Bill: 1", "tester:")
        reservationPage.changeLastReservation("Reservation")
        reservationEditPage.changeRoom("Floor 1, Room 101", "Room: 1")

    });

    it("Delete a reservation", () => {
        indexPage.viewReservations("Reservations")
        reservationPage.verifyLastReservation("2021-06-10", "2021-06-16", "tester", "Room", "Bill: 1", "tester:")
        reservationPage.deleteLastReservation("Reservations")

    });

    it("Delete a client", () => {
        indexPage.viewClients("Clients")
        clientsPage.verifyLastClient("tester", "tester@mail.com", "012334", "Clients")
        clientsPage.deleteLastClient("Clients")

    });

});

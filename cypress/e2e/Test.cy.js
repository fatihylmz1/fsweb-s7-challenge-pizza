describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('buton test', () => {

        cy.get('[data-cy="btn1"]').click().should().visit("http://localhost:3000/pizza");
        cy.get("#name-input").type("ahmet");

    })

    it("input test", () => {

        cy.visit("http://localhost:3000/pizza")
        cy.get("#name-input").type("ahmet")
        cy.get("#special-text").type("Kapıda ödeme istiyorum.")
    })

    it("fiyat hesap", () => {
        cy.visit("http://localhost:3000/pizza")
        cy.get("#checkbox").click()
        cy.get("#arttirbtn").click()
        cy.get("#fiyat").should("176 TL")
    })





})
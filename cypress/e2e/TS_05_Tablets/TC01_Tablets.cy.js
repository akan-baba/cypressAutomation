import { TabletsPage } from '../../../pageObject/Computers/TabletsPage'
const tablet = new TabletsPage


describe('Tablets shopping basket', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('Samsung Galaxy Tab S8 Wi-Fi Tablet', () => {
        cy.linkText().contains('Computers').click({ force: true })
        cy.linkText().contains('iPad & Tablets').click({ force: true })
        cy.addToCart().eq(0).click()
        cy.get('#product_attribute_111_400').click()
        cy.get('[data-attr-value="404"]').click()
        cy.selectDropDown('113', '408');
        tablet.pageMethods.qtyInput().clear().type('5')
        tablet.pageMethods.addToCartBtn().click()
        tablet.pageMethods.termsOfservice().click()
        tablet.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });

    it('Amazon Fire Inch Wi-Fi Tablet', () => {
        cy.linkText().contains('Computers').click({ force: true })
        cy.linkText().contains('iPad & Tablets').click({ force: true })
        cy.addToCart().eq(1).click()
        cy.get('#product_attribute_114_413').click()
        cy.get('#product_attribute_115_416').click()
        cy.selectDropDown('116', '419');
        tablet.pageMethods.qtyInput().clear().type('5')
        tablet.pageMethods.addToCartBtn().click()
        tablet.pageMethods.termsOfservice().click()
        tablet.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });

    it('AMAZON Fire Max 11 Tablet', () => {
        cy.linkText().contains('Computers').click({ force: true })
        cy.linkText().contains('iPad & Tablets').click({ force: true })
        cy.addToCart().eq(2).click()
        cy.get('#product_attribute_117_425').click()
        cy.selectDropDown('118', '428');
        cy.selectDropDown('119', '433');
        tablet.pageMethods.qtyInput().clear().type('5')
        tablet.pageMethods.addToCartBtn().click()
        tablet.pageMethods.termsOfservice().click()
        tablet.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });

});
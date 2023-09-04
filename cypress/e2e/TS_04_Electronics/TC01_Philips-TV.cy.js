import {Televisions} from '../../../pageObject/Electronics/Televisions'
const tele = new Televisions


describe('Philips Television Basket', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('Philips 50 50PUS7607 Smart 4K', () => {
        cy.linkText().contains('Electronics').click({force: true})
        cy.linkText().contains('TV').click({force: true})
        cy.linkText().contains('Philips').click({force: true})
        cy.addToCart().eq(0).click()
        cy.get('#product_attribute_61_236').click()
        cy.selectDropDown('62', '238');
        tele.pageMethods.qtyInput().clear().type('5')
        tele.pageMethods.addToCartBtn().click()
        tele.pageMethods.termsOfservice().click()
        tele.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard()  
    });

    it('Philips 70PUS7607 Smart 4K UHD', () => {
        cy.linkText().contains('Electronics').click({force: true})
        cy.linkText().contains('TV').click({force: true})
        cy.linkText().contains('Philips').click({force: true})
        cy.addToCart().eq(1).click()
        cy.get('#product_attribute_63_241').click()
        cy.selectDropDown('64', '243');
        tele.pageMethods.qtyInput().clear().type('5')
        tele.pageMethods.addToCartBtn().click()
        tele.pageMethods.termsOfservice().click()
        tele.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });

    it('PHILIPS 50PUS8807/12 50" Smart 4K Ultra', () => {
        cy.linkText().contains('Electronics').click({force: true})
        cy.linkText().contains('TV').click({force: true})
        cy.linkText().contains('Philips').click({force: true})
        cy.addToCart().eq(2).click()
        cy.get('#product_attribute_66_249').click()
        cy.selectDropDown('65', '245');
        tele.pageMethods.qtyInput().clear().type('5')
        tele.pageMethods.addToCartBtn().click()
        tele.pageMethods.termsOfservice().click()
        tele.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });
    
});
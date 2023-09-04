import {Televisions} from '../../../pageObject/Electronics/Televisions'
const tele = new Televisions

describe('Hisense Television Basket', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('Hisense 40A4EGTUK Smart Full HD LED', () => {
        cy.linkText().contains('Electronics').click({force: true})
        cy.linkText().contains('TV').click({force: true})
        cy.linkText().contains('Hisense').click({force: true})
        cy.addToCart().eq(0).click()
        cy.get('#product_attribute_74_268').click()
        cy.selectDropDown('73', '266');
        tele.pageMethods.qtyInput().clear().type('5')
        tele.pageMethods.addToCartBtn().click()
        tele.pageMethods.termsOfservice().click()
        tele.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });

    it('HISENSE 55U7KQTUK 55" Smart 4K', () => {
        cy.linkText().contains('Electronics').click({force: true})
        cy.linkText().contains('TV').click({force: true})
        cy.linkText().contains('Hisense').click({force: true})
        cy.addToCart().eq(1).click()
        cy.get('#product_attribute_76_273').click()
        cy.selectDropDown('75', '270');
        tele.pageMethods.qtyInput().clear().type('5')
        tele.pageMethods.addToCartBtn().click()
        tele.pageMethods.termsOfservice().click()
        tele.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });

    it('HISENSE 55A6BGTUK 55" Smart 4K Ultra', () => {
        cy.linkText().contains('Electronics').click({force: true})
        cy.linkText().contains('TV').click({force: true})
        cy.linkText().contains('Hisense').click({force: true})
        cy.addToCart().eq(2).click()
        cy.get('#product_attribute_78_277').click()
        cy.selectDropDown('77', '275');
        tele.pageMethods.qtyInput().clear().type('5')
        tele.pageMethods.addToCartBtn().click()
        tele.pageMethods.termsOfservice().click()
        tele.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });
    
});
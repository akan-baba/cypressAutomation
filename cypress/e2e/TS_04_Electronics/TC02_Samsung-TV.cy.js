import {Televisions} from '../../../pageObject/Electronics/Televisions'
const tele = new Televisions


describe('Samsumg Television Basket', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('SAMSUNG UE50CU7100KXXU Smart', () => {
        cy.linkText().contains('Electronics').click({force: true})
        cy.linkText().contains('TV').click({force: true})
        cy.linkText().contains('Samsung').click({force: true})
        cy.addToCart().eq(0).click()
        cy.get('#product_attribute_68_253').click()
        cy.selectDropDown('67', '250');
        tele.pageMethods.qtyInput().clear().type('5')
        tele.pageMethods.addToCartBtn().click()
        tele.pageMethods.termsOfservice().click()
        tele.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard()   
    });
    it('Samsung QE50QN90AAT Smart 4K', () => {
        cy.linkText().contains('Electronics').click({force: true})
        cy.linkText().contains('TV').click({force: true})
        cy.linkText().contains('Samsung').click({force: true})
        cy.addToCart().eq(1).click()
        cy.get('#product_attribute_70_258').click()
        cy.selectDropDown('69', '255');
        tele.pageMethods.qtyInput().clear().type('5')
        tele.pageMethods.addToCartBtn().click()
        tele.pageMethods.termsOfservice().click()
        tele.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });

    it('SAMSUNG UE65CU8500KXXU Ultra', () => {
        cy.linkText().contains('Electronics').click({force: true})
        cy.linkText().contains('TV').click({force: true})
        cy.linkText().contains('Samsung').click({force: true})
        cy.addToCart().eq(2).click()
        cy.get('#product_attribute_72_263').click()
        cy.selectDropDown('71', '260');
        tele.pageMethods.qtyInput().clear().type('5')
        tele.pageMethods.addToCartBtn().click()
        tele.pageMethods.termsOfservice().click()
        tele.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });
    
});
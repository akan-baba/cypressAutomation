import {MobilePhones} from '../../../pageObject/Mobile/MobilePhones'
const phones = new MobilePhones


describe('Samsung Basket', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('SAMSUNG Galaxy Z Flip5', () => {
        cy.linkText().contains('Mobile Phones').click({force: true})
        cy.linkText().contains('Samsung Phones').click({force: true})
        cy.addToCart().eq(0).click()
        cy.selectDropDown('52', '201');
        cy.get('#product_attribute_53_283').click()
        phones.pageMethods.qtyInput().clear().type('5')
        phones.pageMethods.addToCartBtn().click()
        phones.pageMethods.termsOfservice().click()
        phones.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });

    it('SAMSUNG Galaxy A14', () => {
        cy.linkText().contains('Mobile Phones').click({force: true})
        cy.linkText().contains('Samsung Phones').click({force: true})
        cy.addToCart().eq(1).click()
        cy.selectDropDown('54', '207');
        cy.get('#product_attribute_79_281').click()
        phones.pageMethods.qtyInput().clear().type('5')
        phones.pageMethods.addToCartBtn().click()
        phones.pageMethods.termsOfservice().click()
        phones.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });

    it.only('SAMSUNG Galaxy S21 FE 5G', () => {
        cy.linkText().contains('Mobile Phones').click({force: true})
        cy.linkText().contains('Samsung Phones').click({force: true})
        cy.addToCart().eq(2).click()
        cy.selectDropDown('55', '209');
        cy.get('#product_attribute_56_214').click()
        phones.pageMethods.qtyInput().clear().type('5')
        phones.pageMethods.addToCartBtn().click()
        phones.pageMethods.termsOfservice().click()
        phones.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });
    
});
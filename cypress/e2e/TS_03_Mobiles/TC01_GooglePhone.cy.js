import {MobilePhones} from '../../../pageObject/Mobile/MobilePhones'
const phones = new MobilePhones


describe('Google Phone Basket', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('GOOGLE Pixel Fold & Pixel Watch 4G', () => {
        cy.linkText().contains('Mobile Phones').click({force: true})
        cy.linkText().contains('Google').click({force: true})
        cy.addToCart().eq(0).click()
        cy.selectDropDown('86', '304');
        cy.get('#product_attribute_87_308').click()
        phones.pageMethods.qtyInput().clear().type('5')
        phones.pageMethods.addToCartBtn().click()
        phones.pageMethods.termsOfservice().click()
        phones.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });

    it('GOOGLE Pixel 6a', () => {
        cy.linkText().contains('Mobile Phones').click({force: true})
        cy.linkText().contains('Google').click({force: true})
        cy.addToCart().eq(1).click()
        cy.selectDropDown('88', '310');
        cy.get('#product_attribute_89_316').click()
        phones.pageMethods.qtyInput().clear().type('5')
        phones.pageMethods.addToCartBtn().click()
        phones.pageMethods.termsOfservice().click()
        phones.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });

    it.only('GOOGLE Pixel 7 - 128 GB', () => {
        cy.linkText().contains('Mobile Phones').click({force: true})
        cy.linkText().contains('Google').click({force: true})
        cy.addToCart().eq(2).click()
        cy.selectDropDown('90', '319');
        cy.get('#product_attribute_91_320').click()
        phones.pageMethods.qtyInput().clear().type('5')
        phones.pageMethods.addToCartBtn().click()
        phones.pageMethods.termsOfservice().click()
        phones.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });
    
});
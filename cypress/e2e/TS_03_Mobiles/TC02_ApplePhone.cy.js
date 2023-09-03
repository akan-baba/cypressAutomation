import {MobilePhones} from '../../../pageObject/Mobile/MobilePhones'
const phones = new MobilePhones

describe('Apple Phone basket', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('APPLE iPhone 14 - Midnight', () => {
        cy.linkText().contains('Mobile Phones').click({force: true})
        cy.linkText().contains('Apple').click({force: true})
        cy.addToCart().eq(0).click()
        cy.selectDropDown('80', '284');
        cy.get('#product_attribute_81_289').click()
        phones.pageMethods.qtyInput().clear().type('5')
        phones.pageMethods.addToCartBtn().click()
        phones.pageMethods.termsOfservice().click()
        phones.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard()
    });
    it('APPLE iPhone 12', () => {
        cy.linkText().contains('Mobile Phones').click({force: true})
        cy.linkText().contains('Apple').click({force: true})
        cy.addToCart().eq(1).click()
        cy.selectDropDown('82', '291');
        cy.get('#product_attribute_83_296').click()
        phones.pageMethods.qtyInput().clear().type('5')
        phones.pageMethods.addToCartBtn().click()
        phones.pageMethods.termsOfservice().click()
        phones.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });

    it.only('APPLE iPhone 14 Pro Max', () => {
        cy.linkText().contains('Mobile Phones').click({force: true})
        cy.linkText().contains('Apple').click({force: true})
        cy.addToCart().eq(2).click()
        cy.selectDropDown('84', '297');
        cy.get('#product_attribute_85_301').click()
        phones.pageMethods.qtyInput().clear().type('5')
        phones.pageMethods.addToCartBtn().click()
        phones.pageMethods.termsOfservice().click()
        phones.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });
    
});
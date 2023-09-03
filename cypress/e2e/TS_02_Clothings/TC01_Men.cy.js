
import {Apparel} from '../../../pageObject/Clothings/Men&womensClothings'
const cloths = new Apparel


describe('Mens Clothings Basket', () => {
     beforeEach(() => {
        cy.visit('/')
     });
    it('Cutaway Collar', () => {
        cy.linkText().contains('Clothings').click({ force: true })
        cy.linkText().contains(' Men Clothings').click({ force: true })
        cy.addToCart().eq(0).click()
        cy.selectDropDown('46', '165');
        cy.selectDropDown('47', '169');
        cloths.pageMethods.qtyInput().clear().type('5')
        cloths.pageMethods.addToCartBtn().click()
        cloths.pageMethods.termsOfservice().click()
        cloths.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard()
    });

    it('Khaki Seersucker', () => {
        cy.linkText().contains('Clothings').click({ force: true })
        cy.linkText().contains(' Men Clothings').click({ force: true })
        cy.addToCart().eq(1).click()
        cy.selectDropDown('13','34');
        cy.selectDropDown('41','143');
        cloths.pageMethods.qtyInput().clear().type('5')
        cloths.pageMethods.addToCartBtn().click()
        cloths.pageMethods.termsOfservice().click()
        cloths.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard()
    });

    it('Reversible Horseferry Check Belt', () => {
        cy.linkText().contains('Clothings').click({ force: true })
        cy.linkText().contains(' Men Clothings').click({ force: true })
        cy.addToCart().eq(2).click()
        cy.selectDropDown('44','158');
        cy.selectDropDown('45','161');
        cloths.pageMethods.qtyInput().clear().type('5')
        cloths.pageMethods.addToCartBtn().click()
        cloths.pageMethods.termsOfservice().click()
        cloths.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard()
    });

    it('Short Sleeve Oxford Shirt', () => {
        cy.linkText().contains('Clothings').click({ force: true })
        cy.linkText().contains(' Men Clothings').click({ force: true })
        cy.addToCart().eq(3).click()
        cy.selectDropDown('42','148');
        cy.selectDropDown('43','152');
        cloths.pageMethods.qtyInput().clear().type('5')
        cloths.pageMethods.addToCartBtn().click()
        cloths.pageMethods.termsOfservice().click()
        cloths.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard()
    });

    it('Tailored Fit Easy Iron Pure Cotton Shirt', () => {
        cy.linkText().contains('Clothings').click({ force: true })
        cy.linkText().contains(' Men Clothings').click({ force: true })
        cy.addToCart().eq(4).click()
        cy.selectDropDown('48','177');
        cy.selectDropDown('49','182');
        cloths.pageMethods.qtyInput().clear().type('5')
        cloths.pageMethods.addToCartBtn().click()
        cloths.pageMethods.termsOfservice().click()
        cloths.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard()
    });

    it('Tailored Fit Blonde Camel Suit', () => {
        cy.linkText().contains('Clothings').click({ force: true })
        cy.linkText().contains(' Men Clothings').click({ force: true })
        cy.addToCart().eq(5).click()
        cy.selectDropDown('50','188');
        cy.selectDropDown('51','195');
        cloths.pageMethods.qtyInput().clear().type('5')
        cloths.pageMethods.addToCartBtn().click()
        cloths.pageMethods.termsOfservice().click()
        cloths.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard()
    });
    
});
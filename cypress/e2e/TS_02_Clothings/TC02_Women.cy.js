import {Apparel} from '../../../pageObject/Clothings/Men&womensClothings'
const cloths = new Apparel

describe('Womens Clothings Basket', () => {
    beforeEach(() => {
        cy.visit('/')
     });
    it('BROWN PLISSE FRILL HEM SLIP MIDI DRESS', () => {
        cy.linkText().contains('Clothings').click({ force: true })
        cy.linkText().contains('Womens Clothing').click({ force: true })
        cy.addToCart().eq(0).click() 
        cy.selectDropDown('57', '215');
        cy.selectDropDown('58', '221');
        cloths.pageMethods.qtyInput().clear().type('5')
        cloths.pageMethods.addToCartBtn().click()
        cloths.pageMethods.termsOfservice().click()
        cloths.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard()
    });

    it('Nike Tailwind Loose Short-Sleeve', () => {
        cy.linkText().contains('Clothings').click({ force: true })
        cy.linkText().contains('Womens Clothing').click({ force: true })
        cy.addToCart().eq(2).click() 
        cy.selectDropDown('11', '28');
        cloths.pageMethods.qtyInput().clear().type('5')
        cloths.pageMethods.addToCartBtn().click()
        cloths.pageMethods.termsOfservice().click()
        cloths.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard()
    });

    it('Oversized Women T-Shirt', () => {
        cy.linkText().contains('Clothings').click({ force: true })
        cy.linkText().contains('Womens Clothing').click({ force: true })
        cy.addToCart().eq(3).click() 
        cy.selectDropDown('39', '133');
        cy.selectDropDown('40', '138');
        cloths.pageMethods.qtyInput().clear().type('5')
        cloths.pageMethods.addToCartBtn().click()
        cloths.pageMethods.termsOfservice().click()
        cloths.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard()
    });
    it('Jersey Round Neck Midi Tiered Dress', () => {
        cy.linkText().contains('Clothings').click({ force: true })
        cy.linkText().contains('Womens Clothing').click({ force: true })
        cy.addToCart().eq(4).click() 
        cy.selectDropDown('37', '121');
        cy.selectDropDown('38', '127');
        cloths.pageMethods.qtyInput().clear().type('5')
        cloths.pageMethods.addToCartBtn().click()
        cloths.pageMethods.termsOfservice().click()
        cloths.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard()
    });

    it('Femme tailored twill suit blazer and trousers', () => {
        cy.linkText().contains('Clothings').click({ force: true })
        cy.linkText().contains('Womens Clothing').click({ force: true })
        cy.addToCart().eq(5).click() 
        cy.selectDropDown('59','225');
        cy.selectDropDown('60','229');
        cloths.pageMethods.qtyInput().clear().type('5')
        cloths.pageMethods.addToCartBtn().click()
        cloths.pageMethods.termsOfservice().click()
        cloths.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard()
    });
});
import {Mens_WomenShoes} from '../../../pageObject/Shoes/Mens_WomenShoes'
const shoes = new Mens_WomenShoes


describe('Womens shoes basket', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('Croc Ankle Strap Stiletto Heel', () => {
        cy.linkText().contains('Clothings').click({force: true})
        cy.linkText().contains(' Womens Shoes ').click({force: true})
        cy.addToCart().eq(0).click()
        cy.get('#product_attribute_126_466').click()
        cy.selectDropDown('127', '469');
        shoes.pageMethods.qtyInput().clear().type('5')
        shoes.pageMethods.addToCartBtn().click()
        shoes.pageMethods.termsOfservice().click()
        shoes.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });

    it('Paradox London Fran Wide Fit Block Heel', () => {
        cy.linkText().contains('Clothings').click({force: true})
        cy.linkText().contains(' Womens Shoes ').click({force: true})
        cy.addToCart().eq(1).click()
        cy.selectDropDown('130', '481');
        cy.selectDropDown('131', '487');
        shoes.pageMethods.qtyInput().clear().type('5')
        shoes.pageMethods.addToCartBtn().click()
        shoes.pageMethods.termsOfservice().click()
        shoes.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });

    it('Forever Comfort® Chunky Loafers', () => {
        cy.linkText().contains('Clothings').click({force: true})
        cy.linkText().contains(' Womens Shoes ').click({force: true})
        cy.addToCart().eq(2).click()
        cy.get('#product_attribute_128_475').click()
        cy.selectDropDown('129', '477');
        shoes.pageMethods.qtyInput().clear().type('5')
        shoes.pageMethods.addToCartBtn().click()
        shoes.pageMethods.termsOfservice().click()
        shoes.pageMethods.checkOut().click()
        cy.guestCheckOutCreditCard() 
    });
    
});
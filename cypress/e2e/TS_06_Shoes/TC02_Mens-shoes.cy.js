import {Mens_WomenShoes} from '../../../pageObject/Shoes/Mens_WomenShoes'
const shoes = new Mens_WomenShoes

describe('Mens Shoes Basket', () => {
    beforeEach(() => {
        cy.visit('/')
    });
   it('Leather Brogue Casual Boots', () => {
    cy.linkText().contains('Clothings').click({force: true})
    cy.linkText().contains('Mens Shoes').click({force: true})
    cy.addToCart().eq(0).click()
    cy.get('#product_attribute_121_443').click()
    cy.selectDropDown('120', '438');
    shoes.pageMethods.qtyInput().clear().type('5')
    shoes.pageMethods.addToCartBtn().click()
    shoes.pageMethods.termsOfservice().click()
    shoes.pageMethods.checkOut().click()
    cy.guestCheckOutCreditCard() 
   });

   it('Leather Casual Boots', () => {
    cy.linkText().contains('Clothings').click({force: true})
    cy.linkText().contains('Mens Shoes').click({force: true})
    cy.addToCart().eq(1).click()
    cy.get('#product_attribute_123_452').click()
    cy.selectDropDown('122', '447');
    shoes.pageMethods.qtyInput().clear().type('5')
    shoes.pageMethods.addToCartBtn().click()
    shoes.pageMethods.termsOfservice().click()
    shoes.pageMethods.checkOut().click()
    cy.guestCheckOutCreditCard() 
   });

   it('Leather Trisole Brogues', () => {
    cy.linkText().contains('Clothings').click({force: true})
    cy.linkText().contains('Mens Shoes').click({force: true})
    cy.addToCart().eq(2).click()
    cy.get('#product_attribute_125_462').click()
    cy.selectDropDown('124', '455');
    shoes.pageMethods.qtyInput().clear().type('5')
    shoes.pageMethods.addToCartBtn().click()
    shoes.pageMethods.termsOfservice().click()
    shoes.pageMethods.checkOut().click()
    cy.guestCheckOutCreditCard() 
   });
    
});
import {Desktops} from '../../../pageObject/Computers/DesktopPages'
const desktopPage = new Desktops


describe('Laptop Basket', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('Apple MacBook Pro 13-inch', () => {
        cy.linkText().contains('Computers').trigger('mouseover', { force: true })
        cy.linkText().contains('Laptops').click({ force: true })
        cy.addToCart().eq(0).click() 
        cy.selectDropDown('22', '63');
        cy.selectDropDown('23', '67')
        cy.selectDropDown('24', '72')
        cy.get('#product_enteredQuantity_4').type('5');
        cy.get('#add-to-cart-button-4').click()
        desktopPage.pageMethods.termsoFservice().click({force: true});
        desktopPage.pageMethods.checkOutButton().click()
        cy.guestCheckOutCreditCard()
    });

    it('Asus N551JK-XO076H Laptop', () => {
        cy.linkText().contains('Computers').trigger('mouseover', { force: true })
        cy.linkText().contains('Laptops').click({ force: true })
        cy.addToCart().eq(1).click() 
        cy.selectDropDown('25', '77');
        cy.selectDropDown('26', '80')
        cy.selectDropDown('27', '85')
        cy.get('#product_enteredQuantity_5').type('5');
        cy.get('#add-to-cart-button-5').click()
        desktopPage.pageMethods.termsoFservice().click({force: true});
        desktopPage.pageMethods.checkOutButton().click()
        cy.guestCheckOutCreditCard()
    });
    it('HP Envy 6-1180ca 15.6-Inch Sleekbook', () => {
        cy.linkText().contains('Computers').trigger('mouseover', { force: true })
        cy.linkText().contains('Laptops').click({ force: true })
        cy.addToCart().eq(2).click() 
        cy.selectDropDown('34', '111');
        cy.selectDropDown('35', '115')
        cy.get('#product_enteredQuantity_8').type('5');
        cy.get('#add-to-cart-button-8').click()
        desktopPage.pageMethods.termsoFservice().click({force: true});
        desktopPage.pageMethods.checkOutButton().click()
        cy.guestCheckOutCreditCard()
    });

    it('HP Spectre XT Pro UltraBook', () => {
        cy.linkText().contains('Computers').trigger('mouseover', { force: true })
        cy.linkText().contains('Laptops').click({ force: true })
        cy.addToCart().eq(3).click() 
        desktopPage.pageMethods.termsoFservice().click({force: true});
        desktopPage.pageMethods.checkOutButton().click()
        cy.guestCheckOutCreditCard()
    });

    it('Lenovo Thinkpad X1 Carbon Laptop', () => {
        cy.linkText().contains('Computers').trigger('mouseover', { force: true })
        cy.linkText().contains('Laptops').click({ force: true })
        cy.addToCart().eq(4).click() 
        desktopPage.pageMethods.termsoFservice().click({force: true});
        desktopPage.pageMethods.checkOutButton().click()
        cy.guestCheckOutCreditCard()
    });

    it('Samsung Series 9 NP900X4C Premium', () => {
        cy.linkText().contains('Computers').trigger('mouseover', { force: true })
        cy.linkText().contains('Laptops').click({ force: true })
        cy.addToCart().eq(5).click() 
        desktopPage.pageMethods.termsoFservice().click({force: true});
        desktopPage.pageMethods.checkOutButton().click()
        cy.guestCheckOutCreditCard()
    });
});
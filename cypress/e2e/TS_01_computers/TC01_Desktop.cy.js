import {Desktops} from '../../../pageObject/Computers/desktopPages'
const desktopPage = new Desktops

describe('Desktops Computer basket', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Lenovo IdeaCentre', () => {
        cy.linkText().contains('Computers').click({ force: true })
        cy.linkText().contains('Desktops PCs').click({ force: true })
        cy.addToCart().eq(0).click()
        cy.selectDropDown('33', '106');
        cy.selectDropDown('102', '362')
        cy.selectDropDown('103', '366')
        cy.get('#product_attribute_104_370').click();
        cy.get('#add-to-cart-button-3').click()
        desktopPage.pageMethods.termsoFservice().click({force: true});
        desktopPage.pageMethods.checkOutButton().click()
        cy.guestCheckOutCreditCard()
    });

    it('Acer Aspire XC-840 ', () => {
        cy.linkText().contains('Computers').click({ force: true })
        cy.linkText().contains('Desktops PCs').click({ force: true })
        cy.addToCart().eq(1).click()
        cy.selectDropDown('98', '346');
        cy.selectDropDown('99', '350')
        cy.selectDropDown('100', '354')
        cy.get('#product_attribute_101_360').click();
        cy.get('#add-to-cart-button-46').click()
        desktopPage.pageMethods.termsoFservice().click({force: true});
        desktopPage.pageMethods.checkOutButton().click()
        cy.guestCheckOutCreditCard()
    });
    it('HP Pavilion 27-ca2014na', () => {
        cy.linkText().contains('Computers').trigger('mouseover', { force: true })
        cy.linkText().contains('Desktops').click({ force: true })
        cy.addToCart().eq(2).click()
        cy.selectDropDown('17', '49');
        cy.selectDropDown('18', '53')
        cy.selectDropDown('19', '56')
        cy.get('#product_attribute_21_60').click()
        cy.get('#product_attribute_105_375').click();
        cy.get('#add-to-cart-button-47').click()
        desktopPage.pageMethods.termsoFservice().click({force: true});
        desktopPage.pageMethods.checkOutButton().click()
        cy.guestCheckOutCreditCard()
     });

     it('Lenovo IdeaCentre 3', () => {
        cy.linkText().contains('Computers').trigger('mouseover', { force: true })
        cy.linkText().contains('Desktops').click({ force: true })
        cy.addToCart().eq(3).click()
        cy.selectDropDown('28', '88');
        cy.selectDropDown('29', '91')
        cy.selectDropDown('30', '95')
        cy.get('#product_attribute_106_379').click();
        cy.get('#add-to-cart-button-48').click()
        desktopPage.pageMethods.termsoFservice().click({force: true});
        desktopPage.pageMethods.checkOutButton().click()
        cy.guestCheckOutCreditCard()
     });

     it('OMEN by HP 45L Gaming Desktop', () => {
        cy.linkText().contains('Computers').trigger('mouseover', { force: true })
        cy.linkText().contains('Desktops').click({ force: true })
        cy.addToCart().eq(4).click()
        cy.selectDropDown('94', '331');
        cy.selectDropDown('95', '335')
        cy.selectDropDown('96', '339')
        cy.get('#product_attribute_97_343').click();
        cy.get('#add-to-cart-button-73').click()
        desktopPage.pageMethods.termsoFservice().click({force: true});
        desktopPage.pageMethods.checkOutButton().click()
        cy.guestCheckOutCreditCard()
     });

     it('HP Envy TE02-1002na Desktop', () => {
        cy.linkText().contains('Computers').trigger('mouseover', { force: true })
        cy.linkText().contains('Desktops').click({ force: true })
        cy.addToCart().eq(5).click()
        cy.selectDropDown('107', '384');
        cy.selectDropDown('108', '388')
        cy.selectDropDown('109', '391')
        cy.get('#product_attribute_110_395').click();
        cy.get('#add-to-cart-button-74').click()
        desktopPage.pageMethods.termsoFservice().click({force: true});
        desktopPage.pageMethods.checkOutButton().click()
        cy.guestCheckOutCreditCard()
     });

});

export class Desktops {

    webLocators ={
        termsoFservice:'#termsofservice',
        checkOutButton:'#checkout'
    }

    pageMethods = {
        termsoFservice: () => cy.get(this.webLocators.termsoFservice),
        checkOutButton: () => cy.get(this.webLocators.checkOutButton)
    }
}
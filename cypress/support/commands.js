import './common/navLinks&buttons'
import './common/creditCard'
import './common/signinAsGuest'
import './common/guestCheckout'


Cypress.Commands.add('login', () => {
    cy.visit('/')
    cy.get('.ico-login').click()
    cy.get('#Username').type('Barbara_Kautzer85')
    cy.get('#Password').type('red123')
    cy.get("button[class='button-1 login-button']").click()
    
})
import {UserRegisteration} from '../../support/pageObject/registration-login_PO/accountCreation_login'
import { faker } from '@faker-js/faker';
const registration = new UserRegisteration()
const userName = faker.internet.userName();
const email = faker.internet.email();
const firstname = faker.name.firstName();
const lastname = faker.name.lastName();


describe('User Registration', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('User registration with valid details', () => {
        registration.pageMethods.registerLink().click()
        registration.pageMethods.maleGender().click()
        registration.pageMethods.firstNameInput().type(firstname)
        registration.pageMethods.lastNameInput().type(lastname)
        registration.pageMethods.daySelect().select('20')
        registration.pageMethods.monthSelect().select('7')
        registration.pageMethods.yearSelect().select('1940')
        registration.pageMethods.emailInput().type(email)
        registration.pageMethods.userNameInput().type(userName)
        registration.pageMethods.addressInput().type('1234 Main St')
        registration.pageMethods.postCodeInput().type('M16 7RJ')
        registration.pageMethods.countyInput().type('Manchy')
        registration.pageMethods.cityInput().type('Manchester')
        registration.pageMethods.countrySelect().select('235')
        registration.pageMethods.stateSelect().select('626')
        registration.pageMethods.phoneInput().type('123-456-7890')
        registration.pageMethods.passwordInput().type('red123')
        registration.pageMethods.confirmPasswordInput().type('red123')
        registration.pageMethods.policyCheckbox().click()
        registration.pageMethods.registerButton().click()
        registration.pageMethods.successMessage().should('be.visible', 'Your registration completed')
    });

    it('User registration with existing email  ', () => {
        registration.pageMethods.registerLink().click()
        registration.pageMethods.maleGender().click()
        registration.pageMethods.firstNameInput().type(firstname)
        registration.pageMethods.lastNameInput().type(lastname)
        registration.pageMethods.daySelect().select('20')
        registration.pageMethods.monthSelect().select('7')
        registration.pageMethods.yearSelect().select('1940')
        registration.pageMethods.emailInput().type('Spencer_Welch@gmail.com')
        registration.pageMethods.userNameInput().type('Marty.Hoppe')
        registration.pageMethods.addressInput().type('1234 Main St')
        registration.pageMethods.postCodeInput().type('M16 7RJ')
        registration.pageMethods.countyInput().type('Manchy')
        registration.pageMethods.cityInput().type('Manchester')
        registration.pageMethods.countrySelect().select('235')
        registration.pageMethods.stateSelect().select('626')
        registration.pageMethods.phoneInput().type('123-456-7890')
        registration.pageMethods.passwordInput().type('red123')
        registration.pageMethods.confirmPasswordInput().type('red123')
        registration.pageMethods.policyCheckbox().click()
        registration.pageMethods.registerButton().click()
    });
    
});
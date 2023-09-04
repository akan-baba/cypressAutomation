import {UserRegisteration} from '../../../pageObject/registration-login_PO/accountCreation_login'
const registration = new UserRegisteration()



describe('User login', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it.only('User login with valid credentials', () => {
        registration.pageMethods.loginLink().click()
        registration.pageMethods.loginUsername().type('Barbara_Kautzer85')
        registration.pageMethods.loginPwd().type('red123')
        registration.pageMethods.loginBtn().click()
        registration.pageMethods.logOutBtn().click()
    });

    it('User login with invalid password', () => {
        registration.pageMethods.loginLink().click()
        registration.pageMethods.loginUsername().type('Barbara_Kautzer85')
        registration.pageMethods.loginPwd().type('xxxx')
        registration.pageMethods.loginBtn().click()
        registration.pageMethods.loginErrorMessage()
       
    });

    it('User login with invalid username', () => {
        registration.pageMethods.loginLink().click()
        registration.pageMethods.loginUsername().type('Barbara_Kaut')
        registration.pageMethods.loginPwd().type('red123')
        registration.pageMethods.loginBtn().click()
        registration.pageMethods.loginErrorMessage()
       
    });

    it('Forgot password', () => {
        registration.pageMethods.loginLink().click()
        registration.pageMethods.pwdRecovery().click()
        registration.pageMethods.recoveryEmail().type('Colleen26@yahoo.com')
        registration.pageMethods.recoveryBtn().click()
        registration.pageMethods.pwdRecoveryMessage()
    });
});
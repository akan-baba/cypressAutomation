
export class UserRegisteration {

    webSelectors = {
        //--------Registration page selectors--------

        registerLink: '.ico-register',
        maleGender: '#gender-male',
        femaleGender: '#gender-female',
        firstNameInput: '#FirstName',
        lastNameInput: '#LastName',
        daySelect: "select[name='DateOfBirthDay']",
        monthSelect: "select[name='DateOfBirthMonth']",
        yearSelect: "select[name='DateOfBirthYear']",
        emailInput: '#Email',
        userNameInput: '#Username',
        addressInput: '#StreetAddress',
        postCodeInput: '#ZipPostalCode',
        countyInput: '#County',
        cityInput: '#City',
        countrySelect: '#CountryId',
        stateSelect: "#StateProvinceId",
        phoneInput: '#Phone',
        passwordInput: '#Password',
        confirmPasswordInput: '#ConfirmPassword',
        policyCheckbox: "#accept-consent",
        registerButton: '#register-button',
        successMessage: '.result',
        errorMessage: '.message-error > ul > li',

        //...........login page selectors--------------------

        loginLink: '.ico-login',
        loginUsername: '#Username',
        loginPwd:'#Password',
        loginBtn: "button[class='button-1 login-button']",
        logOutBtn:'.ico-logout',
        pwdRecovery: "a[href='/passwordrecovery']",
        recoveryEmail: '#Email',
        recoveryBtn: "button[name='send-email']",
        loginErrorMessage:'.message-error',
        pwdRecoveryMessage:'.content'

    }

    pageMethods = {

        registerLink: () => cy.get(this.webSelectors.registerLink),
        maleGender: () => cy.get(this.webSelectors.maleGender),
        femaleGender: () => cy.get(this.webLocators.femaleGender),
        firstNameInput: () => cy.get(this.webSelectors.firstNameInput),
        lastNameInput: () => cy.get(this.webSelectors.lastNameInput),
        daySelect: () => cy.get(this.webSelectors.daySelect),
        monthSelect: () => cy.get(this.webSelectors.daySelect),
        yearSelect: () => cy.get(this.webSelectors.yearSelect),
        emailInput: () => cy.get(this.webSelectors.emailInput),
        userNameInput: () => cy.get(this.webSelectors.userNameInput),
        addressInput: () => cy.get(this.webSelectors.addressInput),
        postCodeInput: () => cy.get(this.webSelectors.postCodeInput),
        countyInput: () => cy.get(this.webSelectors.countyInput),
        cityInput: () => cy.get(this.webSelectors.cityInput),
        countrySelect: () => cy.get(this.webSelectors.countrySelect),
        stateSelect: () => cy.get(this.webSelectors.stateSelect),
        phoneInput: () => cy.get(this.webSelectors.phoneInput),
        passwordInput: () => cy.get(this.webSelectors.passwordInput),
        confirmPasswordInput: () => cy.get(this.webSelectors.confirmPasswordInput),
        policyCheckbox: () => cy.get(this.webSelectors.policyCheckbox),
        registerButton: () => cy.get(this.webSelectors.registerButton),
        successMessage: () => cy.get(this.webSelectors.successMessage).should('be.visible', 'Your registration completed'),
        errorMessage: () => cy.get(this.webSelectors.errorMessage).should('be.visible', 'The specified email already exists'),
        loginLink: () => cy.get(this.webSelectors.loginLink),
        loginUsername: () => cy.get(this.webSelectors.loginUsername),
        loginPwd:() => cy.get(this.webSelectors.loginPwd),
        loginBtn: () => cy.get(this.webSelectors.loginBtn),
        pwdRecovery: () => cy.get(this.webSelectors.pwdRecovery),
        recoveryEmail: () => cy.get(this.webSelectors.recoveryEmail),
        recoveryBtn: () => cy.get(this.webSelectors.recoveryBtn),
        logOutBtn: ()  => cy.get(this.webSelectors.logOutBtn),
        loginErrorMessage: () => cy.get(this.webSelectors.errorMessage).should('be.visible', 'The credentials provided are incorrect'),
        pwdRecoveryMessage: () => cy.get(this.webSelectors.pwdRecoveryMessage).should('be.visible', 'Email with instructions has been sent to you.')


    }
}
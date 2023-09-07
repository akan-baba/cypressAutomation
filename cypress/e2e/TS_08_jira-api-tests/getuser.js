///<reference types = "cypress" />

describe('Get user', () => {

    it('Jira user', () => {

        cy.request({
            url: 'http://192.168.1.202:8080/rest/api/2/user?username=valerie',
            method: 'GET',
            auth: {
                username: 'akan',
                password: 'red123'
            }
        })
        .its("status").should('eql', 200)
        
    });
    
});

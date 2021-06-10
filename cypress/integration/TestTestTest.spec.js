/// <reference types="Cypress" />
describe('Reg users sing up', () => {

    context('reg users', () => {
    
        it.skip('emai create', () => {
            cy.visit('https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ltmpl=default&gmb=exp&biz=false&hl=en&flowName=GlifWebSignIn&flowEntry=SignUp')
            cy.get('[name="firstName"')
                .type('Test123Test')
                .get('#lastName')
                .type('Perw')
                .wait(4000)


            cy.get('#username')
            // .invoke('val')       // copy field value
            // .then(sometext => { cy.log(sometext)     // copy field value
            cy.get('[name="Passwd"]').type('Test123456!')      //.type(sometext)  paste field value cy.get('#username')
                // })      // close all code copy paste function
                .get('[name="ConfirmPasswd"]')
                .type('Test123456!')
            cy.contains('Next').click()





        })

        // beforeEach('Podmena otveta about success gegestration', () => {
        //     cy.intercept('https://api-test.buildgcp.com/api/',
        //     {fixture: 'ConfirmRespons/succeess.json'})
        // })

        it('Log In', () => {

            cy.viewport(1700, 1000)
            cy.visit('https://test.buildgcp.com/')
                .get('[name="login"]')
                .type('test-user')
                .get('[name="password"]')
                .type('aA123123!')
            cy.contains('Log in', { matchCase: false })
                .click()
                .wait(10000)
            cy.visit('https://test.buildgcp.com/users')
            cy.contains('Add User', { matchCase: false })
                .click()
                .get('.MuiSelect-root').click().wait(3000)
                .get('[data-value="2"]').click()
                .get('[autocomplete="new-password"]').eq('1')
                .type('Test')
                .get('[autocomplete="new-password"]').eq('2')
                .type('Auto')
                .get('[111111autocomplete="new-password"]').eq('3')
                .type('1012121q2test12010@gmail.com')
                .get('[autocomplete="new-password"]').eq('3')
                .type('1010q2test12010@gmail.com')
                .get('[autocomplete="new-password"]').eq('4')
                .type('234567892')
                .get('[autocomplete="new-password"][autocomplete="new-password"]').eq('5')
                .type('Test1234567!')
            cy.contains('Create User', { matchCase: false })
                .click()




        })

    })
})

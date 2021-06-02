/// <reference types="Cypress" />

let inboxId = "2b00817e-be99-4c05-86e7-195e3e2ac125";
let value
const pom = {}
const password = "test-password";
let emailAddress;
let i = Math.ceil(Math.random()*100000)


describe('Reg users sing up', () => {
              context('reg users', () => {

        // .get('#lastName').type('Perw').wait(4000)
        // .invoke('val')                                     // copy field value
        // .then(sometext => { cy.log(sometext)               // copy field value
        // cy.get('[name="Passwd"]').type(sometext)      //.type(sometext)  paste field value cy.get('#username')
        // })                                                 // close all code copy paste function



            // it('Log In Gulf', () => {

            //     cy.viewport(1700, 1000)
            //     cy.visit('https://test.buildgcp.com/')
            //         .get('[name="login"]')
            //         .type('test-user')
            //         .get('[name="password"]')
            //         .type('aA123123!')
            //     cy.contains('Log in', { matchCase: false })
            //         .click()
            //         .wait(10000)
            //     cy.visit('https://test.buildgcp.com/users')
            //     cy.contains('Add User', { matchCase: false })
            //         .click()
            //         .get('.MuiSelect-root').click().wait(3000)
            //         .get('[data-value="2"]').click()
            //         .get('[autocomplete="new-password"]').eq('1')
            //         .type('Test')
            //         .get('[autocomplete="new-password"]').eq('2')
            //         .type('Auto')
            //     // cy.createInbox().then(inbox => {
            //     //     assert.isDefined(inbox)
            //     //     inboxId = inbox.id
            //     //     emailAddress = inbox.emailAddress;
            //     // sign up with inbox email address and the password
            //     cy.get('[autocomplete="new-password"]').eq('3').type(i + 'test@com.ua');
            //     cy.get('[autocomplete="new-password"]').eq('4').type('234567892')
            //     cy.get('[autocomplete="new-password"][autocomplete="new-password"]').eq('5').type("Test12345!");
            //     cy.contains('Create User', { matchCase: false })
            //         .click() //--->email link emailSLURP Plugin---->
            //     });
            // })
            

            it('read mail', () => {
                // cy.waitForLatestEmail(inboxId, {}).then((email) => {
                //     assert.isDefined(inboxId);
                //     value = /https:\/\/test-usfcr.auth.us-east-1.amazoncognito.com/.exec(email.body);
                //     // value = value.map((value) => value.replace(/["']/g, ''));
                //     cy.wrap(value).as('myLink');
                //     cy.get('@myLink').then((myLink) => {
                //         pom.url = myLink.toString();
                //         cy.visit(pom.url);
                //     })
                // })
                        cy.waitForLatestEmail(inboxId, {}).then((email) => {
                            expect(email.body)
                            .contains('d124sflohj90.cloudfront.net')
                            // cy.wrap('d124sflohj90.cloudfront.net').as('myLink')
                            // cy.get('@myLink').then((myLink) => {
                            //         pom.url = myLink.toString()
                            //         cy.visit(pom.url);
                                // })
                        })
            
            })
})

})
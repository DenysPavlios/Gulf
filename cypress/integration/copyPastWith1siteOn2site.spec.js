<reference types="Cypress" />



describe('', () => {
    context('', () => {
        it('', () => {
            cy.viewport(1700, 1000)
            cy.visit('https://www.google.com.ua/?hl=ru')
                .get('input[name="q"]').type('456')
                .invoke('val').then((value) => {
                    cy.writeFile('cypress/fixtures/users.json', {pass: value})
                }) 
        })
        it('', () => {
            cy.visit('https://www.facebook.com/r.php').then(() => {
                cy.get('input[name="firstname"]').then(lll => {
                    cy.fixture('users').then(({pass}) => {
                        cy.wrap(lll).type(pass)
                    })  
                
                
                })
                })         
        
        })
    })
})
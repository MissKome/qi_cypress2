

// Import commands.js using ES2015 syntax:
import './commands'
import { Faker } from "@faker-js/faker"


// Alternatively you can use CommonJS syntax:
// require('./commands')


beforeEach(() => {
    cy.visit('/')
    cy.get('.wrapper h1').should('be.visible')
    cy.get('a[href*="/input-form-demo"]').should('be.visible').click()
    cy.get('.wrapper h1').should('be.visible')
})

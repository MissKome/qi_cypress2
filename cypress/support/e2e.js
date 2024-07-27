

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')


beforeEach(() => {
    cy.visit('/')
    cy.get('.wrapper h1').should('be.visible')
})

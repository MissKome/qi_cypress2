import {faker} from '@faker-js/faker'

describe('cypress script assignment', () => {

  
    it('using arbitrary data to fill the form', () => {
      cy.get('a[href*="/input-form-demo"]').should('be.visible').click()
      cy.get('.wrapper h1').should('be.visible')
      cy.get('#name').type('Mary Jane')
      cy.get('[name="email"]').eq(1).type('maryjane@gmail.com')
      cy.get('[name="password"]').type('Test123@')
      cy.get('#company').type('Test Inc')
      cy.get('#websitename').type('https://testinc.com')
      cy.get('[name="country"]').select('BE')
      cy.get('[name="city"]').type('Mainland')
      cy.get('[name="address_line1"]').type('Lagos road 1')
      cy.get('[name="address_line2"]').type('Lagos road 2')
      cy.get('#inputState').type('Lagos')
      cy.get('#inputZip').type('102400')
      cy.get('#seleniumform button[type="submit"]').click()

    })

    it('using unique data to fill the form', () => {
        cy.get('a[href*="/input-form-demo"]').should('be.visible').click()
        cy.get('.wrapper h1').should('be.visible')
        cy.get('#name').type(faker.person.fullName())
        cy.get('[name="email"]').eq(1).type(faker.internet.email())
        cy.get('[name="password"]').type(faker.internet.password())
        cy.get('#company').type(faker.company.name())
        cy.get('#websitename').type(faker.internet.domainName())
        cy.get('[name="country"]').select('NG')
        cy.get('[name="city"]').type(faker.location.city())
        cy.get('[name="address_line1"]').type(faker.location.streetAddress())
        cy.get('[name="address_line2"]').type(faker.location.streetAddress())
        cy.get('#inputState').type(faker.location.state())
        cy.get('#inputZip').type(faker.location.zipCode())
        cy.get('#seleniumform button[type="submit"]').click()
      //  cy.on('window:alert', (str) => {
        //     expect(str).to.equal('Save address?');
        //   });
        //   cy.get('#save').click();
        //   cy.get('.wrapper h1').should('be.visible')
  
  })
})
  //do something with the alert
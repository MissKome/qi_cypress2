import {faker} from '@faker-js/faker'

describe ("my assignment on elements locator",  ()=> {
it("using arbitrary data to fill the form", ()=> {
    cy.get('.wrapper h1').should('be.visible')
    cy.get('a[href*="/input-form-demo"]').should('be.visible').click()
    cy.get('.wrapper h1').should('be.visible')
    cy.get('#name').type('John Doe')
    cy.get('[name="email"]').eq(1).type('jondoe@gmail.com')
    cy.get('[name="password"]').type('Windows12345@')
    cy.get('#company').type('Test Company')
    cy.get('#websitename').type('https://test.com')
    cy.get('[name="country"]').select('NG')
    cy.get('[name="city"]').type('Ibeju')
    cy.get('[name="address_line1"]').type('this is my first address')
    cy.get('[name="address_line2"]').type('this is my second address')
    cy.get('#inputState').type('Lagos')
    cy.get('#inputZip').type('100234')
    cy.get('#seleniumform button[type="submit"]').click()  


});

it('using unique data to fill the form', () => {
    cy.get('.wrapper h1').should('be.visible')
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

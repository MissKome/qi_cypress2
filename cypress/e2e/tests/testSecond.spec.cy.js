import {faker} from '@faker-js/faker'
let ell
describe('cypress script assignment', () => {

  before (()=>{
    cy.fixture('elementLocator').then((select) =>{
       ell = select
    })

})
    it('using arbitrary data to fill the form', () => {
            cy.get(ell.pageTitle).should('be.visible')
            cy.get(ell.inputFormOption).should('be.visible').click()
            cy.get(ell.pageTitle).should('be.visible')
            cy.get(ell.nameField).type(ell.name)
            cy.get(ell.emailField).eq(1).type(ell.email)
            cy.get(ell.passwordField).type(ell.password)
            cy.get(ell.companyField).type(ell.company)
            cy.get(ell.websiteNameField).type(ell.website)
            cy.get(ell.countryField).select(ell.country)
            cy.get(ell.cityField).type(ell.city)
            cy.get(ell.address1Field).type(ell.address1)
            cy.get(ell.address2Field).type(ell.address2)
            cy.get(ell.inputStateField).type(ell.state)
            cy.get(ell.inputZipField).type(ell.zipCode)
            cy.get(ell.submitButton).click()  

    })

    it('using unique data to fill the form', () => {
        cy.get(ell.pageTitle).should('be.visible')
        cy.get(ell.inputFormOption).should('be.visible').click()
        cy.get(ell.pageTitle).should('be.visible')
        cy.get(ell.nameField).type(faker.person.fullName())
        cy.get(ell.emailField).eq(1).type(faker.internet.email())
        cy.get(ell.passwordField).type(faker.internet.password())
        cy.get(ell.companyField).type(faker.company.name())
        cy.get(ell.websiteNameField).type(faker.internet.domainName())
        cy.get(ell.countryField).select('NG')
        cy.get(ell.cityField).type(faker.location.city())
        cy.get(ell.address1Field).type(faker.location.streetAddress())
        cy.get(ell.address2Field).type(faker.location.streetAddress())
        cy.get(ell.inputStateField).type(faker.location.state())
        cy.get(ell.inputZipField).type(faker.location.zipCode())
        cy.get(ell.submitButton).click()
   
  })
})

/// <reference types= "Cypress" />

describe('handeling visible and invisible element', function()
{
  it('handeling visible & invisible', function()
  {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('#displayed-text').should('be.visible')
     cy.get('#hide-textbox').click()
     cy.get('#displayed-text').should('not.be.visible')
     cy.get('#show-textbox').click()
     cy.get('#displayed-text').should('be.visible')

  })

})
/// <reference types= "Cypress" />

describe('handeling visible and invisible element', function()
{
  it('handeling visible & invisible', function()
  {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('input[value="radio1"]').check().should('be.checked')
    cy.wait(8000)
    cy.get('input[value="radio2"]').check().should('be.checked')

  })

})
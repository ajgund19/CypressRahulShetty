/// <reference types= "Cypress" />

describe('child browser', function()
{
    it('childBrowser', function()
    {
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.get('#opentab').invoke('removeAttr','target').click() 
       cy.wait(7000)
       cy.url().should('include','rahulshetty')
       cy.wait(3000)
       cy.go('back')

    })
})
/// <reference types= "Cypress" />

describe('child Tab', function()
{
    it('ChildTab', function()
    {
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.get('#opentab').invoke('removeAttr','target').click() 
       cy.wait(1000)
       
       cy.origin('https://www.qaclickacademy.com/',()=>{
        cy.url().should('include','qaclickacademy')
       })
       
       cy.wait(3000)
       
    })
})
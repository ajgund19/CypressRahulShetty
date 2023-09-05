/// <reference types= "Cypress" />
describe('Handeling Mouseover', function(){

    it('Mouseover operation', ()=>
    {
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
 
       cy.get('.mouse-hover-content').invoke('show');
       cy.contains('Top').click();
       cy.url().should('include','top');
    })
    
    it('Mouseover operation', ()=>
    {
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.contains('Top').click({ force: true });
       cy.url().should('include','top');
 
    })
 
})
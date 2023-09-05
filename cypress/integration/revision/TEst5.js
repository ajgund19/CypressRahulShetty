/// <reference types= "Cypress" />



describe ('test', ()=> {

  it(' visible_Invisible_element', function(){
   //cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
   cy.visit(Cypress.env('url'));
   cy.get('#hide-textbox').click();
   cy.get('#displayed-text').should('not.be.visible');

   cy.wait(2000);
   cy.get('#show-textbox').click();
   cy.get('#displayed-text').should('be.visible');
   /*cy.title().then('',(pagetitle)=>{
       pagetitle= title;
      cy.log(pagetitle)
   }) */

   cy.title().should('include','Practice Page');
   
  })

})


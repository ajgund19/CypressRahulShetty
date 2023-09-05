/// <reference types= 'Cypress'/>

describe('checkbox prctice', function(){

  it('select checkbox', ()=>{
   cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
   cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
   cy.wait(2000);
   cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
  // cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked').and('have.value','option2','option3')

   cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked').and('have.value','option2','option3')



  })


})
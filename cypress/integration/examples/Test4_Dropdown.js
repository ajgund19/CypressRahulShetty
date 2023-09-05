/// <reference types= "Cypress" />

describe('Static Dropdown selecting', function()
{
  it('static dropdown selecting', function()
  {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

     // static dropdown
     cy.get('Select').select('option1').should('have.value','option1')

     // dynamic dropdown
     cy.get('#autocomplete').type('Ind')
     cy.get('.ui-menu-item div').each(($el, index, $list) => 
     {
        if($el.text()=='India')
        {
           cy.wrap($el).click()
        }
     })

     cy.get('#autocomplete').should('have.value','India')

  })

})
/// <reference types= "Cypress" />

describe ('dropdown', function(){

    it('abc', function(){

      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      //cy.get('#dropdown-class-example').click();

      cy.get('select').select('option1').should('have.value','option1')

      cy.get('select').select('option2')

      cy.get('#autocomplete').type('ind');

      cy.get('.ui-menu-item-wrapper').each(($el, index, $list) => {
        
        if ($el.text()== 'India') {
          
          cy.wrap($el).click()
        }
      })

      cy.get('#autocomplete').should('have.value','India')
    })


    it.only('2nd time', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('select').select('option1').should('have.value','option1');

        cy.get('select').select('option2');

        cy.get('#autocomplete').type('pak');
        cy.get('.ui-menu-item-wrapper').each(($el, index, $list) => {
            
            if ($el.text() === 'Pakistan') {
              // wrap this element so we can
              // use cypress commands on it
              cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value','Pakistan')

    })

})
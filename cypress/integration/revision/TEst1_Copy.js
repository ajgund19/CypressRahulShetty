/// <reference types= "Cypress" />

describe('My ist test suit',function(){

   it('First test case',function()
 {
  
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(4000);
    cy.get('.product:visible').should('have.length',4).then(function(){

      console.log('Ajit is Practicing')
    })
    cy.get('.products').as('MultiP')
    cy.get('@MultiP').find('.product').eq(2).contains('ADD TO CART').click()

    cy.get('@MultiP').find('.product').each(($el, index, $list) => {
      
         const VegName=$el.find('.product-name').text();
      if (VegName === 'Carrot - 1 Kg') {
        // wrap this element so we can
        // use cypress commands on it
        cy.wrap($el).contains('ADD TO CART').click()
      }
    })

    cy.get('.brand').should('contain','GREENKART').then(function(logotext){

      cy.log(logotext.text())
    })

  })





})


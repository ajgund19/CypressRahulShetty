/// <reference types= 'Cypress' />

describe('practice suit',()=>
{

   it('starting tesxt', function(){

    cy. visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('[class="search-keyword"]').type('ca');
    cy.get('.products').as('productlocator');
    cy.get('@productlocator').find('.product').should('have.length',4)

    cy.get('@productlocator').find('.product').each(($el, index, $list) => {
        
       const productname= $el.find('.product-name').text();
        if (productname === 'Cashews - 1 Kg') {
          
            cy.wrap($el).contains('ADD TO CART').click()
        }
    })
    cy.get('.cart-icon').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.get('.product-name').should('contain',' 1 Kg');
    cy.contains('Place Order').click()


   })


})
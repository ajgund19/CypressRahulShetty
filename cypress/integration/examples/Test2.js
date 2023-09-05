/// <reference types= "Cypress" />

describe('My 2nd test script', function(){

it('my first test case ', function()
{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.products').as('ProductLocator')
    cy.get('@ProductLocator').find('.product').each(($el, index, $list) => {

        const VegName=$el.find('h4.product-name').text()
        if(VegName.includes('Cauliflower'))
        {
            cy.wrap($el).contains('ADD TO CART').click()
        }
    })

    cy.get('.cart-icon').click()
    cy.contains('PROCEED TO CHECKOUT').click()

    cy.get('.product-name').should('have.text','Cauliflower - 1 Kg')

    cy.contains('Place Order').click()


})



})
/// <reference types= "Cypress" />

describe('my first test suit' , function()

{
  it('my first test case', function()
  {

     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    

    // cy.get('search-keyword').type('ca')
     cy.get('.search-keyword').type('ca')
     cy.wait(2000)
     cy.get('.product:visible').should('have.length',4).then(function(){   // use of then function to print in deops consol

        console.log('Ajit is Practicing')
     })

    

     //parent child chaining
     cy.get('.products').as('productLocator') // alias commond is used to store locator
     cy.get('@productLocator').find('.product').should('have.length',4)

      // use of each function for dynamic clicking.
       
     cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

     cy.get('@productLocator').find('.product').each(($el, index, $list) => {

      const VegText= $el.find('h4.product-name').text()
      if(VegText.includes('Carrot'))
      {
        cy.wrap($el).contains('ADD TO CART').click()
      }
    })

    // assert if logo text is correctly displayed or not
    cy.get('.brand').should('have.text','GREENKART')

    // Printing the element in log

    cy.get('.brand').then(function(logotext)
    {
      cy.log(logotext.text())

    })

    // javascript print
    console.log('ajit')

  })

  

})


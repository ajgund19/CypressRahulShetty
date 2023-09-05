/// <reference types= "Cypress" />

describe('handeling of child browser', function(){

  it('verify the element of chuld browser',()=>{

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#opentab').then(function(el){

      const url=el.prop('href');
      cy.visit(url)
      cy.origin(url,()=>{
        cy.get('div .sub-menu-bar a[href="about.html"]').click()



      })

      cy.go('back');

    })
  })



})
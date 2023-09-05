/// <reference types= "Cypress" />


const userData= require('C:/Users/ajit.gund/CypressAutomation/cypress/fixtures/example.json')
describe('framework',()=>{

  beforeEach(()=>{
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
  })

  it('launch',()=>{
   
   cy.get("input[name='name']:nth-child(2)").type(userData.name);
   cy.get('select').select(userData.gender)
   cy.get("input[name='name']:nth-child(1)").should('have.value',userData.name)
   cy.get('#inlineRadio3').should("be.disabled")

   cy.xpath("//a[contains(text(),'Shop')]").click();

   cy.selectproduct('Samsung Note 8')

  })

    // create array of product in fixture to use for each common of javascript
  it('multipal product select by using javascript forEach commond',()=>{  
    //cy.selectproduct('')
    cy.xpath("//a[contains(text(),'Shop')]").click();
    userData.ProductName.forEach(function(element){
      cy.selectproduct(element)
    });

  })

})
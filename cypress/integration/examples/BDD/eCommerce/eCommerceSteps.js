const { Given, When, Then,  } = require("@badeball/cypress-cucumber-preprocessor");
//import HomePageObject from '../../cypress/integration/PageObjectModule/Homepage.js'
//import productpageobject from '../../cypress/integration/PageObjectModule/Productpage.js'
const userData = require('C:/Users/ajit.gund/CypressAutomation/cypress/fixtures/example.json')
import HomePageObject from 'C:/Users/ajit.gund/CypressAutomation/cypress/integration/PageObjectModule/Homepage.js'
import productpageobject from 'C:/Users/ajit.gund/CypressAutomation/cypress/integration/PageObjectModule/Productpage.js';
//    Given I open Ecommerce page

const homepage = new HomePageObject()
const product = new productpageobject()
Given('I open Ecommerce page',()=>{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

//    When I add item to cart 
When('I add item to cart',function(){
    
    homepage.GetShop().click();
    userData.ProductName.forEach(function (element) {
      cy.selectproduct(element);
    });
    product.clickOnCheckout().click();
})



//Then select country ad verify the Succesfull message
Then('select country ad verify the Succesfull message',()=>{
  var sum = 0;
 product.getprice().each(($el, index, $list) => 
 {
   const ammount = $el.text();
   cy.log(ammount);
   var FinalAmmount = ammount.split(" ");
   FinalAmmount = FinalAmmount[1].trim();
   cy.log(FinalAmmount);
   sum = Number(sum) + Number(FinalAmmount);
  }).then(() => 
  {
    cy.log(sum)
  })
  product.getTotalPrice().then(function (element)
  {
    var total = element.text();
    total = total.split(" ");
    total = total[1].trim();
    expect(Number(total)).to.equal(sum)
  })


  product.clickOnCheckout().click();
  product.FillCountry().type(userData.country);
  cy.wait(3000)
  product.getindia().click();
  product.getcheckbox().click({ force: true });
  product.clicksubmit().click();
  product.getalert().contains('Success! Thank you! Your order will be delivered in next few weeks')
})

//When I fill the form details
When('I fill the form details',()=>{
  homepage.getEditBox().type(userData.name);
  homepage.GetGender().select(userData.gender)
})

//Then Validate the behaviour
Then('Validate the behaviour',()=>{
  homepage.getTwoWayDataBinding().should('have.value', userData.name)
  homepage.GetEntrepreneaur().should("be.disabled")
  homepage.getEditBox().should('have.attr','minlength','2');
})
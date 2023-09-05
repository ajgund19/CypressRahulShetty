/// <reference types= "Cypress" />
//import cypressConfig from '../../../cypress.config';
import HomePageObject from '../../integration/PageObjectModule/Homepage'
import productpageobject from '../../integration/PageObjectModule/Productpage'

const userData = require('C:/Users/ajit.gund/CypressAutomation/cypress/fixtures/example.json')
describe('framework using page object module', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    //cy.visit(cypress.env('url')+ "/angularpractice/")  // to access env veriable from config.js file
  })

  it('launch', () => {
    const homepage = new HomePageObject()

    homepage.getEditBox().type(userData.name);
    homepage.GetGender().select(userData.gender)
    homepage.getTwoWayDataBinding().should('have.value', userData.name)
    homepage.GetEntrepreneaur().should("be.disabled")
    homepage.getEditBox().should('have.attr','minlength','2');
    homepage.GetShop().click();
    cy.selectproduct('Samsung Note 8')
  })

  // create array of product in fixture to use for each common of javascript
  it('multipal product select by using javascript forEach commond', () => {
    const homepage = new HomePageObject()
    const product = new productpageobject()
    homepage.GetShop().click();
    userData.ProductName.forEach(function (element) {
      cy.selectproduct(element);
    });

    product.clickOnCheckout().click();
    var sum = 0;
    product.getprice().each(($el, index, $list) => {

      const ammount = $el.text();
      cy.log(ammount);
      var FinalAmmount = ammount.split(" ");
      FinalAmmount = FinalAmmount[1].trim();
      cy.log(FinalAmmount);
      sum = Number(sum) + Number(FinalAmmount);
    }).then(() => {
      cy.log(sum)
    })
    product.getTotalPrice().then(function (element) {
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
    //product.getcheckbox().shadow().find
    product.clicksubmit().click();
    product.getalert().contains('Success! Thank you! Your order will be delivered in next few weeks')
  })

})
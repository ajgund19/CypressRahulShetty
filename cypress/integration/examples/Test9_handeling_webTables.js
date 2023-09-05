/// <reference types= "Cypress" />
describe('Handeling webtables', function(){

   it('Vaerify that price is 15 or not for pythan cource', ()=>
   {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

           const cource= $el.text();
          if (cource.includes('Python')) {
          
              cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){

                 const courceprice = price.text();
                 expect(courceprice).to.equal('25')
              }) 
                        
            } 
        })


   })



})
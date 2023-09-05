
describe('new Tabp',()=>{

   it('new tab in same window',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('#opentab').invoke('removeAttr', 'target').click();
    
     cy.url().should('include','qaclickacademy')
     cy.wait(4000);
    cy.go('back')

   })

})
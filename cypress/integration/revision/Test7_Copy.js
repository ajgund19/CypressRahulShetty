/// <reference types= "Cypress" />

describe('Alert', function(){

  it('alert test', ()=>{

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#alertbtn').click();  //alrt handle

    cy.on('window:alert',(str)=>{

        expect(str).to.equal("Hello , share this practice page and share your knowledge")
    })

   cy.get('#confirmbtn').click();
   cy.on('window:conform', (str) =>{

    expect(str).to.equal("Hello , Are you sure you want to confirm?")
   })

  })

})

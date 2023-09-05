/// <reference types= "Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('all testing concept', function(){

  beforeEach('',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  })

    it('checkbox',()=>{
      cy.get('#checkBoxOption1').check()
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1');
      cy.get('#checkBoxOption2').check().should('be.checked');
    })

    it('Static Dropbox',()=>{
        cy.get('Select').select('Option1').should('have.value','option1');
        cy.get('select').select('Option2').should('have.value','option2');
        cy.get('select').select('Option3').should('have.value','option3');
    })

    it('Dynamic dropdon',function(){
        cy.get('#autocomplete').type('ja');
        cy.get('.ui-menu-item').each(($el, index, $list) => {
            const country=$el.text();
            if (country.includes('Japan')) {
               cy.wrap($el).click()
            }
        })
    })

    it('radiobutton',()=>{
        cy.get('input[value="radio1"]').check().should('have.value','radio1');
        cy.get('input[value="radio2"]').click();
    })

    it('Visible and invisible element handeling',()=>{
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');
    })

    it('Alert and conform popup', function(){
       cy.get('#alertbtn').click();
       cy.on('window:alert', (str)=>{
       expect(str).to.equal('Hello , share this practice page and share your knowledge');
       })

       cy.get('#confirmbtn').click();
       cy.on('window:confirm',(str)=>{
       expect(str).to.equal('Hello , Are you sure you want to confirm?');
       })
    })
    
    it('handeling of child tab', function(){
       cy.get('#opentab').invoke('removeAttr','target').click();
       cy.origin('https://www.qaclickacademy.com', () => {
        cy.url().should('include','qaclickacademy')
         cy.contains('Blog').click();
         cy.go('back');
        })       
    })
    
    it('Mouse over action',()=>{
      cy.get('.mouse-hover-content').invoke('show');
      cy.contains('Top').click();
      cy.url().should('include','top')

    })

    it('iframe',()=>{
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find('a[href*="consulting"]').eq(0).click()
    })

    it('web tables handeling',()=>{
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            const course=$el.text(); 
            if(course.includes('Learn SQL in Practical'))   {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                  const CourcePrice= price.text();
                  expect(CourcePrice).to.equal('25')

                })
            }               
            
         })
    })
})
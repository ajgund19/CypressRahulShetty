/// <reference types= "Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('handeling of child browser', function(){

    it('verify the element of chuld browser',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        cy.wait(2000)
        cy.iframe().find("div[class*='pricing-header']").should('have.length',2)
        
    })
})
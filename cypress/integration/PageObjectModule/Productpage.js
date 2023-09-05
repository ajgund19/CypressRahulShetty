class productpageobject
{
    getprice()
    {
        return cy.get('tr td:nth-child(4) strong')
    }

    FillCountry()
    {
       return cy.get('#country')
    }

    clickOnCheckout()
    {
      return  cy.contains('Checkout')
    }

    getTotalPrice()
    {
      return  cy.get('td h3 strong')
    }

    getindia()
    {
    return cy.get('.suggestions > ul > li > a')
    }

    getcheckbox()
    {
     return  cy.get('#checkbox2')
    }
    clicksubmit()
    {
        return cy.get('[type="submit"]')
    }
    getalert()
    {
        return cy.get('.alert')
    }

}

export default productpageobject
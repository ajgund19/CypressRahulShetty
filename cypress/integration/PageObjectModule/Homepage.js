class HomePageObject
{
    getEditBox()
    {
        return cy.get("input[name='name']:nth-child(2)")
    }
  
    getTwoWayDataBinding()
    {
        return cy.get("input[name='name']:nth-child(1)")
    }

    GetGender()
    {
        return cy.get('select')
    }

    GetEntrepreneaur()
    {
        return cy.get('#inlineRadio3')
    }
    GetShop()
    {
        return cy.xpath("//a[contains(text(),'Shop')]")
    }
 
   
}

export default HomePageObject;
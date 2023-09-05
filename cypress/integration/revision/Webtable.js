
describe('',()=>{


   it('',()=>{

        cy.visit('https://www.dezlearn.com/webtable-example/')

        cy.get('tr td:nth-child(1)').each(($el, index, $list) => 
       {
          const Name=$el.text();
          if (Name.includes('Mayur Deshmukh')) 
          {
             
            cy.get('tr td:nth-child(1)').eq(index).next().then(function(Mail)
            {
              const MailID= Mail.text();
              
              expect(MailID).to.equal('mayur@dezlearn.com')
            })
          }
       })
        
    })


    
})



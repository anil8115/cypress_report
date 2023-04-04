/// <reference types ="Cypress" />

describe('google search test',()=>{
    it('serch', ()=>{
        cy.visit("www.google.com")
        cy.get('.gLFyf').type('iphone 14 pro max').type('{enter}')
    })

    it('test assertion',()=>{
        expect('anil').to.be('ailn')
    })
})
/// <reference types ="Cypress" />

describe("generate report in cypress test", ()=>{
    it('login test',()=>{
        cy.visit('http://orangehrm.qedgetech.com/symfony/web/index.php/auth/login')
        cy.get('#txtUsername').type("Admin")
        cy.get('#txtPassword').type('admin')
        cy.get('#btnLogin').click()
    })

    it('login test with invalid credintial',()=>{
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.get('#Email').type("admin")
        cy.get('#Password').type('admin')
        cy.get('.button-1').click()
        // cy.get('.message-error').should.be("Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect")
    })
})
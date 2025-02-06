/// <reference types="cypress" />

describe('Testes agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve alterar um novo contato', () => {
        cy.screenshot('tela-agenda-original-2')
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type('contato alterado')
        cy.get('[type="email"]').type('email-alterado@teste.com')
        cy.get('[type="tel"]').type('telefone alterado')
        cy.get('.alterar')
        cy.screenshot('tela-agenda-contato-alterado')
    
    })

})
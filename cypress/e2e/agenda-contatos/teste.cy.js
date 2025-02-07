/// <reference types="cypress" />

describe('Testes agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve incluir um novo contato', () => {
        cy.screenshot('tela-agenda-original')
        cy.get('[type="text"]').type('Gabriel Vieira')
        cy.get('[type="email"]').type('teste@teste.com')
        cy.get('[type="tel"]').type('(41) 12345-6789')
        cy.get('.adicionar').click()
        cy.screenshot('tela-contato-adicionado')
    })
    it('Deve alterar um contato', () => {
        cy.get('.edit').first().click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('contato alterado')
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('email-alterado@teste.com')
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('telefone alterado')
        cy.get('.alterar').click()
        cy.screenshot('tela-contato-alterado')
    })
    it('Deve remover um contato', () => {
        cy.get('.delete').first().click()
        cy.screenshot('tela-contato-removido')
    })

})
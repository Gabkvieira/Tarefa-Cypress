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
        cy.get('ul').should('have.length', 4)
        cy.screenshot('tela-agenda-contato-adicionado')
    })

})
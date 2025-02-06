/// <reference types="cypress" />

describe('Testes agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve remover um novo contato', () => {
        cy.screenshot('tela-agenda-4-contatos')
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        cy.get('ul').should('have.length', 3)
        cy.screenshot('tela-agenda-contato-removido')
    })

})
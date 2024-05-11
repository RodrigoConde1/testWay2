// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('runs test B1',  { tags: ['smoke'] }, () => {
  cy.wait(10_000)
})

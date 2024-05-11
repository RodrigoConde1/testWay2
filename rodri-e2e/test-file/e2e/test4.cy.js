// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('runs test E1',  { tags: ['config', 'some-other-tag'] }, () => {
  cy.wait(10_000)
})

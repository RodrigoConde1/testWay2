// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('runs test C1', { tags: ['config', 'some-other-tag'] }, () => {
  const splitIndex = Cypress.env('splitIndex');
  expect(splitIndex).to.be.eq('1')

  cy.wait(10_000)
})

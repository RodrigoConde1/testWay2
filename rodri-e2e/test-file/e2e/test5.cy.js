// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('runs test B1',  { tags: ['config', 'some-other-tag'] }, () => {
  const splitIndex = Cypress.env('SPLIT_INDEX');
  expect(splitIndex).to.be.eq(2)
  cy.wait(10_000)
})

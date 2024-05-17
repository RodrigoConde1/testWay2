// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('runs test A1',  { tags: ['config', 'some-other-tag'] }, () => {
  const splitIndex = Cypress.env('SPLIT_INDEX');

  cy.log(splitIndex);
    cy.wait(100)
})

// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('runs test A1',  { tags: ['config', 'some-other-tag'] }, () => {
  const envVariables =   Cypress.env();

  cy.writeFile('cypress/envVariables.json', envVariables);
  const splitIndex = Cypress.env('splitIndex');
  expect(splitIndex).to.be.eq('0')

    cy.wait(100)
})

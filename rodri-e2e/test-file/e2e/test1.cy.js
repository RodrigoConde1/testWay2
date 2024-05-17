// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('runs test A1',  { tags: ['config', 'some-other-tag'] }, () => {
  const envVariables = {
    split: Cypress.env('SPLIT'),
    splitIndex: Cypress.env('SPLIT_INDEX'),
    splitFile: Cypress.env('SPLIT_FILE'),

  };

  cy.writeFile('cypress/envVariables.json', envVariables);
  const splitIndex = Cypress.env('SPLIT_INDEX');

  cy.log(splitIndex);
    cy.wait(100)
})

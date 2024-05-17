// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('runs test A1',  { tags: ['config', 'some-other-tag'] }, () => {
  const envVariables = {
    split: Cypress.env('split'),
    splitIndex: Cypress.env('splitIndex'),
    splitFile: Cypress.env('splitFile'),
    skipSpec: Cypress.env('skipSpec'),
    debug: Cypress.env('debug'),
    grepTags: Cypress.env('grepTags')
  };

  cy.writeFile('cypress/envVariables.json', envVariables);
  const splitIndex = Cypress.env('SPLIT_INDEX');

  cy.log(splitIndex);
    cy.wait(100)
})

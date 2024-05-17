// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

const cypress = require("cypress")

it('runs test E1',  { tags: ['config', 'some-other-tag'] }, () => {
  const splitIndex = Cypress.env('splitIndex');
  cy.log(`SPLIT_INDEX: ${splitIndex}`);
    cy.wait(100)
})

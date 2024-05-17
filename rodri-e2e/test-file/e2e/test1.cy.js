// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('runs test E1',  { tags: ['config', 'some-other-tag'] }, () => {
  if( strategy.job-index === 1){
    cy.wait(100)
  } else{
    cy.wait(10_000)
  }


})

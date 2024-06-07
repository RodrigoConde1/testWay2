// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('runs test C1', { tags: ['config', 'some-other-tag'] }, () => {
  user = utilsAction.selectUser()
  cy.log(user)
  expect(user).to.be.eq('rodrigo+1')

  cy.wait(10_000)
})

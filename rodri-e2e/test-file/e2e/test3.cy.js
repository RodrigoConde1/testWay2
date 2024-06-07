// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
import  utilACtions from "../support/commands/utilsactions"

const utilsAction = new utilACtions();
let user

it('runs test C1', { tags: ['config', 'some-other-tag'] }, () => {
  user = utilsAction.selectUser()
  cy.log(user)
  expect(user).to.be.eq('rodrigo+2')

  cy.wait(10_000)
})

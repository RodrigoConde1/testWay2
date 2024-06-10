// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
import  utilACtions from "../support/commands/utilsactions"

const utilsAction = new utilACtions();
let user

it('runs test E1',  { tags: ['smoke'] }, () => {
  user = utilsAction.selectUser()
  cy.log(user)
  expect(user).to.be.eq('security.test+0@visma.com')
    cy.wait(100)
})

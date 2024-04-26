import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import utilACtions from "../../support/commands/utilsactions"

const utilsAction = new utilACtions();

Given('As user visit way2automation', () => {
  cy.visit('automation-practice-site.html');
});

Given('I navigate to Alerts an select input alert', () => {
  cy.get(".boxed_style").contains("Alert").invoke('removeAttr', 'target').click();
  cy.contains("Input Alert").invoke("removeAttr", 'target').click();
});

When('Click on alert button and complete input', () => {
  cy.get('iframe').then(($iframe) => {
    const $wins = $iframe[1].contentWindow
    cy.visit($wins.location.href)
    cy.window().then(($win) => {
      cy.stub($win, 'prompt').returns('Rodrigo Conde')
      cy.contains("click the buttton to demonstrate the Input box.").click()
    })
  })
})

Then('The text result should have the correct name', () => {
  cy.get('#demo').should('contain', 'Rodrigo Conde')
})

Given('I navigate to Datepicker an select format date', () => {
  cy.visit('automation-practice-site.html');
  cy.get(".boxed_style").contains("Datepicker").invoke('removeAttr', 'target').click()
  cy.contains("Format date").click()
});

And('Choose current date', () => {
  cy.get('iframe').then(($iframe) => {
    const date = utilsAction.returnCurrentDate();
    const $body = $iframe.contents().find('body');
    cy.wrap($body[3]).find("#datepicker").click();
    cy.wrap($body[3]).find(".ui-datepicker-month").should("have.text", date[1]);
    cy.wrap($body[3]).find(".ui-datepicker-year").should("have.text", date[2]);
    cy.wrap($body[3]).find(".ui-state-default").contains(date[0]).click();
  })
})

When('Select ISO 8601 format', () => {
  cy.get('iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body');
    cy.wrap($body[3]).find("#format").select("ISO 8601 - yy-mm-dd");
  });
})

Then('Validate that the date has the correct format', () => {
  cy.get('iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body');
    const isodate = new Date().toISOString().split("T")
    cy.wrap($body[3]).find("#datepicker").should("contain.value", isodate[0])
  })
})

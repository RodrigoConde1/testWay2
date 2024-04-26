Feature: way2automation Test

Background:
  Given As user visit way2automation

  Scenario: Check alert input
    Given I navigate to Alerts an select input alert
    When Click on alert button and complete input
    Then The text result should have the correct name

  Scenario: Check datepicker return correct Iso Format
    Given I navigate to Datepicker an select format date
    And Choose current date
    When Select ISO 8601 format
    Then Validate that the date has the correct format


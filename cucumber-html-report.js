const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/report/cucumber-json",
  reportPath: "./cypress/report/",
  openReportInBrowser: true,
});
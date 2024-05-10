const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
require("dotenv").config();
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: './dist/cypress/report',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {
    supportFile: './rodri-e2e/test-file/support/e2e.js',
    specPattern: './rodri-e2e/test-file/e2e/**/*.cy.ts',
    screenshotOnRunFailure :false,
    chromeWebSecurity: false,
    videoCompression:false,
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: "https://way2automation.com/way2auto_jquery/",
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      on("file:preprocessor", cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
      return config
    },
  }
});

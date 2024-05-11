const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
require("dotenv").config();
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  e2e: {
    supportFile: './rodri-e2e/test-file/support/e2e.js',
    specPattern: './rodri-e2e/test-file/e2e/**/*.cy.js',
    screenshotOnRunFailure :false,
    chromeWebSecurity: false,
    videoCompression:false,
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: "https://way2automation.com/way2auto_jquery/",
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      require('@cypress/grep/src/plugin')(config);
      on("file:preprocessor", cucumber());
      return config
    },
  }
});

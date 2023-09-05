const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");



module.exports = defineConfig({
 // projectId: 'r5gob6',

  env: {
    url: "https://rahulshettyacademy.com/AutomationPractice/"
    //url : "cypress.env.development.json",
   // "envFile": "cypress.env.staging.json"
  },
  projectId: "1ifezw",  // --key c26ec069-7899-4aa8-b266-a02a8d1d42a1
  
  retries: {  // for run the failed test case once again
    runMode: 2,
   
  },
  
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {  // for cucumber framework
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      preprocessor.addCucumberPreprocessorPlugin(on, config);
    
      on("file:preprocessor", browserify.default(config));
    
      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
     
    },
    specPattern: 'cypress/integration/examples/*.js'
    //specPattern: 'cypress/integration/revision/*.js'
   //specPattern: 'cypress/integration/examples/BDD/*.feature'
  

  },
});

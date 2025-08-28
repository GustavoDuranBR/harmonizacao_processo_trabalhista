const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const path = require("path");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 15000,
    experimentalStudio: true,
    specPattern: "**/*.feature",
    setupNodeEvents(on) {
      on('file:preprocessor', cucumber());
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          const extensionPath = path.resolve("C:\\Users\\luiz.gleite\\AppData\\Local\\Google\\Chrome\\User Data\\CypressUser\\Default\\Extensions\\eimadpbcbfnmbkopoojfekhnkhdbieeh\\4.9.92_0");

          launchOptions.args.push(`--load-extension=${extensionPath}`);
          launchOptions.args.push(`--disable-extensions-except=${extensionPath}`);
        }

        return launchOptions;
      });
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    browser: 'chrome',
    tags: '@login or @api and not @ignore',
    baseUrl: 'http://jv-rm-homrh01:8180/',

    // Definição das variáveis de ambiente
    env: {
      username: 'super',
      password: 'super'
    },
    // Configuração do Mochawesome
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    }
  }
});

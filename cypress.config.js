const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const path = require("path");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          // Adiciona a extensão Dark Reader
          const extensionPath = path.resolve("C:\\Users\\luiz.gleite\\AppData\\Local\\Google\\Chrome\\User Data\\CypressUser\\Default\\Extensions\\eimadpbcbfnmbkopoojfekhnkhdbieeh\\4.9.92_0");
          launchOptions.extensions.push(extensionPath);
        }
        return launchOptions;
      });
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    browser: 'chrome',
    tags: '@login or @api and not @ignore',
    baseUrl: 'http://joisrvapldev027:8080',
    
    // Definição das variáveis de ambiente
    env: {
      username: 'super',
      password: 'super'
    }
  }
});

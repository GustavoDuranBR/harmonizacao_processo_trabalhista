const { $ } = Cypress;
$("#resizable-panels-root", top?.document)
.find("div.grow.h-full.bg-gray-100.relative")
.css("background", "#1b1e2e");

$("#spec-runner-header", top?.document)
.find("div")
.css("background", "#1b1e2e");

$("#unified-reporter", top?.document)
.find(".container")
.css("border-right", "2px solid white");
 

// support/commands.js
Cypress.Commands.add('login', (login, senha) => {
    const loginPage = new LoginPage();
    loginPage.acessarHomePage();
    loginPage.preencherLogin(login, senha);
    loginPage.clicarBtn();

    // Verifica se o login foi bem-sucedido
    cy.url().should('include', 'totvs-menu/#/');
    cy.get(loginElements.logoTOTVS()).should('be.visible');
});


// Função para pegar o iframe 
Cypress.Commands.add('getIframeBody', (iframeSelector) => {
    return cy
      .get(iframeSelector)
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
  })
  
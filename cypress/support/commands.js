// Estilização da interface do Cypress
Cypress.$("#resizable-panels-root", top?.document)
  .find("div.grow.h-full.bg-gray-100.relative")
  .css("background", "#1b1e2e");

Cypress.$("#spec-runner-header", top?.document)
  .find("div")
  .css("background", "#1b1e2e");

Cypress.$("#unified-reporter", top?.document)
  .find(".container")
  .css("border-right", "2px solid white");


// Função para pegar o iframe 
Cypress.Commands.add('getIframeBody', (iframeSelector) => {
  return cy
    .get(iframeSelector)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);
});

// Comando para realizar o login e capturar o cookie de sessão
Cypress.Commands.add('loginAndSaveSession', (username, password) => {
  cy.visit('/totvs-login'); // Altere para a URL correta de login
  cy.get('input#txtUsername').type(username);
  cy.get('input#txtPassword').type(password);
  cy.get('.btnEntrar').click();

  // Após o login, captura o JSESSIONID e armazena
  cy.getCookie('JSESSIONID').then((cookie) => {
    if (cookie) {
      cy.wrap(cookie).as('sessionCookie'); // Armazena o cookie em um alias
    }
  });
});

// Comando para reutilizar o cookie de sessão
Cypress.Commands.add('setSessionCookie', () => {
  // Verifica se o alias '@sessionCookie' foi criado e se o cookie existe
  cy.get('@sessionCookie').then((cookie) => {
    if (cookie) {
      cy.setCookie('JSESSIONID', cookie.value); // Define o cookie na sessão
      cy.log('Session cookie set: ', cookie);
    } else {
      cy.log('No session cookie available to reuse.');
    }
  }).then(() => {
    // Verifica se o cookie realmente foi setado
    cy.getCookie('JSESSIONID').should('exist');
  });
});

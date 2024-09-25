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

// Comando para realizar o login e capturar o cookie de sessão
Cypress.Commands.add('loginAndSaveSession', (username, password) => {
  cy.visit('/totvs-login');
  cy.get('input#txtUsername').type(username);
  cy.get('input#txtPassword').type(password);
  cy.get('.btnEntrar').click();
  
  // Captura o JSESSIONID e armazena
  cy.getCookie('JSESSIONID').then((cookie) => {
    if (cookie) {
      cy.wrap(cookie).as('sessionCookie');
    }
  });
});

// Comando para reutilizar o cookie de sessão
Cypress.Commands.add('setSessionCookie', () => {
  cy.get('@sessionCookie').then((cookie) => {
    if (cookie) {
      cy.setCookie('JSESSIONID', cookie.value);
      cy.log('Session cookie set: ', cookie);
    } else {
      cy.log('No session cookie available to reuse.');
    }
  }).then(() => {
    cy.getCookie('JSESSIONID').should('exist');
  });
});

// Comando para verificar se o login já foi feito e reutilizar a sessão ou realizar o login
Cypress.Commands.add('checkAndLogin', () => {
  cy.getCookie('JSESSIONID').then((cookie) => {
    if (!cookie) {
      // Se o cookie não existir, realiza o login e salva a sessão
      cy.loginAndSaveSession(Cypress.env('username'), Cypress.env('password')).then(() => {
        cy.get('@sessionCookie').should('exist'); // Garante que o cookie foi salvo
      });
    } else {
      // Reutiliza a sessão existente
      cy.setSessionCookie();
    }
  });
});

// Comando para pegar o Iframe
Cypress.Commands.add('getIframeBody', { timeout: 20000 }, () => {
  return cy
    .get('iframe[src*="totvs-esocial/#/labor-process"]', { timeout: 20000 })  // Aumenta o timeout
    .should('be.visible')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap);
});

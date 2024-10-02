import 'cypress-iframe';

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
  cy.get('.btnEntrar').click().then(() => {
      // Certifique-se de que o cookie é capturado após o clique
      cy.getCookie('JSESSIONID').should('exist').then((cookie) => {
          cy.wrap(cookie).as('sessionCookie');
      });
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

// Comando para pegar o Iframe com o seletor reutilizável
Cypress.Commands.add('getIframe', () => {
  return cy
    .get('iframe#extView2', { timeout: 15000 }) // Aumenta o timeout para o iframe
    .its('0.contentDocument.body')
    .should('not.be.empty') // Certifica-se de que o iframe está pronto
    .then(cy.wrap);
});

// Gera um número aleatório de 20 dígitos (ou o número de dígitos que você precisar)
Cypress.Commands.add('gerarNumeroAleatorio', (numDigitos) => {
  const numeroMin = Math.pow(10, numDigitos - 1);  // Número mínimo com o número de dígitos desejado
  const numeroMax = Math.pow(10, numDigitos) - 1;  // Número máximo com o número de dígitos desejado
  const numeroAleatorio = Cypress._.random(numeroMin, numeroMax).toString();
  return numeroAleatorio;
});


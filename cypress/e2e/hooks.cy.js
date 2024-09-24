import '../support/commands'

// Hook para realizar o login uma vez antes de todos os testes
before(() => {
  cy.getCookie('JSESSIONID').then((cookie) => {
    if (!cookie) {
      cy.loginAndSaveSession(Cypress.env('username'), Cypress.env('password'));
    } else {
      cy.setSessionCookie(); // Reutiliza a sessão
    }
  });
});

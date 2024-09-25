
import '../support/commands';

// Hook para realizar o login uma vez antes de todos os testes
before(() => {
  cy.getCookie('JSESSIONID').then((cookie) => {
    if (!cookie) {
      // Se o cookie de sessão não existir, realiza o login e captura a sessão
      cy.loginAndSaveSession(Cypress.env('username'), Cypress.env('password')).then(() => {
        cy.get('@sessionCookie').should('exist'); // Garante que o cookie foi salvo corretamente
      });
    } else {
      // Caso já exista um cookie, reutiliza a sessão
      cy.setSessionCookie(); 
    }
  });
});

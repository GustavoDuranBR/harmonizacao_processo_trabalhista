import LoginElements from "../elements/login_elements"

const loginElements = new LoginElements()

class LoginPage {
    acessarHomePage() {
        cy.visit('/totvs-login/loginForm')
    }

    preencherLogin(login, senha) {
        cy.get(loginElements.campoUsuario()).type(login)
        cy.get(loginElements.campoSenha()).type(senha)
    }

    clicarBtn() {
        cy.get(loginElements.btnEntrar()).click()
    }

    loginOK() {
        cy.url().should('include', 'totvs-menu/#/')
        cy.get(loginElements.logoTOTVS())
            .should('be.visible')
    }

    laborProcess() {
        cy.get(loginElements.inputPesquisar()).click()
        cy.wait(4000)
        cy.get(loginElements.inputPesquisar())
            .type('html.labor-process', { delay: 100 }) // Adiciona um delay para simular digitação mais realista
        cy.get(loginElements.lupaPesquisa()).click()
        cy.get(loginElements.abrirLaborProcess()).click()
        cy.get(loginElements.btnExecutar()).click()
    }

    programaOK() {
        cy.getIframeBody('#extView2').find(loginElements.loginOk()) 
            .should('be.visible')
            .and('have.attr', 'src', 'assets/img/logo_totvs.png')
    }
}

export default LoginPage;

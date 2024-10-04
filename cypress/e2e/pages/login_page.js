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
        cy.url().should('contain', 'totvs-menu/#/')
        cy.get(loginElements.usuarioLogado())
            .should('be.visible')
    }

    laborProcess() {
        cy.get(loginElements.inputPesquisar()).click()
        cy.wait(3000)
        cy.get(loginElements.inputPesquisar())
            .type('html.labor-process', { delay: 100 }) 
        cy.get(loginElements.lupaPesquisa()).click()
        cy.get(loginElements.abrirLaborProcess()).click()
        cy.get(loginElements.btnExecutar()).click()
    }

    programaOK() {
        cy.get(loginElements.loginOk()) 
            .should('be.visible')
            .and('have.attr', 'src', 'assets/img/logo_totvs.png')
    }
}

export default LoginPage;

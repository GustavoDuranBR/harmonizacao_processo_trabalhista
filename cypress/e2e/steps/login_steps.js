import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../pages/login_page"

const loginPage = new LoginPage()

Given(/^que o usuário acessa a página de login$/, () => {
	loginPage.acessarHomePage()
})

When(/^o usuário preenche o login com "([^"]*)" e senha com "([^"]*)"$/, (username,password) => {
	loginPage.preencherLogin(username, password)
})

When(/^o usuário clica no botão de entrar$/, () => {
	loginPage.clicarBtn()
})

When(/^o login deve ser realizado com sucesso$/, () => {
	loginPage.loginOK()
})

When(/^o usuário seleciona o programa "([^"]*)"$/, (programa) => {
  loginPage.laborProcess(programa)
})

Then(/^o programa deve ser selecionado com sucesso$/, () => {
  loginPage.programaOK()
})

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import S2500Page from "../pages/S2500_page"
import LoginPage from "../pages/login_page"

const s2500Page = new S2500Page()
const loginPage = new LoginPage()

// Passos relacionados ao login e à página dos programas
Given(/^que o usuário já tenha realizado o login$/, () => {
    loginPage.loginOK() // Garante que o login foi feito
})

Then(/^o usuário esteja na página dos programas$/, () => {
    loginPage.programaOK() // Verifica se está na página correta
})

// Passos relacionados à funcionalidade de Processo Trabalhista
Then(/^que o usuário esteja na aplicação Processo trabalhista$/, () => {
    loginPage.laborProcess() 
})

Then(/^clique no botão Adicionar Processo$/, () => {
    s2500Page.paginaS2500()   
    s2500Page.btnAdcProc()    
})

Then(/^esteja na página Cadastro de processo trabalhista$/, () => {
    s2500Page.tituloCadastroProcTrab() 
})

// Seleção do tipo de processo no campo "Origem do Processo"
Then(/^selecione a opção "([^"]*)" no campo Origem do Processo$/, (opcao) => {
    s2500Page.selecOrigemProcesso(opcao) 
})

// Validação do campo "Número do Processo"
When(/^o campo Número do processo deve ser preenchido com "([^"]*)" caracteres$/, (numCaracteres) => {
    s2500Page.validarNumeroProcesso(numCaracteres) 
})

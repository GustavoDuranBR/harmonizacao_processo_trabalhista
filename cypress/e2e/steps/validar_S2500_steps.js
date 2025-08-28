import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import S2500Page from "../pages/S2500_page"
import LoginPage from "../pages/login_page"

const s2500Page = new S2500Page()
const loginPage = new LoginPage()

// Passos relacionados ao login e à página dos programas
Given('que o usuário já tenha realizado o login', () => {
    loginPage.loginOK() 
})

Then('o usuário esteja na página dos programas', () => {
    loginPage.programaOK() // Verifica se está na página correta
})

// Passos relacionados à funcionalidade de Processo Trabalhista
Then('que o usuário esteja na aplicação Processo trabalhista', () => {
    loginPage.laborProcess() 
})

Then('clique no botão Adicionar Processo', () => {
    s2500Page.paginaS2500()  
    s2500Page.btnAdcProc()    
})

Then('esteja na página Cadastro de processo trabalhista', () => {
    s2500Page.tituloCadastroProcTrab() 
})

// Seleção do tipo de processo no campo "Origem do Processo"
Then('selecione a opção Processo Judicial no campo Origem do Processo', () => {
    s2500Page.selecOrigemProcesso() 
})

// Validação do campo "Número do Processo"
Then('o campo Número do processo deve ser preenchido com {string} caracteres', (numCaracteres) => {
    const digitos = '1'.repeat(numCaracteres) 
    s2500Page.preencheCampoNumeroAleatorio(digitos)
})

Then('preencho o campo Observações com a mensagem {string}', (msgCypress) => {
    s2500Page.preencherObservacao(msgCypress)
})

Then('o campo município com o código {string}', (numMunicipio) => {
    s2500Page.preencherNumMunicipio(numMunicipio)
})

Then('o campo UF com {string}', (uf) => {
    s2500Page.selecUf(uf)
})

Then('o campo Indicador da vara com o código {string}', (vara) => {
    s2500Page.preencherVara(vara)
})

Then('o campo Data da conciliação {string}', (dtCon) => {
    s2500Page.preencherDtConc(dtCon)
})

Then('clico para acessar Identificação da pessoa trabalhadora e contrato de trabalho', () => {
    s2500Page.identPessoaTrab()
})


Then('preencho com o nome {string}', (nome) => {
	s2500Page.nomePessTrab(nome)
})

Then('preencho o campo com o CPF inválido {string}', (cpf) => {
	s2500Page.preencheCPF(cpf)
})

Then('preencho o campo Data de Nascimento fora do período {string}', (dtNasc) => {
	s2500Page.preencheDtNasc(dtNasc)
})

Then('clico no botão Adicionar Contrato', () => {
    s2500Page.btnAdicCont()
})


Then('clico no botão {string}', (btn) => {
	s2500Page.btnNaoConsSalvar(btn)
})

Then('clico no item {string}', (tpVinc) => {
	s2500Page.abriListPenTipoVinc(tpVinc)
})

Then('acesso a aba {string} e seleciono {string}', (infoGeral, vinculo) => {
    s2500Page.abaInfoContrTrabIdentEstab(infoGeral)
	s2500Page.selecionoTipoVinculo(vinculo)
})

Then('selecionar a opção {string} no campo Informações do evento', (selectSimEvento) => {
    s2500Page.preencherInfoEvento(selectSimEvento)
})

Then('selecionar a opção {string} no campo Reintegração', (selectSimReint) => {
    s2500Page.preencherReintegracao(selectSimReint)
})

Then('selecionar a opção {string} no campo Reconhecimento de categoria', (selectSimRecCateg) => {
    s2500Page.preencherReconhecimentoCategoria(selectSimRecCateg)
})

Then('selecionar a opção {string} no campo Reconhecimento da natureza atividade', (selectSimRecCateg) => {
    s2500Page.preencherRecNatAtividade(selectSimRecCateg)
})

Then('selecionar a opção {string} no campo Reconhecimento de motivo de desligamento', (selectSimRecCateg) => {
    s2500Page.preencherRecMotDesligamento(selectSimRecCateg)
})

Then('preencho o campo Matrícula do contrato com {string}', (matContr) => {
    s2500Page.preencherMatriculaContrato(matContr)
})

Then('selecionar a opção {string} no campo Tipo de inscrição', (selectCNPJ) => {
    s2500Page.selecionarTipoInscricao(selectCNPJ)
})

Then('preencho o campo Tipo de inscrição com {string}', (tipInscricao) => {
    s2500Page.preencherTipoInscricao(tipInscricao)
})

Then('selecionar a opção {string} no campo Indicativo de repercussão', (indicaReperc) => {
    s2500Page.selecionarIndiRepercussao(indicaReperc)
})

Then('preencher a data {string} no campo Competência inicial', (dataCompetencia) => {
  s2500Page.preencherDataCompetenciaInicial(dataCompetencia)
})

Then('preencher a data {string} no campo Competência Final', (dataCompetencia) => {
  s2500Page.preencherDataCompetenciaFinal(dataCompetencia)
})

Then('clicar na opção {string}', () => {
  s2500Page.clicarIdentificacaoPeriodo()
})
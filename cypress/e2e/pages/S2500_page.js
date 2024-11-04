import S2500Elements from "../elements/S2500_elements"
import '../../support/commands'

const s2500Elements = new S2500Elements()

class S2500Page {
    validaAcesso() {
        cy.get(s2500Elements.verificaUsuario())
    }

    acessoS2500Ok() {
        cy.visit(s2500Elements.urlS2500())
    }

    paginaS2500() {
        cy.getIframe().find(s2500Elements.tituloProcessoTrabalhista())
    }

    btnAdcProc() {
        cy.wait(3000)
        cy.getIframe().find(s2500Elements.btnAdcProc()).click({ force: true })
    }

    tituloCadastroProcTrab() {
        cy.getIframe().find(s2500Elements.tituloProcessoTrabalhista())
            .should('be.visible').contains('Cadastro de processo trabalhista')
    }

    selecOrigemProcesso() {
        cy.getIframe().find(s2500Elements.campoOrigemProcesso())
            .should('exist')
            .should('be.visible')
            .click({ force: true })
        cy.getIframe().find(s2500Elements.opcaoProcessoJudicial())
            .should('exist')
            .click({ force: true })
    }

    preencheCampoNumeroAleatorio(numCaracteres) {
        cy.getIframe().find(s2500Elements.campoNumProcesso())
            .scrollIntoView()
            .should('exist')
            .should('be.visible')
            .click({ force: true })
            .clear()
            .type(numCaracteres, { force: true })
    }

    preencherObservacao(msgCypress) {
        cy.getIframe().find(s2500Elements.campoObservacao())
            .scrollIntoView()
            .should('exist')
            .should('be.visible')
            .clear()
            .type(msgCypress, { force: true });
    }

    preencherNumMunicipio(numMunicipio) {
        cy.getIframe().find(s2500Elements.campoCodMunicipio())
            .scrollIntoView()
            .should('exist')
            .should('be.visible')
            .clear()
            .type(numMunicipio, { force: true })
    }

    selecUf(uf) {
        cy.getIframe().find(s2500Elements.campoUF())
            .eq(2)
            .should('exist')
            .should('be.visible')
            .first()
            .click({ force: true })
        cy.getIframe().find(s2500Elements.escolherUf())
            .should('exist')
            .contains(uf)
            .click({ force: true });
    }

    preencherVara(vara) {
        cy.getIframe().find(s2500Elements.campoIndVara())
            .scrollIntoView()
            .should('exist')
            .should('be.visible')
            .clear()
            .type(vara, { force: true });
    }

    preencherDtConc(dtCon) {
        cy.getIframe().find(s2500Elements.campoDtSentenca())
            .should('exist')
            .should('be.visible')
            .click({ force: true })
            .type(dtCon, { force: true })
    }

    identPessoaTrab() {
        cy.getIframe().find(s2500Elements.identPessoaTrabContrTrabalho())
            .click({ force: true })
    }

    nomePessTrab(nomeTrab) {
        cy.getIframe().find(s2500Elements.campoNomeTrabalhador())
            .should('exist')
            .should('be.visible')
            .click({force:true})
            .type(nomeTrab, {force:true})
    }

    preencheCPF(cpf) {
        cy.getIframe().find(s2500Elements.campoCPF())
            .should('exist')
            .should('be.visible')
            .click({ force: true })
            .type(cpf, { force: true })
        // Verifica se o CPF é inválido e se a mensagem de erro é exibida
        cy.getIframe().find(s2500Elements.msgCpfInvalidoPessoaTrabalhadora())
            .should('contain.text', 'CPF inválido')
            .should('be.visible')
    }

    preencheDtNasc(dtNasc) {
        cy.getIframe().find(s2500Elements.campoDtNasc())
            .should('exist')
            .should('be.visible')
            .click({force:true})
            .type(dtNasc, {force:true})
        // Verifica se a Data de Nascimento é inválido e se a mensagem de erro é exibida
        cy.getIframe().find(s2500Elements.msgDtNascForaPeriodo())
            .should('contain.text', ' Data fora do período')
            .should('be.visible')
    }

    btnAdicCont() {
        cy.getIframe().find(s2500Elements.btnAdicContrato())
            .click({force:true})
    }

    btnNaoConsSalvar() {
        cy.getIframe().find(s2500Elements.btnPqNaoConsSalvar())
            .contains('Por que não consigo salvar?')
            .should('exist')
            .should('be.visible')
            .click({force:true})
    }

    abriListPenTipoVinc(tpVinc) {
        cy.getIframe().find(s2500Elements.listPqNaoSalvar())
            .click({force:true})
        cy.wait(500)
        cy.getIframe().find(s2500Elements.listTipoVinc())
            .contains(tpVinc)
            .should('exist')
            .should('be.visible')
            .click({force:true})
    }

    abaInfoContrTrabIdentEstab() {
        cy.getIframe().find(s2500Elements.abasInfGerais())
            .contains('Sessão de informação de contrato de trabalho e identificação do estabelecimento')
            .should('exist')
            .should('be.visible')
            .click({force:true})
    }

    selecionoTipoVinculo(vinculo) {
        cy.getIframe().find(s2500Elements.campoTipoVinculo())
            .eq(0)
            .should('exist')
            .should('be.visible')
            .click({ force: true })
        cy.getIframe().find(s2500Elements.escolherTipoVinculo())
            .should('exist')
            .should('be.visible')
            .contains(vinculo)
            .click({ force: true })
    }

    preencherInfoEvento(selectSim) {
        cy.getIframe().find(s2500Elements.campoInfEvento())
            .eq(1)
            .should('exist')
            .should('be.visible')
            .click({ force: true })
        cy.getIframe().find(s2500Elements.escolherInfEvento())
            .should('exist')
            .contains(selectSim)
            .click({ force: true })
    }
    
}

export default S2500Page;

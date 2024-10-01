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
        cy.wait(2000)
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
            .click()
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
            .type(msgCypress, {force: true});
    }    

    preencherNumMunicipio(numMunicipio) {
        cy.getIframe().find(s2500Elements.campoCodMunicipio())
            .scrollIntoView()
            .should('exist')
            .should('be.visible')
            .clear()
            .type(numMunicipio, {force: true});
    } 

    selecUf(uf) {
        // Primeiro, verifique se o iframe está sendo capturado corretamente
        cy.getIframe()
            .find(s2500Elements.campoUF())  // Utilize o seletor existente de 'campoUF'
            .scrollIntoView()  // Garante que o campo esteja visível na tela
            .should('exist')   // Verifica se o campo existe
            .should('be.visible')  // Verifica se está visível
            .clear()  // Limpa qualquer valor existente
            .type(uf, {force: true});  // Digita o UF desejado no campo
    
        // Agora, selecione a opção correta (por exemplo, "SP")
        cy.getIframe()
            .find('span.po-item-list-label')  // Utilize o seletor de label
            .contains(uf)  // Busca o texto correspondente ao valor digitado
            .click({force: true});  // Força o clique
    }   
    
    preencherVara(vara) {
        cy.getIframe().find(s2500Elements.campoIndVara())
            .scrollIntoView()
            .should('exist')
            .should('be.visible')
            .clear()
            .type(vara, {force: true});
    }
    
    preencherDtConc(dtCon) {
        cy.getIframe().find(s2500Elements.campoDtConciliacao())
            .scrollIntoView()
            .should('exist')
            .should('be.visible')
            .clear()
            .type(dtCon, {force: true});
    }    
}
export default S2500Page;

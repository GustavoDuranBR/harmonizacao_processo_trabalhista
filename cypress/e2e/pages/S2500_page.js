import S2500Elements from "../elements/S2500_elements";
import '../../support/commands';  

const s2500Elements = new S2500Elements();

class S2500Page {
    validaAcesso() {
        cy.get(s2500Elements.verificaUsuario());
    }

    acessoS2500Ok() {
        cy.visit(s2500Elements.urlS2500());
    }

    paginaS2500() {
        cy.getIframeBody().find(s2500Elements.tituloProcessoTrabalhista());
    }

    btnAdcProc() {
        cy.getIframeBody().find(s2500Elements.btnAdcProc()).click({ force: true });
    }

    tituloCadastroProcTrab() {
        cy.getIframeBody().find(s2500Elements.tituloProcessoTrabalhista())
            .should('be.visible').contains('Cadastro de processo trabalhista');
    }

    selecOrigemProcesso(opcao) {
        cy.getIframeBody().find(s2500Elements.campoOrigemProcesso()).click({ force: true })
        cy.getIframeBody().find(s2500Elements.opcaoProcessoJudicial()).click({ force: true });
    }

    preencheCampo(numCaracteres) {
        const numProcesso = '1'.repeat(numCaracteres);
        cy.getIframeBody().find(s2500Elements.campoNumProcesso())
            .clear().type(numProcesso);
    }

    // Adicionando a função de validação do número do processo
    validarNumeroProcesso(numCaracteres) {
        this.preencheCampo(numCaracteres);
        cy.getIframeBody().find(s2500Elements.campoNumProcesso())
            .invoke('val')
            .should('have.length', numCaracteres);
    }
}

export default S2500Page;

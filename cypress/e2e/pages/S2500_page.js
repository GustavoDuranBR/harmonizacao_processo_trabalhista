import S2500Elements from "../elements/S2500_elements"

const s2500Elements = new S2500Elements()

class S2500Page {
    acessoS2500Ok() {
        // Acessa diretamente a página sem passar pelo login
        cy.visit(s2500Elements.urlS2500())
    }

    paginaS2500() {
        cy.get(s2500Elements.tituloProcessoTrabalhista())
    }

    btnAdcProc() {
        cy.get(s2500Elements.btnAdcProc()).click({force : true})
    }

    cadastroProcTrab() {
        cy.get(s2500Elements.tituloProcessoTrabalhista())
    }

    selecProcJudicial() {
        cy.get(s2500Elements.campoOrigemProcesso())
    }

    preencheCampo(numCaracteres) {
        const numProcesso = '1'.repeat(numCaracteres)
        cy.get(s2500Elements.campoNumProcesso()).clear().type(numProcesso)
    }
}

export default S2500Page;

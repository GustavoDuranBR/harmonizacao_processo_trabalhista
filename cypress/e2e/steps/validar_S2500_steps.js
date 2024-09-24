import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import S2500Page from "../pages/S2500_page";

// Instanciando a classe S2500Page
const s2500Page = new S2500Page();

// Os hooks serão executados automaticamente antes de cada cenário, não há necessidade de repetir o login ou a verificação de sessão

Given("que o usuário esteja na aplicação Processo trabalhista", () => {
    s2500Page.acessoS2500Ok();
    s2500Page.paginaS2500();
});

Then("clique no botão Adicionar Processo", () => {
    s2500Page.btnAdcProc();
});

Then("esteja na página Cadastro de processo trabalhista", () => {
    s2500Page.cadastroProcTrab()
    .should('be.visible')
    .and('contain', 'Cadastro de Processo Trabalhista');
});

Then("selecione a opção {string} no campo Origem do Processo", (opcao) => {
    s2500Page.selecProcJudicial().select(opcao);
});

When("o campo Número do processo deve ser preenchido com {int} caracteres", (numCaracteres) => {
    s2500Page.preencheCampo(numCaracteres);
});

class LoginElements {
    textoBoasVindas() {
        return '.caption-text'
    }
    campoUsuario() {
        return 'input#txtUsername'
    }

    campoSenha() {
        return 'input#txtPassword'
    }

    btnEntrar() {
        return '.btnEntrar'
    }

    logoTOTVS() {
        return 'div#menu-header > .header-title.hidden-xs'
    }

    usuarioLogado() {
        return "[ng-if='userName\.length \<\= 30']"
    }

    inputPesquisar() {
        return "[ng-model='keywords']"
    }

    lupaPesquisa() {
        return '.glyphicon.glyphicon-search'
    }

    abrirLaborProcess() {
        return '.ng-scope > td[title="Processos Trabalhistas eSocial"]'
    }

    btnExecutar() {
        return '.btn.btn-primary.ng-binding'
    }

    loginOk() {
        return 'div#menu-logo > img'
    }
} export default LoginElements;


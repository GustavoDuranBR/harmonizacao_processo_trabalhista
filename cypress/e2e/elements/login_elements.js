class LoginElements {
    textoBoasVindas = () => {
        return '.caption-text'
    }
    campoUsuario = () => {
        return 'input#txtUsername'
    }

    campoSenha = () => {
        return 'input#txtPassword'
    }

    btnEntrar = () => {
        return '.btnEntrar'
    }

    logoTOTVS = () => {
        return 'div#menu-header > .header-title.hidden-xs'
    }

    usuarioLogado = () => {
        return '[ng-if="userName\.length \<\= 30"]'
    }

    inputPesquisar = () => {
        return 'input#keywords'
    }

    lupaPesquisa = () => {
        return '.glyphicon.glyphicon-search'
    }

    abrirLaborProcess = () => {
        return '.ng-scope > td[title="Processos Trabalhistas eSocial"]'
    }

    btnExecutar = () => {
        return '.btn.btn-primary.ng-binding'
    }

    processoTrabalhistaOk = () => {
        return '.po-md-2.po-mt-4.po-sm-12 > .po-button'
    }
} export default LoginElements;


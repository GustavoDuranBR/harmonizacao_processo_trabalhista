class S2500Elements {
    verificaUsuario() {
        return "[ng-if='userName\.length \<\= 30']"
    }

    urlS2500() {
        return 'http://joisrvapldev027:8080/totvs-menu/#/totvs-menu/program-html/html.labor-process/'
    }

    tituloProcessoTrabalhista() {
        return '.po-page-header-title'
    }

    // Elementos dos campos
    campoTipoInscricao() {
        return "[id='po-combo\[a9ade595-da80-af4a-8787-8cb9022e4aa3\]']"
    }

    campoNumInscricao() {
        return "[id='po-input\[6e5e8210-7742-2c48-e0ac-1321d305f872\]']"
    }

    campoOrigemProcesso() {
        return ".custom-margin-help.ng-invalid.ng-pristine.ng-untouched.po-md-6.po-pl-0 > po-field-container .po-combo-input.po-input-icon-right"
    }
    
    opcaoProcessoJudicial() {
        return ".po-item-list-label:contains('Processo Judicial')"
    }

    campoNumProcesso() {
        return ".custom-margin-help.ng-invalid.ng-pristine.ng-untouched.po-md-6.po-pr-0 > po-field-container .po-input"
    }

    campoObservacao() {
        return ".po-textarea"
    }

    campoCodMunicipio() {
        return "[class='po-md-3 po-pl-0 custom-margin-help ng-untouched ng-pristine ng-invalid'] po-field-container .po-field-container .po-field-container-content [tabindex='0']"
    }

    campoUF() {
        return ".po-field-container .po-combo-input.po-input-icon-right"
    }  

    escolherUf() {
        return "li:contains('SP')"
    }    

    campoIndVara() {
        return "[class='po-md-4 custom-margin-help ng-untouched ng-pristine ng-invalid'] po-field-container .po-field-container .po-field-container-content [tabindex='0']"
    }

    campoDtSentenca() {
        return 'po-datepicker[formcontrolname="dtSent"] input.po-input.po-datepicker'
    }

    campoAmbito() {
        return "[id='po-combo\[187c7ecd-1301-5e34-a72f-08cf12bed197\]']"
    }

    campoCnpjSindicato() {
        return "[id='po-input\[08d9c667-ae1e-35a3-ced9-aec16dda3845\]']"
    }

    campoDtConciliacao() {
        return ""
    }

    identPessoaTrabContrTrabalho() {
        return "po-tab-button:nth-of-type(2) > div[role='tab'] > .po-tab-button-label.po-text-ellipsis"
    }

    campoNomeTrabalhador() {
        return 'po-input[formcontrolname="nmTrab"] .po-field-container input.po-input'
    }

    campoCPF() {
        return ".custom-margin-help.ng-invalid.ng-pristine.ng-untouched.po-md-2 > po-field-container .po-input"
    }

    campoDtNasc() {
        return "input[name='datepicker']"
    }

    // Informações sobre o contrato de trabalho
    campoTipoVinculo() {
        return 'input.po-combo-input.po-input-icon-right[autocomplete="off"][required][id^="po-combo"]'
    }

    escolherTipoVinculo() {
        return "li .po-item-list-label:contains('Empregado com reconhecimento de vínculo')";
    }    

    campoInfEvento() {
        return 'input.po-combo-input.po-input-icon-right[autocomplete="off"][required][id^="po-combo"]';
    }
    
    escolherInfEvento() {
        return "li:contains('Sim')"
    }

    // Elementos Botões
    btnAdcProc() {
        return ".po-md-2.po-mt-4.po-sm-12 > .po-button"
    }

    btnSetaBaixo() {
        return ".po-button-icon > .po-icon.po-icon-arrow-down"
    }

    btnAdicContrato() {
        return 'po-button[p-icon="po-icon po-icon-plus-circle"] button'
    }

    btnPqNaoConsSalvar() {
        return 'button.po-button span.po-button-label'
    }

    // Mensagens de validação
    msgCamposObrigatórios() {
        return "app-process-identification form .ng-pristine.ng-invalid.ng-touched > [class='po-md-12 po-p-0']:nth-child(10) [class='custom-blue-container po-md-12 po-p-0'] .po-container.po-container-no-border"
    }

    msgObrigatorioUmContrato() {
        return "[class='custom-blue-container po-md-12 po-mt-4 po-p-0'] .po-container.po-container-no-border"
    }

    msgNumProcObrigatorio() {
        return ".po-modal-body div"
    }

    msgCnpjInvalido() {
        return "[class='message ng-tns-c3168488692-0']"
    }

    msgCpfInvalidoTpIncricao() {
        return "[class='message ng-tns-c3168488692-1']"
    }

    msgDtForaPeriodoDtSentenca() {
        return ".po-field-container-bottom-text-error.ng-star-inserted span"
    }

    msgCnpjInvalidoSindicato() {
        return "[class='message ng-tns-c3168488692-2']"
    }

    msgValorInvalidoCodMunicipio() {
        return "[class='po-md-3 po-pl-0 custom-margin-help ng-touched ng-dirty ng-invalid'] po-field-container .po-field-container po-field-container-bottom > div:nth-child(1) .po-field-container-bottom-text-error.ng-star-inserted span"
    }

    msgValorInvalidoIdenVara() {
        return "[class='po-md-4 custom-margin-help ng-touched ng-dirty ng-invalid'] po-field-container .po-field-container po-field-container-bottom > div:nth-child(1) .po-field-container-bottom-text-error.ng-star-inserted span"
    }

    msgDtForaPeriodoDtConciliacao() {
        return "[class='po-md-3 custom-margin-help ng-invalid ng-touched ng-dirty'] po-field-container .po-field-container po-field-container-bottom .po-field-container-bottom .po-field-container-bottom-text-error.ng-star-inserted span"
    }

    msgCpfInvalidoPessoaTrabalhadora() {
        return 'span.message[role="alert"]'
    }

    msgDtNascForaPeriodo() {
        return '.po-field-container-bottom-text-error.ng-star-inserted span'
    }

    listPqNaoSalvar() {
        return ".po-page-slide-content"
    }

    listTipoVinc() {
        return "app-labor-process app-employment-contract-modal po-page-slide .po-page-slide-body app-blue-info:nth-child(1) po-container span.po-font-text-large";
    }   

    abasInfGerais() {
        return "div.po-accordion-item-header-title.po-text-ellipsis"
    }

} export default S2500Elements;


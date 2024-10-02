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
        return "[data-item-list='177198c7-c954-215c-b286-27883583cb78'] [aria-disabled='false'] .po-item-list-label"
    }

    campoNomeTrabalhador() {
        return "[id='po-input\[209b6c3d-48b4-f24b-b711-53d22d52959e\]']"
    }

    campoCPF() {
        return "[id='po-input\[3df4f5c2-a5ce-4fe7-4b71-388eed8eb461\]']"
    }

    campoDtNasc() {
        return "[id='po-datepicker\[fbf6d494-f4d5-63e4-ae41-b5b7967b8ce2\]']"
    }

    // Elementos Botões
    btnAdcProc() {
        return ".po-md-2.po-mt-4.po-sm-12 > .po-button"
    }

    btnSetaBaixo() {
        return ".po-button-icon > .po-icon.po-icon-arrow-down"
    }

    btnAdicContrato() {
        return "[class='po-mt-2'] [p-size='medium']"
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
        return "[class='message ng-tns-c3168488692-3']"
    }

} export default S2500Elements;


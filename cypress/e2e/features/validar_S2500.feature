Feature: Realizar o Login e validar campos do evento S-2500

  Scenario: Validar campo Número do processo com Processo Judicial
    Given que o usuário já tenha realizado o login
    Then que o usuário esteja na aplicação Processo trabalhista
    Then clique no botão Adicionar Processo
    Then esteja na página Cadastro de processo trabalhista
    Then selecione a opção Processo Judicial no campo Origem do Processo
    Then o campo Número do processo deve ser preenchido com "20" caracteres
    Then preencho o campo Observações com a mensagem "Teste realizado com Cypress"
    Then o campo município com o código "3541406"
    Then o campo UF com "SP"
    Then o campo Indicador da vara com o código "101"
    Then o campo Data da conciliação "01/01/2025"
    Then clico para acessar Identificação da pessoa trabalhadora e contrato de trabalho 
    Then preencho com o nome "Jaqueline Sabrina Daniela Dias"
    Then preencho o campo com o CPF inválido "11111111111"
    Then preencho o campo Data de Nascimento fora do período "01/01/1889"
    Then clico no botão Adicionar Contrato
    Then clico no botão "Por que não consigo salvar?"
    Then clico no item "O campo Tipo de vínculo da aba Informações gerais está inválido."
    Then acesso a aba "Informações gerais" e seleciono "Empregado com reconhecimento de vínculo"
    Then selecionar a opção "Sim" no campo Informações do evento
    Then selecionar a opção "Sim" no campo Reintegração
    Then selecionar a opção "Sim" no campo Reconhecimento de categoria 
    Then selecionar a opção "Sim" no campo Reconhecimento da natureza atividade
    Then selecionar a opção "Sim" no campo Reconhecimento de motivo de desligamento
    Then preencho o campo Matrícula do contrato com "6785265265785" 
    Then selecionar a opção "CNPJ" no campo Tipo de inscrição
    Then preencho o campo Tipo de inscrição com "79938702819633" 
    Then selecionar a opção "Decisão com repercussão tributária e/ou FGTS com rendimentos informados em S-2501" no campo Indicativo de repercussão
    Then preencher a data "2023-01" no campo Competência inicial
    Then preencher a data "2025-01" no campo Competência Final
    Then clicar na opção "Identificação do período"
    Then clicar na opção "Incluir Período"

    
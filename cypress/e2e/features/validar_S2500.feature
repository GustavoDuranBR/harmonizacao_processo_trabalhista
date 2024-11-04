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
    Then o campo Data da conciliação "01/01/2024"
    Then clico para acessar Identificação da pessoa trabalhadora e contrato de trabalho 
    Then preencho com o nome "Jaqueline Sabrina Daniela Dias"
    Then preencho o campo com o CPF inválido "11111111111"
    Then preencho o campo Data de Nascimento fora do período "01/01/1889"
    Then clico no botão Adicionar Contrato
    Then clico no botão "Por que não consigo salvar?"
    Then clico no item "O campo Tipo de vínculo da aba Informações gerais está inválido."
    Then acesso a aba "Informações gerais" e seleciono "Empregado com reconhecimento de vínculo"
    Then selecionar a opção "Sim" no campo Informações do evento
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
    When o campo Data da conciliação "01/01/2024"
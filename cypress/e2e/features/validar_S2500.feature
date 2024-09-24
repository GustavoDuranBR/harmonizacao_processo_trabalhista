Feature: Realizar validações nos campos do evento S-2500

  Scenario: Validar campo Número do processo com Processo Judicial
    Given que o usuário já tenha realizado o login
    Then que o usuário esteja na aplicação Processo trabalhista
    Then clique no botão Adicionar Processo
    Then esteja na página Cadastro de processo trabalhista
    Then selecione a opção "Processo Judicial" no campo Origem do Processo
    When o campo Número do processo deve ser preenchido com "20" caracteres

  Scenario: Validar campo Número do processo com Demanda submetida à CCP ou ao NINTER
    Given que o usuário já tenha realizado o login
    Then que o usuário esteja na aplicação Processo trabalhista
    Then clique no botão Adicionar Processo
    Then esteja na página Cadastro de processo trabalhista
    Then selecione a opção "Demanda submetida à CCP ou ao NINTER" no campo Origem do Processo
    When o campo Número do processo deve ser preenchido com "15" caracteres
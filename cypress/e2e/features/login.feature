Feature: Acessar o sistema e realizar ações

  Scenario: Realizar login no sistema
    Given que o usuário acessa a página de login
    Then o usuário preenche o login com "super" e senha com "super"
    Then o usuário clica no botão de entrar
    Then o login deve ser realizado com sucesso
    Then o usuário seleciona o programa "html.labor-process"
    When o programa deve ser selecionado com sucesso

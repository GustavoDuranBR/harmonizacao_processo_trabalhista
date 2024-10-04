# Projeto de Testes Automatizados - Eventos S-2500 e S-2501

![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Cypress](https://img.shields.io/badge/cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Cucumber](https://img.shields.io/badge/cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white)
![Mochawesome](https://img.shields.io/badge/mochawesome-8D6748?style=for-the-badge&logo=mocha&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Este projeto tem como objetivo implementar testes automatizados para os eventos S-2500 e S-2501 do Processo Trabalhista, utilizando Cypress em conjunto com Cucumber. A automação desses testes visa garantir a qualidade e a confiabilidade do sistema em desenvolvimento, facilitando a validação das funcionalidades.

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes de ponta a ponta.
- [Cucumber](https://cucumber.io/) - Ferramenta para BDD (Behavior Driven Development).
- [Mochawesome](https://github.com/molotovmc/mochawesome) - Reporter para gerar relatórios de teste.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
processo_trabalhista_harmonizacao/
├── cypress/
│   ├── downloads/
│   ├── e2e/
│   ├── fixtures/
│   ├── reports/
│   └── support/
├── cypress.config.js
├── eslint.config.mjs
├── jsconfig.json
├── node_modules/
├── package.json
└── package-lock.json
```

- **cypress/downloads/**: Pasta onde os arquivos baixados durante os testes são armazenados.
- **cypress/e2e/**: Contém os arquivos de especificação (testes).
- **cypress/fixtures/**: Contém dados de teste.
- **cypress/reports/**: Relatórios gerados pelos testes.
- **cypress/support/**: Comandos personalizados e configurações de suporte.
- **cypress.config.js**: Configurações do Cypress.
- **eslint.config.mjs**: Configurações do ESLint para linting do código.
- **jsconfig.json**: Configurações do JavaScript para o projeto.
- **node_modules/**: Dependências do projeto.
- **package.json**: Dependências e scripts do projeto.
- **package-lock.json**: Versões exatas das dependências instaladas.

## Configuração do Ambiente

### Requisitos

Antes de executar o projeto, você precisará ter o seguinte instalado:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

### Instalação

1. Clone o repositório:

   ```bash
   git clone <URL do repositório>
   cd <nome do repositório>
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `cypress.config.js`:

   ```javascript
   env: {
       username: 'seu_usuario',
       password: 'sua_senha'
   },
   ```

### Execução dos Testes

Para executar os testes, use o seguinte comando:

```bash
npx cypress open
```

Isso abrirá a interface do Cypress, onde você pode escolher qual teste executar. 

Os testes também podem ser executados em modo headless usando:

```bash
npx cypress run
```

## Comandos Personalizados

O projeto inclui vários comandos personalizados para facilitar a execução de testes:

- `loginAndSaveSession`: Realiza o login e salva o cookie de sessão.
- `setSessionCookie`: Reutiliza o cookie de sessão existente.
- `checkAndLogin`: Verifica se a sessão já está ativa, reutilizando o cookie ou realizando o login.
- `getIframe`: Obtém o conteúdo de um iframe.
- `gerarNumeroAleatorio`: Gera um número aleatório com a quantidade de dígitos especificada.

## Relatórios

Os relatórios dos testes são gerados na pasta `cypress/reports` usando o Mochawesome. Os relatórios em formato HTML podem ser visualizados após a execução dos testes.

## Contribuições

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, sinta-se à vontade para abrir uma issue ou um pull request.

## Licença

Este projeto está sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
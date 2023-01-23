# Client DB

Projeto criado para podermos resgatar, adicionar e editar um cliente no banco de dados, e está pronto para todas essa ações.

Os dados disponíveis são o nome, cnpj e status de atividade das empresas.

A aplicação resgata os dados de uma API, mas como essa API é um mock, não é possível adicionar ou editar os dados dela, então a aplicação resgata as informação da API e cria um banco de dados no `local storage` do navegador, dando assim a possibilidade de adicionarmos e editarmos os dados.

## Informações sobre o funcionamento

- O projeto foi todo pensado em `mobile first`

- Ao realizar qualquer uma das ações, um `id` único é dado a cada entrada e a lista mostrada é ordenada de acordo com o `id` atribuído.

- O formulário possui validações e não deixara um registro ser salvo caso esteja inválido.

## Estrutura

Arquivos separados em seus devidos lugares para uma estrutura mais limpa.

- components
- directives
- pipes
- services
- styles
- types
- views

## Development server

Para rodarmos o ambiente de desenvolvimento, temos que:

- Instalar as dependências com `npm install`
- Rodar o ambiente com `npm run dev`

A aplicação estará disponível para visualização em `http://localhost:4200/`

## TODO

- Validar CNPJ digitado
- Acessibilidade do componente Select
- Testes unitários
- Testes E2E

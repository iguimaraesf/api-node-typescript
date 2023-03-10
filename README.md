# Progresso da aplicação

## Estruturação de pastas, rotas, instalações de outras bibliotecas

[Endpoints e status code](https://www.youtube.com/watch?v=ZGzyIN474vI&list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP&index=6)

- Separação das rotas no arquivo ```routes/index.ts```;
- Códigos de status;

[Variáveis de ambiente e construção do projeto(build)](https://www.youtube.com/watch?v=W4SlAHajAeA&list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP&index=7)

- Instalação da biblioteca dotenv;
- No arquivo ```Server.ts```, ```import 'dotenv/config'```;
- Configuração de porta;
- Configurações de transformar typescript em javascript para enviar para produção;

[Estrutura de pastas no NodeJS e Typescript](https://www.youtube.com/watch?v=0NCnwiXCks4&list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP&index=8)

- Configurações de pastas;

## Camada Web

[Criando controller, tipo de dados de entrada e melhoria no ESLINT](https://www.youtube.com/watch?v=xyjvNhoyVkI&list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP&index=9)

- Construção dos Controllers;

[Validações](https://www.youtube.com/watch?v=W-k7h_Ypk6o&list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP&index=10)

- Validação "na mão";
- Biblioteca YUP para validação;

[Tradução das mensagens de erro do yup](https://www.youtube.com/watch?v=BpdwZNIyt4o&list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP&index=11)

- Estrutura ```Record```;
- Tratamento de vários erros de uma só vez;
- Tradução das mensagens de erro;

[Middleware de validação](https://www.youtube.com/watch?v=0qLDbXV7Y1w&list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP&index=12)

- Chamada dos Middlewares;
- Código em duplicidade para validações no corpo e na linha de requisição;

[Melhorando a construção das validações](https://www.youtube.com/watch?v=dC3ID_Zu2nI&list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP&index=13)

- Definição de tipos complexos de dados;
- Isolamento das validações para não repetir código;
- Uso de tipos genéricos;

[Método para buscar todas as cidades](https://www.youtube.com/watch?v=QAXwzIfW6Rk&list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP&index=14)

- Verbos HTTP;
- Validações para buscar as cidades;

[Finalização do controller de cidades](https://www.youtube.com/watch?v=Hkt_5QGnMw0&list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP&index=15)

- Outros métodos do CRUD de cidades;
- Reaproveitamento da estrutura de validação;

## Testes

[Configuração dos testes com Jest](https://www.youtube.com/watch?v=G6Lo8wk4Y5w&list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP&index=16)

- Teste de integração (ou de ponta a ponta), a chamada a cada endpoint;
- Verificação da resposta do teste;
- Conversão do typescript para javascript;
- Exclusão de arquivos de teste para o empacotamento de produção;

[Primeiros testes](https://www.youtube.com/watch?v=rNhK8hZncGw&list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP&index=17)

- Caminho feliz;
- Teste de erros de validação;

[Outros testes do CRUD](https://www.youtube.com/watch?v=fsAR3dPBOg0&list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP&index=18)

- Implementação de outros casos de teste;

[Deploy - Heroku](https://www.youtube.com/watch?v=nR1h_G0HzOk&list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP&index=19)

- Dia 28 de novembro, encerrou os planos gratuitos;
- Scripts para produção;
- Procfile do Heroku;

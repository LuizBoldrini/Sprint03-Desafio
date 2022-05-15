# **Sprint03:** Criando uma API de carteira de criptomoedas

## **Libs e suas versões:**
    body-parser: 1.20.0   path: 0.12.7
    config: 3.3.7         sequelize: 6.19.0
    express: 4.18.1       sequelize-cli: 6.4.1
    mysql2: 2.3.3         DevDep: nodemon: 2.0.16

## **Tabelas:**
    Wallets: Para armazenar dados das pessoas.
    Coins: As moedas que serão usadas.
    Transations: Registar todas as transações feitas.

## **Iniciar:**
Para iniciar o servidor: `nodemon ./api/index.js` ou `npm start`(previamente configurado).

## **Endpoints da aplicação:**
**Wallets:**

    Get('/api/v1/wallet') - Lista todos os usuários que foram cadastrados.
    Get('/api/v1/wallet/:address') - Lista um usuário específico.
    Post('/api/v1/wallet') - Cria um novo cadastro.
    Delete('/api/v1/wallet/:address') - Deleta um usuário préviamente cadastrado.

**Coins:**

    Get('/api/v1/coin') - Lista todas as Coins que foram cadastradas.
    Get('/api/v1/coin/:id') - Lista uma Coin específica.
    Post('/api/v1/coin') - Cria uma nova Coin.
    Delete('/api/v1/coin/:id') - Deleta uma Coin previamente cadastrada.

**Transactions:**

    Get('/api/v1/transaction') - Lista todas as transações já feitas.
    Get('/api/v1/:receiveFrom/transaction') - Lista Todas as transações em que um usuário fez(no lugar de :receiveFrom, colocar o address em que o usuário recebe quando criado).
    Post('/api/v1/:receiveFrom/transaction/:idCoin') - Cria uma nova transação(receiveFrom = address do usuário que vai receber a transação. idCoin = id em que a moeda recebe quando cadrastrada).
    Delete('/api/v1/transaction/:id') - Usado para deletar uma transação, pode ser usada no caso de ter sido feita a transação com o valor errado ou para pessoa errada.
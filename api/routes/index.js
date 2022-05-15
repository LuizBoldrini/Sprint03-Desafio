const bodyParser = require('body-parser')
const wallets = require('./walletRoute')
const coins = require('./coinRouter')
const transactions = require('./transactionRouter')

module.exports = app => {
    app
        .use(bodyParser.json())
        .use(wallets)
        .use(coins)
        .use(transactions)
}
const { Router } = require('express')
const TransactionController = require('../controllers/TransactionsController')

const router = Router()

router
    .get('/api/v1/transaction', TransactionController.pegaTodasTransactions)
    .get('/api/v1/:receiveFrom/transaction', TransactionController.pegaTodasTransactionsDeUmWallet)
    .post('/api/v1/:receiveFrom/transaction/:idCoin', TransactionController.criaTransaction)
    .delete('/api/v1/transaction/:id', TransactionController.deletaTransaction)

module.exports = router
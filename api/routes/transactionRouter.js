const { Router } = require('express')
const TransactionController = require('../controllers/TransactionsController')

const router = Router()

router
    .get('/api/v1/transaction', TransactionController.pegaTodasTransactions)
    .get('/api/v1/:receiveFrom/transaction', TransactionController.pegaTodasTransactionsDeUmWallet)
    .post('/api/v1/:receiveFrom/transaction', TransactionController.criaTransaction)

module.exports = router
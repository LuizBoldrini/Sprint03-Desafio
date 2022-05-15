const { TransactionsServices } = require('../services')
const transactionsServices = new TransactionsServices()

class TransactionController {
    static async pegaTodasTransactions(req, res) {
        try {
            const todasTransactions = await transactionsServices.pegaTodosOsRegistros()
            return res.status(200).json(todasTransactions)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaTodasTransactionsDeUmWallet(req, res) {
        const { receiveFrom } = req.params
        try {
            const todasAsTransictions = await transactionsServices.encontraEContaRegistros({ receiveFrom: Number(receiveFrom) })
            if (todasAsTransictions == null) {
                res.status(404).json([{ message: `Address ${receiveFrom} não encontrado!` }])
            } else {
                return res.status(200).json(todasAsTransictions)
            }

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaTransaction(req, res) {
        const { receiveFrom } = req.params
        const novaTransaction = {...req.body, receiveFrom: Number(receiveFrom) }
        try {
            const novaTransactionCriada = await database.Transactions.create(novaTransaction)
            return res.status(201).json(novaTransactionCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TransactionController
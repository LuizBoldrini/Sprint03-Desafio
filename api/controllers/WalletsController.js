const database = require('../models')

class WalletController {
    static async pegaTodasWallets(req, res) {
        try {
            const todasWallets = await database.wallet.findAll()
            return res.status(200).json(todasWallets)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaWallet(req, res) {
        const { address } = req.params
        try {
            const umaWallet = await database.wallet.findOne({ where: { address: Number(address) } })
            if (umaWallet == null) {
                res.status(404).json([{ message: `Address ${address} não encontrado!` }])
            } else {
                return res.status(200).json(umaWallet)
            }

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaWallet(req, res) {
        const novaWallet = req.body
        try {
            const novaWalletCriada = await database.wallet.create(novaWallet)
            return res.status(201).json(novaWalletCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = WalletController
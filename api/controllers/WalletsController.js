const { WalletsServices } = require('../services')
const walletsServices = new WalletsServices()

class WalletController {
    static async pegaTodasWallets(req, res) {
        try {
            const todasWallets = await walletsServices.pegaTodosOsRegistros()
            return res.status(200).json(todasWallets)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaWallet(req, res) {
        const { address } = req.params
        try {
            const umaWallet = await walletsServices.pegaUmRegistro({ address })
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
            const novaWalletCriada = await walletsServices.criaRegistro(novaWallet)
            return res.status(201).json(novaWalletCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaWallet(req, res) {
        const { address } = req.params
        try {
            const umaWallet = await database.Wallets.findOne({ where: { address: Number(address) } })
            if (umaWallet == null) {
                res.status(404).json([{ message: `Address ${address} não encontrado!` }])
            } else {
                await database.Wallets.destroy({ where: { address: Number(address) } })
                return res.status(204).json()
            }

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = WalletController
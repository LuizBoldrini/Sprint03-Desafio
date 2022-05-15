const database = require('../models')

class CoinsController {
    static async pegaTodasCoins(req, res) {
        try {
            const todasCoins = await database.Coins.findAll()
            return res.status(200).json(todasCoins)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaCoin(req, res) {
        const { id } = req.params
        try {
            const umaCoin = await database.Coins.findOne({ where: { id: Number(id) } })
            if (umaCoin == null) {
                res.status(404).json([{ message: `Address ${id} não encontrado!` }])
            } else {
                return res.status(200).json(umaCoin)
            }

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaCoin(req, res) {
        const novaCoin = req.body
        try {
            const novaCoinCriada = await database.Coins.create(novaCoin)
            return res.status(201).json(novaCoinCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaCoin(req, res) {
        const { id } = req.params
        try {
            const umaCoin = await database.Coins.findOne({ where: { id: Number(id) } })
            if (umaCoin == null) {
                res.status(404).json([{ message: `Id ${id} não encontrado!` }])
            } else {
                await database.Coins.destroy({ where: { id: Number(id) } })
                return res.status(204).json()
            }

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = CoinsController
const { Router } = require('express')
const CoinsController = require('../controllers/CoinsController')

const router = Router()

router
    .get('/api/v1/coin', CoinsController.pegaTodasCoins)
    .get('/api/v1/coin/:id', CoinsController.pegaUmaCoin)
    .post('/api/v1/coin', CoinsController.criaCoin)
    .delete('/api/v1/coin/:id', CoinsController.deletaCoin)




module.exports = router
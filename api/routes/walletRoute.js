const { Router } = require('express')
const WalletController = require('../controllers/WalletsController')

const router = Router()

router
    .get('/api/v1/wallet', WalletController.pegaTodasWallets)
    .get('/api/v1/wallet/:address', WalletController.pegaUmaWallet)
    .post('/api/v1/wallet', WalletController.criaWallet)


module.exports = router
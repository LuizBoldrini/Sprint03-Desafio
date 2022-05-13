const bodyParser = require('body-parser')
const wallets = require('./walletRoute')

module.exports = app => {
    app
        .use(bodyParser.json())
        .use(wallets)
        .get('/', (req, res) => res.send('dale'))
}
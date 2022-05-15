const database = require('../models')

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }

    pegaTodosOsRegistros(where = {}) {
        return database[this.nomeDoModelo].findAll({ where: {...where } })
    }

    async pegaUmRegistro(where = {}) {
        return database[this.nomeDoModelo].findOne({ where: {...where } })
    }

    async criaRegistro(dados) {
        return database[this.nomeDoModelo].create(dados)
    }

    async encontraEContaRegistros(where = {}, agregadores) {
        return database[this.nomeDoModelo]
            .findAndCountAll({ where: {...where }, ...agregadores })
    }
}

module.exports = Services
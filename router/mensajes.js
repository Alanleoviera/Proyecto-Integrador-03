import express from 'express'

import Controlador from '../controlador/mensajes.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    config() {
        this.router.get('/', this.controlador.obtenerMensajes )
        this.router.post('/', this.controlador.guardarMensaje )

        return this.router
    }
}

export default Router

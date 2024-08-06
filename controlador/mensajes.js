import Servicio from '../servicio/mensajes.js'


class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    obtenerMensajes = async (req, res) => {
        try {
            const mensajes = await this.servicio.obtenerMensajes()
            res.json(mensajes)
        }
        catch(error) {
            res.status(500).json({errMsg: error.message})
        }
    }

    guardarMensaje = async (req, res) => {
        try {
            const mensaje = req.body
            if(!Object.keys(mensaje).length) throw new Error('ERROR: No puedo incorporar un mensaje vacío')
            const mensajeGuardado = await this.servicio.guardarMensaje(mensaje)
            res.json(mensajeGuardado)
        }
        catch(error) {
            res.status(500).json({errMsg: error.message})
        }
    }
}

export default Controlador
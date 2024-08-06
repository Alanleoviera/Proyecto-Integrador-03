import mongoose from "mongoose";

const mensajeSchema = mongoose.Schema({
    nombre: String,
    correo: String,
    telefono: Number,
    mensaje: String,
}, { versionKey: false })

export const MensajeModel = mongoose.model('mensajes', mensajeSchema)
import mongoose from "mongoose";

const mensajeSchema = mongoose.Schema({
    nombre: String,
    email: String,
    telefono: Number,
    mensaje: String,
}, { versionKey: false })

export const MensajeModel = mongoose.model('mensajes', mensajeSchema)
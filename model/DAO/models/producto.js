import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    marca: String,
    categoria: String,
    descorta: String,
    deslarga: String,
    envio: Boolean,
    edaddesde: Number,
    edadhasta: Number,
    foto: String,
}, { versionKey: false })

export const ProductoModel = mongoose.model('productos', productoSchema)
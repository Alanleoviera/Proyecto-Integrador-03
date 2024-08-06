import Joi from 'joi'

//https://joi.dev/api/?v=17.13.0

const validar = producto => {
    const productoSchema = Joi.object({
        nombre: Joi.string().min(2).max(35).required(),
        precio: Joi.number().required(),
        stock: Joi.number().required(),
        marca: Joi.string().required(),
        categoria: Joi.string().required(),
        descorta: Joi.string().required(),
        deslarga: Joi.string().required(),
        envio: Joi.boolean().required(),
        edaddesde: Joi.number().required(),
        edadhasta: Joi.number().required(),
        foto: Joi.string().required()
    })

    const { error } = productoSchema.validate(producto);
    //console.log(error)

    return error
}

export default validar
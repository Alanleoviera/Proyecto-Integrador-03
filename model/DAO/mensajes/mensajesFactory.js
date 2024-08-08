import ModelFile from "../mensajes/mensajesFile.js";
import ModelMongoDB from "./mensajesMongoDB.js";

class ModelFactory {
    static get(tipo) {
        switch(tipo) {
            case 'FILE':
                console.log('**** Mensajes Persistiendo en FileSystem ****')
                return new ModelFile()

            case 'MONGODB':
                console.log('**** Mensajes Persistiendo en Database MongoDB ****')
                return new ModelMongoDB()

            default:
                console.log('**** Mensajes Persistiendo en FileSystem (default) ****')
                return new ModelFile()
        }
    }
}

export default ModelFactory
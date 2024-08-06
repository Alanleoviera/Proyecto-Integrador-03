import ModelFile from "../productos/productosFile.js";
import ModelMongoDB from "./pedidosMongoDB.js";

class ModelFactory {
    static get(tipo) {
        switch(tipo) {
            case 'FILE':
                console.log('**** Pedidos Persistiendo en FileSystem ****')
                return new ModelFile()

            case 'MONGODB':
                console.log('**** Pedidos Persistiendo en Database MongoDB ****')
                return new ModelMongoDB()

            default:
                console.log('**** Pedidos Persistiendo en FileSystem (default) ****')
                return new ModelFile()
        }
    }
}

export default ModelFactory
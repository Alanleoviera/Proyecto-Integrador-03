import ModelFile from "./productosFile.js";
import ModelMongoDB from "./productosMongoDB.js";

class ModelFactory {
    static get(tipo) {
        switch(tipo) {
            case 'FILE':
                console.log('**** Productos Persistiendo en FileSystem ****')
                return new ModelFile()

            case 'MONGODB':
                console.log('**** Productos Persistiendo en Database MongoDB ****')
                return new ModelMongoDB()

            default:
                console.log('**** Productos Persistiendo en FileSystem (default) ****')
                return new ModelFile()
        }
    }
}

export default ModelFactory
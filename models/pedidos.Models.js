const { default: mongoose} = require('mongoose')

const pedidosModelSchema = mongoose.Schema ({
    estado: {
        type: String,
        require: true
    },
    IdUsuadio: {
        type: String,
        require: true
    },
    nombre: {
        type: String,
        require: false
    },
    productos: {
        type: String,
        require: true
    },
    total: {
        type: Number,
        require: true
    },
    // fecha: {
    //     type: Date,
    //     require: true
    // }

},{
    tiemestamps: true,
    versionkey: false
})

module.exports = mongoose.model('pedido', pedidosModelSchema)


// {
//     "estado": "",
//     "IdUsuadio": ,
//     "productos": ,
//     "total": ""
// }

const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required : false
    },
    tipo: {
        type: String,
        required: false
    },
    imagen: {
        type: String,
        required: false
    },
    valor:{
        type: Number,
        required:false

    },
    disponibilidad: {
        type: String,
        required: false
    },
    ingredientes: {
        type:String,
        required:false
    }

},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('producto',productoSchema)



// {
//     "nombre": "",
//     "tipo": "",
//     "imagen": "",
//     "valor": ,
//     "disponibilidad":"",
//     "ingredientes": "",
// }

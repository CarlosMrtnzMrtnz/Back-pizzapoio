const mongoose = require ('mongoose')  

const ingredienteSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: false
    },
    valor: {
        type: Number,
        required: false
    },
    cantidad: {
        type: Number,
        required: false
    },
    disponibilidad: {
        type: String,
        required: false
    },
    imagen: {
        type: String,
        required: false
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('ingrediente',ingredienteSchema)

// {
//     "nombre": "",
//     "valor": ,
//     "cantidad": ,
//     "disponibilidad": ""
// }

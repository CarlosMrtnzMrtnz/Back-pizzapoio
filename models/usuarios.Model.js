const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    apellido:{
        type: String,
        require: true
    },
    telefono:{
        type: Number,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    clave:{
        type: String,
        require: true
    },
    roll: {
        type: String,
        require: true
    }
},{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('usuario',usuarioSchema)

// {
//     "nombre": "",
//     "apellido": "",
//     "telefono": ,
//     "email": "",
//     "clave": "",
//     "roll": ""
// }

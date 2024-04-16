const { default: mongoose } = require("mongoose")

const loginModelSchema = mongoose.Schema ({
    email: {
        type: String,
        require: true
    },
     clave: {
        type: String,
        require: true
     },

},{
    tiemestamps: true,
    versionkey: false
})

module.exports = mongoose.model('login', loginModelSchema)

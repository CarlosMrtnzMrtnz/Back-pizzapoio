require('dotenv').config({ path: 'config.env'})
const jwt = require('jsonwebtoken')
const usuariosModel = require('../models/usuarios.Model')

exports.generarToken = async (req, res ) => {
    const {email, clave}  = req.body
    const usuario = await usuariosModel.findOne({ email })
    if (!usuario) {
        return res.status(401).json({ error: "Credenciales invalidas (correo) "})
    }
    if ( usuario.clave != clave) {
        return res.status(401).json({error: "Credenciales invalidas (clave) "})
    }

    const payload = {
        id: usuario._id,
        roll: usuario.roll,
        nombre: `${usuario.nombre} ${usuario.apellido}`
        
    }

    const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, {expiresIn: '24h'})
    return res.status(202).json({ token })
}

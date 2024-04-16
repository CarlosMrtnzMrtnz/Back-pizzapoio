const usuarioModel = require('../models/usuarios.Model')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: 'config.env' })

exports.buscarUsuario = async (req, res) => {

    try {
        let dataUsuario = await usuarioModel.find()
        res.json(dataUsuario)
        
    } catch (error) {
        
    console.log(error);
    res.status(500).send({error:'Ha ocurrido un error, comuniquese con el administrador'})
    }
}


exports.crearUsuario = async (req, res) => {

    try {
        regexEmail = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/
        let nuevoCorreo = req.body.email
        if (regexEmail.test(nuevoCorreo)) {
            let compararDatos = await usuarioModel.find({ email: req.body.email });
            // console.log("🚀 ~ compararDatos:", compararDatos)
            if(compararDatos.length == 0) {
                let nuevoUsuario = new usuarioModel(req.body)
                await nuevoUsuario.save()
                res.send(nuevoUsuario)
            } else { 
                return res.status(400).send({ error: 'El correo ya existe' });
        }
        } else {
            res.status(400).send({error: 'El correo no es valido'})
        }


    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Ha ocurrido un error, comunicate con el administrador'})
    }
}


exports.actualizarUsuario = async (req, res) => {
    try {
        if(req.params.usuarioId.length == 24) {
            let dataUsuario = await usuarioModel.findById(req.params.id)
            console.log(req.params);

            if(!dataUsuario) {
                res.status(404).send({error : 'No se ha encontrado el usuario'})
            }
            const {nombre, apellido, telefono, email, clave, roll} = req.body

            dataUsuario.nombre = nombre
            dataUsuario.apellido = apellido
            dataUsuario.telefono = telefono
            dataUsuario.email = email
            dataUsuario.clave = clave
            dataUsuario.roll = roll


            dataUsuario = await usuarioModel.findOneAndUpdate({_id: req.params.id}, dataUsuario, {new: true})
            res.json(dataUsuario)
        } else {
            // console.log(dataUsuario);
            res.status(403).send({ error: "El id proporcionado no es valido"})
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Ha ocurrido un error, comunicate con el administrador'})
        
    }
}


exports.eliminarUsuario = async (req, res) => {
    try {
        let dataUsuario = await usuarioModel.findById(req.params.id)
        if (!dataUsuario) {
            res.status(404).send({error: 'No se ha encontrado el usuario'})
            return
        }
        await usuarioModel.findOneAndDelete({_id:params.id})
        res.status(202).send({msg: 'Eliminado correctamente'})
        
    } catch (error) {
        console.log(error);
        res.status(500).send({error: 'Ha ocurrido algo, comuniquese con el administrador'})
    }
}


exports.consultarUnUsuario = async (req, res) => {
    try {
        let dataUsuario = await usuarioModel.findById(req.params.id)
        if (!dataUsuario) {
            res.status(404).send({error: 'No se ha encontrado el Usuario'})
        } else {
            res.send(dataUsuario)
        }
    } catch (error) {
        console.log('error:', error);
        res.status(500).send({error: 'Ha ocurrido algo comuniquese con el administrador'})
    }
}


exports.desencriptarToken = (req, res) => {
    try {
        let token = req.headers.authorization
        token = token.split(' ')
        token = token[1]
        const decoded = jwt.verify(token, process.env.SECRET_KEY_JWT);
        return res.json(decoded);

    } catch (error) {
        // Si hay algún error en la verificación o decodificación, manejamos el error
        console.error('Error al desencriptar el token:', error.message);
        return null;
    }
}

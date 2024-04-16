const productoModel = require('../models/productos.Model')

exports.consultarProducto = async (req, res) => {
    try {
        let dataProducto = await productoModel.find()
        res.json(dataProducto)
        
    } catch (error) {
        console.log(error);
        res.status(500).send({error:'Ha ocurrido algo, comuniquese con el administrador'})
    }
}


exports.crearProducto = async (req, res) => {
    try {
        let compararDatos = await productoModel.find({nombre: req.body.nombre})
        if (compararDatos.length == 0) {
            let nuevoProducto = new productoModel(req.body)
            await nuevoProducto.save()
            res.send(nuevoProducto)
        } else {
            return res.status(400).send({error: 'El producto ya existe'})
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({error:'Ha ocurrido algo, comuniquese con el administrador'})

    }
}


exports.eliminarProducto = async (req, res) => {
    try {
        let dataProducto = await productoModel.findById(req.params.id)
        if(!dataProducto) {
            res.status(404).send({ error: 'No se ha encontrado el producto'})
            return
        }
        await productoModel.findOneAndDelete({_id: req.params.id})
        res.status(200).send({msg: "Eliminado correctamente"})
    } catch (error) {
        console.log(error);
        res.status(500).send({error:'Ha ocurrido algo, comuniquese con el administrador'})

    }
}


exports.consultarUnProducto = async (req, res) => {
    try {
        let dataProducto = await productoModel.findById(req.params.id)
        if(!dataProducto) {
            res.status(404).send({ error: 'No se ha encontrado el producto'})
            return
        } else {
            res.send(dataProducto)
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({error:'Ha ocurrido algo, comuniquese con el administrador'})

    }
}


exports.actualizarProducto = async (req, res) => {
    try {
        if(req.params.productoId.length == 24) {

            let dataProducto= producto
Model.findById(req.params.id)

            if(!dataProducto){
                res.status(404).send({error: "no se ha encontrado"})
            }
            const{nombre,tipo,imagen,valor,disponibilidad,ingredientes} = req.body

            dataProducto.nombre = nombre
            dataProducto.tipo = tipo
            dataProducto.imagen = imagen
            dataProducto.valor = valor
            dataProducto.disponibilidad = disponibilidad
            dataProducto.ingredientes = ingredientes
    
            dataProducto = await producto
Model.findOneAndUpdate({_id: req.params.id}, dataProducto, {new: true})
            res.json(dataProducto)

        } else {
            res.status(403).send({ error: "El id proporcionado no es valido"})
        }


    } catch (error) {
        console.log(error);
        res.status(500).send({error:'Ha ocurrido algo, comuniquese con el administrador'})
    }
}

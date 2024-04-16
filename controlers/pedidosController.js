const pedidosModel = require('../models/pedidos.Models')

exports.consultarPedido = async (req, res) => {
    try {
        let dataPedido = await pedidosModel.find()
        res.json(dataPedido)
        
    } catch (error) {
        console.log(error);
        res.status(500).send({error:'Ha ocurrido algo, comuniquese con el administrador'})
    }
}


exports.crearPedido= async (req, res) => {
    try {
            let nuevoPedido = new pedidosModel(req.body)
            await nuevoPedido.save()
            res.send(nuevoPedido)

    } catch (error) {
        console.log(error);
        res.status(500).send({error:'Ha ocurrido algo, comuniquese con el administrador'})

    }
}


exports.eliminarPedido = async (req, res) => {
    try {
        let dataPedido = await pedidosModel.findById(req.params.id)
        if(!dataPedido) {
            res.status(404).send({ error: 'No se ha encontrado el pedido'})
            return
        }
        await pedidosModel.findOneAndDelete({_id: req.params.id})
        res.status(200).send({msg: "Eliminado correctamente"})
    } catch (error) {
        console.log(error);
        res.status(500).send({error:'Ha ocurrido algo, comuniquese con el administrador'})

    }
}


exports.consultarUnPedido = async (req, res) => {
    try {
        let dataPedido = await pedidosModel.findById(req.params.id)
        if(!dataPedido) {
            res.status(404).send({ error: 'No se ha encontrado el pedido'})
            return
        } else {
            res.send(dataPedido)
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({error:'Ha ocurrido algo, comuniquese con el administrador'})

    }
}


exports.actualizarPedido = async (req, res) => {
    try {
        if(req.params.id.length == 24) {

            let dataPedido = pedido
Model.findById(req.params.id)

            if(!dataPedido){
                res.status(404).send({error: "no se ha encontrado"})
            }
            const{estado,IdUsuario,nombre,productos,total} = req.body

            dataPedido.estado = estado
            dataPedido.IdUsuario = IdUsuario
            dataPedido.nombre = nombre
            dataPedido.productos = productos
            dataPedido.total = total
    
            dataPedido = await pedido
Model.findOneAndUpdate({_id: req.params.id}, dataPedido, {new: true})
            res.json(dataPedido)

        } else {
            res.status(403).send({ error: "El id proporcionado no es valido"})
        }


    } catch (error) {
        console.log(error);
        res.status(500).send({error:'Ha ocurrido algo, comuniquese con el administrador'})
    }
}

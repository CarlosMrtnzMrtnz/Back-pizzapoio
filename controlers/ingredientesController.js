const ingredientesModel = require('../models/ingredientes.Model');

exports.crearIngrediente = async (req, res) => {
    try {
        let compararDatos = await ingredientesModel.find({nombre: req.body.nombre})
        if (compararDatos.length == 0) {
            let nuevoIngrediente = new ingredientesModel(req.body)
            await nuevoIngrediente.save()
            res.send(nuevoIngrediente)
        } else {
            return res.status(400).send({error: 'El ingrediente ya existe'})
        }


    } catch (error) {
        console.log(error);
        res.status(500).send({error:'Ha ocurrido lgo, comuniquese con el administrador'})
    }
}


exports.eliminarIngrediente = async (req, res) => {
    try {
        let dataIngrediente = await ingredientesModel.findById(req.params.id)
        if (!dataIngrediente) {
            res.status(404).send({error: `'No se ha encontrado el ingrediente' ${req.params.id}`})
            return            
        }
        await ingredientesModel.findOneAndDelete({_id:req.params.id})
        res.status(202).send({msg: "Eliminado correctamente"})
    } catch (error) {
        console.log(error);
        res.status(500).send({error:'Ha ocurrido algo, comuniquese con el administrador'})
        
    }
}


exports.consultarIngrediente = async (req, res) => {
    try {
        let dataIngrediente = await ingredientesModel.find()
        res.json(dataIngrediente)
    } catch (error) {
        console.log(error);
        res.status(500).send({error: 'Ha ocurrido algo, comuniquese con el administrador'})        
    }
}


exports.actualizarIngrediente = async (req, res) => {
    try {
        if (req.params.ingredienteId.length == 24) {
            let dataIngrediente = await ingredientesModel.findById(req.params.id)
            console.log(req.params);

            if (!dataIngrediente) {
                res.status(404).send({error: 'No se ha encontrado el ingrediente'})
            }
            const {nombre, valor, cantidad, disponibilidad, imagen} = req.body

            dataIngrediente.nombre = nombre
            dataIngrediente.valor = valor
            dataIngrediente.cantidad = cantidad
            dataIngrediente.disponibilidad = disponibilidad
            dataIngrediente.imagen = imagen

            dataIngrediente = await ingredientesModel.findOneAndUpdate({_id: req.params.id}, dataIngrediente, {new: true})
            res.json(dataIngrediente)
        } else {
            res.status(403).send({error: 'El id proporcionado no es valido'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({error: 'Ha ocurrido algo comuniquese con el administrador'})
    }
}


exports.consultarUnIngrediente = async (req, res) => {
    try {
        let dataIngrediente = await ingredientesModel.findById(req.params.id)
        if (!dataIngrediente) {
            res.status(404).send({error: 'No se encuntra el ingrediente'})
        } else {
            res.send(dataIngrediente)
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send({error: 'Ha ocurrido un error comunicate con el administrador'})
    }
}

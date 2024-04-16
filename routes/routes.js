const express = require('express');
const router = express.Router()
const productoController = require('../controlers/productoController');
const usuarioControler = require('../controlers/usuariosControler');
const ingredientesController = require('../controlers/ingredientesController')
const sessionController = require('../controlers/sessionController')
const pedidosController = require('../controlers/pedidosController')
const mdJWT = require('../middleware/jwt')


router.post('/ingreso', sessionController.generarToken)
router.get('/token-info', usuarioControler.desencriptarToken)
// ------------------------- Rutas Productos ------------------------------------------------
router.get('/consultar-productos', productoController.consultarProducto);
router.post('/crear-producto', productoController.crearProducto);
router.put('/actualizar-producto/:id/:dataProducto', productoController.actualizarProducto);
router.delete('/eliminar-producto/:id', productoController.eliminarProducto);
router.get('/consultar-producto/:id', productoController.consultarUnProducto);

// -------------------------- Rutas Usuarios ------------------------------------------------
router.get('/buscar',mdJWT.verificarToken, usuarioControler.buscarUsuario);
router.post('/crear-usuario', usuarioControler.crearUsuario)
router.put('/modificar/:id/:dataUsuario', usuarioControler.actualizarUsuario)
router.delete('/eliminar-usuario/:id', usuarioControler.eliminarUsuario)
router.get('buscar-usuario/:id', usuarioControler.consultarUnUsuario)

// ------------------------ Rutas Ingredientes ----------------------------------------------
router.get('/buscar-ingredientes', ingredientesController.consultarIngrediente)
router.post('/crear-ingrediente', ingredientesController.crearIngrediente)
router.put('/actualizar-ingrediente/:id/:dataIngredientes', ingredientesController.actualizarIngrediente)
router.delete('/eliminar-ingrediente/:id', ingredientesController.eliminarIngrediente)
router.get('/buscar-ingrediente/:id', ingredientesController.consultarUnIngrediente)

// ------------------------ Rutas Pedidos ----------------------------------------------
router.get('/buscar-pedidos', pedidosController.consultarPedido)
router.post('/crear-pedido', pedidosController.crearPedido)
router.put('/actualizar-pedido/:id/:dataPedido', pedidosController.actualizarPedido)
router.delete('/eliminar-pedido/:id', pedidosController.eliminarPedido)
router.get('/buscar-pedido/:id', pedidosController.consultarUnPedido)

module.exports = router



const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors')

conectarDB()
const app = express();
app.use(cors())
app.use(express.json());

app.use('/api', require('./routes/routes'))
app.get('/api/health', (req, res) => {
    // Devolver un mensaje de estado saludable
    res.status(200).json({ status: 'OK', message: 'API is healthy' });
  });


app.listen(4000, () => {
    console.log('server running on port 4001');
})






















































































// // ---------------------------------$regex------------------------------------

// // El operador $regex ofrece la posibilidad de utilizar expresiones regulares para hacer coincidir cadenas con patrones en las consultas. MongoDB

// db.usuarios.insertMany([
//     { nombre: "Juan Pérez", email: "juan@gmail.com", edad: 22 },
//     { nombre: "María Rodríguez", email: "maria@hotmail.com", edad: 21 },
//     { nombre: "Pedro Gómez", email: "pedro@yahoo.com", edad: 25 },
//     { nombre: "Ana López", email: "ana@gmail.com", edad: 22 }
//   ]);

//   var resultado = db.usuarios.find({
//     nombre: { $regex: /^Ma/ }, 
//     email: { $regex: /gmail/ } 
//   });
// //   { nombre: "María Rodríguez", email: "maria@hotmail.com", edad: 21 },
// //   { nombre: "Juan Pérez", email: "juan@gmail.com", edad: 22 },




// //   ----------------------------------------No es igual ($ne)    $ne----------------------------------------
// // El operador $ne devuelve los documentos en los que el valor especificado no es igual:

// var respuesta = db.usuario.find( { edad: { $ne: 22 } } )
// // { nombre: "María Rodríguez", email: "maria@hotmail.com", edad: 22 },
// // { nombre: "Pedro Gómez", email: "pedro@yahoo.com", edad: 22 },


// // --------------------------------------------count ------------------------------------------------------------
// // $gte es un operador de comparación en MongoDB que significa "mayor o igual que".


// // Claro, aquí tienes un ejemplo simple de cómo usar la función count en MongoDB para contar el número de documentos que cumplen con ciertos criterios en una colección.
// //  Supongamos que tienes una colección llamada usuarios y quieres contar cuántos de ellos tienen el campo edad mayor o igual a 25:

// var cantidad = db.usuarios.count({ edad: { $gte: 25 } });
// log('Cantidad de usuarios con edad mayor o igual a 25: ' + cantidad);


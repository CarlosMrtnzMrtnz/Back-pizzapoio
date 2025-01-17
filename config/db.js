const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' });

const connectDB = async () => {
    try {
        let mongoURI = process.env.DB_MONGO;  
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        // No es recomendable volver a llamar a connectDB() si hay un error
        // connectDB();
    }
};

module.exports = connectDB;

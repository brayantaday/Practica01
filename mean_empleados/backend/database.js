require('dotenv').config();
const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/empleadosdb';

mongoose.connect(URI)
	.then(() => console.log('Conexión a MongoDB exitosa'))
	.catch(err => console.error('Error al conectar a MongoDB:', err));

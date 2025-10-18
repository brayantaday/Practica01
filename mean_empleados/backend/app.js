const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


// Rutas de empleados
const empleadosRoutes = require('./src/routes/empleados.routes');
app.use('/api/empleados', empleadosRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando correctamente' });
});

module.exports = app;

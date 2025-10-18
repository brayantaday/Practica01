const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleados.controller');


// Ruta para obtener todos los empleados
router.get('/', empleadosController.getEmpleados);

// Ruta para obtener un empleado por ID
router.get('/:id', empleadosController.getEmpleadoById);

// Ruta para crear empleado
router.post('/', empleadosController.createEmpleado);

// Ruta para actualizar empleado
router.put('/:id', empleadosController.updateEmpleado);

// Ruta para eliminar empleado
router.delete('/:id', empleadosController.deleteEmpleado);

module.exports = router;

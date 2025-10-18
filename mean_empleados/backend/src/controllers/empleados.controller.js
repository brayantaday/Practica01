// Controlador de empleados
const Empleado = require('../models/Empleado');

exports.getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener empleados', error });
  }
};

exports.getEmpleadoById = async (req, res) => {
  try {
    const { id } = req.params;
    const empleado = await Empleado.findById(id);
    if (!empleado) return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener empleado', error });
  }
};

exports.createEmpleado = async (req, res) => {
  try {
    const nuevoEmpleado = new Empleado(req.body);
    await nuevoEmpleado.save();
    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear empleado', error });
  }
};

exports.updateEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const empleadoActualizado = await Empleado.findByIdAndUpdate(id, req.body, { new: true });
    if (!empleadoActualizado) return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    res.json(empleadoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar empleado', error });
  }
};

exports.deleteEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const empleadoEliminado = await Empleado.findByIdAndDelete(id);
    if (!empleadoEliminado) return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    res.json({ mensaje: 'Empleado eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al eliminar empleado', error });
  }
};

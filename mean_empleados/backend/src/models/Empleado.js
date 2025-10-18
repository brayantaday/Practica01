const { Schema, model } = require('mongoose');

const EmpleadoSchema = new Schema({
	nombre: {
		type: String,
		required: true,
		trim: true
	},
	cargo: {
		type: String,
		required: true,
		trim: true
	},
	departamento: {
		type: String,
		required: true,
		trim: true
	},
	sueldo: {
		type: Number,
		required: true
	}
}, {
	timestamps: true,
    versionKey: false
});

module.exports = model('Empleado', EmpleadoSchema);

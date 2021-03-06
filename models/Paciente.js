const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pacientesSchema = new Schema({
	nombre: {
		type: 'string',
		trim: true,
	},
	propietario: {
		type: 'string',
		trim: true,
	},
	fecha: {
		type: 'string',
		trim: true,
	},
	hora: {
		type: String,
		trim: true,
	},
	sintomas: {
		type: String,
		trim: true,
	}
});

module.exports = mongoose.model('Paciente', pacientesSchema)
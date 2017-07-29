/**
 * UniversidadController
 *
 * @description :: Server-side logic for managing Universidads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	nombreCasual: {
	  type: 'string',
    required: true
  },
  nombreInstitucional: {
    type: 'string',
    unique: true,
    required: true
  },
  direccion: {
    type: 'string'
  },
  estado: {
    type: 'string',
    enum: ['Abierto', 'Cerrado','Clausurado'],
    defaultsTo:'Cerrado'
  },

  facultades:{
	  collection:'Facultad', //Tabla con la que nos relacionamos
    via:'fkIdUniversidad'
  }
};


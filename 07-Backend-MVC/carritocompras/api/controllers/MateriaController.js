/**
 * MateriaController
 *
 * @description :: Server-side logic for managing Materias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  attributes: {
    nombreCasual: {
      type: 'string',
      required: true
    },
    codigo:{
      type:'string',
      unique: true,
      required: true
    },
    horasPorSemana:{
      type:'integer',
      required: true
    },
    estado:{
      type:'string',
      enum:['Activo','Inactivo'],
      defaultsTo:'Activo'
    }
  }
};


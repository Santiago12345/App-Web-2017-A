/**
 * MatriculaController
 *
 * @description :: Server-side logic for managing Matriculas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  attributes: {
    fechaInicioMatriculacion: {
      type: 'date',
      required: true
    },
    fechaFinMatriculacion: {
      type: 'date',
      required: true
    },
    horaInicio: {
      type: 'datetime'
    },
    horaFin: {
      type: 'datetime'
    },
    estado:{
      type:'string',
      enum:['Matriculado','Pendiente','Denegado'],
      defaultsTo:'Pendiente'
    }
  }
};


/**
 * PeriodoAcademicoController
 *
 * @description :: Server-side logic for managing Periodoacademicoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  attributes: {
    nombreCasual: {
      type: 'string',
      required: true
    },
    fechaInicio: {
      type: 'date',
      required: true
    },
    fechaFin: {
      type: 'date',
      required: true
    },
  }
};


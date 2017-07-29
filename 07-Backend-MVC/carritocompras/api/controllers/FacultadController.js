/**
 * FacultadController
 *
 * @description :: Server-side logic for managing Facultads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  attributes: {
    nombreCasual: {
      type: 'string',
      required: true
    },
    fkIdUniversidad:{
      model:'Universidad'
    }
  }
};


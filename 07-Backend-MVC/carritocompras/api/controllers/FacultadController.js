/**
 * FacultadController
 *
 * @description :: Server-side logic for managing Facultads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    fkIdUniversidad:{
      model:'Universidad',
      required:true
    }
  }
};


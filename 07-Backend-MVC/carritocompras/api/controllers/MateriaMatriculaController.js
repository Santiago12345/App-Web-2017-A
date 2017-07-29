/**
 * MateriaMatriculaController
 *
 * @description :: Server-side logic for managing Materiamatriculas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	attributes:{
	  notaPrimerBimestre:{
	    type:'float'
    },
    notaSegundoBimestre:{
	    type:'float'
    },
    notaSupletorio:{
	    type:'float'
    },
    estado:{
	    type:'string',
      enum:['Estudiando','Jalado','Exonerado','Supletorio'],
      defaultsTo:'Estudiando'
    }
  }
};


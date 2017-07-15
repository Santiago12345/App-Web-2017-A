/**
 * Created by USRDEL on 8/7/17.
 */
module.exports = {
  vistaOculta: function (req, res) {
    return res.view('Oculto/sorpresa');
  },
homepage: function(req, res) {
  sails.models.usuario.find().exec(function (err, usuariosEncontrados) {
    if (err) {
      return res.serverError(err);
    }
    else {
      return res.view('homepage', {usuarios: usuariosEncontrados});
    }
  });
},
    crearUsuario: function(req, res){
    return res.view('crearusuario')
  }
};

/**
 * Created by USRDEL on 26/6/17.
 */
module.exports = {
  welcome: function (req, res) {
    //return res.json({saludo:"hola"})
    //POST
    if (req.method == "POST") {
      return res.send("Hola");
    }
    else {
      return res.send(res.status(403));
    }
  },
  bienvenido: function (req, res) {
    //GET
    if (req.method == "GET") {
      return res.json({ saludo: "hola" });
    }
    else {
      return res.send(res.status(403));
    }
  },
  crearUsuarioQuemado: function (req, res) {
    var nuevoUsuario = {
      nombres: "Javier",
      apellidos: "Tinoco",
      password: "1234",
      correo: "javier.tinoco@epn.edu.ec",
      fechaNacimiento: new Date()
    };
    Usuario1.create(nuevoUsuario).exec(function (error, usuarioCreado) {
      if (error) {
        res.serverError(error);
      }
      else {
        return res.ok(usuarioCreado);
      }
    });
  }
};

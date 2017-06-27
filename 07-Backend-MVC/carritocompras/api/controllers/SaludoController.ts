/**
 * Created by USRDEL on 26/6/17.
 */
declare var module;
declare var sails;
declare var Usuario;
module.exports = {
  welcome:(req,res)=>{
    //return res.json({saludo:"hola"})
    //POST
    if(req.method == "POST"){
      return res.send("Hola")
    }else{
      return res.send(res.status(403))

    }

  },
  bienvenido:(req,res)=>{
    //GET
    if(req.method == "GET"){
      return res.json({saludo:"hola"})
    }else{
      return res.send(res.status(403))

    }
  },
  crearUsuarioQuemado:(req,res)=>{
    let nuevoUsuario = {
      nombres:"Javier",
      apellidos:"Tinoco",
      password:"1234",
      correo:"javier.tinoco@epn.edu.ec",
      fechaNacimiento:new Date()
    }
    Usuario.create(nuevoUsuario).exec(
      (error,usuarioCreado)=>{
        if(error){
          res.serverError(error)
        }else{
          return res.ok(usuarioCreado)
        }
      }
    )
  }
}

/**
 * Created by USRDEL on 8/7/17.
 */
module.exports = {
  vistaOculta: function (req, res) {
    return res.view('Oculto/sorpresa');
  },
  homepage:(req,res) => {
    let usuarioModelo = {
      nombres: "Santaigo",
      apellidos: "Pazmino",
      id: "7"
    }
    return res.view('homepage',{
      usuario:usuarioModelo
    })
  }
};

/**
 * Created by USRDEL on 3/6/17.
 */
var usuario = (function () {
    //   public nombre: string;
    //  private apellido: string;
    function usuario(nombre, apellido) {
        //     this.nombre=nombre;
        //     this.apellido=apellido;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    usuario.prototype.ImprimirNombre = function (saludo, titulo) {
        return saludo + " " + titulo;
    };
    return usuario;
}());
var santiago = new usuario("Santiago", "Pazmiño");
console.log(santiago.ImprimirNombre("Hola", "Señor"));

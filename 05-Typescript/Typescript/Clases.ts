/**
 * Created by USRDEL on 3/6/17.
 */
class usuario {
 //   public nombre: string;
  //  private apellido: string;
    constructor(public nombre:string, private apellido:string){
   //     this.nombre=nombre;
   //     this.apellido=apellido;

    }
    ImprimirNombre(saludo:string,titulo?:string){
        return `${saludo} ${titulo}`;
    }
}
let santiago:usuario = new usuario("Santiago","Pazmiño");
console.log(santiago.ImprimirNombre("Hola","Señor"));

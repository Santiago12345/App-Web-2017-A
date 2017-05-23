/**
 * Created by USRDEL on 22/5/17.
 */

var texto = "";
var texto2 = '';
var numero = 1;
var booleano = false;
var decimal = 1.2;
var fecha = new Date();
var objeto = {};
texto = 2;
texto = booleano;
texto = decimal;
texto = fecha;
texto = objeto;
//Arreglos
var arregloNumeros = [1,2,3,4,5,6];
var arregloString = ['a','b','c','d','e'];
var arregloBooleanos = [true, false,true];
arregloNumeros = [1,'d',true,23];
var matriz = [[1,2], [3,4]];
//    0 1
// 0  1 2
// 1  3 4

// Objeto JSON

var objetoNotacion = {};
var objeto2 = {
    llave:"valor",
    llave2:"valor",
    llave3:"valor"

};
objeto2.llave;
objeto2.llave2;
objeto2.llave3;

var objetoComplejo = {
    nombre:" ",
    apellido:" ",
    fechaNacimiento: new Date(),
    mayorEdad: true,
    peso: 70.2,
    altura: 127,
    saltar:function () {
        console.log("Saltar");

    },
    correr:function () {
        console.log("Correr");
    },
    sumar:function (a,b) {
        return a+b;
    },
    ImprimirNombre:function () {
      //  return objetoComplejo.nombre + " " + objetoComplejo.apellido
        return this.nombre + " " + this.apellido;

    }

};
objetoComplejo.altura;
objetoComplejo.apellido;
objetoComplejo.nombre;

objetoComplejo.nombre = "Santiago";
objetoComplejo.nombre;
objetoComplejo.apellido= "Pazmiño";
objetoComplejo.apellido;
objetoComplejo.titulo = "Estudiante"; //undefined

//BORRAR
delete objetoComplejo.nombre;








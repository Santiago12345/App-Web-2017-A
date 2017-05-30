/**
 * Created by USRDEL on 29/5/17.
 */
function holaMundo() {
    console.log("Hola mundo");
}
var holaMundo2 = function () {
    console.log("Hola mundo");
};
var holaMundo3 = function () {
    console.log("Hola mundo");
};
var holaMundo4 = function () {
    return console.log("Hola mundo");
};
var holaMundo5 = function () {
    return 5;
};
var holaMundo6 = function () { return 5; };
var saludar = function (nombre) { return "Hola " + nombre; };
var saludarConApellido = function (nombre, apellido) { return "Hola " + nombre + " " + apellido; };
console.log(saludarConApellido("Santiago", "Pazmiño"));

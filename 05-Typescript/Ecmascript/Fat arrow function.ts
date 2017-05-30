/**
 * Created by USRDEL on 29/5/17.
 */
function holaMundo(){
    console.log("Hola mundo");
}

let holaMundo2 = function () {
    console.log("Hola mundo");
};
let holaMundo3 = ()=>{
    console.log("Hola mundo");
};

let holaMundo4 = ()=>
    console.log("Hola mundo");
let holaMundo5 = function(){
    return 5;
};
let holaMundo6 = ()=>5;
let saludar = nombre =>"Hola "+nombre;
let saludarConApellido = (nombre, apellido) =>`Hola ${nombre} ${apellido}`;
console.log(saludarConApellido("Santiago","Pazmiño"));
/**
 * Created by USRDEL on 3/6/17.
 */
const fs = require('fs');
const express = require('express');
const calculadora = require('twj-a-pazmino');
let a = 2,
b = 3, resultado;
resultado = calculadora.calculadoraUdla.sumar(a,b);
console.log(`Resultado: ${resultado}`);

console.log("Empeiza");
//1.- Nombre y ruta del archivo
//2.- Codificacion
//3.- Anonymous Function
// (error, contenidio del archivo)
fs.readFile('texto.txt','utf8', function(err, data){
    if (err) throw err;
console.log(data);
});

console.log("Termina");
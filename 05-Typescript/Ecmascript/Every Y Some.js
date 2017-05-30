/**
 * Created by USRDEL on 29/5/17.
 */
var arreglo = [2, 2, 3, 4, 5];
//devuelve un arreglo
var resultado = arreglo.map(function (valor, indice, arreglo) {
    return valor + 1;
}).some(function (valor) {
    return valor <= 2;
});
console.log(resultado);
//AND --- Todos true
var resultado2 = arreglo.every(function (valor, indice, arreglo) {
    return (valor >= 2);
});
console.log(resultado2);
var resultado3 = arreglo.some(function (valor, indice, arreglo) {
    return (valor >= 6);
});
console.log(resultado3);

/**
 * Created by USRDEL on 29/5/17.
 */
var arreglo = [1, 2, 3, 4, 5];
//devuelve un arreglo
var resultado = arreglo.map(function (valor, indice, arreglo) {
    return valor + 1;
});
console.log(resultado);

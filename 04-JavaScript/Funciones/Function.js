/**
 * Created by USRDEL on 22/5/17.
 */
function ImprimirHolaMundo() {
    console.log("Hola mundo");

}
ImprimirHolaMundo(); //Devuelve undefined
function Imprimir(texto) {
    console.log(texto);

}
Imprimir("Santiago"); //undefined

function Suma(a,b) {
    return a+b;

}
Suma(1,2); //3
console.log(Suma(1,2));

function OperarNumeros(n1,n2,funcion) {
    n1 = n1+1;
    n2 = n2+2;
    funcion(n1,n2);
}
OperarNumeros(2,4,function (primerNumero, segundoNumero) {
    //Primer numero vale 3
    //Segundo nuero vale 6
    return primerNumero*segundoNumero; //resultado 18
})
//FOREACH





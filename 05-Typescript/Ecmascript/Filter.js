/**
 * Created by USRDEL on 3/6/17.
 */
var arreglo = [
    {
        nomre: "Santiago",
        apellido: "Pazmiño",
        nota: 10,
        id: 1
    },
    {
        nomre: "Josue",
        apellido: "Hinojosa",
        nota: 7,
        id: 2
    },
    {
        nomre: "Esteban",
        apellido: "Pazmiño",
        nota: 3,
        id: 3
    },
    {
        nomre: "Eduardo",
        apellido: "Hinojosa",
        nota: 2,
        id: 4
    },
    {
        nomre: "Sebas",
        apellido: "Pazmiño",
        nota: 8,
        id: 5
    },
];
var resultado = arreglo.filter(function (valor, indice, arreglo) {
    return valor.id > 3;
});
console.log(resultado);

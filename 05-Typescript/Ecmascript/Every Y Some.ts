/**
 * Created by USRDEL on 29/5/17.
 */
let arreglo= [2,2,3,4,5];
//devuelve un arreglo
let resultado = arreglo.map((valor,indice,arreglo)=>{
    return valor + 1 ;
}) .some((valor)=>{
    return valor<=2;
});
console.log(resultado);
//AND --- Todos true
let resultado2 = arreglo.every((valor,indice,arreglo)=>{
    return (valor>=2);
});
console.log(resultado2);
let resultado3 = arreglo.some(
    (valor, indice, arreglo)=>{
        return(valor>=6);
    }
);
console.log(resultado3);
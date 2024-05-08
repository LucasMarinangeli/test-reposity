/* Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos. */

import * as readlineSync from 'readline-sync';

let base : number = readlineSync.questionInt("-> Ingrese la base: ");
let exponente : number = readlineSync.questionInt("-> Ingrese el exponente (mayor o igual a cero): ");
let resultado : number = 1;

function potenciaCalculo (baseCalculo:number, exponenteCalculo:number) {
    let resultadoCalculo : number = 1;
    for (let i = 0; i < exponenteCalculo; i++) {
        resultadoCalculo *= baseCalculo;
    }
    return resultadoCalculo;
}

function numeroMenorCero (numeroIngresado:number): boolean {
    return numeroIngresado <0;
}

if (numeroMenorCero(exponente)) {
    console.log("¡ERROR! -> Ingrese un numero mayor o igual a cero.");
}
    else {
        resultado = potenciaCalculo(base, exponente);
        console.log("->",base,"elevada a la potencia",exponente,"da como resultado",resultado,"<-");
    }
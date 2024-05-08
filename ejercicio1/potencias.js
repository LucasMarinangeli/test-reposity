"use strict";
/* Realice un programa que devuelva la potencia de un número.
La base y el exponente deben ser ingresados por teclado.
Sólo deben admitirse exponentes mayores o iguales a cero.
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos. */
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt("-> Ingrese la base: ");
var exponente = readlineSync.questionInt("-> Ingrese el exponente (mayor o igual a cero): ");
var resultado = 1;
function potenciaCalculo(baseCalculo, exponenteCalculo) {
    var resultadoCalculo = 1;
    for (var i = 0; i < exponenteCalculo; i++) {
        resultadoCalculo *= baseCalculo;
    }
    return resultadoCalculo;
}
function numeroMenorCero(numeroIngresado) {
    return numeroIngresado < 0;
}
if (numeroMenorCero(exponente)) {
    console.log("¡ERROR! -> Ingrese un numero mayor o igual a cero.");
}
else {
    resultado = potenciaCalculo(base, exponente);
    console.log("->", base, "elevada a la potencia", exponente, "da como resultado", resultado, "<-");
}

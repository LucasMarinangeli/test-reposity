"use strict";
/* Implemente un algoritmo de ordenamiento con
el método Bubble Sort, para que ordene un
arreglo de longitud N en orden descendente. */
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var longitudArray = readlineSync.questionInt("Ingrese la longitud del arreglo: ");
var arregloNumeros = new Array(longitudArray);
var arregloCompleto = llenarArray(arregloNumeros, longitudArray);
console.log("El arreglo: ".concat(arregloCompleto));
console.log("En orden descendente: ".concat(bubbleSort(arregloNumeros, longitudArray)));
function llenarArray(arreglo, cantidad) {
    var i;
    for (i = 0; i < cantidad; i++) {
        arreglo[i] = readlineSync.questionInt("Ingrese los valores: ");
    }
    return arreglo;
}
function bubbleSort(arreglo, cantidad) {
    var i;
    var j;
    var aux;
    for (i = 0; i < cantidad - 1; i++) {
        for (j = 0; j < cantidad - 1 - i; j++) {
            if (arreglo[j] < arreglo[j + 1]) {
                aux = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = aux;
            }
        }
    }
    return arreglo;
}

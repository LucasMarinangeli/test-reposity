/* Implemente un algoritmo de ordenamiento con
el método Bubble Sort, para que ordene un
arreglo de longitud N en orden descendente. */

import * as readlineSync from 'readline-sync';

const longitudArray: number = readlineSync.questionInt("Ingrese la longitud del arreglo: ");
const arregloNumeros: number[] = new Array(longitudArray);
const arregloCompleto = llenarArray(arregloNumeros, longitudArray);
console.log(`El arreglo: ${arregloCompleto}`);
console.log(`En orden descendente: ${bubbleSort(arregloNumeros, longitudArray)}`);

function llenarArray (arreglo: number[], cantidad: number): number[] {
    let i: number;
    for (i = 0; i < cantidad; i++) {
        arreglo[i] = readlineSync.questionInt(`Ingrese los valores: `);
    }
    return arreglo
}

function bubbleSort (arreglo: number[], cantidad: number): number[] {
    let i: number;
    let j: number;
    let aux: number;
    for (i = 0; i < cantidad - 1; i++) {
        for (j = 0; j < cantidad - 1 - i; j++) {
            if (arreglo[j] < arreglo[j+1]) {
                aux = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = aux;
            }
        }
    }
    return arreglo;
}
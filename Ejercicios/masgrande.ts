/* Encontrar el elemento más grande del arreglo

Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar */


// Constantes y variables.
const arreglo = [4,7,9,3,1,45,67,23,29,78,11,16];
const numeroMaximo = obtenerNumeroMaximo;
let maximo = 0;

// Función para obtener el número mas grande del arreglo.
function obtenerNumeroMaximo (arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i]; // Si encontramos un número mayor, actualizamos la variable maximo.
        }
        
    }
    return maximo;
}

// Función para saber si el número es par o impar.
function esPar(numero:number): boolean {
    return numero % 2 === 0;
}

// Impreción donde se detecta el numero mas grande del arreglo y si es par o no.
console.log(`El numero mas grande del arreglo es: ${numeroMaximo(arreglo)}`);

if (numeroMaximo(esPar)) {
    console.log('El numero es par.');

}   else {
    console.log('El numero es impar.');
}
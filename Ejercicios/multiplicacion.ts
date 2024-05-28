/* • Implemente un método llamado “multiplicarArreglo” que recibe
como parámetros tres arreglos de Enteros del mismo tamaño
• Los dos primeros arreglos contienen los números que se quieren
multiplicar
• El tercer arreglo almacena el cálculo de la multiplicación de cada
posición de los dos arreglos
• Utilice este método para multiplicar los siguientes cuatro arreglos
de tres elementos:

v1: [1, 2, 3]
v2: [4, 5, 6]
v3: [2, 1, 2]
v4: [1, 2, 1]
vResultado (v1*v2*v3*v4): [8, 20, 36] */


const arreglo1: number[] = [1, 2, 3];
const arreglo2: number[] = [4, 5, 6];
const arreglo3: number[] = [2, 1, 2];
const arreglo4: number[] = [1, 2, 1];
const arregloResultado: number[] = multiplicarArreglo(arreglo1, arreglo2, arreglo3, arreglo4);
console.log(`Resultado: ${arregloResultado}`);

function multiplicarArreglo (arreglo1: number[], arreglo2: number[], arreglo3: number[], arreglo4: number[]): number[] {
    const resultado: number[] = [];
    for (let i = 0; i < arreglo1.length; i++) {
        resultado.push(arreglo1[i] * arreglo2[i] * arreglo3[i] * arreglo4[i]);
    }
    return resultado;
}
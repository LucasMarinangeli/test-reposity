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
var arreglo1 = [1, 2, 3];
var arreglo2 = [4, 5, 6];
var arreglo3 = [2, 1, 2];
var arreglo4 = [1, 2, 1];
var arregloResultado = multiplicarArreglo(arreglo1, arreglo2, arreglo3, arreglo4);
console.log("Resultado: ".concat(arregloResultado));
function multiplicarArreglo(arreglo1, arreglo2, arreglo3, arreglo4) {
    var resultado = [];
    for (var i = 0; i < arreglo1.length; i++) {
        resultado.push(arreglo1[i] * arreglo2[i] * arreglo3[i] * arreglo4[i]);
    }
    return resultado;
}

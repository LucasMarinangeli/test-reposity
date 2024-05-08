"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("Ingrese el numero: ");
if (numero === 0) {
    console.log("El numero es cero.");
}
else if (numero % 2 === 0) {
    console.log("El numero es par.");
}
else {
    console.log("El numero es impar.");
}

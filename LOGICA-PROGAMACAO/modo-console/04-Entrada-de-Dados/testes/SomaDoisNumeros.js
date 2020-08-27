/* programa que
soma dois números
*/

var readlineSync = require("readline-sync");
var valorUm = 0;
var valorDois = 0;


console.log("Programa que soma dois números")

valorUm = parseFloat(readlineSync.question("Valor A: "));
valorDois = parseFloat(readlineSync.question("Valor B: "));
var total = valorUm + valorDois;
console.log(valorUm + " + " + valorDois  + " = " + total);










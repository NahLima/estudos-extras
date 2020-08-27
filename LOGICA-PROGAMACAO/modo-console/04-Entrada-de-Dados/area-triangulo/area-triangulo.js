var readline = require("readline-sync");
// base 
// altura
// area 
console.log("Calcular a base de um triangulo");

var base = parseFloat(readline.question("Base: "));
var altura = parseFloat(readline.question("altura: "));
var area = (base * altura) / 2;

console.log("A area do triangulo e: " + area);






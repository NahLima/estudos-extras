const readline = require("readline-sync");
console.log("Programa que exibe tabuada");

const n = parseInt(readline.question("Informe um numero: "));
console.log("Tabuada do numero " + n);

let i = 0; // toda vez que for usar uma variável que precisa mudar seu valor usar let! Se usar var tbm funciona.

while(i<=10){
    console.log(n + "x" + i + "=" + (n * i));
    i = i + 1;
}


const readline = require("readline-sync");


console.log("Verifica se um numero e par ou impar");

const n = parseInt(readline.question("informe o numero inteiro: "));
const resto = n % 2;


// == , < , <= , > , >= e !=   (comparadores)

if(resto == 0){
    console.log("o numero imformado é par");

}

else if (resto == 1){
    console.log("o numero é ímpar");
}
    




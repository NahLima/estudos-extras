
const readline = require("readline-sync");

const numInt = parseInt(readline.question(" informe um numero: "));

if(numInt < 5 && (numInt === 2 || numInt === 4)){
    console.log("ok")
} else{
    console.log("não ok")

}


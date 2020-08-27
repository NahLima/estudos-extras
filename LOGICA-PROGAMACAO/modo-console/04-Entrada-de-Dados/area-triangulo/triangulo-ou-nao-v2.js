// verificando se os valores informados representam um triângulo
// regra = o valor de cala lado de um triângulo deve ser menor que a soma dos outros dois


const readline = require("readline-sync");

const lA = parseFloat(readline.question("Informe o valor A: "));
const lB = parseFloat(readline.question("Informe o valor B: "));
const lC = parseFloat(readline.question("Informe o valor C: "));

// aqui usamos o && para comparar
if((lA < (lB+lC)) && (lB < (lA+lC)) && (lC < (lA+lB))){
    console.log("Os valores informados representam um triangulo")
}else{
    console.log("Os valores não representam um triangulo")
}

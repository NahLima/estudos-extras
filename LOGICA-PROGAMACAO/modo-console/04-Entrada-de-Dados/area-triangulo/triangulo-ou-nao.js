// verificando se os valores informados representam um triângulo
// regra = o valor de cala lado de um triângulo deve ser menor que a soma dos outros dois

const readline = require("readline-sync");

console.log("Programa que verifica se os valores informados representam os lados de um triangulo");

const lA = parseFloat(readline.question(" Informe o valor do lado A: "))
const lB = parseFloat(readline.question(" Informe o valor do lado B: "))
const lC = parseFloat(readline.question(" Informe o valor do lado C: "))

// vamos usar o if dentro do if

if(lA < (lB+lC)){
    if(lB < (lA+lC)){
        if(lC < (lA+lC)){
            console.log("Os valores válidos representam um triângulo")
        }
    }
}else {
    console.log(" não é um triângulo")
}
    




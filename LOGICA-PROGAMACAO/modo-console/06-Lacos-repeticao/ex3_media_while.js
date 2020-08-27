//Fazer o calculo da média de N valores com While

const readline = require("readline-sync")

let total = 0    // soma dos valores informados
let valor = 0    // armazenar o valor informado pelo usuário

let i = 0 // qtas vezes eu contei um numero par ao usuário


console.log("programa que calcula a media de N numeros")

const n = parseInt(readline.question("Informe um numero: "))   //numero informado pela pessoa
while(i < n){
    valor=parseInt(readline.question(" informe um numero "+(i+1)+ ""))
    total = total + valor
    i = i + 1
}

const media = total / n
console.log("A media e: " + media )

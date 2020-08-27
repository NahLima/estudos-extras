
//media das notas do aluno com a % de faltas dele

const readline = require("readline-sync");
const nome = readline.question("Seu nome: ");

const nota1 = parseFloat(readline.question("nota 1: "));
const nota2 = parseFloat(readline.question("nota 2: "));
const nota3 = parseFloat(readline.question("nota 3: "));
const nota4 = parseFloat(readline.question("nota 4: "));

const totalAula = parseFloat(readline.question("Informe o total de aulas assistidas: "));
const totalFaltas = parseFloat(readline.question("Informe a quantidade de faltas: "));



const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4
const mediaPerc = parseFloat(totalFaltas * 100) / parseFloat(totalAula).toFixed(2)

// para o texto sair em uma nova linha colocar \n 


if(media <= 5){
    console.log("Você foi reprovado \n Entre em contato com o seu oriemtador")
}
else if((media >=7) && (mediaPerc <=25)){
    console.log(nome + " você foi aprovado")
}
else {
    console.log(nome + " você está de recuperação")
}
console.log(nome + " sua média é: " + media)
console.log("Seu percentual de faltas foi: " + mediaPerc + "%");


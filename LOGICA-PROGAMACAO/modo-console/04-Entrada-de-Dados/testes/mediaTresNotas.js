//media de 3 notas - modo simples de calculo 
var notaUm = 7;
var notaDois = 4;
var notaTres = 10;

var media = (notaUm + notaDois + notaTres) / 3;

console.log("O Aluno Rodrigo obteve a média: " + media);

console.log(________________________________________)

//media de duas notas ponderadas, nota do aluno mais pontuação por nota 

var nUm = 8;
var nDois = 7;

var pesoUm = 8 * 3
var pesoDois = 7 * 7

var media = (pesoUm + pesoDois) / 10;
console.log("A aluna Naiara obteve a média: " + media);

console.log(________________________________________)


// media de tres notas modo onde a pessoa preenche  readline-sync 

var readlineSync = require('readline-sync');

var nomeAluno =readlineSync.question('Nome: ');

var notaUm = parseFloat(readlineSync.question('Nota 1: '));
var notaDois = parseFloat(readlineSync.question('Nota 2: '));
var notaTres = parseFloat(readlineSync.question('Nota 3: '));

var total = notaUm + notaDois + notaTres;

var media = total/3;

console.log(nomeAluno + " sua média foi de:  " + media); 
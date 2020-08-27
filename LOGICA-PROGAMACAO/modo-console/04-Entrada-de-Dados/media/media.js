
var readlineSync = require('readline-sync');

var nomeAluno =readlineSync.question('Seu nome: ');

var notaUm = parseFloat(readlineSync.question('Nota 1: '));
var notaDois = parseFloat(readlineSync.question('Nota 2: '));
var notaTres = parseFloat(readlineSync.question('Nota 3: '));
var notaQuatro = parseFloat(readlineSync.question('Nota 4: '));
var notaCinco = parseFloat(readlineSync.question('Nota 5: '));

var total = notaUm + notaDois + notaTres +notaQuatro + notaCinco;
var media = total / 5;

console.log(nomeAluno + " sua média foi de:  " + media); 

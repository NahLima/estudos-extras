//Faça um programa que leia números inteiros e só saia do laço de repetição se 
//o número 0 for digitado.


var readline = require('readline-sync');

   var valor = parseInt(readline.question('Informe um numero valor: ')); // valor que o usuário informa

   while(valor != 0) // se o valor informado for diferente de 0 
       valor = parseInt(readline.question('Informe um numero valor: ')); // repita a operação

// enquanto o valor for diferente de zero a pessoa vai precisar repetir a operação até colocar o 
//número 0
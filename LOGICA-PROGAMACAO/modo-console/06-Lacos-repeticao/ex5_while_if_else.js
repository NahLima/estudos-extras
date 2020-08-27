
/*Faça um programa que leia um número inteiro e se ele 
for par exiba o número digitado 10 vezes se for impar exiba o 
número digitado 5 vezes (utilizando o comando while)*/



var readline = require('readline-sync');

var valor = parseInt(readline.question('Informe um numero valor: '));
var contador = 0;

if(valor%2) // Módulo (%) O operador módulo retorna o resto inteiro da divisão de um numero pelo outro.
     contador = 5;
 else
     contador = 10;

 while(contador != 0){
     console.log(valor);
     contador--;
 }


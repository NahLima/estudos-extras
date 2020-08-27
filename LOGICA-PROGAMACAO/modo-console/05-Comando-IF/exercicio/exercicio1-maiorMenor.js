
//Faça a leitura de 2 valores inteiros e exiba qual deles é o maior.

const readline = require('readline-sync');

const valor1 = parseInt(readline.question('Informe o *PRIMEIR* O valor: '));
const valor2 = parseInt(readline.question('Informe o *SEGUNDO* valor: '));

if(valor1 > valor2)
    console.log('O maior valor é o valor1 = ' + valor1);
else
    console.log('O maior valor é o valor2 = ' + valor2);

    
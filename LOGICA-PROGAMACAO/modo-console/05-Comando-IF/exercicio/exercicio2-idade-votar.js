// Faça a leitura do ano atual, do ano de nascimento e do nome da pessoa, após efetuar o cálculo, 
//se pessoa tiver 16 anos ou mais  imprima que ela poderá votar.


const readline = require('readline-sync');

const nome = readline.question('Informe o seu nome: ');
const anoAtual = parseInt(readline.question('Informe o ano atual: '));
const anoNasc = parseInt(readline.question('Informe seu ano de nascimento: '));

const idade = anoAtual - anoNasc;

if(idade >= 16)
   console.log(`${nome} Você tem permissão para votar`); 
else
   console.log(`${nome} você NÃO poderá votar !!!`);


   // quanso usar esse modelo de concatenação não esquecer 
   // de usar crase ao invés de aspas etc


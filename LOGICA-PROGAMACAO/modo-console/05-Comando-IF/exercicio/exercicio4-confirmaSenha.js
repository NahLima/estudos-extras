//Simulando uma tela de cadastro, faça a leitura de uma senha e de sua confirmação, 
//verifique se ambas são iguais e autorizado igual a "ADM", se sim, imprima "ok".


const readline = require('readline-sync');

const senha = readline.question('Informe a senha: ');
const confirSenha = readline.question('Repita sua senha: ');
const autorizado = readline.question('Voce esta autorizado[ADM, FUN]: ');

if(senha == confirSenha && autorizado == 'ADM');
    console.log('Ok');
else
    console.log('Acesso bloqueado !!!');

    




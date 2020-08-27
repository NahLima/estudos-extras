

/*
Simulando uma tela de cadastro, faça a leitura de uma senha e de sua confirmação, 
verifique se ambas são iguais ou diferente ...
*/


// nesse caso se usar o parsefloat ele somente reconhece números 

const readline = require('readline-sync')

console.log(" Novo cadastro \n Informe seus dados logo abaixo")

const nome = readline.question("Seu nome: ")
const email = parseFloat(readline.question("Email: "))
const criarSenha = parseFloat(readline.question("Nova senha: " , {
    hideEchoBack: true // O texto digitado na tela está oculto por `*`.
}))
const repeteSenha = parseFloat(readline.question("Repita a sua senha: " , {
    hideEchoBack: true
}))

if(criarSenha == repeteSenha){
    console.log("Cadastro feito com sucesso!")
}
else if(repeteSenha != criarSenha){
    console.log(" Senhas diferentes! \n Altere as informações")
}




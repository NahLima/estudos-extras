
// sem usar o parsefloat ele consegue reconhecer umeros e letras

const readline = require('readline-sync')

console.log(" Novo cadastro \n Informe seus dados logo abaixo")

const nome = readline.question("Seu nome: ")
const email = readline.question("Email: ")
const criarSenha = readline.question("Nova senha: " , {
    hideEchoBack: true // O texto digitado na tela está oculto por `*`.
})
const repeteSenha = readline.question("Repita a sua senha: " , {
    hideEchoBack: true
})

if(criarSenha == repeteSenha){
    console.log("Cadastro feito com sucesso!")
}
else if(repeteSenha != criarSenha){
    console.log(" Senhas diferentes! \n Altere as informações")
}

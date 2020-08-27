// programa que fala os dias da semana
// ; é obrigatório para instrução nesse caso no break;

const dia = "segunda"
const diaFormatada = dia.toLowerCase()

switch (diaFormatada){ 
     // aqui falamos qual a condição que ele vai validar, não usamos switch para validações complexas
    case "segunda": // se o meu dia da semana for igual a segunda 
        console.log("Você tem reuninão hoje!")
        break; // tem que colocar sempre o break; se não colocar ele não entende que vc terminou o comando

    default:
        console.log("não achamos agenda")
        break;
}


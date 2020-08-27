
/*A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, 
e executa as instruções  associadas ao case.

No exemplo a seguir, if expr é avaliado como "Bananas", o programa corresponde o valor com o 
case "Bananas" e executa a instrução associada. Quando break for encontrado, o programa para (break), 
saindo de switch e executa a instrução localizada após o switch. 
Se break fosse omitido, a instrução para "Cherries" também seria executada.
*/

const expr = 'Papayas';

switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}
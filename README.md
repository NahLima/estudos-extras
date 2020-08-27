<div style="text-align: justify"> 

# **RESUMO**

_lógica de programação - javaScript - nodeJs_
<BR>
<BR>

## _Um pouco de teoria_
<BR>
IF é uma estrutura de controle utilizada para tomar decisões. Realiza uma ou mais operações em função de uma expressão na forma de condição. Basicamente primeiro é dada uma condição e caso essa condição seja positiva, ele executa a ação.

Sintaxe

if (condição) { código a ser executado } [else { código a ser executado }]
Essa condição é uma expressão que pode ser avaliada como verdadeira (true) ou falsa (false).

A expressão é construída por operadores comparação como: maior, menor, menor igual, igual, maior igual, diferente, etc. Caso o resultado da expressão seja verdadeira (true) é executado todo o código presente dentro  das primeiras chaves.

O else serve basicamente para suprir a parte negativa da condição do IF, ou seja, quando a condição no IF for falsa, o ELSE assume e executa todos os comandos presentes dentro das ultimas duas chaves da sintaxe.

<BR>

## _OperadorES lógicos de comparação_

<BR>

- Igual: ==


- Diferente:  !


- Menor que:  <


- Menor ou igual a: <=


- Maior ou igual a:>

- Maior ou igual a:>=

<BR>

## _Operador lógico AND: &&_

<BR>


And, em inglês, significa "E". Ele funciona da seguinte maneira:

Unimos mais de uma expressão, usando o operador&&

_if (condicao1 && condicao2){}_

Não existem limites para o tanto de testes que podemos usar com o operador &&:

<br>

## _Operador lógico OR:_ || ##

<br>

OR em inglês significa OU.

A sintaxe para usar o operador || é:

Unimos mais de uma expressão, usando o operador ||

if (condicao1 || condicao2){}

<br>

## _Laços de repetição e o comando while_##

<br>

Laços de repetição existem na programação para que um trecho de código possa ser executado N vezes sem a necessidade de “copiar e colar” um mesmo comando várias e várias vezes, como mostra o exemplo abaixo:

_//sem estrutura de repetição_


var valor1 = parseInt(readline.question('Informe o valor1: '));

var valor2 = parseInt(readline.question('Informe o valor2: '));

var valor3 = parseInt(readline.question('Informe o valor3: '));

<br>
 
_//com estrutura de repetição_


var contador = 0; <br>
var valor;
 
comando(condicao){<br>
    valor = parseInt(readline.question("Informe o valor${contador}: "));<br>
    contador = contador + 1; //ou contador++;


Sempre que falamos em laços de repetições, não podemos nos esquecer das aulas anteriores sobre condições, pois os laços dependem de condição ou condições para saber quantas vezes e se ele vai executar ou não.

Assim como na instrução IF, uma estrutura de repetição vai “fazer uma pergunta” para saber se deve continuar no loop (outra palavra que usamos pra definir os laços de repetição) ou não. Observe mais um exemplo abaixo:

var num = 0; <br>
 
while(num < 10) { <br>
    console.log(num);<br>
    num++;<br>
}<br>

Conforme mostra o trecho de código acima, foi feita a atribuição de um valor a uma variável no caso var num = 0; e o loop será repetido enquanto o num for menor que 10, para isso observe que esse num também é um CONTADOR.

Existem algumas formas de se escrever uma estrutura de repetição, uma delas é utilizando a palavra WHILE (como foi visto no trecho de código anterior), que assim como o IF aceita em suas condições operadores de comparação: maior, menor, menor igual, igual, maior igual, diferente e operadores lógicos como AND e OR

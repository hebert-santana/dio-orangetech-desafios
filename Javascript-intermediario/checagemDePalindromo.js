/* Desafio
Neste desafio você deverá construir uma função que recebe uma String e identifique se a mesma é um palíndromo, ou seja, se a String é igual a ela mesma invertida. 
Dado que temos a String "digital" uma vez invertida temos "latigid" que são diferentes.
Logo, NÃO é um Palíndromo. 
Já se recebemos a string "radar" uma vez invertida temos "radar" que são iguais.

Entrada
A entrada consiste em um palavra.

Saída
Para cada String informada, terá uma saída de valor Booleano: TRUE, caso a palavra seja um palíndromo, ou FALSE caso a palavra NÃO seja um palíndromo. */

let palavra = gets();
print(checaPalindromo(palavra));

function checaPalindromo(palavra) {
    for (var i = 0; i < palavra.length / 2; i++) {
        if (palavra[i] != palavra[palavra.length - i - 1]) {
            return 'FALSE';
        } else {
            return 'TRUE';
        }
    }
}
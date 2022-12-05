/* Desafio
Dada uma string com apenas os seguintes caracteres '(', ')', '{', '}', '[', ']' determine se uma determinada string é válida. 

Entrada
Uma string é considerada válida se:

Caracteres de abertura devem ser fechadas pelo mesmo tipo. 
Abertura devem ser fechados com uma chave correspondente. Uma string vazia é considerada válida. 

Saída
A saída corresponde a um valor Booleano como no exemplo abaixo: */

var string = gets().split('');

switch (string[0]) {
    case '(':
        if (string[1] == ')') {
            print('true');
        } else {
            print('false');
        }
        break;

    case '[':
        if (string[1] == ']') {
            print('true');
        } else {
            print('false');
        }
        break;

    case '{':
        if (string[1] == '}') {
            print('true');
        } else {
            print('false');
        }
        break;

    default:
        print('false');
        break;
}
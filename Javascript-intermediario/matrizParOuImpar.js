/* Desafio
Ajude a construir um programa que pegue todas as listas, uma de cada vez, e coloque os inteiros pares no início e os inteiros ímpares no final.

Entrada
A entrada são arrays de tamanho variado que possuem somente números inteiros.

Saída
A saída deverá retornar todos os valores pares para o começo do array, seguido pelos ímpares, conforme exemplo abaixo: */
let arr = gets().split('');

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {                              // se for par
        arr = changePosition(arr, i, 0);
    }
}

print(arr);

function changePosition(arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
}